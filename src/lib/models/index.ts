export type User = {
    id: number
    username: string | null
    role: "admin" | "staff"
}

export type Product = {
    id: number
    name: string
    description: string | null
    price: number
    quantity: number
    supplier_id: number | null
}

export type Transaction = {
    id: number
    product_id: number
    transaction_type: "IN" | "OUT"
    quantity: number
    transaction_date: string
    user_id: number | null
    product_name: string | null

} 