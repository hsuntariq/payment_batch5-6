import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Success from './Success'
import Cancel from './Cancel'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
