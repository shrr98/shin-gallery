import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Exhibition from './Exhibition.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibition" element={<Exhibition />} />
      </Routes>
    </Router>

  );
}

export default App
