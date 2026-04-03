import React, { useEffect } from 'react';

const Responsibility = () => {
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
      {/* ─── ENHANCED HERO ─── */}
      <section className="responsibility-hero-section" style={{ 
        position: 'relative', 
        padding: '100px 5vw 60px', 
        background: 'linear-gradient(135deg, white 0%, var(--gray-50) 100%)',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        {/* Animated Orbs & Grid */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 60%)', opacity: 0.08, filter: 'blur(60px)', borderRadius: '50%', animation: 'floatBadgeAlt 8s infinite ease-in-out' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--secondary-light) 0%, transparent 70%)', opacity: 0.06, filter: 'blur(80px)', borderRadius: '50%', animation: 'floatBadge 10s infinite ease-in-out' }}></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>

        <div className="fade-in" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', textAlign: 'left' }}>
          <div className="hero-eyebrow" style={{ cursor: 'default', margin: '0 0 24px', display: 'inline-flex' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', animation: 'pulse 2s infinite' }}></span>
            Corporate Social Responsibility
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--primary)', marginBottom: '24px', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Ethical Conduct &{' '}
            <span style={{ color: 'var(--secondary)', position: 'relative', display: 'inline-block' }}>
              Social Responsibility.
              <span style={{ position: 'absolute', bottom: '4px', left: 0, right: 0, height: '6px', background: 'var(--secondary)', opacity: 0.15, borderRadius: '4px' }}></span>
            </span>
          </h1>
          
          <p style={{ fontSize: '18px', color: 'var(--gray-600)', lineHeight: '1.8', maxWidth: '800px', margin: '0', fontWeight: '400' }}>
            At Arvind Pharmaceuticals, we recognize that healthcare carries a profound social responsibility. Medicines play a vital role in protecting lives, and we are committed to safe, ethical, and responsible business practices.
          </p>
        </div>

        {/* Floating engaging interactive elements */}
        <div className="hero-floating-badge" style={{ position: 'absolute', top: '20%', right: '8%', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.2)', animation: 'floatBadge 6s infinite ease-in-out', zIndex: 2, display: 'flex', alignItems: 'center', gap: '14px' }}>
           <div style={{ fontSize: '26px' }}>🌍</div>
           <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px' }}>Global Impact</div>
        </div>
        <div className="hero-floating-badge" style={{ position: 'absolute', bottom: '15%', right: '18%', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(27,54,93,0.12)', border: '1px solid rgba(27,54,93,0.15)', animation: 'floatBadgeAlt 7s infinite ease-in-out', zIndex: 2, display: 'flex', alignItems: 'center', gap: '14px' }}>
           <div style={{ fontSize: '26px' }}>🛡️</div>
           <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px' }}>True Integrity</div>
        </div>
      </section>

      {/* ─── HEALTHCARE ACCESS ─── */}
      <section style={{ background: 'white', padding: '100px 5vw' }}>
         <div className="about-layout">
            <div className="about-content fade-in">
               <div className="section-eyebrow">Global Reach</div>
               <h2 className="section-title">Commitment to Healthcare Access</h2>
               <p style={{ color: 'var(--gray-600)', fontSize: '17px', lineHeight: '1.8', marginBottom: '24px' }}>
                 We support the availability of quality pharmaceutical products in regions where reliable healthcare supply is essential. 
                 By maintaining disciplined sourcing standards and proper documentation practices, we contribute to strengthening healthcare accessibility across borders.
               </p>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '40px' }}>
                  <div className="why-card" style={{ padding: '24px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
                     <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', boxShadow: 'var(--shadow-sm)' }}>🌍</div>
                     <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '18px', fontWeight: '800' }}>Global Impact</h4>
                     <p style={{ fontSize: '14.5px', color: 'var(--gray-600)' }}>Reaching emerging markets with essential formulations.</p>
                  </div>
                  <div className="why-card" style={{ padding: '24px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
                     <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'white', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', boxShadow: 'var(--shadow-sm)' }}>🛡️</div>
                     <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '18px', fontWeight: '800' }}>Supply Integrity</h4>
                     <p style={{ fontSize: '14.5px', color: 'var(--gray-600)' }}>Ensuring reliability where healthcare supply is unstable.</p>
                  </div>
               </div>
            </div>
            <div className="about-visual fade-in">
               <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px', cursor: 'default', transition: 'var(--transition)' }} onMouseOver={e => {e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 32px 64px rgba(27,54,93,0.2)';}} onMouseOut={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)';}}>
                 <img src="/assets/hero-graphic.png" alt="Arvind Pharmaceuticals Responsibility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(0deg, var(--primary) 0%, transparent 100%)', padding: '60px 40px 40px', color: 'white' }}>
                    <p style={{ fontSize: '24px', fontWeight: '800', lineHeight: 1.4 }}>"Sustainable healthcare begins with responsible conduct."</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* ─── ETHICAL STANDARDS ─── */}
      <section style={{ padding: '100px 5vw', background: 'var(--gray-50)' }}>
         <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Trust First</div>
         <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '24px' }}>Ethical Standards</h2>
         <p style={{ color: 'var(--gray-600)', fontSize: '18px', maxWidth: '800px', margin: '0 auto 64px', textAlign: 'center', lineHeight: '1.8' }}>
            We operate with strong ethical principles that guide our interactions with global distributors, ministries of health, and the larger healthcare community.
         </p>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {[
              { title: "Integrity", desc: "Honesty and honorable conduct in all professional interactions.", icon: "⚖️" },
              { title: "Transparency", desc: "Clear procedures and accurate documentation in all export protocols.", icon: "📋" },
              { title: "Regulatory Respect", desc: "Strict adherence to Indian and international regulatory frameworks.", icon: "🛡️" },
              { title: "Zero Tolerance", desc: "No room for unethical, non-compliant, or substandard practices.", icon: "🚫" }
            ].map((eth, idx) => (
              <div key={idx} className="why-card fade-in" style={{ padding: '48px 40px', background: 'white', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--secondary)' }}></div>
                 <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(13,148,136,0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px' }}>{eth.icon}</div>
                 <h4 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '16px', fontWeight: '800' }}>{eth.title}</h4>
                 <p style={{ fontSize: '15.5px', color: 'var(--gray-600)', lineHeight: '1.6' }}>{eth.desc}</p>
                 <div style={{ position: 'absolute', bottom: '-20px', right: '-10px', fontSize: '140px', color: 'var(--gray-50)', fontWeight: 900, zIndex: 0, lineHeight: 1 }}>{idx + 1}</div>
              </div>
            ))}
         </div>
      </section>

      {/* ─── QUALITY & REGULATORY RESPONSIBILITY ─── */}
      <section style={{ background: 'var(--primary)', color: 'white', position: 'relative', padding: '100px 5vw', overflow: 'hidden' }}>
         {/* Background Elements */}
         <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>

         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div className="fade-in">
               <div className="section-eyebrow" style={{ color: 'var(--secondary)' }}>Compliance Driven</div>
               <h2 className="section-title" style={{ color: 'white', fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: '24px' }}>Quality & Regulatory Responsibility</h2>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                  Patient safety and product reliability are fundamental to our responsibility. We ensure that products are sourced from compliant facilities and supported by appropriate quality documentation.
               </p>
               <div style={{ background: 'rgba(255,255,255,0.06)', padding: '32px', borderRadius: '24px', borderLeft: '4px solid var(--secondary)' }}>
                  <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.9)', fontWeight: '500', lineHeight: 1.6 }}>
                     All export activities are strictly aligned with Indian pharmaceutical regulations overseen by the <strong>Central Drugs Standard Control Organization (CDSCO)</strong> and applicable international benchmarks.
                  </p>
               </div>
            </div>
            
            <div className="fade-in">
              <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                 <img src="/assets/compliance-graphic.png" alt="Regulatory Compliance" style={{ width: '100%', height: 'auto', borderRadius: '24px', opacity: 0.9 }} />
              </div>
            </div>
         </div>
      </section>

      {/* ─── ENVIRONMENTAL AWARENESS ─── */}
      <section style={{ textAlign: 'center', padding: '100px 5vw', background: 'white' }}>
         <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Eco-Care</div>
         <h2 className="section-title" style={{ marginBottom: '24px' }}>Environmental Awareness</h2>
         <p style={{ color: 'var(--gray-600)', fontSize: '18px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 64px' }}>
            We encourage responsible environmental practices and support collaboration with facilities that follow proper waste management and regulatory environmental guidelines.
         </p>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
             {[
               { title: "Waste Management", desc: "Adhering to strict pharmaceutical waste protocols at source to prevent contamination.", icon: "♻️" },
               { title: "Regulatory Guidelines", desc: "Compliance with local and global environmental standards for pharmaceutical production.", icon: "📜" },
               { title: "Sustainable Choice", desc: "Prioritizing partners who have established eco-friendly certifications.", icon: "🌱" }
             ].map((env, i) => (
                <div key={i} className="why-card fade-in" style={{ padding: '48px 32px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
                   <div style={{ fontSize: '40px', marginBottom: '24px' }}>{env.icon}</div>
                   <h4 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '20px', fontWeight: '800' }}>{env.title}</h4>
                   <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>{env.desc}</p>
                </div>
             ))}
         </div>
      </section>

      {/* ─── CONCLUSION ─── */}
      <section style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)', padding: '80px 5vw', textAlign: 'center', color: 'white', margin: '0 5vw 80px', borderRadius: '32px', boxShadow: '0 24px 64px rgba(27,54,93,0.15)' }}>
         <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '24px', fontSize: 'clamp(28px, 4vw, 40px)' }}>Our Commitment</h2>
            <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
               Corporate Social Responsibility at Arvind Pharmaceuticals reflects our dedication to ethical standards, disciplined practices, and respect for the communities and healthcare systems we serve.
            </p>
         </div>
      </section>
    </div>
  );
};

export default Responsibility;
