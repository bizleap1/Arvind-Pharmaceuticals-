import React, { useEffect } from 'react';

const About = () => {
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
    <div style={{ paddingBottom: '80px' }}>
      <section id="about" style={{ minHeight: 'calc(100vh - 68px)', paddingTop: '100px' }}>
        <div className="about-layout">
          <div className="about-content">
            <div className="section-eyebrow">Corporate Overview</div>
            <h2 className="section-title">Committed to Quality.<br/>Focused on Global Healthcare.</h2>
            <p style={{ color: 'var(--gray-500)', lineHeight: '1.75', marginBottom: '24px' }}>
              Established in Pune, India, Arvind Pharmaceuticals is a premier pharmaceutical supply and export powerhouse dedicated to fulfilling dynamic international healthcare demands. We bridge the gap between world-class Indian pharmaceutical manufacturing and global healthcare institutions.
            </p>
            <p style={{ color: 'var(--gray-500)', lineHeight: '1.75', marginBottom: '32px' }}>
              Our operational ecosystem is built on a foundation of absolute transparency, stringent regulatory adherence, and strategic logistics. From sourcing high-efficacy generic molecules to handling complex cold-chain shipments, our architecture is built to support Ministries of Health, large-scale distributors, and hospital networks.
            </p>
            <ul className="about-values">
              <li className="about-value fade-in">
                <span className="about-value-icon">🤝</span>
                <div>
                  <h4>Our Vision</h4>
                  <p>To redefine reliability in the global pharmaceutical supply chain by ensuring that life-saving medications reach emerging and established markets without friction, delays, or compromise in quality.</p>
                </div>
              </li>
              <li className="about-value fade-in">
                <span className="about-value-icon">🎯</span>
                <div>
                  <h4>Our Mission</h4>
                  <p>To supply safe, efficacious, and affordable pharmaceutical formulations worldwide through enduring partnerships with WHO-GMP certified manufacturers and uncompromising compliance with international trade protocols.</p>
                </div>
              </li>
            </ul>
            <div className="management-card fade-in">
              <div className="mgmt-avatar">GN</div>
              <div className="mgmt-info">
                <h4>Mr. Gaurav Nasare</h4>
                <p>Founder & Director — B.Pharm, M.Pharm</p>
                <p className="mgmt-bio">"Quality, Compliance, and Trust are the foundation of our growth. In an industry where patient safety is paramount, we ensure our global partners never have to second-guess the integrity of their supply." With profound expertise in pharmacology and international commerce, Gaurav spearheads Arvind Pharmaceuticals' global expansion.</p>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-img-block">
              <div className="about-badge">Est. in Pune, India</div>
              <div>
                <p className="about-img-quote">"Delivering <em>Quality Healthcare</em> Worldwide — With Responsibility and unwavering Integrity."</p>
                <p className="about-img-attribution">— The Core Philosophy</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', position: 'relative', zIndex: 1, marginTop: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '26px', color: 'white', fontWeight: 700 }}>100%</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>GMP Compliant</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '26px', color: '#f0c96e', fontWeight: 700 }}>500+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>SKUs Exported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEW: GLOBAL NETWORK SECTION ─── */}
      <section style={{ background: 'var(--off-white)', padding: '80px 5vw' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Reach</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Global Operational Network</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
           <div className="fade-in" style={{ flex: '1 1 250px', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', textAlign: 'center' }}>
             <h3 style={{ fontSize: '18px', color: 'var(--teal)', marginBottom: '12px' }}>African Continent</h3>
             <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Serving Francophone and Anglophone Africa with essential generic medicines, anti-malarials, and maternal healthcare commodities.</p>
           </div>
           <div className="fade-in" style={{ flex: '1 1 250px', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', textAlign: 'center' }}>
             <h3 style={{ fontSize: '18px', color: 'var(--teal)', marginBottom: '12px' }}>CIS Nations</h3>
             <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Providing highly regulated clinical formulations and specialized chronical-care treatments tailored for Eastern European and Central Asian markets.</p>
           </div>
           <div className="fade-in" style={{ flex: '1 1 250px', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', textAlign: 'center' }}>
             <h3 style={{ fontSize: '18px', color: 'var(--teal)', marginBottom: '12px' }}>Latin America & APAC</h3>
             <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Expanding footprints into dynamic markets offering full registration dossier support in multiple languages and precise supply chain execution.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
