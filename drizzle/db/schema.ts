import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable("userTable", {
    id: int().primaryKey({
        autoIncrement: true,
        onConflict: "abort"
    }).notNull(),
    name: text().notNull(),
    email: text().notNull()
})

export type getUserType = typeof userTable.$inferSelect;
export type postUserType = typeof userTable.$inferInsert;