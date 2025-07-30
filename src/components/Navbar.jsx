import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;