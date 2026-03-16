
import { type getUserType, userTable } from "../../drizzle/db/schema.ts"
import { db } from "../../drizzle.config.ts"

export async function listUsers(): Promise<getUserType[]> {
    const users = await db.select().from(userTable);
    return users;
}