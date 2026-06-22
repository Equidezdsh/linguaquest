// src/pages/GrammarPage.jsx
// Mapa de la Grammar Quest — lista los 12 tiempos verbales agrupados

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GRAMMAR_TENSES } from '../data/grammar';
import { getGrammarProgress } from '../services/api';
import '../styles/GrammarPage.css';


const GROUPS = [
  { key: 'present', label: 'Present Tenses', labelEs: 'Tiempos Presentes', icon: '☀️', color: 'blue' },
  { key: 'past',    label: 'Past Tenses',    labelEs: 'Tiempos Pasados',    icon: '🕰️', color: 'gold' },
  { key: 'future',  label: 'Future Tenses',  labelEs: 'Tiempos Futuros',    icon: '🚀', color: 'purple' },
];

export default function GrammarPage() {
  // Progreso local — en el siguiente paso lo conectamos al backend
  const [completedTenses, setCompletedTenses] = useState([]); // array de ids completados

  useEffect(() => {
  getGrammarProgress()
    .then((data) => setCompletedTenses(data.completedTenseIds))
    .catch((err) => console.error('Error cargando progreso de gramática:', err));
}, []);

  const totalCompleted = completedTenses.length;
  const totalTenses = GRAMMAR_TENSES.length;
  const progressPercent = Math.round((totalCompleted / totalTenses) * 100);

  return (
    <div className="gq-page">

      {/* ── HEADER ── */}
      <div className="gq-header">
        <Link to="/" className="gq-back-btn">← Quest Map</Link>
        <div className="gq-header-center">
          <div className="gq-title">⚡ Grammar Adventures</div>
          <div className="gq-subtitle">{totalCompleted} / {totalTenses} tenses mastered</div>
        </div>
        <div className="gq-progress-pill">{progressPercent}%</div>
      </div>

      <div className="gq-progress-bar-wrap">
        <div className="gq-progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* ── GRUPOS DE TIEMPOS ── */}
      {GROUPS.map((group) => {
        const tenses = GRAMMAR_TENSES.filter((t) => t.group === group.key);
        return (
          <div key={group.key} className="gq-group">
            <div className="gq-group-header">
              <span className="gq-group-icon">{group.icon}</span>
              <span className={`gq-group-title gq-color-${group.color}`}>{group.label}</span>
              <span className="gq-group-sub">{group.labelEs}</span>
            </div>

            <div className="gq-tense-grid">
              {tenses.map((tense) => {
                const isDone = completedTenses.includes(tense.id);
                return (
                  <Link
                    to={`/quest/grammar/${tense.id}`}
                    key={tense.id}
                    className={`gq-tense-card gq-color-${group.color}${isDone ? ' done' : ''}`}
                  >
                    <div className="gq-tense-top">
                      <span className="gq-tense-name">{tense.name}</span>
                      {isDone && <span className="gq-tense-check">✓</span>}
                    </div>
                    <div className="gq-tense-name-es">{tense.nameEs}</div>
                    <div className="gq-tense-formula">{tense.formula}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

    </div>
  );
}
