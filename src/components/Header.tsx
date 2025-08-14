import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Apple } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Apple className="h-8 w-8" />
            <h1 className="ml-2 text-lg font-medium">
              Apple Pay Support
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="text-sm hover:text-blue-600 transition-colors">
                <Link to="/apple-cash-support">Apple Cash</Link>
              </li>
              <li className="text-sm hover:text-blue-600 transition-colors">
                <Link to="/apple-card-support">Apple Card</Link>
              </li>
              <li className="text-sm hover:text-blue-600 transition-colors">
                <Link to="/apple-wallet-support">Apple Wallet</Link>
              </li>
              <li className="text-sm hover:text-blue-600 transition-colors">
                <a href="#phone-support">Phone Support</a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-blue-600 transition-colors">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;