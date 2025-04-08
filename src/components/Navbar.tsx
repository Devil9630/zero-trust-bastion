
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-dark/95 backdrop-blur-lg py-3 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="/logo.png" 
              alt="Zero Trust Bastion Logo" 
              className="h-10 w-auto"
            />
            <div className="ml-1">
              <span className="text-xl md:text-2xl font-bold text-cyber-teal tracking-wider">
                ZERO TRUST
              </span>
              <span className="text-xl md:text-2xl font-bold text-white ml-1">
                BASTION
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-cyber-teal font-medium'
                    : 'text-gray-300 hover:text-cyber-teal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="cyber-button-teal"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-cyber-teal" />
              ) : (
                <Menu className="h-6 w-6 text-cyber-teal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        } bg-cyber-darker z-40 pt-24`}
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(0, 255, 213, 0.05) 0%, rgba(0, 168, 255, 0.05) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'none\' stroke=\'rgba(0, 255, 213, 0.15)\' stroke-width=\'1\' d=\'M10,10 L90,10 M10,25 L90,25 M10,40 L90,40 M10,55 L90,55 M10,70 L90,70 M10,85 L90,85 M25,10 L25,90 M40,10 L40,90 M55,10 L55,90 M70,10 L70,90 M85,10 L85,90\'/%3E%3C/svg%3E")' 
        }}
      >
        <div className="flex flex-col space-y-6 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base py-2 border-b border-cyber-dark ${
                isActive(item.path)
                  ? 'text-cyber-teal font-medium'
                  : 'text-gray-300'
              }`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="cyber-button-teal text-center"
            onClick={toggleMenu}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
