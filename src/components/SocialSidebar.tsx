import React, { useState } from 'react';
import { Github, Linkedin, Mail, Share2, X } from 'lucide-react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

interface SocialSidebarProps {
  darkMode: boolean;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isHovered || isOpen;

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
      icon: Mail,
      href: 'mailto:nikhilhardik00@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div
      className="fixed top-1/2 z-50 transform -translate-y-1/2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center group">
        {/* Sidebar Panel */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isExpanded ? 'translate-x-0' : '-translate-x-20'
          } w-14 rounded-r-xl shadow-lg backdrop-blur-md ${
            darkMode ? 'bg-gray-900/80' : 'bg-white/80'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 p-2 w-full">
            {/* Toggle (Mobile) */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                aria-label="Toggle Sidebar"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Social Icons */}
            {isExpanded &&
              socialLinks.map((link, index) => (
                <Tippy key={index} content={link.label} animation="scale" placement="right">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all hover:scale-110 ${
                      darkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </Tippy>
              ))}
          </div>
        </div>

        {/* Peek-Out Share2 Icon (Desktop) */}
        {!isExpanded && (
          <div
            className={`hidden lg:flex absolute -left-0 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Share2 className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialSidebar;
