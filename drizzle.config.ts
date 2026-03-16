import { defineConfig } from 'drizzle-kit'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

export default defineConfig({
    out: './drizzle',
    schema: './drizzle/db/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: String(process.env.DATABASE_URL)
    }
})

const client = createClient({
    url: String(process.env.DATABASE_URL)
})

export const db = drizzle(client);
