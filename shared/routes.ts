import { z } from "zod";
import { insertRequestSchema, requests } from "./schema";

export const api = {
  requests: {
    create: {
      method: "POST" as const,
      path: "/api/requests",
      input: insertRequestSchema,
      responses: {
        201: z.custom<typeof requests.$inferSelect>(),
        400: z.object({ message: z.string() }),
        500: z.object({ message: z.string() }),
      },
    },
  },
};
