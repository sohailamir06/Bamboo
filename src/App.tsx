import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import KontaktPage from './pages/KontaktPage';
import ServicesPage from './pages/ServicesPage';
import ExperienceBamboo from './pages/ExperienceBamboo';
import { useScrollReveal } from './hooks/common/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <Router>
      <div className="min-h-screen bg-bambuam-dark text-white selection:bg-bambuam-green/30">
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
