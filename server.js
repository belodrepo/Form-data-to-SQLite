const express = require('express'); //Express szerver importálása
const sqlite3 = require('sqlite3').verbose(); SQLite importálása
const cors = require('cors');
const path = require('path');

const app = express();
const db = new sqlite3.Database('users.db');

app.use(cors());
app.use(express.json());

// Statikus fájlok kiszolgálása a /public mappából
app.use(express.static(path.join(__dirname, 'public')));

// Tábla létrehozása, ha nem létezik
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        vezeteknev TEXT,
        keresztnev TEXT,
        email TEXT,
        telephone TEXT
    )
`);

// POST kérés fogadása
app.post('/users', async (req, res) => {
    const { vezeteknev, keresztnev, email, telephone } = req.body;

    const stmt = `INSERT INTO users (vezeteknev, keresztnev, email, telephone) VALUES (?, ?, ?, ?)`;

    db.run(stmt, [vezeteknev, keresztnev, email, telephone], function (err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Adatmentési hiba');
        }
        res.status(200).json({ message: 'Sikeres mentés', id: this.lastID });
    });
});

// Szerver indítása
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Szerver fut: http://localhost:${PORT}`);
});
