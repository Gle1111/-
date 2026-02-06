import { db } from "./db";
import { requests, type InsertRequest, type Request } from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createRequest(request: InsertRequest): Request;
  getAllRequests(): Request[];
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
}

export const storage = new DatabaseStorage();
