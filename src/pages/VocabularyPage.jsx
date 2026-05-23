// src/pages/VocabularyPage.jsx
// Quest de Vocabulario — sistema de flashcards con spaced repetition simplificado
// Lógica:
//   - Cada palabra tiene un "nivel" (0-3)
//   - "Lo sabía" → sube nivel. Si llega a 3 → palabra dominada
//   - "No lo sabía" → regresa a nivel 0 y vuelve a la cola
//   - La sesión termina cuando todas las palabras están en nivel 3

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { VOCABULARY, XP_PER_CORRECT, XP_PER_SESSION_BONUS } from '../data/vocabulary';
import '../styles/VocabularyPage.css';

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Inicializa el estado de progreso de cada palabra
function initProgress() {
  return VOCABULARY.map((word) => ({
    ...word,
    level: 0,        // 0 = nueva, 1-2 = en progreso, 3 = dominada
    attempts: 0,
    correct: 0,
  }));
}

// Construye la cola de estudio:
// Prioriza palabras con nivel bajo, excluye las dominadas (nivel 3)
function buildQueue(words) {
  const pending = words.filter((w) => w.level < 3);
  // Ordenar: primero las que tienen nivel más bajo
  return [...pending].sort((a, b) => a.level - b.level);
}

// Badge de tipo de palabra
const TYPE_COLORS = {
  verb:        { bg: 'rgba(16,217,168,0.1)',  color: '#10d9a8',  border: '#0a7a60' },
  noun:        { bg: 'rgba(245,166,35,0.1)',  color: '#f5a623',  border: '#a86d10' },
  adjective:   { bg: 'rgba(167,139,250,0.1)', color: '#a78bfa',  border: '#5b3fa6' },
  adverb:      { bg: 'rgba(96,165,250,0.1)',  color: '#60a5fa',  border: '#2563eb' },
  preposition: { bg: 'rgba(248,113,113,0.1)', color: '#f87171',  border: '#b91c1c' },
  'noun / verb': { bg: 'rgba(245,166,35,0.1)', color: '#f5a623', border: '#a86d10' },
};

// ─── Componente Principal ──────────────────────────────────────────────────────
export default function VocabularyPage() {
  const [words, setWords]         = useState(initProgress);
  const [queue, setQueue]         = useState(() => buildQueue(initProgress()));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionWrong, setSessionWrong]     = useState(0);
  const [showResult, setShowResult]         = useState(null); // 'correct' | 'wrong' | null
  const [finished, setFinished]   = useState(false);

  // Palabra actual
  const currentWord = queue[currentIdx] || null;

  // Estadísticas del mazo
  const dominated = words.filter((w) => w.level >= 3).length;
  const total     = words.length;
  const progress  = Math.round((dominated / total) * 100);

  // ── Voltear tarjeta ──────────────────────────────────────────────────────────
  const handleFlip = () => {
    if (showResult) return;
    setIsFlipped((prev) => !prev);
  };

  // ── Respuesta del usuario ────────────────────────────────────────────────────
  const handleAnswer = useCallback((knew) => {
    if (!currentWord || !isFlipped) return;

    // Actualizar progreso de la palabra
    const updatedWords = words.map((w) => {
      if (w.id !== currentWord.id) return w;
      const newLevel = knew
        ? Math.min(w.level + 1, 3)
        : 0;
      return {
        ...w,
        level:    newLevel,
        attempts: w.attempts + 1,
        correct:  w.correct + (knew ? 1 : 0),
      };
    });

    setWords(updatedWords);

    // XP y estadísticas de sesión
    if (knew) {
      setSessionXP((prev) => prev + XP_PER_CORRECT);
      setSessionCorrect((prev) => prev + 1);
    } else {
      setSessionWrong((prev) => prev + 1);
    }

    // Mostrar feedback visual brevemente
    setShowResult(knew ? 'correct' : 'wrong');

    setTimeout(() => {
      setShowResult(null);
      setIsFlipped(false);

      // Reconstruir cola con el progreso actualizado
      const newQueue = buildQueue(updatedWords);

      if (newQueue.length === 0) {
        // ¡Todas las palabras dominadas!
        setSessionXP((prev) => prev + XP_PER_SESSION_BONUS);
        setFinished(true);
      } else {
        setQueue(newQueue);
        // Avanzar al siguiente o volver al inicio de la nueva cola
        setCurrentIdx((prev) =>
          prev < newQueue.length - 1 ? prev + 1 : 0
        );
      }
    }, 700);
  }, [currentWord, isFlipped, words]);

  // ── Reiniciar sesión ─────────────────────────────────────────────────────────
  const handleRestart = () => {
    const fresh = initProgress();
    setWords(fresh);
    setQueue(buildQueue(fresh));
    setCurrentIdx(0);
    setIsFlipped(false);
    setSessionXP(0);
    setSessionCorrect(0);
    setSessionWrong(0);
    setShowResult(null);
    setFinished(false);
  };

  // ── Atajos de teclado ────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === ' ' || e.key === 'Enter') handleFlip();
      if (e.key === 'ArrowRight') handleAnswer(true);
      if (e.key === 'ArrowLeft')  handleAnswer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleFlip, handleAnswer]);

  // ── PANTALLA FINAL ───────────────────────────────────────────────────────────
  if (finished) {
    return (
      <div className="vq-page">
        <div className="vq-finish-screen">
          <div className="vq-finish-icon">🏆</div>
          <h1 className="vq-finish-title">¡Mazo completado!</h1>
          <p className="vq-finish-sub">Dominaste las {total} palabras de esta sesión</p>

          <div className="vq-finish-stats">
            <div className="vq-finish-stat">
              <span className="vq-finish-val vq-correct-color">+{sessionXP}</span>
              <span className="vq-finish-lbl">XP ganado</span>
            </div>
            <div className="vq-finish-divider" />
            <div className="vq-finish-stat">
              <span className="vq-finish-val vq-correct-color">{sessionCorrect}</span>
              <span className="vq-finish-lbl">Correctas</span>
            </div>
            <div className="vq-finish-divider" />
            <div className="vq-finish-stat">
              <span className="vq-finish-val vq-wrong-color">{sessionWrong}</span>
              <span className="vq-finish-lbl">Falladas</span>
            </div>
          </div>

          <div className="vq-finish-btns">
            <button className="vq-btn-restart" onClick={handleRestart}>
              🔄 Practicar de nuevo
            </button>
            <Link to="/" className="vq-btn-home">← Volver al mapa</Link>
          </div>
        </div>
      </div>
    );
  }

  if (!currentWord) return null;

  const typeStyle = TYPE_COLORS[currentWord.type] || TYPE_COLORS['noun'];
  const wordProgress = words.find((w) => w.id === currentWord.id);

  // ── PANTALLA PRINCIPAL ───────────────────────────────────────────────────────
  return (
    <div className="vq-page">

      {/* ── HEADER ── */}
      <div className="vq-header">
        <Link to="/" className="vq-back-btn">← Quest Map</Link>
        <div className="vq-header-center">
          <div className="vq-title">📖 Vocabulary Quest</div>
          <div className="vq-subtitle">
            {queue.length - currentIdx} palabras restantes · {dominated}/{total} dominadas
          </div>
        </div>
        <div className="vq-session-xp">+{sessionXP} XP</div>
      </div>

      {/* ── BARRA DE PROGRESO GLOBAL ── */}
      <div className="vq-progress-wrap">
        <div className="vq-progress-bar">
          <div className="vq-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="vq-progress-label">{progress}% dominado</span>
      </div>

      {/* ── CONTADOR DE SESIÓN ── */}
      <div className="vq-session-stats">
        <span className="vq-stat-correct">✓ {sessionCorrect}</span>
        <span className="vq-stat-wrong">✗ {sessionWrong}</span>
        <span className="vq-stat-remaining">
          Tarjeta {Math.min(currentIdx + 1, queue.length)} de {queue.length}
        </span>
      </div>

      {/* ── FLASHCARD ── */}
      <div className="vq-scene" onClick={handleFlip}>
        <div className={`vq-card ${isFlipped ? 'flipped' : ''} ${showResult ? `result-${showResult}` : ''}`}>

          {/* FRENTE — palabra en inglés */}
          <div className="vq-card-front">
            <div className="vq-card-hint">Toca la tarjeta para ver la respuesta</div>
            <div
              className="vq-word-type"
              style={{
                background: typeStyle.bg,
                color: typeStyle.color,
                border: `1px solid ${typeStyle.border}`,
              }}
            >
              {currentWord.type}
            </div>
            <div className="vq-word">{currentWord.word}</div>
            <div className="vq-phonetic">{currentWord.phonetic}</div>

            {/* Nivel de dominio */}
            <div className="vq-level-dots">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`vq-dot ${wordProgress.level > i ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* REVERSO — traducción y ejemplo */}
          <div className="vq-card-back">
            <div className="vq-translation">{currentWord.translation}</div>
            <div className="vq-example-wrap">
              <div className="vq-example-label">Ejemplo:</div>
              <div className="vq-example">{currentWord.example}</div>
              <div className="vq-example-es">{currentWord.exampleEs}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTONES DE RESPUESTA (solo visibles cuando la tarjeta está volteada) ── */}
      <div className={`vq-answer-btns ${isFlipped && !showResult ? 'visible' : ''}`}>
        <button className="vq-btn-wrong" onClick={() => handleAnswer(false)}>
          <span className="vq-btn-icon">✗</span>
          <span className="vq-btn-text">No lo sabía</span>
          <span className="vq-btn-key">←</span>
        </button>
        <button className="vq-btn-correct" onClick={() => handleAnswer(true)}>
          <span className="vq-btn-icon">✓</span>
          <span className="vq-btn-text">Lo sabía</span>
          <span className="vq-btn-key">→</span>
        </button>
      </div>

      {/* ── HINT TECLADO ── */}
      <div className="vq-keyboard-hint">
        <span>Espacio/Enter = voltear</span>
        <span>← No lo sabía</span>
        <span>→ Lo sabía</span>
      </div>

    </div>
  );
}
