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
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-white/90 hover:text-white transition-colors">
              PK
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
              
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                <Link
                  href={item.section ? `/#${item.section}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                >
                {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.section ? `/#${item.section}` : item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block py-2 text-gray-400 hover:text-white transition-colors"
                
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
