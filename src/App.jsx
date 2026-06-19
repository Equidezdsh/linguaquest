// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VocabularyPage from './pages/VocabularyPage'
import GrammarPage from './pages/GrammarPage'
import GrammarLessonPage from './pages/GrammarLessonPage'

export default function App() {
  return (
    <Routes>
      <Route path="/"                  element={<HomePage />} />
      <Route path="/quest/vocabulary"  element={<VocabularyPage />} />
      <Route path="/quest/grammar"           element={<GrammarPage />} />
      <Route path="/quest/grammar/:tenseId"  element={<GrammarLessonPage />} />
    </Routes>
  )
}