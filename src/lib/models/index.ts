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