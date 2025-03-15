import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rustic Rays. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/rusticrays.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/rusticrays.in/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
