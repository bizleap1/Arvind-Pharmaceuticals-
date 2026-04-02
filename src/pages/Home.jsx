import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── ENHANCED HERO SECTION ─── */}
      <section id="home">
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '60px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ flex: '1 1 500px', maxWidth: '650px' }}>
            <div className="hero-eyebrow fade-in">India-Based Global Pharmaceutical Exporter</div>
            <h1 className="hero-title fade-in">Delivering <em>Quality</em> Healthcare Worldwide</h1>
            <p className="hero-desc fade-in">Trusted partner for distributors, hospitals, pharmacies, and healthcare institutions across Africa, Asia, CIS, and beyond. We combine advanced pharmaceutical formulations with robust regulatory compliance and international logistics.</p>
            
            <div className="hero-actions fade-in">
              <Link to="/products" className="btn-primary">Explore Products →</Link>
              <Link to="/contact" className="btn-outline">Partner With Us</Link>
            </div>
            
            <div className="hero-stats fade-in">
              <div className="hero-stat">
                <div className="hero-stat-num">13<span>+</span></div>
                <div className="hero-stat-label">Therapeutic Areas</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">4<span>+</span></div>
                <div className="hero-stat-label">Global Regions Served</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">WHO<span>-GMP</span></div>
                <div className="hero-stat-label">Certified Partners</div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }} className="fade-in">
             <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', background: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: 0 }}></div>
                <img 
                  src="/assets/hero-pharmacy.png" 
                  alt="Global Pharmaceutical Excellence" 
                  style={{ 
                    position: 'relative',
                    zIndex: 1,
                    width: '100%', 
                    maxWidth: '550px', 
                    borderRadius: '32px', 
                    boxShadow: 'var(--shadow-lg)',
                    transform: 'perspective(1500px) rotateY(-8deg) rotateX(4deg)',
                    transition: 'var(--transition)'
                  }} 
                />
             </div>
          </div>
        </div>
      </section>

      {/* ─── NEW: INFORMATIVE PROCESS SECTION ─── */}
      <section style={{ background: 'white' }}>
        <div className="section-eyebrow">Our Capability</div>
        <h2 className="section-title">Seamless Global Supply Chain</h2>
        <p className="section-subtitle">We manage the entire pharmaceutical export process, ensuring that quality formulations reach essential markets safely, affordably, and in full compliance with local regulations.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>01</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Verified Sourcing</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>We source strictly from WHO-GMP and ISO certified Indian manufacturing facilities to ensure absolute product safety and efficacy.</p>
           </div>
           
           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>02</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Regulatory Support</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Our dedicated team provides complete documentation (Dossiers in CTD/ACTD formats, COPP, FSC) to simplify country-specific registrations.</p>
           </div>

           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>03</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Logistics & Delivery</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>We coordinate secure international freight, handling temperature-sensitive cargo and adhering precisely to GDP (Good Distribution Practices).</p>
           </div>
        </div>
      </section>

      {/* ─── EXISTING: WHY CHOOSE US ─── */}
      <section id="why">
        <div className="section-eyebrow">Why Choose Us</div>
        <h2 className="section-title">Excellence That Drives<br/>Our Commitment</h2>
        <p className="section-subtitle">We combine pharmaceutical expertise with international trade capability to deliver dependable supply solutions across global markets.</p>
        <div className="why-grid">
          <div className="why-card fade-in">
            <div className="why-icon">🏭</div>
            <h3>Industry-Leading Expertise</h3>
            <p>Our experienced team combines pharmaceutical knowledge with international trade expertise to deliver professional supply solutions.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">💊</div>
            <h3>Wide Range of Products</h3>
            <p>Comprehensive portfolio of pharmaceutical formulations across multiple therapeutic categories to meet diverse healthcare demands.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">✅</div>
            <h3>Quality Assurance</h3>
            <p>Every product is supported by verified documentation and sourced from compliant manufacturing facilities ensuring reliability and safety.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">💰</div>
            <h3>Affordable Solutions</h3>
            <p>Our sourcing strength enables competitive pricing without compromising standards, supporting accessible healthcare worldwide.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">📋</div>
            <h3>Full Export Documentation</h3>
            <p>Complete documentation support for regulatory compliance, including COPP, FSC, and country-specific registration dossiers.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">🌍</div>
            <h3>Global Reach</h3>
            <p>Proudly serving clients across Africa, Asia, CIS, and other growing healthcare markets with timely international shipment.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
