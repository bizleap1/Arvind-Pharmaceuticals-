import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Leaf, Building2, FlaskConical, FileCheck, ClipboardList, ShieldAlert, BadgeCheck } from 'lucide-react';

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
    <div style={{ paddingBottom: '80px' }}>

      {/* ─── HERO SECTION ─── */}
      <section className="certifications-hero-section" style={{ 
        position: 'relative', 
        padding: '100px 5vw 80px', 
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
            Quality & Compliance
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--primary)', marginBottom: '24px', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            Our Commitment to Quality &{' '}
            <span style={{ color: 'var(--secondary)', position: 'relative', display: 'inline-block' }}>
              Global Standards.
              <span style={{ position: 'absolute', bottom: '4px', left: 0, right: 0, height: '6px', background: 'var(--secondary)', opacity: 0.15, borderRadius: '4px' }}></span>
            </span>
          </h1>
          
          <p style={{ fontSize: '18px', color: 'var(--gray-600)', lineHeight: '1.8', maxWidth: '800px', margin: '0', fontWeight: '400' }}>
            At Arvind Pharmaceuticals, we strictly follow national and international regulatory standards to ensure safe, effective, and high-quality pharmaceutical products for global markets. Our certifications reflect our commitment to quality, compliance, and ethical business practices.
          </p>
        </div>

        {/* Floating engaging interactive elements */}
        <div className="hero-floating-badge" style={{ position: 'absolute', top: '25%', right: '8%', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.2)', animation: 'floatBadge 6s infinite ease-in-out', zIndex: 2, display: 'flex', alignItems: 'center', gap: '14px' }}>
           <div style={{ fontSize: '26px' }}>🏆</div>
           <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px' }}>ISO Certified</div>
        </div>
        <div className="hero-floating-badge" style={{ position: 'absolute', bottom: '15%', right: '18%', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.2)', animation: 'floatBadgeAlt 7s infinite ease-in-out', zIndex: 2, display: 'flex', alignItems: 'center', gap: '14px' }}>
           <div style={{ fontSize: '26px' }}>🛡️</div>
           <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px' }}>WHO-GMP Compliant</div>
        </div>
      </section>

      {/* ─── REGULATORY CERTIFICATIONS ─── */}
      <section>
        <div className="section-eyebrow">Official Registrations</div>
        <h2 className="section-title">Regulatory Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginTop: '48px' }}>
          {[
            {
              icon: <ShieldCheck size={28} />,
              badge: 'Manufacturing',
              title: 'WHO-GMP Certification',
              desc: 'Certified under WHO Good Manufacturing Practices (GMP) guidelines ensuring quality production standards.'
            },
            {
              icon: <Award size={28} />,
              badge: 'Quality Control',
              title: 'ISO 9001:2015',
              desc: 'Quality Management System certification ensuring consistent product quality and process control.'
            },
            {
              icon: <Leaf size={28} />,
              badge: 'Environment',
              title: 'ISO 14001:2015',
              desc: 'Environmental Management System certification supporting eco-friendly manufacturing.'
            },
            {
              icon: <Building2 size={28} />,
              badge: 'Manufacturing Partners',
              title: 'GMP Certified Facilities',
              desc: 'All our third-party manufacturing facilities are GMP approved and regularly audited for compliance.'
            },
            {
              icon: <BadgeCheck size={28} />,
              badge: 'Regulatory',
              title: 'CDSCO Registration',
              desc: 'Registered under the Central Drugs Standard Control Organization (CDSCO) as per Indian pharmaceutical regulatory requirements.'
            },
            {
              icon: <FlaskConical size={28} />,
              badge: 'Nutraceuticals',
              title: 'FSSAI Licensed',
              desc: 'Licensed under Food Safety and Standards Authority of India (FSSAI) for nutraceutical and dietary supplement exports.'
            }
          ].map((cert, idx) => (
            <div key={idx} className="cert-card fade-in">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ color: 'var(--secondary)' }}>{cert.icon}</div>
                <div className="cert-badge">{cert.badge}</div>
              </div>
              <h4>{cert.title}</h4>
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EXPORT CERTIFICATIONS ─── */}
      <section style={{ background: 'var(--primary)', color: 'white', borderRadius: '48px', margin: '0 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="fade-in">
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>International Trade</div>
            <h2 className="section-title" style={{ color: 'white' }}>Export Certifications</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
              We provide complete export documentation to facilitate seamless pharmaceutical imports across international markets — from Ministry of Health registrations to country-specific approvals.
            </p>
          </div>
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Certificate of Pharmaceutical Product (COPP)',
              'Free Sale Certificate (FSC)',
              'Product Registration Dossiers (CTD / ACTD format)',
              'Country-Specific Regulatory Approvals'
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: 'var(--accent)', flexShrink: 0
                }}></div>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QA & COMPLIANCE SPLIT ─── */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>

          {/* Quality Assurance */}
          <div className="fade-in" style={{
            padding: '48px',
            background: 'var(--bg-soft)',
            borderRadius: '32px',
            border: '1px solid var(--gray-200)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ color: 'var(--secondary)' }}><ClipboardList size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>Quality Assurance Practices</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Strict vendor qualification process',
                'Batch-wise testing & COA verification',
                'Stability studies as per ICH guidelines',
                'Pharmacovigilance support'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ color: 'white', fontSize: '11px', fontWeight: '800' }}>✓</span>
                  </div>
                  <p style={{ color: 'var(--gray-700)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Ethics */}
          <div className="fade-in" style={{
            padding: '48px',
            background: 'var(--primary)',
            borderRadius: '32px',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ color: 'var(--accent)' }}><ShieldAlert size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'white', fontWeight: '800', margin: 0 }}>Compliance &amp; Ethics</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Zero tolerance for counterfeit products',
                'Transparent documentation practices',
                'Ethical marketing practices',
                'Full regulatory documentation support for importers'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: '800' }}>✓</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3-TIER QUALITY FRAMEWORK ─── */}
      <section style={{ background: 'var(--bg-soft)', textAlign: 'center' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Systematic Approach</div>
        <h2 className="section-title">Our 3-Tier Quality Control Framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
          {[
            { num: '01', title: 'API Validation', desc: 'Comprehensive testing of Active Pharmaceutical Ingredients to ensure total purity before formulation begins.' },
            { num: '02', title: 'Operational Vigilance', desc: 'Real-time batch testing during the production cycle to guarantee precise dosage and batch consistency.' },
            { num: '03', title: 'Post-Market Surety', desc: 'Rigorous pharmacovigilance and retention-sample monitoring to ensure product safety throughout its lifecycle.' }
          ].map((tier, idx) => (
            <div key={idx} className="why-card fade-in">
              <div style={{ color: 'var(--secondary)', fontSize: '32px', fontWeight: '800', marginBottom: '20px', opacity: 0.5 }}>{tier.num}</div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '20px', fontWeight: '700' }}>{tier.title}</h4>
              <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.7' }}>{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPLIANCE STRIP ─── */}
      <section style={{ background: 'white' }}>
        <div className="export-certs fade-in">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '24px', fontWeight: '800' }}>Standard Documentation Provided</h3>
          <p style={{ color: 'var(--gray-600)', marginBottom: '40px', maxWidth: '850px', lineHeight: '1.8', fontSize: '16px' }}>
            To facilitate seamless market entry, our dedicated regulatory department assists with specialized dossier compilation in CTD/ACTD format for Ministries of Health globally.
          </p>
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

      {/* ─── CTA ─── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 5vw',
        textAlign: 'center',
        margin: '0 5vw 80px',
        borderRadius: '32px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
              <FileCheck size={32} color="white" />
            </div>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '20px', fontWeight: '800', color: 'white' }}>
            Need Detailed Regulatory Documentation?
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', maxWidth: '600px', marginInline: 'auto' }}>
            Our team provides full documentation support to help importers meet local registration requirements.
          </p>
          <Link to="/contact" className="btn-primary" style={{ background: 'var(--accent)', border: 'none', padding: '18px 48px', fontSize: '16px' }}>
            Request Documentation Support
          </Link>
        </div>
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }}></div>
      </section>

    </div>
  );
};

export default Certifications;
