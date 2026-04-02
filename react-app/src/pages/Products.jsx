import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
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
    <div style={{ background: 'var(--navy)', minHeight: '100vh', paddingBottom: '80px' }}>
      <section id="products" style={{ paddingTop: '100px' }}>
        <div className="section-eyebrow" style={{ color: 'var(--teal-light)' }}>Our Portfolio</div>
        <h2 className="section-title" style={{ color: 'white' }}>Comprehensive Product Array</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Engineered to address both acute illnesses and chronic life-threatening conditions, our diverse product portfolio ensures health professionals globally have access to safe, high-efficacy pharmaceutical solutions.</p>

        {/* Visual Graphic Section */}
        <div style={{ margin: '40px 0', display: 'flex', justifyContent: 'center' }} className="fade-in">
           <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(circle, rgba(20, 168, 153, 0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
              <img 
                src="/assets/products-graphic.png" 
                alt="Diverse Pharmaceutical Dosage Forms" 
                style={{ 
                  width: '100%', 
                  borderRadius: '20px', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  zIndex: 1
                }} 
              />
           </div>
        </div>

        {/* Formulations & Dosage Forms */}
        <div style={{ marginTop: '40px', marginBottom: '60px' }} className="fade-in">
          <h3 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '20px' }}>Available Dosage Forms</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>💊</div>
              <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '16px' }}>Solid Orals</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6' }}>Uncoated, film-coated, enteric-coated, and sustained-release tablets, alongside hard and soft gelatin capsules.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>💉</div>
              <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '16px' }}>Injectables</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6' }}>Liquid vials, ampoules, dry powder for injection, and lyophilized sterile preparations for critical care.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🧴</div>
              <h4 style={{ color: 'white', marginBottom: '8px', fontSize: '16px' }}>Liquid & Topicals</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6' }}>Oral suspensions, syrups, dry syrups, alongside advanced dermatological creams, ointments, and gels.</p>
            </div>
          </div>
        </div>

        {/* Existing Grid */}
        <div>
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Therapeutic Categories Focus</div>
          <div className="products-grid">
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Anti-Infectives & Antibiotics</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Cardiovascular (CVS)</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Critical & Intensive Care</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Advanced Dermatology</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Gastroenterology & Antacids</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Gynaecology & Maternal Health</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Nephrology</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Oncology Diagnostics & Therapy</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Ophthalmology</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Orthopaedics & NSAIDs</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Paediatric Formulations</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Respiratory & Anti-Asthmatics</span></div>
            <div className="product-chip fade-in"><div className="prod-chip-dot"></div><span>Urology</span></div>
          </div>
        </div>

        {/* Representative Molecules Table */}
        <div style={{ marginTop: '60px' }} className="fade-in">
           <h3 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '16px' }}>Popular Export Molecules</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '24px' }}>A brief snapshot of heavily exported molecules. We customize strengths, formulations, and packaging as per Ministry of Health regulations of the importing country.</p>
           
           <div style={{ overflowX: 'auto' }}>
             <table style={{ width: '100%', borderCollapse: 'collapse', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
               <thead>
                 <tr style={{ background: 'rgba(255,255,255,0.1)', textAlign: 'left' }}>
                   <th style={{ padding: '16px', borderBottom: '2px solid rgba(15,124,110,0.5)' }}>Therapeutic Class</th>
                   <th style={{ padding: '16px', borderBottom: '2px solid rgba(15,124,110,0.5)' }}>Molecule / Combination</th>
                   <th style={{ padding: '16px', borderBottom: '2px solid rgba(15,124,110,0.5)' }}>Primary Forms</th>
                 </tr>
               </thead>
               <tbody>
                 <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                   <td style={{ padding: '16px' }}>Anti-Infective</td>
                   <td style={{ padding: '16px' }}>Amoxicillin + Clavulanate Potassium</td>
                   <td style={{ padding: '16px' }}>Tablets, Dry Syrup, Injection</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                   <td style={{ padding: '16px' }}>Cardiovascular</td>
                   <td style={{ padding: '16px' }}>Telmisartan / Amlodipine / Atorvastatin</td>
                   <td style={{ padding: '16px' }}>Tablets (Film-coated)</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                   <td style={{ padding: '16px' }}>Gastrointestinal</td>
                   <td style={{ padding: '16px' }}>Pantoprazole / Omeprazole + Domperidone</td>
                   <td style={{ padding: '16px' }}>Enteric Capsules, IV Injections</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                   <td style={{ padding: '16px' }}>Analgesics / NSAIDs</td>
                   <td style={{ padding: '16px' }}>Diclofenac Sodium / Paracetamol / Ibuprofen</td>
                   <td style={{ padding: '16px' }}>Tablets, Injection, Topical Gel</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

        <div className="product-banner">
          <div className="product-banner-text">
            <h3>Looking for a specific product or formulation?</h3>
            <p>Our expansive database covers over 1000+ molecules. We provide complete sourcing support — from pricing inquiry to delivery with full documentation.</p>
          </div>
          <Link to="/contact" className="btn-primary">Request the Full PDF Catalog →</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
