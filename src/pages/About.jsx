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
      <section id="about" style={{ minHeight: 'calc(100vh - 72px)', paddingTop: '120px' }}>
        <div className="about-layout">
          <div className="about-content">
            <div className="section-eyebrow">Corporate Overview</div>
            <h2 className="section-title">Committed to Quality. Focused on Global Healthcare.</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '18px', lineHeight: '1.8', marginBottom: '28px' }}>
              Established in Pune, India, Arvind Pharmaceuticals is a premier pharmaceutical supply and export powerhouse dedicated to fulfilling dynamic international healthcare demands. We bridge the gap between world-class Indian pharmaceutical manufacturing and global healthcare institutions.
            </p>
            <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.75', marginBottom: '40px' }}>
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
                <div className="mgmt-bio">"Quality, Compliance, and Trust are the foundation of our growth. In an industry where patient safety is paramount, we ensure our global partners never have to second-guess the integrity of their supply." With profound expertise in pharmacology and international commerce, Gaurav spearheads Arvind Pharmaceuticals' global expansion.</div>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', position: 'relative', zIndex: 1, marginTop: '32px' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'white', fontWeight: 800 }}>100%</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>GMP Compliant</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--accent)', fontWeight: 800 }}>500+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>SKUs Exported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEW: GLOBAL NETWORK SECTION ─── */}
      <section style={{ background: 'var(--bg-soft)', padding: '100px 5vw' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Reach</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>Global Operational Network</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
           <div className="fade-in why-card" style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>African Continent</h3>
             <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Serving Francophone and Anglophone Africa with essential generic medicines, anti-malarials, and maternal healthcare commodities.</p>
           </div>
           <div className="fade-in why-card" style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>CIS Nations</h3>
             <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Providing highly regulated clinical formulations and specialized chronicle-care treatments tailored for Eastern European and Central Asian markets.</p>
           </div>
           <div className="fade-in why-card" style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>Latin America & APAC</h3>
             <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Expanding footprints into dynamic markets offering full registration dossier support in multiple languages and precise supply chain execution.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
