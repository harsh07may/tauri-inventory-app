import Database from "@tauri-apps/plugin-sql"
import { Product, Transaction, User } from "./models"
import { STOCK_THRESHOLD } from "@/constants"

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
      SELECT 
      p.id, 
      p.name, 
      p.description, 
      p.price, 
      p.quantity, 
      s.name as supplier
      FROM products p
      LEFT JOIN suppliers s
	  on p.supplier_id = s.id
    `
  )
}
export async function searchProducts(searchQuery: string): Promise<Product[]> {
  const db = await getDb()

  const query = `
    SELECT 
      p.id, 
      p.name, 
      p.description, 
      p.price, 
      p.quantity, 
      s.name as supplier
    FROM products p
    LEFT JOIN suppliers s
      ON p.supplier_id = s.id
    WHERE 
      p.name LIKE ? 
      OR s.name LIKE ?
  `

  const param = `%${searchQuery}%`

  return db.select<Product[]>(query, [param, param])
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


export async function getLowStock(threshold: number = STOCK_THRESHOLD): Promise<number> {
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

// TRANSACTIONS
export async function getTransactions() {
  const db = await getDb()

  return db.select<Promise<Transaction[]>>(
    `
      SELECT 
        it.id,
        it.product_id,
        it.transaction_type,
        it.quantity,
        it.transaction_date,
        it.user_id,
        p.name AS product_name,
        u.username AS username
      FROM inventory_transactions it
      LEFT JOIN products p ON p.id = it.product_id
      LEFT JOIN users u ON u.id = it.user_id
      ORDER BY it.transaction_date DESC
    `
  )
}
