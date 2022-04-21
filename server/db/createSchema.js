import db from "./createConnection.js";

const isInDeleteMode = true;

if(isInDeleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users;`);
}


await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(80),
    password VARCHAR(150)
    
);`);

// seed
// if(isInDeleteMode) {
//     await db.run(`INSERT INTO users (username, password) VALUES ('Mette', 'Vuf123')`);
// };

db.close();