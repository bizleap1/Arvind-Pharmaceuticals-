import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo ap.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '8px' }}>
            <img src={logo} alt="Arvind Pharmaceuticals" style={{ height: '64px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
          </Link>
          <p>Delivering high-quality pharmaceutical formulations and essential medical supplies to global markets with responsibility and integrity.</p>
        </div>
        
        <div className="footer-col">
          <h5>Company</h5>
          <Link to="/about">About Us</Link>
          <Link to="/responsibility">Corporate Responsibility</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-col">
          <h5>Portfolio</h5>
          <Link to="/products">Specialty Medicines</Link>
          <Link to="/products">Generic Formulations</Link>
          <Link to="/products">Injectables</Link>
          <Link to="/products">Surgical Supplies</Link>
          <Link to="/products">Herbal & Nutraceuticals</Link>
        </div>
        
        <div className="footer-col">
          <h5>Contact</h5>
          <a href="mailto:export@arvindpharmaceuticals.com">export@arvindpharmaceuticals.com</a>
          <a href="tel:+91XXXXXXXXXX">+91 XX XXXX XXXX</a>
          <div style={{ fontSize: '14px', marginTop: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
            Pune, Maharashtra<br/>
            India - 411001
          </div>
        </div>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Arvind Pharmaceuticals. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
