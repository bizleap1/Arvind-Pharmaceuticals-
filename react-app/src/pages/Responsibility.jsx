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
    <div style={{ paddingBottom: '80px' }}>
      <section id="responsibility" style={{ minHeight: 'calc(100vh - 68px)', paddingTop: '100px' }}>
        <div className="resp-grid">
          <div>
            <div className="section-eyebrow">Corporate Social Responsibility</div>
            <h2 className="section-title">Ethical Trade & Global Healthcare Impact</h2>
            <p style={{ color: 'var(--gray-500)', marginBottom: '36px', lineHeight: '1.8' }}>
              At Arvind Pharmaceuticals, we recognize that our role extends beyond commerce. As a link in the global healthcare chain, we hold a profound responsibility to ensure that our operations contribute positively to the health of communities and the integrity of the environment.
            </p>
            <div className="resp-list">
              <div className="resp-item fade-in">
                <div className="resp-item-icon">🌐</div>
                <div>
                  <h4>Equitable Healthcare Access</h4>
                  <p>We actively prioritize shipments to regions with underserved healthcare infrastructure, ensuring that high-quality, life-saving generic medications are available where they are needed most.</p>
                </div>
              </div>
              <div className="resp-item fade-in">
                <div className="resp-item-icon">⚖️</div>
                <div>
                  <h4>Uncompromising Ethical Trade</h4>
                  <p>Our trade practices are guided by the highest standards of integrity. We maintain transparency in pricing, adhere to anti-bribery protocols, and ensure fair dealing with all global partners.</p>
                </div>
              </div>
              <div className="resp-item fade-in">
                <div className="resp-item-icon">🔬</div>
                <div>
                  <h4>Strict Pharmacovigilance</h4>
                  <p>We maintain a robust system for monitoring the safety of our products post-export. Any adverse event reports are handled with extreme urgency and reported back to manufacturing partners and regulatory bodies.</p>
                </div>
              </div>
              <div className="resp-item fade-in">
                <div className="resp-item-icon">🌿</div>
                <div>
                  <h4>ESG - Environmental Stewardship</h4>
                  <p>We collaborate with manufacturing facilities that implement Green Chemistry principles, focusing on waste reduction, energy efficiency, and low-emission production technologies.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="resp-highlight">
              <h3>Our Pillars of Trust</h3>
              <p>Our commitment to responsibility is not just a policy—it's the core of how we build long-term relationships with international Ministries of Health and distributors.</p>
              <div className="ethics-list">
                <div className="ethics-item">100% Traceability across the supply chain</div>
                <div className="ethics-item">Adherence to WHO Fair Trade guidelines</div>
                <div className="ethics-item">Support for UN Sustainable Development Goal 3</div>
                <div className="ethics-item">Zero-tolerance for substandard or falsified drugs</div>
                <div className="ethics-item">Rigorous vendor and manufacturer qualification</div>
                <div className="ethics-item">Comprehensive safety documentation folders</div>
                <div className="ethics-item">Regular cross-border compliance audits</div>
                <div className="ethics-item">Transparent recall and return protocols</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: COMMITMENT TO SUSTAINABILITY SECTION */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '80px 5vw', marginTop: '60px' }}>
         <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '24px' }}>Our Sustainability Commitment</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
               We are aligning our business growth with global sustainability goals. By optimizing our export logistics to reduce carbon footprints and partnering with eco-conscious manufacturers, we are ensuring that the future of healthcare is as healthy as the patients we serve.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
               <div className="fade-in" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--gold-light)', marginBottom: '10px' }}>Supply Chain Efficiency</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Optimizing routes and consolidating shipments to minimize logistics-related GHG emissions.</p>
               </div>
               <div className="fade-in" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--gold-light)', marginBottom: '10px' }}>Ethical Sourcing</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Auditing partners for fair labor practices and safe working environments.</p>
               </div>
               <div className="fade-in" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--gold-light)', marginBottom: '10px' }}>Document Digitalization</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Moving towards paperless documentation for dossiers and trade certificates.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Responsibility;
