//previously in cmd I typed npm init -y to create NodeJS project and then npm install express sqlite3 to have opportunity to use it
const sqlite3 = require('sqlite3').verbose(); //additional diagnosing comunications (verbose())
const db = new sqlite3.Database('./db/database.sqlite')//Path from root folder

db.serialize(() => {
   db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL
    )`);

db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userID INTEGER NOT NULL,
    bookID INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    FOREIGN KEY(bookID) REFERENCES books(id)
   )`);

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    )`)
});

db.close();

//After that file creation in cmd I am going to type node db\initDB.js what is going to start that scrypt and create structure of my base.
//I do it just when I change structure.