import { useState } from 'react';
import { FaBars, FaTimes, FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Hello!', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'ToolKit', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#education' },
    { name: 'Wins', href: '#little-wins' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-sage-main/75 backdrop-blur-md border-b border-sage-dark/20 text-text-dark">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-200">
          <FaLeaf className="text-sage-dark animate-float-gentle text-lg md:text-xl" />
          <span>dewmi.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-bold border border-transparent hover:border-sage-dark/10 hover:bg-cream/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-text-dark text-cream hover:bg-sage-dark hover:text-white-soft rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full hover:bg-cream/40 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-sage-main border-b border-sage-dark/20 flex flex-col px-6 pb-6 pt-2 gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl font-bold text-center border border-sage-dark/10 hover:bg-cream/80 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3.5 bg-text-dark text-cream hover:bg-sage-dark hover:text-white-soft rounded-full font-bold shadow-md transform active:scale-95 transition-all duration-200 mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
