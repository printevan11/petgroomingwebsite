import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import fureverLogo from '../assets/furever-logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutus' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' }
  ];

  // Get current path
  const currentPath = location.pathname;

  return (
    <nav className="w-full bg-[#f4f7fc] text-slate-800 shadow-lg border-b border-slate-200/40">
      <div className="w-full max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo - Left aligned */}
        <Link to="/" className="select-none flex items-center gap-3">
          <img src={fureverLogo} alt="Furever" className="w-30 h-auto" />

          {/* Brand Text */}
          <div className="leading-none">
            <span className="text-base font-black tracking-wider text-[#75abd2] font-serif uppercase -mt-1 block">
            </span>
            <span className="text-[5px] font-bold tracking-[0.18em] text-slate-400 uppercase mt-0.5 block">
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-11">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[15px] font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-[#3b92b3] text-white px-5 py-2 rounded-lg'
                    : 'text-[#111111] hover:text-[#3b92b3]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-[#333d42] hover:bg-[#252c2f] text-white px-7 py-2.5 text-[14px] font-bold tracking-wide rounded-[3px] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-800 hover:text-[#3b92b3] focus:outline-none transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#f4f7fc] px-8 pb-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-bold transition-all duration-150 text-left ${
                    isActive
                      ? 'bg-[#3b92b3] text-white px-5 py-2 rounded-lg'
                      : 'text-[#111111] py-2 hover:text-[#3b92b3]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link to="/contact" className="bg-[#333d42] hover:bg-[#252c2f] text-white px-7 py-3 text-[14px] font-bold tracking-wide rounded-[3px] transition-colors mt-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

