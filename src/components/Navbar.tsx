import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Satya Kanukollu</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#home" onClick={handleClick}>Home</NavLink>
            <NavLink href="#about" onClick={handleClick}>About</NavLink>
            <NavLink href="#experience" onClick={handleClick}>Experience</NavLink>
            <NavLink href="#skills" onClick={handleClick}>Skills</NavLink>
            <NavLink href="#education" onClick={handleClick}>Education</NavLink>
            <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}