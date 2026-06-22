// backend/src/routes/progress.js
// Rutas para manejar el progreso del usuario
// GET  /api/progress       → obtener XP, nivel, streak
// PUT  /api/progress/xp    → sumar XP
// POST /api/progress/word  → guardar progreso de una palabra

const express = require('express');
const router  = express.Router();
const db      = require('../db/database');

// ─── GET /api/progress ───────────────────────────────────────────────────────
// Devuelve el progreso general del usuario
router.get('/', (req, res) => {
  try {
    const user = db.prepare('SELECT * FROM users WHERE id = 1').get();
    const wordsLearned = db.prepare(
      'SELECT COUNT(*) as total FROM word_progress WHERE user_id = 1 AND level >= 3'
    ).get();

    res.json({
      ...user,
      wordsLearned: wordsLearned.total,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─── PUT /api/progress/xp ────────────────────────────────────────────────────
// Suma XP al usuario y sube de nivel si corresponde
router.put('/xp', (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || amount < 0) {
      return res.status(400).json({ error: 'amount debe ser un número positivo' });
    }

    const user = db.prepare('SELECT * FROM users WHERE id = 1').get();
    const newXp = user.xp + amount;

    // Subir de nivel cada 1000 XP
    const newLevel = Math.floor(newXp / 1000) + 1;

    db.prepare(
      'UPDATE users SET xp = ?, level = ?, last_active = date(\'now\') WHERE id = 1'
    ).run(newXp, newLevel);

    res.json({ xp: newXp, level: newLevel, gained: amount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─── POST /api/progress/word ─────────────────────────────────────────────────
// Guarda o actualiza el progreso de una palabra específica
router.post('/word', (req, res) => {
  try {
    const { wordId, knew } = req.body;
    if (wordId === undefined) {
      return res.status(400).json({ error: 'wordId es requerido' });
    }

    // Buscar si ya existe progreso para esta palabra
    const existing = db.prepare(
      'SELECT * FROM word_progress WHERE user_id = 1 AND word_id = ?'
    ).get(wordId);

    if (existing) {
      // Actualizar nivel: sube si supo, baja a 0 si no
      const newLevel    = knew ? Math.min(existing.level + 1, 3) : 0;
      const newCorrect  = existing.correct  + (knew ? 1 : 0);
      const newAttempts = existing.attempts + 1;

      db.prepare(`
        UPDATE word_progress
        SET level = ?, correct = ?, attempts = ?
        WHERE user_id = 1 AND word_id = ?
      `).run(newLevel, newCorrect, newAttempts, wordId);

      res.json({ wordId, level: newLevel, correct: newCorrect, attempts: newAttempts });
    } else {
      // Insertar nuevo registro
      const level = knew ? 1 : 0;
      db.prepare(`
        INSERT INTO word_progress (user_id, word_id, level, correct, attempts)
        VALUES (1, ?, ?, ?, 1)
      `).run(wordId, level, knew ? 1 : 0);

      res.json({ wordId, level, correct: knew ? 1 : 0, attempts: 1 });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// ─── POST /api/progress/tense ────────────────────────────────────────────────
// Guarda el resultado de completar un tiempo verbal (Grammar Quest)
router.post('/tense', (req, res) => {
  try {
    const { tenseId, passed, score, xpEarned } = req.body;
    if (tenseId === undefined) {
      return res.status(400).json({ error: 'tenseId es requerido' });
    }

    const questId = `grammar_tense_${tenseId}`;
    const status  = passed ? 'completed' : 'active';

    const existing = db.prepare(
      'SELECT * FROM quest_progress WHERE user_id = 1 AND quest_id = ?'
    ).get(questId);

    if (existing) {
      db.prepare(`
        UPDATE quest_progress
        SET status = ?, score = ?, completed_at = CASE WHEN ? = 'completed' THEN date('now') ELSE completed_at END
        WHERE user_id = 1 AND quest_id = ?
      `).run(status, score, status, questId);
    } else {
      db.prepare(`
        INSERT INTO quest_progress (user_id, quest_id, status, score, completed_at)
        VALUES (1, ?, ?, ?, ?)
      `).run(questId, status, score, status === 'completed' ? new Date().toISOString().split('T')[0] : null);
    }

    // Sumar XP igual que con vocabulary
    if (xpEarned > 0) {
      const user = db.prepare('SELECT * FROM users WHERE id = 1').get();
      const newXp = user.xp + xpEarned;
      const newLevel = Math.floor(newXp / 1000) + 1;
      db.prepare(
        'UPDATE users SET xp = ?, level = ?, last_active = date(\'now\') WHERE id = 1'
      ).run(newXp, newLevel);
    }

    res.json({ tenseId, status, score });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─── GET /api/progress/grammar ───────────────────────────────────────────────
// Devuelve la lista de tiempos verbales completados
router.get('/grammar', (req, res) => {
  try {
    const rows = db.prepare(`
      SELECT quest_id, status, score, completed_at
      FROM quest_progress
      WHERE user_id = 1 AND quest_id LIKE 'grammar_tense_%' AND status = 'completed'
    `).all();

    const completedTenseIds = rows.map((row) =>
      Number(row.quest_id.replace('grammar_tense_', ''))
    );

    res.json({ completedTenseIds });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;