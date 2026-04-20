import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import KontaktPage from './pages/KontaktPage';
import ServicesPage from './pages/ServicesPage';
import ExperienceBamboo from './pages/ExperienceBamboo';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-bambuam-dark">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services-page" element={<ServicesPage />} />
            <Route path="/experience-bamboo" element={<ExperienceBamboo />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
