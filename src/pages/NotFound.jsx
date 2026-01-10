import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 font-primary py-20">
      <FaExclamationTriangle className="text-6xl text-yellow-500 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Oops! The page you are looking for keeps this secret. It might have been removed or you may have mistyped the link.
      </p>
      <Link 
        to="/" 
        className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
