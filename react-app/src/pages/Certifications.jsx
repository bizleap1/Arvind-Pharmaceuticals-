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
    <section id="certifications" style={{ minHeight: 'calc(100vh - 68px)', paddingTop: '100px' }}>
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

      {/* NEW QA PROCESS SECTION */}
      <div style={{ marginTop: '60px', padding: '40px', background: 'var(--teal-pale)', borderRadius: '16px' }} className="fade-in">
         <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--navy)', marginBottom: '20px' }}>Our 3-Tier Quality Control Framework</h3>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4 style={{ color: 'var(--teal)', marginBottom: '10px' }}>1. API Testing</h4>
               <p style={{ fontSize: '13px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Pre-manufacturing validation of Active Pharmaceutical Ingredients utilizing HPLC/GC spectroscopy to guarantee pure chemical composition.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4 style={{ color: 'var(--teal)', marginBottom: '10px' }}>2. In-Process Checks</h4>
               <p style={{ fontSize: '13px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Continuous sampling during compression and packaging to verify dissolution profiles, friability, and uniformity of weight.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
               <h4 style={{ color: 'var(--teal)', marginBottom: '10px' }}>3. Pharmacovigilance</h4>
               <p style={{ fontSize: '13px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Executing post-market surveillance. Each export consignment is accompanied by an immutable Certificate of Analysis (COA) for total traceability.</p>
            </div>
         </div>
      </div>

      <div className="export-certs fade-in" style={{ marginTop: '60px' }}>
        <h3>Export Certifications & Registration Documentation</h3>
        <p style={{ color: 'var(--gray-500)', marginBottom: '24px', maxWidth: '700px', lineHeight: '1.7' }}>Our dedicated regulatory team actively compiles comprehensive registration dossiers to assist international clients with registering our products with their specific Ministries of Health.</p>
        <div className="cert-tags">
          <div className="cert-tag">Certificate of Pharmaceutical Product (COPP)</div>
          <div className="cert-tag">Free Sale Certificate (FSC)</div>
          <div className="cert-tag">Certificate of Analysis (COA)</div>
          <div className="cert-tag">Manufacturing License</div>
          <div className="cert-tag">Dossiers (CTD / ACTD format)</div>
        </div>
        <div className="compliance-strip">
          <div className="compliance-item">Full Regulatory Compliance</div>
          <div className="compliance-item">Transparent Sourcing</div>
          <div className="compliance-item">Global Export Readiness</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
