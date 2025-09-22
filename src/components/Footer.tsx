import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t mt-12">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Dave Spirito. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://github.com/dspirito" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
          Dave's GitHub
        </a>
        <a href="mailto:dspirito@gmail.com" className="text-gray-400 hover:text-indigo-600">
          Email Dave
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;