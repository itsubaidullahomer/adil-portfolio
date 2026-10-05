import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import QuranCaseStudy from './pages/QuranCaseStudy';
import ScrollToTop from './layout/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/caseStudy" element={<QuranCaseStudy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;