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
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/responsibility" onClick={() => setMenuOpen(false)}>Responsibility</Link>
        <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </>
  );
};

export default Navbar;
