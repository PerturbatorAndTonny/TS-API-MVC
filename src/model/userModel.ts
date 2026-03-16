
import { type getUserType, type postUserType, userTable } from "../../drizzle/db/schema.ts"
import { db } from "../../drizzle.config.ts"

export async function createUser(data: postUserType): Promise<postUserType[]> {
    const newRecord = await db.insert(userTable).values(data).returning();
    return newRecord;
}

export async function listUsers(): Promise<getUserType[]> {
    const users = await db.select().from(userTable);
    return users;
}