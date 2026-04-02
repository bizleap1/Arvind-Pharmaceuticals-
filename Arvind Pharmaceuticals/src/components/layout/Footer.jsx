import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="nav-logo-mark" style={{ width: '32px', height: '32px', fontSize: '15px' }}>A</div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Arvind Pharmaceuticals</span>
              <span className="nav-brand-sub" style={{ fontSize: '9px' }}>Global Supplier & Exporter</span>
            </div>
          </div>
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
        </div>
        
        <div className="footer-col" style={{gridColumn: 'span 1'}}>
          <h5>Contact</h5>
          <a href="mailto:export@arvindpharmaceuticals.com">export@arvindpharmaceuticals.com</a>
          <a href="tel:+91XXXXXXXXXX">+91 XX XXXX XXXX</a>
          <p style={{ fontSize: '13px', marginTop: '10px', lineHeight: '1.6' }}>
            Pune, Maharashtra<br/>
            India - 411001
          </p>
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
