import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Certification from './components/Certification';


function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [loading, setLoading] = useState(true);

  // Initialize AOS and theme on first render
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true); // Default to dark mode
    }

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync theme with document and localStorage
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Smooth scroll behavior
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  if (loading) {
    return <Loader darkMode={darkMode} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SocialSidebar darkMode={darkMode} />

        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Timeline darkMode={darkMode} />
          <ResumeDownload darkMode={darkMode} />
          <Certification darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
