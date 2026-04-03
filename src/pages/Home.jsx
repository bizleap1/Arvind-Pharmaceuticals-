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
      {/* ─── HERO SECTION ─── */}
      <section id="home">
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>
        
        {/* Floating ambient orbs */}
        <div style={{ position: 'absolute', top: '15%', right: '8%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)', pointerEvents: 'none', animation: 'floatOrb 8s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', left: '3%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(27,54,93,0.06) 0%, transparent 70%)', pointerEvents: 'none', animation: 'floatOrb 6s ease-in-out infinite reverse' }}></div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '60px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ flex: '1 1 500px', maxWidth: '650px' }}>
            
            {/* Animated eyebrow */}
            <div className="hero-eyebrow fade-in" style={{ cursor: 'default' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', animation: 'pulse 2s ease-in-out infinite' }}></span>
              Global Pharmaceutical Supplier &amp; Exporter
            </div>

            {/* Headline with animated underline on 'Quality' */}
            <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
              Trusted Partner in{' '}
              <em style={{ fontStyle: 'normal', position: 'relative', display: 'inline-block' }}>
                Quality
                <span style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, var(--secondary), var(--secondary-light))',
                  borderRadius: '4px', animation: 'slideInUnderline 1s ease forwards 0.8s',
                  transformOrigin: 'left', transform: 'scaleX(0)'
                }}></span>
              </em>{' '}
              Medicines Worldwide
            </h1>

            {/* Description with stagger */}
            <div className="fade-in" style={{ animationDelay: '0.2s', marginBottom: '32px' }}>
              <p style={{ fontSize: '16px', color: 'var(--primary)', fontWeight: '600', lineHeight: '1.7', padding: '14px 18px', background: 'rgba(13,148,136,0.06)', borderLeft: '3px solid var(--secondary)', borderRadius: '0 10px 10px 0' }}>
                Our strength lies in strong partnerships with certified manufacturing facilities across India, enabling us to deliver quality-assured medicines that meet international regulatory standards.
              </p>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/products" className="btn-primary hero-btn-primary">
                Explore Products
                <span style={{ display: 'inline-block', transition: 'transform 0.2s ease', marginLeft: '6px' }} className="hero-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn-outline hero-btn-outline">
                Partner With Us
              </Link>
            </div>

            {/* Interactive Stats */}
            <div className="hero-stats fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="hero-stat hero-stat-interactive">
                <div className="hero-stat-num" data-target="13">13<span>+</span></div>
                <div className="hero-stat-label">Therapeutic Areas</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat hero-stat-interactive">
                <div className="hero-stat-num" style={{ fontSize: 'clamp(20px, 4vw, 26px)' }}>WHO<span style={{ fontSize: '0.9em' }}>-GMP</span></div>
                <div className="hero-stat-label">Certified Partners</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat hero-stat-interactive">
                <div className="hero-stat-num" style={{ fontSize: 'clamp(20px, 4vw, 26px)' }}>Global<span style={{ display: 'block', fontSize: '0.5em', color: 'var(--secondary)', fontWeight: '700', letterSpacing: '0.05em' }}>Reach</span></div>
                <div className="hero-stat-label">Africa · Asia · CIS</div>
              </div>
            </div>
          </div>

          {/* Image with mouse tilt */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }} className="fade-in">
            <div
              id="hero-img-wrapper"
              style={{ position: 'relative', cursor: 'default' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const img = document.getElementById('hero-img');
                if (img) img.style.transform = `perspective(1200px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.02)`;
              }}
              onMouseLeave={() => {
                const img = document.getElementById('hero-img');
                if (img) img.style.transform = 'perspective(1500px) rotateY(-8deg) rotateX(4deg) scale(1)';
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', background: 'radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: 0 }}></div>
              <img
                id="hero-img"
                src="/assets/hero-pharmacy.png"
                alt="Global Pharmaceutical Excellence"
                style={{
                  position: 'relative', zIndex: 1,
                  width: '100%', maxWidth: '550px',
                  borderRadius: '32px',
                  boxShadow: '0 24px 64px rgba(27,54,93,0.18), 0 4px 16px rgba(13,148,136,0.12)',
                  transform: 'perspective(1500px) rotateY(-8deg) rotateX(4deg)',
                  transition: 'transform 0.15s ease'
                }}
              />
              {/* WHO-GMP floating card */}
              <div className="hero-float-badge" style={{ position: 'absolute', bottom: '-16px', left: '-16px', zIndex: 3, background: 'white', borderRadius: '18px', padding: '10px 20px', boxShadow: '0 8px 32px rgba(27,54,93,0.15)', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid var(--gray-200)', animation: 'floatBadge 4s ease-in-out infinite' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🛡️</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--primary)' }}>WHO-GMP</div>
                  <div style={{ fontSize: '10.5px', color: 'var(--gray-500)', fontWeight: '500' }}>Certified Supply</div>
                </div>
              </div>
              {/* CDSCO floating tag */}
              <div className="hero-float-badge" style={{ position: 'absolute', top: '-14px', right: '-14px', zIndex: 3, background: 'var(--secondary)', borderRadius: '100px', padding: '8px 18px', boxShadow: '0 4px 20px rgba(13,148,136,0.3)', animation: 'floatBadgeAlt 5s ease-in-out infinite' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'white' }}>✓ CDSCO Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRODUCTION SECTION ─── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', padding: '80px 5vw', overflow: 'hidden' }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--secondary), var(--secondary-light))' }}></div>
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 60%)', borderRadius: '50%' }}></div>
        
        <div className="fade-in" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', margin: '0 auto 32px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'white', lineHeight: '1.6', fontWeight: '600', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            At Arvind Pharmaceuticals, we are dedicated to supplying high-quality pharmaceutical products to international markets with reliability, transparency, and professionalism.
          </p>
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', fontWeight: '400' }}>
            We specialize in the global export of branded and generic medicines, supporting distributors, hospitals, pharmacies, and healthcare institutions with consistent supply and dependable service.
          </p>
        </div>
      </section>

      {/* ─── PROCESS SECTION: SUPPLYING HEALTHCARE ACROSS BORDERS ─── */}
      <section style={{ background: 'white' }}>
        <div className="section-eyebrow">Export Workflow</div>
        <h2 className="section-title">Supplying Healthcare Across Borders</h2>
        <p className="section-subtitle">From order confirmation to final delivery, we manage every step with precision, ensuring that quality formulations reach essential markets safely and affordably.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>01</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Careful Product Sourcing</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>We source strictly from WHO-GMP and ISO certified manufacturing facilities across India to ensure absolute safety and efficacy.</p>
           </div>
           
           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>02</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Strict Quality Verification</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Comprehensive quality documentation verification and support for regulatory compliance and product registration.</p>
           </div>

           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>03</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Compliant Procedures</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Execution of regulatory-compliant export procedures tailored to the specific requirements of international healthcare markets.</p>
           </div>

           <div className="fade-in" style={{ background: 'var(--gray-50)', padding: '40px', borderRadius: '24px', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px', color: 'var(--secondary)', fontWeight: '800', opacity: '0.5' }}>04</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>Timely Global Shipment</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Secure and timely international shipment to Africa, Asia, CIS, and other growing healthcare markets worldwide.</p>
           </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ARVIND PHARMACEUTICALS ─── */}
      <section id="why" style={{ background: 'var(--gray-50)' }}>
        <div className="section-eyebrow">Strategic Advantage</div>
        <h2 className="section-title">Why Partner With Arvind Pharmaceuticals?</h2>
        <p className="section-subtitle">We build long-term relationships based on trust, quality, and ethical business practices, delivering value across the supply chain.</p>
        
        <div className="why-grid">
          {[
            { icon: "📦", title: "Reliable & Consistent Supply", desc: "Uninterrupted availability of essential medicines through robust supply chain management." },
            { icon: "💊", title: "Wide Product Range", desc: "Comprehensive portfolio of pharmaceutical formulations across multiple therapeutic categories." },
            { icon: "📄", title: "Global Export Support", desc: "Complete export documentation and regulatory support for international trade compliance." },
            { icon: "💰", title: "Competitive Pricing", desc: "Sustainable and affordable pricing solutions without compromising on pharmaceutical standards." },
            { icon: "💬", title: "Expert Communication", desc: "Professional response and technical support for distributors and healthcare institutions." }
          ].map((item, idx) => (
            <div key={idx} className="why-card fade-in">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR COMMITMENT (New Section) ─── */}
      <section style={{ background: '#f8fafc', textAlign: 'center', padding: '100px 5vw', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '240px', color: 'rgba(13,148,136,0.04)', fontFamily: 'serif', lineHeight: 1, zIndex: 0, pointerEvents: 'none' }}>"</div>
        <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', color: 'var(--secondary)', fontWeight: '700', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '36px', borderBottom: '2px solid var(--secondary-light)', paddingBottom: '8px' }}>Our Commitment</div>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--primary)', lineHeight: '1.6', fontWeight: '500', fontStyle: 'italic' }}>
            "We believe medicines are not just products — they are <span style={{ color: 'var(--secondary)', fontWeight: '700', fontStyle: 'normal' }}>essential to saving and improving lives</span>. That is why we focus on building long-term relationships based on trust, quality, and ethical business practices."
          </h2>
          <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gray-300)' }}></div>
            <div style={{ fontSize: '15px', color: 'var(--gray-600)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Delivering Quality Healthcare Worldwide
            </div>
            <div style={{ width: '40px', height: '1px', background: 'var(--gray-300)' }}></div>
          </div>
        </div>
      </section>

      {/* ─── OUR CORE VALUES ─── */}
      <section id="values" style={{ background: 'var(--bg-soft)' }}>
        <div className="section-eyebrow">Excellence Driven</div>
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">Our values define how we operate and our commitment to global healthcare markets.</p>
        
        <div className="why-grid">
          <div className="why-card fade-in">
            <div className="why-icon">🏗️</div>
            <h3>Industry-Leading Expertise</h3>
            <p>Our experienced team combines pharmaceutical knowledge with international trade expertise consistently.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">🌐</div>
            <h3>Wide Range of Products</h3>
            <p>Comprehensive portfolio meeting diverse healthcare demands in international markets effectively.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">🛡️</div>
            <h3>Quality Assurance</h3>
            <p>Strict focus on quality and compliance, with every product sourced from compliant facilities.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">🤝</div>
            <h3>Affordable Solutions</h3>
            <p>Sourcing strength enables competitive pricing without compromising on safety or standards.</p>
          </div>
          <div className="why-card fade-in">
            <div className="why-icon">💡</div>
            <h3>Innovative Approach</h3>
            <p>Continuously improving sourcing strategies and processes to meet evolving global needs.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
