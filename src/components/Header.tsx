import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DaveImg from '/dave.jpeg'; // Adjust the path if needed

const Header: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={DaveImg}
              alt="David Spirito"
              className="w-20 h-20 rounded-full object-cover border-2 border-indigo-custom"
            />
          </Link>
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            David Spirito's Portfolio
          </Link>
        </div>
        <nav className="hidden lg:block"> {/* Hide on small screens, show on large */}
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors hover:text-indigo-custom
                  after:content-[''] after:block after:h-0.5 after:bg-indigo-custom after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors hover:text-indigo-custom
                  after:content-[''] after:block after:h-0.5 after:bg-indigo-custom after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors hover:text-indigo-custom
                  after:content-[''] after:block after:h-0.5 after:bg-indigo-custom after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors hover:text-indigo-custom
                  after:content-[''] after:block after:h-0.5 after:bg-indigo-custom after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Hamburger menu button for small screens */}
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Toggle mobile menu">
            {isMenuOpen ? (
              // Close icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10zM19.07 4.93l-.71.71" />
              </svg>
            ) : (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
          <Link
            to="/contact"
            className="ml-4 inline-block rounded-md bg-indigo-custom px-5 py-2 text-white font-semibold shadow hover:bg-indigo-custom transition lg:block hidden"
          >
            Let’s Connect
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-8">
          <ul className="flex flex-col items-center space-y-8">
            <li><Link to="/" className="text-3xl text-gray-900 dark:text-white" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="text-3xl text-gray-900 dark:text-white" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/projects" className="text-3xl text-gray-900 dark:text-white" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/contact" className="text-3xl text-gray-900 dark:text-white" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-indigo-custom px-5 py-2 text-white font-semibold shadow hover:bg-indigo-custom transition text-xl"
            onClick={toggleMenu}
          >
            Let’s Connect
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;