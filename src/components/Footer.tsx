
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark pt-16 pb-8 border-t border-cyber-blue/20 relative overflow-hidden">
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info with new logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Zero Trust Bastion Logo" 
                className="h-12 w-auto"
              />
              <div className="ml-1">
                <span className="text-xl font-bold text-cyber-teal tracking-wide">
                  ZERO TRUST
                </span>
                <span className="block text-xl font-bold text-white">BASTION</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Minds, Securing Futures.
              Professional cybersecurity services led by experts.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="text-gray-400 hover:text-cyber-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-cyber-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-cyber-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-cyber-teal transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 border-b border-cyber-teal/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Training Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 border-b border-cyber-teal/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  VAPT Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Dark Web Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  SOC Setup
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyber-teal transition-colors">
                  Red/Blue Teaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6 border-b border-cyber-teal/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyber-teal mt-0.5" />
                <span className="text-gray-300">
                  123 Cyber Street, Security Building, Tech City, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyber-teal" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyber-teal" />
                <span className="text-gray-300">contact@zerotrustbastion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-teal/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Zero Trust Bastion Logo" 
              className="h-8 w-auto mr-2"
            />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zero Trust Bastion. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-cyber-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-cyber-teal transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-400 text-sm hover:text-cyber-teal transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
