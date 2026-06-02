// src/services/api.js
// Todas las llamadas al backend desde el frontend

const BASE_URL = 'http://localhost:3001/api';

// ─── Obtener progreso del usuario ─────────────────────────────────────────────
export async function getProgress() {
  const res = await fetch(`${BASE_URL}/progress`);
  if (!res.ok) throw new Error('Error obteniendo progreso');
  return res.json();
}

// ─── Sumar XP ─────────────────────────────────────────────────────────────────
export async function addXP(amount) {
  const res = await fetch(`${BASE_URL}/progress/xp`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  if (!res.ok) throw new Error('Error sumando XP');
  return res.json();
}

// ─── Guardar progreso de una palabra ──────────────────────────────────────────
export async function saveWordProgress(wordId, knew) {
  const res = await fetch(`${BASE_URL}/progress/word`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ wordId, knew }),
  });
  if (!res.ok) throw new Error('Error guardando palabra');
  return res.json();
}