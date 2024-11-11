const Database = require('better-sqlite3');

// Create a new database instance
const db = new Database('inventory.sqlite3');

// Create a table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    theshold INTEGER NOT NULL
  )
`;

db.exec(createTableQuery);

module.exports = db;
