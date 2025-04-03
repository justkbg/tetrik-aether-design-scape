
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Users, Layers, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-1" /> },
    { title: 'About', path: '/about', icon: <Users className="w-4 h-4 mr-1" /> },
    { title: 'Portfolio', path: '/portfolio', icon: <Layers className="w-4 h-4 mr-1" /> },
    { title: 'Contact', path: '/contact', icon: <MessageCircle className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-tetrik-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-display font-bold text-white">
            <span className="text-tetrik-accent">TET</span>RIK
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'group relative flex items-center text-sm font-medium transition-colors duration-300',
                  isActive ? 'text-tetrik-accent' : 'text-white hover:text-tetrik-accent'
                )
              }
            >
              <span className="flex items-center">
                {link.icon}
                {link.title}
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-tetrik-accent transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-tetrik-accent transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-tetrik-black pt-20 z-40 flex flex-col md:hidden">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center text-lg font-medium py-2 border-b border-tetrik-gray',
                      isActive ? 'text-tetrik-accent' : 'text-white'
                    )
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mr-3">{link.icon}</div>
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
