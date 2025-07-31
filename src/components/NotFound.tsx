import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

interface NotFoundProps {
  darkMode: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="text-center px-6">
        <div className="mb-8">
          <div className={`text-9xl font-bold mb-4 ${
            darkMode ? 'text-gray-700' : 'text-gray-300'
          }`}>
            404
          </div>
          <div className="relative">
            <Search className={`w-16 h-16 mx-auto ${
              darkMode ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Page Not Found
        </h1>

        <p className={`text-lg mb-8 max-w-md mx-auto ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <a
            href="/"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </a>
        </div>

        <div className={`mt-12 p-6 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg max-w-md mx-auto`}>
          <h3 className={`text-lg font-semibold mb-3 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What you can do:
          </h3>
          <ul className={`text-left space-y-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <li>• Check the URL for typos</li>
            <li>• Go back to the previous page</li>
            <li>• Visit the homepage</li>
            <li>• Contact me if you think this is an error</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;