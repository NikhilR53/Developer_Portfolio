import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/NikhilR53',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/pasunooti-nikhil-231360305',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/your_handle', // replace if available
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:nikhilhardik00@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Nikhil
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly web applications. 
              Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Tippy key={index} content={link.label} placement="top">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </Tippy>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Hyderabad, Telangana, India</p>
              <p>nikhilhardik00@gmail.com</p>
              <p>+91 6305102552</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
            © 2025 Nikhil. Made with <Heart className="w-4 h-4 inline text-red-500" /> using React & Tailwind CSS
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
