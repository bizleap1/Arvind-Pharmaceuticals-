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
    <div style={{ background: 'white', minHeight: '100vh', paddingBottom: '80px' }}>
      <section id="products" style={{ paddingTop: '120px' }}>
        <div className="section-eyebrow">Our Portfolio</div>
        <h2 className="section-title">Comprehensive Product Array</h2>
        <p className="section-subtitle">Engineered to address both acute illnesses and chronic life-threatening conditions, our diverse product portfolio ensures health professionals globally have access to safe, high-efficacy pharmaceutical solutions.</p>

        {/* Formulations & Dosage Forms */}
        <div style={{ marginTop: '56px', marginBottom: '80px' }} className="fade-in">
          <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '32px', fontWeight: '700' }}>Available Dosage Forms</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div className="why-card">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>💊</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '18px', fontWeight: '700' }}>Solid Orals</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.7' }}>Uncoated, film-coated, enteric-coated, and sustained-release tablets, alongside hard and soft gelatin capsules.</p>
            </div>
            <div className="why-card">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>💉</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '18px', fontWeight: '700' }}>Injectables</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.7' }}>Liquid vials, ampoules, dry powder for injection, and lyophilized sterile preparations for critical care.</p>
            </div>
            <div className="why-card">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🧴</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '18px', fontWeight: '700' }}>Liquid & Topicals</h4>
              <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.7' }}>Oral suspensions, syrups, dry syrups, alongside advanced dermatological creams, ointments, and gels.</p>
            </div>
          </div>
        </div>

        {/* Existing Grid */}
        <div id="therapeutic-focus">
          <div className="section-eyebrow" style={{ marginBottom: '24px' }}>Therapeutic Categories Focus</div>
          <div className="products-grid">
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Anti-Infectives & Antibiotics</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Cardiovascular (CVS)</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Critical & Intensive Care</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Advanced Dermatology</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Gastroenterology & Antacids</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Gynaecology & Maternal Health</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Nephrology</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Oncology Diagnostics & Therapy</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Ophthalmology</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Orthopaedics & NSAIDs</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Paediatric Formulations</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Respiratory & Anti-Asthmatics</span></div>
            <div className="product-chip fade-in" style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}><div className="prod-chip-dot"></div><span style={{ color: 'var(--primary)' }}>Urology</span></div>
          </div>
        </div>

        {/* Representative Molecules Table */}
        <div style={{ marginTop: '80px' }} className="fade-in">
           <h3 style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '20px', fontWeight: '700' }}>Popular Export Molecules</h3>
           <p style={{ color: 'var(--gray-600)', fontSize: '16px', marginBottom: '32px' }}>A brief snapshot of heavily exported molecules. We customize strengths, formulations, and packaging as per Ministry of Health regulations of the importing country.</p>
           
           <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow)' }}>
             <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--gray-800)', fontSize: '15px' }}>
               <thead>
                 <tr style={{ background: 'var(--gray-50)', textAlign: 'left' }}>
                   <th style={{ padding: '20px', borderBottom: '2px solid var(--gray-200)', color: 'var(--primary)', fontWeight: '700' }}>Therapeutic Class</th>
                   <th style={{ padding: '20px', borderBottom: '2px solid var(--gray-200)', color: 'var(--primary)', fontWeight: '700' }}>Molecule / Combination</th>
                   <th style={{ padding: '20px', borderBottom: '2px solid var(--gray-200)', color: 'var(--primary)', fontWeight: '700' }}>Primary Forms</th>
                 </tr>
               </thead>
               <tbody>
                 <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                   <td style={{ padding: '20px' }}>Anti-Infective</td>
                   <td style={{ padding: '20px' }}>Amoxicillin + Clavulanate Potassium</td>
                   <td style={{ padding: '20px' }}>Tablets, Dry Syrup, Injection</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                   <td style={{ padding: '20px' }}>Cardiovascular</td>
                   <td style={{ padding: '20px' }}>Telmisartan / Amlodipine / Atorvastatin</td>
                   <td style={{ padding: '20px' }}>Tablets (Film-coated)</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                   <td style={{ padding: '20px' }}>Gastrointestinal</td>
                   <td style={{ padding: '20px' }}>Pantoprazole / Omeprazole + Domperidone</td>
                   <td style={{ padding: '20px' }}>Enteric Capsules, IV Injections</td>
                 </tr>
                 <tr style={{ borderBottom: 'none' }}>
                   <td style={{ padding: '20px' }}>Analgesics / NSAIDs</td>
                   <td style={{ padding: '20px' }}>Diclofenac Sodium / Paracetamol / Ibuprofen</td>
                   <td style={{ padding: '20px' }}>Tablets, Injection, Topical Gel</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

        <div className="product-banner" style={{ background: 'var(--primary)', border: 'none' }}>
          <div className="product-banner-text">
            <h3>Looking for a specific product or formulation?</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Our expansive database covers over 1000+ molecules. We provide complete sourcing support — from pricing inquiry to delivery with full documentation.</p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Request the Full PDF Catalog →</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
