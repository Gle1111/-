
import { db } from "./db";
import { requests, type InsertRequest, type Request } from "@shared/schema";
import { desc } from "drizzle-orm";
import { desc, eq } from "drizzle-orm";


export interface IStorage {
  createRequest(request: InsertRequest): Request;
  getAllRequests(): Request[];
  deleteRequest(id: number): void;
}

export class DatabaseStorage implements IStorage {
  createRequest(insertRequest: InsertRequest): Request {
    const result = db
      .insert(requests)
      .values(insertRequest)
      .returning()
      .all();
    return result[0];
  }

  getAllRequests(): Request[] {
    return db.select().from(requests).orderBy(desc(requests.createdAt)).all();
  }
   deleteRequest(id: number): void {
    db.delete(requests).where(eq(requests.id, id)).run(); // 3. И эту
  }
}

export const storage = new DatabaseStorage();





