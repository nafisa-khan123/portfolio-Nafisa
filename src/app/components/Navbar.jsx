'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors">
            Nafisa Khan
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-all duration-300 relative group pb-1 ${
                isActive('/') 
                  ? 'text-blue-400' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Home
              <span className={`absolute -bottom-0 left-1/2 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 transition-all duration-500 ease-out rounded-full blur-[1px] opacity-80 ${
                isActive('/') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
              <span className={`absolute -bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out rounded-full ${
                isActive('/') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-lg font-medium transition-all duration-300 relative group pb-1 ${
                isActive('/about') 
                  ? 'text-blue-400' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              About
              <span className={`absolute -bottom-0 left-1/2 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 transition-all duration-500 ease-out rounded-full blur-[1px] opacity-80 ${
                isActive('/about') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
              <span className={`absolute -bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out rounded-full ${
                isActive('/about') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg font-medium transition-all duration-300 relative group pb-1 ${
                isActive('/contact') 
                  ? 'text-blue-400' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
              <span className={`absolute -bottom-0 left-1/2 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 transition-all duration-500 ease-out rounded-full blur-[1px] opacity-80 ${
                isActive('/contact') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
              <span className={`absolute -bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out rounded-full ${
                isActive('/contact') ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
              }`}></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-lg">
              <Link 
                href="/" 
                className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-400 bg-white/10' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-blue-400 bg-white/10' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-blue-400 bg-white/10' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}