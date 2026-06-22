// src/pages/GrammarLessonPage.jsx
// Lección individual de un tiempo verbal: explicación + quiz de 4 preguntas

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GRAMMAR_TENSES, XP_PER_CORRECT_GRAMMAR, XP_TENSE_MASTERED_BONUS, PASS_THRESHOLD } from '../data/grammar';
import '../styles/GrammarPage.css';
import { saveTenseProgress } from '../services/api';


const GROUP_COLOR = { present: 'blue', past: 'gold', future: 'purple' };

export default function GrammarLessonPage() {
  const { tenseId } = useParams();
  const navigate = useNavigate();

  const tense = GRAMMAR_TENSES.find((t) => t.id === Number(tenseId));

  const [mode, setMode] = useState('lesson'); // 'lesson' | 'quiz' | 'result'
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  if (!tense) {
    return (
      <div className="gq-page">
        <p>Tiempo verbal no encontrado.</p>
        <Link to="/quest/grammar" className="gq-back-btn">← Volver</Link>
      </div>
    );
  }

  const color = GROUP_COLOR[tense.group];
  const question = tense.questions[questionIdx];
  const totalQuestions = tense.questions.length;
  const passed = score / totalQuestions >= PASS_THRESHOLD;

  // ── Seleccionar una respuesta ──────────────────────────────────────────────
  const handleSelect = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // ── Avanzar a la siguiente pregunta o terminar ──────────────────────────────
 const handleNext = () => {
  if (questionIdx < totalQuestions - 1) {
    setQuestionIdx((prev) => prev + 1);
    setSelected(null);
    setAnswered(false);
  } else {
    setMode('result');

    // Guardar en backend al terminar el quiz
    const finalPassed = score / totalQuestions >= PASS_THRESHOLD;
    const finalXp = score * XP_PER_CORRECT_GRAMMAR + (finalPassed ? XP_TENSE_MASTERED_BONUS : 0);

    saveTenseProgress(tense.id, finalPassed, score, finalXp)
      .catch((err) => console.error('Error guardando progreso:', err));
  }
};

  const handleRetry = () => {
    setMode('lesson');
    setQuestionIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
  };

  const xpEarned = score * XP_PER_CORRECT_GRAMMAR + (passed ? XP_TENSE_MASTERED_BONUS : 0);

  return (
    <div className="gq-page">

      {/* ── HEADER ── */}
      <div className="gq-header">
        <Link to="/quest/grammar" className="gq-back-btn">← Grammar Map</Link>
        <div className="gq-header-center">
          <div className={`gq-title gq-color-${color}`}>{tense.name}</div>
          <div className="gq-subtitle">{tense.nameEs}</div>
        </div>
        <div></div>
      </div>

      {/* ═══════════════ MODO LECCIÓN ═══════════════ */}
      {mode === 'lesson' && (
        <div className="gq-lesson-card">
          <div className={`gq-formula-box gq-color-${color}`}>
            <span className="gq-formula-label">FORMULA</span>
            <span className="gq-formula-text">{tense.formula}</span>
          </div>

          <div className="gq-uses-box">
            <span className="gq-section-label">CUÁNDO SE USA</span>
            <ul className="gq-uses-list">
              {tense.uses.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>
          </div>

          <div className="gq-examples-box">
            <span className="gq-section-label">EJEMPLOS</span>
            {tense.examples.map((ex, i) => (
              <div key={i} className="gq-example-item">
                <div className="gq-example-en">{ex.en}</div>
                <div className="gq-example-es">{ex.es}</div>
              </div>
            ))}
          </div>

          <button className={`gq-btn-start gq-color-${color}`} onClick={() => setMode('quiz')}>
            ▶ Start Quiz ({totalQuestions} questions)
          </button>
        </div>
      )}

      {/* ═══════════════ MODO QUIZ ═══════════════ */}
      {mode === 'quiz' && (
        <div className="gq-quiz-card">
          <div className="gq-quiz-progress">
            Question {questionIdx + 1} of {totalQuestions}
          </div>

          <div className="gq-question">{question.question}</div>

          <div className="gq-options">
            {question.options.map((opt, i) => {
              let cls = 'gq-option';
              if (answered) {
                if (i === question.correctIndex) cls += ' correct';
                else if (i === selected) cls += ' wrong';
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="gq-feedback">
              <div className="gq-feedback-text">{question.explanation}</div>
              <button className={`gq-btn-next gq-color-${color}`} onClick={handleNext}>
                {questionIdx < totalQuestions - 1 ? 'Next →' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ═══════════════ MODO RESULTADO ═══════════════ */}
      {mode === 'result' && (
        <div className="gq-result-card">
          <div className="gq-result-icon">{passed ? '🏆' : '📚'}</div>
          <div className="gq-result-title">
            {passed ? '¡Tiempo dominado!' : 'Casi lo logras'}
          </div>
          <div className="gq-result-score">{score} / {totalQuestions} correctas</div>

          <div className="gq-result-xp">+{xpEarned} XP</div>
          {passed && <div className="gq-result-bonus">🏅 Bonus de dominio incluido</div>}

          <div className="gq-result-btns">
            <button className="gq-btn-retry" onClick={handleRetry}>🔄 Intentar de nuevo</button>
            <Link to="/quest/grammar" className={`gq-btn-continue gq-color-${color}`}>
              Continuar →
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
