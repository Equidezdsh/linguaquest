// backend/server.js
// Punto de entrada del servidor Express
// Corre en puerto 3001

const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const progressRoutes = require('./src/routes/progress');

const app  = express();
const PORT = process.env.PORT || 3001;

// ─── MIDDLEWARES ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: 'http://localhost:5173', // solo permite peticiones del frontend
}));
app.use(express.json()); // permite leer JSON en el body de las peticiones

// ─── RUTAS ───────────────────────────────────────────────────────────────────
app.use('/api/progress', progressRoutes);

// ─── RUTA DE SALUD ───────────────────────────────────────────────────────────
// Sirve para verificar que el servidor está vivo
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'LinguaQuest API corriendo',
    timestamp: new Date().toISOString(),
  });
});

// ─── ARRANCAR SERVIDOR ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});