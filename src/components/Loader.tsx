import React from 'react';
import { Code } from 'lucide-react';

interface LoaderProps {
  darkMode: boolean;
}

const Loader: React.FC<LoaderProps> = ({ darkMode }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-300 border-t-blue-600 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className={`text-2xl font-bold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Loading...
        </div>
        
        <div className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Preparing something awesome
        </div>
        
        <div className="mt-6 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;