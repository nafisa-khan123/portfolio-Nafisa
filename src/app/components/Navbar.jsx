'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nafisa khan
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/about') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-200 font-medium ${
                isActive('/contact') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link 
                href="/" 
                className={`block px-3 py-2 transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-purple-600 bg-purple-50 rounded-md' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-purple-600 bg-purple-50 rounded-md' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-2 transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-purple-600 bg-purple-50 rounded-md' 
                    : 'text-gray-700 hover:text-purple-600'
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