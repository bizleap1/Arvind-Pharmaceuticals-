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
    <div style={{ overflow: 'hidden' }}>
      {/* ─── ABOUT HERO SECTION ─── */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 5vw 80px', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        overflow: 'hidden'
      }}>
        {/* Background grids and patterns */}
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
          <div className="fade-in" style={{ flex: '1 1 500px', maxWidth: '650px' }}>
            <div className="hero-eyebrow" style={{ cursor: 'default' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', animation: 'pulse 2s infinite' }}></span>
              Corporate Overview
            </div>
            
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--primary)', fontWeight: '800', lineHeight: '1.1', marginBottom: '28px', letterSpacing: '-0.02em' }}>
              Committed to <em style={{ fontStyle: 'normal', color: 'var(--secondary)' }}>Quality.</em><br/>Focused on <em style={{ fontStyle: 'normal', position: 'relative', display: 'inline-block' }}>
                Global
                <span style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--secondary), var(--secondary-light))', borderRadius: '4px', animation: 'slideInUnderline 1s ease forwards 0.8s', transformOrigin: 'left', transform: 'scaleX(0)' }}></span>
              </em> Healthcare.
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '24px' }}>
              Arvind Pharmaceuticals is an India-based pharmaceutical supplier and exporter dedicated to delivering high-quality medicines to international markets. 
            </p>
            <p style={{ fontSize: '16px', color: 'var(--primary)', fontWeight: '600', lineHeight: '1.8', background: 'rgba(13,148,136,0.06)', padding: '16px 20px', borderRadius: '0 12px 12px 0', borderLeft: '3px solid var(--secondary)' }}>
              With a strong sourcing network and a deep understanding of global trade requirements, we support healthcare institutions with reliable and consistent supply.
            </p>
          </div>

          <div className="fade-in" style={{ flex: '1 1 400px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '5%', right: '10%', width: '100%', height: '100%', background: 'var(--gray-100)', borderRadius: '32px', transform: 'rotate(4deg)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '0%', left: '-5%', width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(13,148,136,0.1), transparent)', borderRadius: '32px', transform: 'rotate(-4deg)', zIndex: 0 }}></div>
            <img 
              src="/assets/portfolio_lab.png" 
              alt="Arvind Pharmaceuticals Labs" 
              style={{ 
                width: '100%', 
                maxWidth: '560px', 
                borderRadius: '32px', 
                boxShadow: '0 24px 64px rgba(27,54,93,0.15)',
                position: 'relative',
                zIndex: 2,
                border: '8px solid white'
              }} 
            />
            {/* Floating Trust Badge */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', zIndex: 3, background: 'white', padding: '16px 24px', borderRadius: '20px', boxShadow: '0 12px 32px rgba(27,54,93,0.15)', display: 'flex', alignItems: 'center', gap: '16px', animation: 'floatBadge 4s infinite ease-in-out' }}>
              <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: '800' }}>100%</div>
              <div>
                <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px', lineHeight: 1.2 }}>Quality Focus</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '12px', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Guaranteed Supply</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section style={{ background: 'white', padding: '120px 5vw' }}>
        <div className="about-layout">
          <div className="about-content fade-in" style={{ transition: 'var(--transition)' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--secondary)', marginBottom: '16px', fontWeight: '700' }}>Who We Are</h3>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--primary)', fontWeight: '800', lineHeight: 1.2, marginBottom: '24px' }}>Bridging Markets With Dependable Solutions</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '17px', lineHeight: '1.8', marginBottom: '24px' }}>
              We are a professionally managed pharmaceutical export company specializing in the international supply of branded and generic medicines. 
              By collaborating with certified manufacturing facilities across India, we ensure that every product supplied meets recognized quality and regulatory standards.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginTop: '32px' }}>
              <div style={{ paddingLeft: '20px', borderLeft: '3px solid var(--secondary)' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>100%</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>Quality Focus</div>
              </div>
              <div style={{ paddingLeft: '20px', borderLeft: '3px solid var(--secondary)' }}>
               <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>End-to-End</div>
               <div style={{ fontSize: '13px', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>Export Support</div>
              </div>
            </div>
          </div>
          
          {/* Interactive Image Block */}
          <div className="about-visual fade-in">
             <div className="about-img-block" style={{ minHeight: 'auto', padding: '56px', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} onMouseOver={e => {e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 32px 64px rgba(27,54,93,0.2)';}} onMouseOut={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)';}}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary) 0%, #162c4c 100%)', zIndex: -1 }}></div>
                <h4 style={{ color: 'var(--accent)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px', fontWeight: '800' }}>Our Promise</h4>
                <p className="about-img-quote" style={{ fontSize: '28px', lineHeight: 1.4, fontWeight: '700' }}>"Building Trust Through <em style={{ color: 'var(--secondary)' }}>Quality</em> and <em style={{ color: 'var(--secondary)' }}>Responsibility</em>."</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginTop: '32px', lineHeight: 1.8 }}>
                  At Arvind Pharmaceuticals, we understand that healthcare is a responsibility. That is why we remain committed to professional service, compliant exports, and dependable partnerships.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION (Interactive Cards) ─── */}
      <section style={{ background: 'var(--gray-50)', padding: '120px 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          <div className="why-card fade-in" style={{ padding: '56px 48px' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(13,148,136,0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '32px' }}>👁️</div>
            <h3 style={{ fontSize: '28px', color: 'var(--primary)', fontWeight: '800', marginBottom: '20px' }}>Our Vision</h3>
            <p style={{ color: 'var(--gray-600)', fontSize: '17px', lineHeight: '1.8' }}>
              To become a globally trusted pharmaceutical export partner known for reliability, integrity, and responsible healthcare supply across emerging and active markets.
            </p>
          </div>

          <div className="why-card fade-in" style={{ padding: '56px 48px' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '32px' }}>🎯</div>
            <h3 style={{ fontSize: '28px', color: 'var(--primary)', fontWeight: '800', marginBottom: '24px' }}>Our Mission</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                "Supply safe, effective medicines worldwide",
                "Maintain high standards of regulatory compliance",
                "Contribute to healthcare accessibility"
              ].map((item, id) => (
                <li key={id} style={{ display: 'flex', gap: '16px', marginBottom: '20px', fontSize: '16px', color: 'var(--gray-600)', alignItems: 'center' }}>
                   <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--gray-100)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>✓</div> 
                   {item}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* ─── MANAGEMENT TEAM ─── */}
      <section id="management" style={{ background: 'white', padding: '120px 5vw' }}>
        <div className="about-layout">
           <div className="about-visual fade-in">
              <div className="why-card" style={{ padding: '16px', border: 'none', background: 'transparent' }}>
                 <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(27,54,93,0.25)' }}>
                   <img
                     src="/assets/gaurav-nasare.jpg"
                     alt="Mr. Gaurav Nasare – Founder & Director, Arvind Pharmaceuticals"
                     style={{
                       width: '100%',
                       display: 'block',
                       borderRadius: '32px',
                       objectFit: 'cover',
                       aspectRatio: '4/5'
                     }}
                   />
                   <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,54,93,0.35) 0%, transparent 60%)', borderRadius: '32px', pointerEvents: 'none' }}></div>
                 </div>
              </div>
           </div>
           <div className="about-content fade-in">
              <div className="section-eyebrow">Leadership</div>
              <h2 className="section-title">Mr. Gaurav Nasare</h2>
              <h4 style={{ color: 'var(--secondary)', fontSize: '18px', marginBottom: '24px', fontWeight: '700' }}>Founder & Director</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                Mr. Gaurav Nasare leads Arvind Pharmaceuticals with a strong academic foundation, holding a Bachelor of Pharmacy (B.Pharm) and a Master of Pharmacy (M.Pharm).
              </p>
              <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                With deep knowledge of pharmaceutical formulations, regulatory standards, and international trade requirements, he leading the organization with a clear vision of delivering quality-assured medicines to global markets.
              </p>
              
              <div className="why-card" style={{ padding: '32px', borderLeft: '4px solid var(--secondary)', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)', borderRight: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
                 <p style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: '700', fontStyle: 'italic', lineHeight: '1.6' }}>
                   "Quality, Compliance, and Trust are the foundation of our growth."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section style={{ background: 'var(--primary)', color: 'white', padding: '120px 5vw' }}>
        <div className="section-eyebrow" style={{ color: 'var(--secondary)' }}>Strong Foundation</div>
        <h2 className="section-title" style={{ color: 'white', marginBottom: '64px' }}>Our Core Values</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {[
            { icon: "⚖️", title: "Integrity", desc: "We operate with honesty, transparency, and ethical business practices in all our global dealings." },
            { icon: "⭐", title: "Quality", desc: "We prioritize product quality and strict regulatory compliance in every shipment we handle." },
            { icon: "🤝", title: "Reliability", desc: "We ensure consistent supply and timely delivery to global markets, standing by our word." },
            { icon: "🌱", title: "Partnership", desc: "We believe in long-term collaboration with our clients to generate mutual growth and value." }
          ].map((val, idx) => (
            <div key={idx} className="fade-in" style={{ 
              background: 'rgba(255,255,255,0.03)', 
              padding: '48px 40px', 
              borderRadius: '24px', 
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'var(--transition)',
              cursor: 'default'
            }}
             onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
             onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
               <div style={{ fontSize: '32px', marginBottom: '24px' }}>{val.icon}</div>
               <h4 style={{ fontSize: '22px', color: 'white', marginBottom: '16px', fontWeight: '800' }}>{val.title}</h4>
               <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LEADERSHIP APPROACH ─── */}
      <section style={{ background: 'var(--gray-50)', padding: '120px 5vw' }}>
         <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Management Execution</div>
         <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '64px' }}>Leadership Approach</h2>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: "Responsible Sourcing", desc: "Sourcing only from manufacturers who have valid certifications and meet strict benchmarks." },
              { title: "Compliant Procedures", desc: "Ensuring every export step adheres strictly to international pharmaceutical trade laws." },
              { title: "Transparent Practices", desc: "Building trust through clear communication and ethical business models." },
              { title: "Reliable Supply", desc: "Creating a supply chain that international healthcare sectors can depend on 24/7." }
            ].map((item, i) => (
              <div key={i} className="why-card fade-in" style={{ padding: '40px 32px' }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'white', fontWeight: '800', fontSize: '18px' }}>0{i + 1}</div>
                 <h4 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '12px', fontWeight: '800' }}>{item.title}</h4>
                 <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default About;
