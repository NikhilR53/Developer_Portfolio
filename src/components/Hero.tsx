import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'React Specialist', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const current = texts[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    if (!isDeleting && displayText === texts[currentIndex]) {
      setTimeout(() => setIsDeleting(true), 2000);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-10 gap-y-10 lg:gap-x-8 ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}
    >
      {/* 🔄 Lottie Animation */}
      <div className="w-full max-w-lg lg:h-[500px]" data-aos="fade-right">
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
          className="w-full h-full"
          autoplay
          loop
        />
      </div>

      {/* 📝 Text Section */}
      <div className="text-center lg:text-left max-w-lg flex flex-col justify-center" data-aos="fade-left">
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nikhil
          </span>
        </h1>
        <div className={`text-2xl md:text-3xl mb-6 h-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          A passionate <span className="text-blue-600 font-semibold">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
          I build beautiful, functional, and user-friendly web applications. Let’s make something impactful together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white rounded-lg font-semibold hover:scale-105 transition">
            View My Work
          </a>
          <a
            href="#contact"
            className={`px-8 py-4 rounded-lg font-semibold border-2 transform hover:scale-105 transition ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* ⬇ Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </div>
    </section>
  );
};

export default Hero;
