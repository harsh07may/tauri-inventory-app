import { resolve } from '@tauri-apps/api/path';
import Database from '@tauri-apps/plugin-sql';
// when using `"withGlobalTauri": true`, you may use
// const Database = window.__TAURI__.sql;

let db: Database | null = null;

type User = {
    id: number;
    username?: string
    role: 'admin' | 'staff'
};

export async function getDb() {
    if (!db) {
        db = await Database.load(`sqlite:com.harsh.inventory-app.db`);

        console.log(db)
    }
    return db;
}

export async function getUsers() {
    try {
        const db = await getDb();
        return await db.select<User[]>(`SELECT id, username, role FROM users`);
    } catch (error) {
        console.log(error)
    }
}
