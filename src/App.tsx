import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Contact />
            </>
          } />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App