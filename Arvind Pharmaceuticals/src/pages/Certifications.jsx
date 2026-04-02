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
    <section id="certifications" style={{ minHeight: 'calc(100vh - 68px)', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="section-eyebrow">Quality Standards & Assurances</div>
      <h2 className="section-title">Unyielding Compliance Protocols</h2>
      <p className="section-subtitle">In the pharmaceutical landscape, quality is non-negotiable. We strictly follow national and international regulatory frameworks, ensuring that every shipment meets the exact chemical and physical specifications critical for patient outcomes.</p>

      {/* Visual Compliance Graphic */}
      <div style={{ margin: '40px 0', display: 'flex', justifyContent: 'center' }} className="fade-in">
         <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(circle, rgba(15, 124, 110, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            <img 
              src="/assets/compliance-graphic.png" 
              alt="Global Pharmaceutical Compliance & Quality Assurance" 
              style={{ 
                width: '100%', 
                borderRadius: '24px', 
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                zIndex: 1
              }} 
            />
         </div>
      </div>

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
      <div style={{ marginTop: '80px', padding: '48px', background: 'var(--teal-pale)', borderRadius: '24px', border: '1px solid rgba(15, 124, 110, 0.1)' }} className="fade-in">
         <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--navy)', marginBottom: '32px', textAlign: 'center' }}>Our 3-Tier Quality Control Framework</h3>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
               <div style={{ color: 'var(--teal)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>01</div>
               <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>API Validation</h4>
               <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.7' }}>Comprehensive testing of Active Pharmaceutical Ingredients via HPLC/GC spectroscopy to ensure total purity before formulation begins.</p>
            </div>
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
               <div style={{ color: 'var(--teal)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>02</div>
               <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Operational Vigilance</h4>
               <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.7' }}>Real-time mass-balance and content-uniformity testing during the manufacturing cycle to guarantee precise dosage and batch replication.</p>
            </div>
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
               <div style={{ color: 'var(--teal)', fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>03</div>
               <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Post-Market Surety</h4>
               <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.7' }}>Rigorous pharmacovigilance and retention-sample monitoring to ensure product shelf-stability and safety throughout the entire product lifecycle.</p>
            </div>
         </div>
      </div>

      <div className="export-certs fade-in" style={{ marginTop: '80px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '16px' }}>Detailed Regulatory Documentation</h3>
        <p style={{ color: 'var(--gray-500)', marginBottom: '24px', maxWidth: '750px', lineHeight: '1.7' }}>To facilitate seamless market entry, our dedicated regulatory department assists with specialized dossier compilation in CTD/ACTD format for Ministries of Health globally.</p>
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
