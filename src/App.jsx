// App.jsx
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyNavbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import ResumeModal from './components/resume/ResumeModal';

// Complete Single-Page Layout component
function SinglePagePortfolio({ onOpenResume }) {
  return (
    <main className="portfolio-main">
      <Home onOpenResume={onOpenResume} />
      <About onOpenResume={onOpenResume} />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <BrowserRouter>
      <div className="portfolio-app">
        <MyNavbar onOpenResume={openResume} />

        <Routes>
          {/* Main single-page portfolio containing all sections */}
          <Route
            path="/"
            element={<SinglePagePortfolio onOpenResume={openResume} />}
          />

          {/* Any other routes redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />

        {/* Global Interactive Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
      </div>
    </BrowserRouter>
  );
}

export default App;
