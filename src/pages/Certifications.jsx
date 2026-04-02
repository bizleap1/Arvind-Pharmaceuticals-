import React, { useEffect } from 'react';

const Certifications = () => {
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
    <section id="certifications" style={{ minHeight: 'calc(100vh - 72px)', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="section-eyebrow">Quality Standards & Assurances</div>
      <h2 className="section-title">Unyielding Compliance Protocols</h2>
      <p className="section-subtitle">In the pharmaceutical landscape, quality is non-negotiable. We strictly follow national and international regulatory frameworks, ensuring that every shipment meets the exact chemical and physical specifications critical for patient outcomes.</p>

      <div className="cert-grid">
        <div className="cert-card fade-in">
          <div className="cert-badge">Manufacturing</div>
          <h4>WHO-GMP Certification</h4>
          <p>Certified under World Health Organization Good Manufacturing Practices. This guarantees rigorous audits of facility hygiene, equipment calibration, and batch consistency protocols.</p>
        </div>
        <div className="cert-card fade-in">
          <div className="cert-badge">Quality Control</div>
          <h4>ISO 9001:2015</h4>
          <p>A benchmark for global Quality Management Systems validation, demonstrating our persistent dedication to process control, risk management, and client satisfaction.</p>
        </div>
        <div className="cert-card fade-in">
          <div className="cert-badge">Environment</div>
          <h4>ISO 14001:2015</h4>
          <p>Environmental Management System validation proving our facilities minimize their carbon footprint and handle biochemical waste responsibly.</p>
        </div>
        <div className="cert-card fade-in">
          <div className="cert-badge">Regulatory</div>
          <h4>CDSCO Registration</h4>
          <p>Fully compliant and licensed under India's Central Drugs Standard Control Organization, the supreme national pharmaceutical regulatory body.</p>
        </div>
        <div className="cert-card fade-in">
          <div className="cert-badge">Logistics</div>
          <h4>GDP Adherence</h4>
          <p>Strict observance of Good Distribution Practices. We utilize monitored cold-chain validation for temperature-sensitive biologics and vaccines.</p>
        </div>
        <div className="cert-card fade-in">
          <div className="cert-badge">Nutraceuticals</div>
          <h4>FSSAI Licensed</h4>
          <p>Fully licensed by the Food Safety and Standards Authority of India for exporting premium dietary supplements, vitamins, and nutraceuticals.</p>
        </div>
      </div>

      {/* 3-Tier Quality Framework */}
      <div style={{ marginTop: '100px', padding: '64px', background: 'var(--bg-soft)', borderRadius: '32px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow)' }} className="fade-in">
         <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '40px', textAlign: 'center', fontWeight: '800' }}>Our 3-Tier Quality Control Framework</h3>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-100)', transition: 'var(--transition)' }} className="why-card">
               <div style={{ color: 'var(--secondary)', fontSize: '32px', fontWeight: '800', marginBottom: '20px', opacity: '0.5' }}>01</div>
               <h4 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '20px', fontWeight: '700' }}>API Validation</h4>
               <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Comprehensive testing of Active Pharmaceutical Ingredients via HPLC/GC spectroscopy to ensure total purity before formulation begins.</p>
            </div>
            <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-100)', transition: 'var(--transition)' }} className="why-card">
               <div style={{ color: 'var(--secondary)', fontSize: '32px', fontWeight: '800', marginBottom: '20px', opacity: '0.5' }}>02</div>
               <h4 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '20px', fontWeight: '700' }}>Operational Vigilance</h4>
               <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Real-time mass-balance and content-uniformity testing during the manufacturing cycle to guarantee precise dosage and batch replication.</p>
            </div>
            <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-100)', transition: 'var(--transition)' }} className="why-card">
               <div style={{ color: 'var(--secondary)', fontSize: '32px', fontWeight: '800', marginBottom: '20px', opacity: '0.5' }}>03</div>
               <h4 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '20px', fontWeight: '700' }}>Post-Market Surety</h4>
               <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>Rigorous pharmacovigilance and retention-sample monitoring to ensure product shelf-stability and safety throughout the entire product lifecycle.</p>
            </div>
         </div>
      </div>

      <div className="export-certs fade-in" style={{ marginTop: '100px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '24px', fontWeight: '800' }}>Detailed Regulatory Documentation</h3>
        <p style={{ color: 'var(--gray-600)', marginBottom: '40px', maxWidth: '850px', lineHeight: '1.8', fontSize: '16px' }}>To facilitate seamless market entry, our dedicated regulatory department assists with specialized dossier compilation in CTD/ACTD format for Ministries of Health globally.</p>
        <div className="cert-tags">
          <div className="cert-tag">Certificate of Pharmaceutical Product (COPP)</div>
          <div className="cert-tag">Free Sale Certificate (FSC)</div>
          <div className="cert-tag">Certificate of Analysis (COA)</div>
          <div className="cert-tag">Manufacturing License</div>
          <div className="cert-tag">Dossiers (CTD / ACTD format)</div>
          <div className="cert-tag">Stability Data Reports</div>
        </div>
        <div className="compliance-strip">
          <div className="compliance-item">Global Export Readiness</div>
          <div className="compliance-item">WHO-GMP Validated Facilities</div>
          <div className="compliance-item">Full Traceability Assurance</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
