// src/pages/HomePage.jsx
// LinguaQuest — Home Page Component
// Stack: React 18 + Vite + React Router

import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// ─── Static mock data (luego vendrá de la API) ───────────────────────────────
const PLAYER = {
  name: 'Daniel Ávila',
  initials: 'DA',
  level: 4,
  xp: 670,
  xpNext: 1000,
  rank: 'Intermediate Adventurer',
  streak: 7,
  wordsLearned: 152,
  questsDone: 23,
  cefr: 'B1',
};

const DAILY_CHALLENGE = {
  title: 'Present Perfect vs. Simple Past',
  description:
    '10 questions to test the difference between "I have seen" and "I saw". A key weakness for Spanish speakers!',
  xpReward: 150,
  badge: 'Grammar Badge',
  path: '/challenge/daily',
};

const QUESTS = [
  {
    id: 'vocabulary',
    icon: '📖',
    name: 'Vocabulary Quest',
    description:
      'Learn 1,000 essential English words with spaced repetition. Nouns, verbs, adjectives and more.',
    color: 'teal',
    status: 'active',
    current: 150,
    total: 1000,
    label: 'words',
    path: '/quest/vocabulary',
  },
  {
    id: 'grammar',
    icon: '⚡',
    name: 'Grammar Adventures',
    description:
      'Master all 12 English verb tenses. From Present Simple to Future Perfect Continuous.',
    color: 'gold',
    status: 'active',
    current: 2,
    total: 12,
    label: 'tenses completed',
    path: '/quest/grammar',
  },
  {
    id: 'games',
    icon: '🎮',
    name: 'Word Arena',
    description:
      'Match words, fill blanks, unscramble sentences. Fast mini-games to reinforce what you learn.',
    color: 'purple',
    status: 'new',
    current: 0,
    total: 5,
    label: 'modes',
    path: '/quest/games',
  },
  {
    id: 'speaking',
    icon: '🎙️',
    name: 'Speaking Arena',
    description: 'Practice pronunciation and conversation. Unlock at Level 5.',
    color: 'blue',
    status: 'locked',
    current: 0,
    total: 0,
    unlockLevel: 5,
    path: null,
  },
];

const ACTIVITY = [
  { dot: 'teal',   text: '10 new words learned in Vocabulary Quest', xp: 50,  time: '2h ago' },
  { dot: 'gold',   text: 'Present Simple quest completed ✓',          xp: 120, time: 'Yesterday' },
  { dot: 'purple', text: 'Daily Challenge — 8/10 correct',            xp: 80,  time: 'Yesterday' },
  { dot: 'teal',   text: '15 words reviewed — Spaced repetition',     xp: 30,  time: '2 days ago' },
];

const ACHIEVEMENTS = [
  { emoji: '🔥', name: '7-Day Streak',     earned: true },
  { emoji: '📖', name: 'First 100 Words',  earned: true },
  { emoji: '⚡', name: 'Grammar Starter',  earned: true },
  { emoji: '🏆', name: '500 Words',        earned: false },
  { emoji: '🌟', name: 'Perfect Score',    earned: false },
  { emoji: '🗡️', name: 'Tense Master',    earned: false },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const xpPercent = Math.round((PLAYER.xp / PLAYER.xpNext) * 100);

  return (
    <div className="lq-page">

      {/* ── NAVBAR ── */}
      <nav className="lq-nav">
        <div className="lq-logo">
          <div className="lq-logo-icon">⚔️</div>
          <div>
            <div className="lq-logo-text">LinguaQuest</div>
            <div className="lq-logo-sub">English Adventure</div>
          </div>
        </div>
        <div className="lq-nav-right">
          <div className="lq-streak-badge">🔥 {PLAYER.streak} days</div>
          <div className="lq-avatar">{PLAYER.initials}</div>
        </div>
      </nav>

      {/* ── HERO ROW ── */}
      <div className="lq-hero">

        {/* Player Card */}
        <div className="lq-player-card">
          <p className="lq-greeting">Welcome back, warrior</p>
          <h1 className="lq-player-name">
            {PLAYER.name.split(' ')[0]}{' '}
            <span>{PLAYER.name.split(' ')[1]}</span>
          </h1>

          <div className="lq-level-row">
            <span className="lq-level-badge">⚡ LEVEL {PLAYER.level}</span>
            <span className="lq-xp-info">
              {PLAYER.xp} / {PLAYER.xpNext} XP · {PLAYER.rank}
            </span>
          </div>

          <div className="lq-xp-bar-wrap">
            <div className="lq-xp-bar-fill" style={{ width: `${xpPercent}%` }} />
          </div>

          <div className="lq-stats-row">
            <div className="lq-stat">
              <span className="lq-stat-val">{PLAYER.wordsLearned}</span>
              <span className="lq-stat-lbl">Words learned</span>
            </div>
            <div className="lq-stat-divider" />
            <div className="lq-stat">
              <span className="lq-stat-val">{PLAYER.streak}</span>
              <span className="lq-stat-lbl">Day streak</span>
            </div>
            <div className="lq-stat-divider" />
            <div className="lq-stat">
              <span className="lq-stat-val">{PLAYER.questsDone}</span>
              <span className="lq-stat-lbl">Quests done</span>
            </div>
            <div className="lq-stat-divider" />
            <div className="lq-stat">
              <span className="lq-stat-val">{PLAYER.cefr}</span>
              <span className="lq-stat-lbl">Current level</span>
            </div>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="lq-daily-card">
          <div>
            <div className="lq-daily-label">
              <div className="lq-pulse-dot" />
              <span className="lq-daily-label-text">Daily Challenge</span>
            </div>
            <h2 className="lq-daily-title">{DAILY_CHALLENGE.title}</h2>
            <p className="lq-daily-desc">{DAILY_CHALLENGE.description}</p>
          </div>
          <div>
            <div className="lq-daily-reward">
              ⭐ +{DAILY_CHALLENGE.xpReward} XP &nbsp;·&nbsp; 🏅 {DAILY_CHALLENGE.badge}
            </div>
            <Link to={DAILY_CHALLENGE.path} className="lq-btn-primary">
              ▶&nbsp; Start Challenge
            </Link>
          </div>
        </div>
      </div>

      {/* ── QUEST GRID ── */}
      <div className="lq-section-header">
        <span className="lq-section-title">Your Quest Map</span>
        <Link to="/quests" className="lq-section-link">View all →</Link>
      </div>

      <div className="lq-quest-grid">
        {QUESTS.map((q) => (
          <QuestCard key={q.id} quest={q} />
        ))}
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="lq-bottom-row">

        {/* Activity */}
        <div className="lq-card">
          <div className="lq-section-header" style={{ marginBottom: 14 }}>
            <span className="lq-section-title">Recent Activity</span>
          </div>
          <div className="lq-activity-list">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="lq-activity-item">
                <div className={`lq-dot dot-${a.dot}`} />
                <span className="lq-activity-text">{a.text}</span>
                <div style={{ textAlign: 'right' }}>
                  <div className="lq-activity-xp">+{a.xp} XP</div>
                  <div className="lq-activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="lq-card">
          <div className="lq-section-header" style={{ marginBottom: 14 }}>
            <span className="lq-section-title">Achievements</span>
          </div>
          <div className="lq-badge-grid">
            {ACHIEVEMENTS.map((b, i) => (
              <div key={i} className={`lq-badge-item${b.earned ? ' earned' : ''}`}>
                <span className="lq-badge-emoji">{b.emoji}</span>
                <span className="lq-badge-name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Quest Card Sub-component ─────────────────────────────────────────────────
function QuestCard({ quest }) {
  const progress = quest.total > 0
    ? Math.round((quest.current / quest.total) * 100)
    : 0;

  const statusBadge = {
    active: <span className="lq-quest-badge badge-active">IN PROGRESS</span>,
    new:    <span className="lq-quest-badge badge-new">NEW</span>,
    locked: <span className="lq-quest-badge badge-soon">COMING SOON</span>,
  }[quest.status];

  const card = (
    <div className={`lq-quest-card q-${quest.color}${quest.status === 'locked' ? ' locked' : ''}`}>
      <div className="lq-quest-top">
        <div className="lq-quest-icon">{quest.icon}</div>
        {statusBadge}
      </div>
      <div className="lq-quest-name">{quest.name}</div>
      <div className="lq-quest-desc">{quest.description}</div>
      <div className="lq-quest-progress-row">
        <span className="lq-quest-progress-label">PROGRESS</span>
        <span className="lq-quest-progress-val">
          {quest.status === 'locked'
            ? `Level ${quest.unlockLevel} required`
            : `${quest.current} / ${quest.total} ${quest.label}`}
        </span>
      </div>
      <div className="lq-quest-bar">
        <div className="lq-quest-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );

  return quest.path
    ? <Link to={quest.path} style={{ textDecoration: 'none' }}>{card}</Link>
    : card;
}
