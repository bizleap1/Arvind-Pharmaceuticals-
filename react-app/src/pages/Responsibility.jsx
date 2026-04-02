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
    <section id="responsibility" style={{ minHeight: 'calc(100vh - 68px)' }}>
      <div className="resp-grid">
        <div>
          <div className="section-eyebrow">CSR</div>
          <h2 className="section-title">Committed to Ethical Conduct & Social Responsibility</h2>
          <p style={{ color: 'var(--gray-500)', marginBottom: '36px' }}>Medicines play a vital role in protecting and improving lives. Our responsibility is guided by integrity, accountability, and respect for global healthcare systems.</p>
          <div className="resp-list">
            <div className="resp-item fade-in">
              <div className="resp-item-icon">🌐</div>
              <div>
                <h4>Healthcare Access</h4>
                <p>Supporting availability of quality pharmaceutical products in regions where reliable healthcare supply is essential, contributing to global accessibility.</p>
              </div>
            </div>
            <div className="resp-item fade-in">
              <div className="resp-item-icon">⚖️</div>
              <div>
                <h4>Ethical Standards</h4>
                <p>Integrity in all professional interactions, transparency in documentation, respect for regulatory frameworks, and zero tolerance for non-compliant practices.</p>
              </div>
            </div>
            <div className="resp-item fade-in">
              <div className="resp-item-icon">🔬</div>
              <div>
                <h4>Quality & Regulatory Responsibility</h4>
                <p>All export activities aligned with CDSCO regulations and applicable international standards. Sourced from compliant facilities with proper quality documentation.</p>
              </div>
            </div>
            <div className="resp-item fade-in">
              <div className="resp-item-icon">🌿</div>
              <div>
                <h4>Environmental Awareness</h4>
                <p>Encouraging responsible environmental practices and collaborating with facilities that follow proper waste management and regulatory environmental guidelines.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="resp-highlight">
            <h3>Our Ethical Commitments</h3>
            <p>Trust and responsibility remain central to our operations. We uphold strict ethical principles across every aspect of our business.</p>
            <div className="ethics-list">
              <div className="ethics-item">Integrity in all professional interactions</div>
              <div className="ethics-item">Transparency in documentation & procedures</div>
              <div className="ethics-item">Respect for regulatory frameworks</div>
              <div className="ethics-item">Zero tolerance for counterfeit products</div>
              <div className="ethics-item">Ethical marketing practices</div>
              <div className="ethics-item">Full regulatory documentation support</div>
              <div className="ethics-item">Responsible pharmaceutical sourcing</div>
              <div className="ethics-item">Patient safety as top priority</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
