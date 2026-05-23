// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VocabularyPage from './pages/VocabularyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/"                  element={<HomePage />} />
      <Route path="/quest/vocabulary"  element={<VocabularyPage />} />
    </Routes>
  )
}