// backend/src/db/database.js
// Configuración y conexión a SQLite
// Crea las tablas si no existen

const Database = require('better-sqlite3');
const path = require('path');

// El archivo .db se crea automáticamente en backend/
const db = new Database(path.join(__dirname, '../../data/linguaquest.db'));

// Optimizaciones de SQLite
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ─── CREAR TABLAS ────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL DEFAULT 'Player',
    xp          INTEGER NOT NULL DEFAULT 0,
    level       INTEGER NOT NULL DEFAULT 1,
    streak      INTEGER NOT NULL DEFAULT 0,
    last_active TEXT    NOT NULL DEFAULT (date('now'))
  );

  CREATE TABLE IF NOT EXISTS word_progress (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id  INTEGER NOT NULL DEFAULT 1,
    word_id  INTEGER NOT NULL,
    level    INTEGER NOT NULL DEFAULT 0,
    correct  INTEGER NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE(user_id, word_id)
  );

  CREATE TABLE IF NOT EXISTS quest_progress (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id      INTEGER NOT NULL DEFAULT 1,
    quest_id     TEXT    NOT NULL,
    status       TEXT    NOT NULL DEFAULT 'active',
    score        INTEGER NOT NULL DEFAULT 0,
    completed_at TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE(user_id, quest_id)
  );
`);

// Insertar usuario por defecto si no existe
const userExists = db.prepare('SELECT id FROM users WHERE id = 1').get();
if (!userExists) {
  db.prepare(`
    INSERT INTO users (id, name, xp, level, streak)
    VALUES (1, 'Daniel', 0, 1, 0)
  `).run();
}

console.log('✅ Base de datos lista');

module.exports = db;