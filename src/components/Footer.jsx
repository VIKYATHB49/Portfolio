import React from 'react';
import '../assets/styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sama Vikyath Reddy. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/VIKYATHB49" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/vikyath49" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/sama_vikyath" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
