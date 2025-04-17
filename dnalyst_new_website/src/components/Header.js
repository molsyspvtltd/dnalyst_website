import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/dnalyst-nobg.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  const linkClass = (isActive) =>
    `relative text-sm uppercase font-semibold transition-colors ${
      isActive ? 'text-burnt' : 'text-gray-700'
    } hover:text-burnt`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo links to Home */}
        <NavLink to="/">
          <img src={logo} alt="Elegant Brand Logo" className="h-20 w-auto" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
            >
              <span className="relative group">
                {name}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-burnt transition-all duration-300 group-hover:w-full"></span>
              </span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-burnt"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-inner"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) => linkClass(isActive) + ' block'}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative group">
                    {name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-burnt transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
