import Database from "@tauri-apps/plugin-sql"
import { Product, User } from "./models"

let db: Database | null = null

// --- DB INIT ---
export async function getDb(): Promise<Database> {
    if (db) return db

    db = await Database.load("sqlite:com.harsh.inventory-app.db")
    return db
}

// --- PRODUCTS ---

export async function getProducts(): Promise<Product[]> {
    const db = await getDb()

    return db.select<Product[]>(
        `
      SELECT id, name, description, price, quantity, supplier_id
      FROM products
    `
    )
}

export async function getTotalValue(): Promise<number> {
    const db = await getDb()

    const result = await db.select<{ total: number }[]>(
        `
      SELECT COALESCE(SUM(quantity * price), 0) as total
      FROM products
    `
    )


    return result[0]?.total ?? 0
}

export async function getLowStock(threshold: number = 5): Promise<number> {
    const db = await getDb()

    const result = await db.select<{ total: number }[]>(
        `
      SELECT COUNT(*) as total
      FROM products
      WHERE quantity < ?
    `,
        [threshold]
    )

    return result[0]?.total ?? 0
}


// --- USERS ---

export async function getUsers(): Promise<User[]> {
    const db = await getDb()

    return db.select<User[]>(
        `
      SELECT id, username, role
      FROM users
    `
    )
}
