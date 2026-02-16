# Inventory App

A Tauri + React + TypeScript desktop application for inventory management.

## Getting Started

Install dependencies:

```sh
npm install
```

Create sqlite database:
```
>> cd persistence
>> sqlite3 <DATABASE> 
>> .save <FILENAME>
```

Run migrations from `./persistence/migrations`:

Run development server:

```sh
npm run tauri dev
```

Build for production:

```sh
npm run tauri build
```

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Desktop**: Tauri
- **Backend**: Rust
- **Database**: SQLite

