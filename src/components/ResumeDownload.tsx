import React from 'react';
import { Download, FileText } from 'lucide-react';

interface ResumeDownloadProps {
  darkMode: boolean;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ darkMode }) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Resume-Nikhil.pdf';
    link.download = 'Nikhil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`py-16 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center" data-aos="fade-up">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Download My Resume
          </h2>
          
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get a detailed overview of my experience, skills, and achievements in a downloadable PDF format.
          </p>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
          
          <div className={`mt-6 text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Resume • Last updated August 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;