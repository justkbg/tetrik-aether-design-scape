
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-tetrik-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block text-2xl font-display font-bold text-white">
              <span className="text-tetrik-accent">TET</span>RIK
            </Link>
            <p className="text-sm text-tetrik-silver max-w-xs">
              We transform spaces into extraordinary experiences, 
              combining innovative design with functional excellence.
            </p>
            <div className="pt-2 flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-tetrik-silver hover:text-tetrik-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-tetrik-silver hover:text-tetrik-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.125 1.196 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-tetrik-silver hover:text-tetrik-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Urban Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  3D Visualization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Sustainability Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium text-white">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-tetrik-silver">
                123 Design Avenue<br />
                New York, NY 10001
              </p>
              <p className="text-sm text-tetrik-silver mt-2">
                <a href="tel:+12125551234" className="hover:text-tetrik-accent transition-colors">
                  +1 (212) 555-1234
                </a>
              </p>
              <p className="text-sm text-tetrik-silver">
                <a href="mailto:info@tetrikdesign.com" className="hover:text-tetrik-accent transition-colors">
                  info@tetrikdesign.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-tetrik-gray flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-tetrik-silver">
            &copy; {currentYear} Tetrik Architecture & Design. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-xs text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-xs text-tetrik-silver hover:text-tetrik-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
