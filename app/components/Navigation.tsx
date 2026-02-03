'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/#about', section: 'about' },
    { name: 'Skills', href: '/#skills', section: 'skills' },
    { name: 'Projects', href: '/projects', section: null },
    { name: 'Achievements', href: '/achievements', section: null },
    { name: 'Contact', href: '/#contact', section: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.section && pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Remove hash from URL without adding to history
        window.history.replaceState(null, '', '/');
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', '/');
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Link 
              href="/" 
              className="text-white font-bold text-xl hover:text-blue-400 transition-all relative"
              aria-label="Go to homepage"
            >
              <span className="animate-gradient-shift gradient-text">PK</span>
            </Link>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded blur opacity-0 group-hover:opacity-100 transition duration-300 -z-10"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-400 hover:text-blue-400 transition-all relative group"
              >
                <Link
                  href={item.section ? `/#${item.section}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-label={`Navigate to ${item.name}`}
                  className="relative"
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all" 
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Glow effect */}
                  <motion.span
                    className="absolute -inset-2 rounded opacity-0 group-hover:opacity-20 blur"
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  href={item.section ? `/#${item.section}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block py-2 px-4 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-all"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
