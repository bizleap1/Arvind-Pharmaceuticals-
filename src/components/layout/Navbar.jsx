import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="navbar">
        <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <div className="nav-logo-mark">A</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Arvind Pharmaceuticals</span>
            <span className="nav-brand-sub">Global Supplier & Exporter</span>
          </div>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
          <NavLink to="/responsibility" className={({ isActive }) => (isActive ? 'active' : '')}>Responsibility</NavLink>
          <NavLink to="/certifications" className={({ isActive }) => (isActive ? 'active' : '')}>Certifications</NavLink>
          <NavLink to="/contact" className="nav-cta">Contact Us</NavLink>
        </div>
        <button 
          className={`nav-hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu" onClick={() => setMenuOpen(false)}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="nav-logo-mark">A</div>
            <div className="nav-brand-text" style={{ textAlign: 'left' }}>
              <span className="nav-brand-name">Arvind Pharmaceuticals</span>
              <span className="nav-brand-sub">Global Excellence</span>
            </div>
          </div>
          <div className="mobile-menu-links">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
            <NavLink to="/responsibility" onClick={() => setMenuOpen(false)}>Responsibility</NavLink>
            <NavLink to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</NavLink>
            <NavLink to="/contact" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
