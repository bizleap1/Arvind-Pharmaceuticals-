import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dna, 
  Pill, 
  Syringe, 
  Stethoscope, 
  Activity, 
  ShieldAlert, 
  Zap, 
  Flame, 
  Droplets, 
  UserPlus, 
  Microscope, 
  Eye, 
  Bone, 
  Baby, 
  Wind, 
  FlaskConical,
  Leaf,
  Brain,
  Thermometer,
  Volume2
} from 'lucide-react';

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
    <div style={{ paddingBottom: '80px' }}>
      {/* ─── HERO SECTION ─── */}
      <section id="products-hero" style={{ 
        position: 'relative', 
        padding: '120px 5vw 80px', 
        background: 'linear-gradient(135deg, white 0%, var(--gray-50) 100%)',
        overflow: 'hidden'
      }}>
        {/* Animated Orbs & Grid */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 60%)', opacity: 0.08, filter: 'blur(60px)', borderRadius: '50%', animation: 'floatBadgeAlt 8s infinite ease-in-out' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--secondary-light) 0%, transparent 70%)', opacity: 0.06, filter: 'blur(80px)', borderRadius: '50%', animation: 'floatBadge 10s infinite ease-in-out' }}></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
           <div className="fade-in" style={{ flex: '1 1 500px', maxWidth: '700px' }}>
             <div className="hero-eyebrow" style={{ cursor: 'default' }}>
               <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', animation: 'pulse 2s infinite' }}></span>
               Global Supply Division
             </div>
             
             <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 68px)', color: 'var(--primary)', marginBottom: '28px', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
               Leading The Way With Our <br/>
               <span style={{ color: 'var(--secondary)', position: 'relative', display: 'inline-block' }}>
                 Product Portfolio
                 <span style={{ position: 'absolute', bottom: '4px', left: 0, right: 0, height: '6px', background: 'var(--secondary)', opacity: 0.15, borderRadius: '4px' }}></span>
               </span>
             </h1>
             
             <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '48px', fontWeight: '400', maxWidth: '600px' }}>
               Supplying a comprehensive and strategically structured portfolio of generic and specialty medicines for global healthcare markets.
             </p>
             
             <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
               <a href="#core-categories" style={{ 
                 display: 'inline-flex', alignItems: 'center', gap: '12px',
                 background: 'var(--primary)', color: 'white', 
                 padding: '18px 36px', borderRadius: '100px', 
                 fontSize: '16px', fontWeight: '700', 
                 textDecoration: 'none', transition: 'var(--transition)',
                 boxShadow: '0 8px 24px rgba(27,54,93,0.3)',
                 cursor: 'pointer'
               }}
               onMouseOver={e => {e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(27,54,93,0.4)';}}
               onMouseOut={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,54,93,0.3)';}}
               >
                 Explore Products <span style={{ transition: 'transform 0.3s ease' }}>→</span>
               </a>
             </div>
           </div>

           {/* Engaging Visual Block Instead of Text Only */}
           <div className="fade-in" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
             <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
               <div style={{ position: 'absolute', top: '-10%', right: '-10%', background: 'white', backdropFilter: 'blur(10px)', border: '1px solid var(--gray-200)', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', animation: 'floatBadge 5s infinite ease-in-out', zIndex: 1 }}>
                 <div style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '28px' }}>13+</div>
                 <div style={{ color: 'var(--gray-500)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Therapeutic Areas</div>
               </div>
               
               <div style={{ background: 'var(--gray-50)', backdropFilter: 'blur(20px)', border: '1px solid var(--gray-200)', borderRadius: '32px', padding: '40px', boxShadow: '0 32px 64px rgba(27,54,93,0.1)' }}>
                 <img src="/assets/products-graphic.png" alt="Arvind Pharmaceuticals Portfolio" style={{ width: '100%', height: 'auto', borderRadius: '16px', mixBlendMode: 'multiply', opacity: '0.9', transform: 'scale(1.1) translateY(-10px)' }} />
               </div>

               <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', background: 'white', padding: '16px 24px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 16px 32px rgba(27,54,93,0.15)', border: '1px solid var(--gray-200)', animation: 'floatBadgeAlt 6s infinite ease-in-out', zIndex: 2 }}>
                 <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)', color: 'white', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Pill size={20} /></div>
                 <div>
                   <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '15px' }}>Trusted Formulations</div>
                   <div style={{ color: 'var(--gray-500)', fontSize: '13px', fontWeight: '500' }}>Generic & Specialty</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* ─── ABOUT PRODUCT PORTFOLIO ─── */}
      <section style={{ background: 'white' }}>
        <div className="about-layout">
          <div className="about-content fade-in">
            <div className="section-eyebrow">Strategic Sourcing</div>
            <h2 className="section-title">Diverse & Integrated Portfolio</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '17px', lineHeight: '1.8', marginBottom: '24px' }}>
              At Arvind Pharmaceuticals, we supply a comprehensive, diverse, and strategically structured portfolio of generic and specialty medicines to meet the needs of both chronic and acute treatments across international healthcare markets.
            </p>
            <p style={{ color: 'var(--gray-600)', fontSize: '17px', lineHeight: '1.8' }}>
              Through a strong sourcing network and established manufacturing partnerships, we provide access to a wide spectrum of high-quality pharmaceutical products tailored to global demand.
            </p>
          </div>
          <div className="about-visual fade-in">
            <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '400px' }}>
               <img src="/assets/portfolio_lab.png" alt="Pharmaceutical Laboratory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE PRODUCT CATEGORIES ─── */}
      <section id="core-categories" style={{ background: 'var(--bg-soft)' }}>
         <div className="section-eyebrow">Core Expertise</div>
         <h2 className="section-title">Core Product Categories</h2>

         {/* Category 1 – Specialty Medicines (image left) */}
         <div className="about-layout fade-in" style={{ marginTop: '56px' }}>
           <div className="about-visual">
             <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px' }}>
               <img src="/assets/specialty_medicines.png" alt="Specialty Medicines" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
           </div>
           <div className="about-content">
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ color: 'var(--secondary)' }}><Dna size={28} /></div>
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Category 01</span>
             </div>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '20px', fontWeight: '800' }}>Specialty Medicines</h3>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
               At Arvind Pharmaceuticals, we supply a focused portfolio of specialty medicines designed to address complex, chronic, and critical healthcare conditions. These products often require advanced formulation standards, specialized handling, and strict regulatory documentation.
             </p>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8' }}>
               Through our established sourcing network, we provide access to specialty formulations that support evolving treatment needs across international healthcare markets.
             </p>
           </div>
         </div>

         {/* Category 2 – Generic Medicines (image right) */}
         <div className="about-layout fade-in" style={{ direction: 'rtl' }}>
           <div className="about-visual" style={{ direction: 'ltr' }}>
             <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px' }}>
               <img src="/assets/products-graphic.png" alt="Generic Medicines" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
           </div>
           <div className="about-content" style={{ direction: 'ltr' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ color: 'var(--secondary)' }}><Pill size={28} /></div>
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Category 02</span>
             </div>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '20px', fontWeight: '800' }}>Generic Medicines</h3>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
               At Arvind Pharmaceuticals, we supply a broad and well-structured portfolio of generic medicines that support the treatment of both chronic and acute medical conditions across global healthcare markets.
             </p>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8' }}>
               Generic medicines play a vital role in improving access to affordable treatment options while maintaining recognized standards of quality, safety, and efficacy. Through our strong sourcing network, we ensure consistent availability of essential and widely prescribed formulations.
             </p>
           </div>
         </div>

         {/* Category 3 – Injectables (image left) */}
         <div className="about-layout fade-in">
           <div className="about-visual">
             <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px' }}>
               <img src="/assets/hero-pharmacy.png" alt="Injectables" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
           </div>
           <div className="about-content">
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ color: 'var(--secondary)' }}><Syringe size={28} /></div>
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Category 03</span>
             </div>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '20px', fontWeight: '800' }}>Injectables</h3>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
               At Arvind Pharmaceuticals, we supply a range of sterile injectable formulations that support hospitals, clinics, and critical care institutions across international markets.
             </p>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8' }}>
               Injectables require strict quality standards, proper handling, and regulatory-compliant documentation. We ensure disciplined sourcing and professional coordination to maintain product integrity throughout the export process.
             </p>
           </div>
         </div>

         {/* Category 4 – Surgical & Hospital Supplies (image right) */}
         <div className="about-layout fade-in" style={{ direction: 'rtl' }}>
           <div className="about-visual" style={{ direction: 'ltr' }}>
             <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px' }}>
               <img src="/assets/compliance-graphic.png" alt="Surgical & Hospital Supplies" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
           </div>
           <div className="about-content" style={{ direction: 'ltr' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ color: 'var(--secondary)' }}><Stethoscope size={28} /></div>
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Category 04</span>
             </div>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '20px', fontWeight: '800' }}>Surgical &amp; Hospital Supplies</h3>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
               In addition to pharmaceutical formulations, we also support healthcare institutions with selected surgical and hospital-use products as per international demand.
             </p>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8' }}>
               Our portfolio is structured to address both chronic and acute treatment requirements across multiple medical specialties.
             </p>
           </div>
         </div>

         {/* Category 5 – Herbal & Ayurvedic / Nutraceutical Products (image left) */}
         <div className="about-layout fade-in">
           <div className="about-visual">
             <div className="about-img-block" style={{ padding: 0, overflow: 'hidden', minHeight: '380px' }}>
               <img src="/assets/herbal_nutraceuticals.png" alt="Herbal & Ayurvedic / Nutraceutical Products" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
           </div>
           <div className="about-content">
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <div style={{ color: 'var(--secondary)' }}><Leaf size={28} /></div>
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)' }}>Category 05</span>
             </div>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--primary)', marginBottom: '20px', fontWeight: '800' }}>Herbal &amp; Ayurvedic / Nutraceutical Products</h3>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
               At Arvind Pharmaceuticals, we also supply a premium range of Herbal, Ayurvedic, and Nutraceutical products. These formulations combine traditional wisdom with modern scientific standards to support holistic wellness and preventive healthcare.
             </p>
             <p style={{ color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.8' }}>
               Our portfolio includes high-quality dietary supplements, vitamins, and herbal extracts tailored for global consumers seeking natural health solutions. Through our disciplined sourcing network, we ensure all products meet required quality benchmarks for international markets.
             </p>
           </div>
         </div>
      </section>

      {/* ─── THERAPEUTIC AREAS ─── */}
      <section>
         <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Extensive Coverage</div>
         <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>Therapeutic Areas We Serve</h2>
         <div style={{ 
           display: 'grid', 
           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
           gap: '32px' 
         }}>
           {[
             { title: "Anti-Infectives", icon: <ShieldAlert />, desc: "Comprehensive range of antibiotics, antivirals, antifungals, and anti-malarial formulations." },
             { title: "Cardiovascular Diseases", icon: <Activity />, desc: "Medicines supporting the management of hypertension, heart conditions, and cardiovascular disorders." },
             { title: "Critical Care", icon: <Zap />, desc: "High-importance formulations including injectables and supportive therapies for emergency settings." },
             { title: "Dermatology", icon: <Flame />, desc: "Topical and systemic treatments for skin-related conditions and infections." },
             { title: "Gastroenterology", icon: <Droplets />, desc: "Medicines addressing digestive system disorders and gastrointestinal infections." },
             { title: "Gynaecology", icon: <UserPlus />, desc: "Formulations supporting women's health, including hormonal and infection-related treatments." },
             { title: "Nephrology", icon: <Microscope />, desc: "Medicines related to kidney care, dialysis support, and associated conditions." },
             { title: "Oncology", icon: <FlaskConical />, desc: "Selected specialty formulations supporting cancer-related therapeutic requirements." },
             { title: "Ophthalmology", icon: <Eye />, desc: "Eye care products including drops and ophthalmic preparations." },
             { title: "Orthopaedics", icon: <Bone />, desc: "Pain management and anti-inflammatory medicines supporting bone and joint care." },
             { title: "Paediatrics", icon: <Baby />, desc: "Age-appropriate formulations for infant and child healthcare needs." },
             { title: "Respiratory", icon: <Wind />, desc: "Medicines for asthma, allergies, and respiratory tract infections." },
             { title: "Urology", icon: <Activity />, desc: "Treatments addressing urinary tract conditions and related disorders." },
             { title: "Neurology / CNS", icon: <Brain />, desc: "Medicines supporting neurological and psychiatric conditions including epilepsy, depression, and anxiety disorders." },
             { title: "Endocrinology / Diabetology", icon: <Thermometer />, desc: "Formulations for diabetes management, thyroid disorders, and hormonal balance." },
             { title: "Nutrition & Nutraceuticals", icon: <Leaf />, desc: "Dietary supplements, vitamins, and wellness products supporting overall health and preventive care." },
             { title: "Pain Management", icon: <Activity />, desc: "Analgesic and anti-inflammatory formulations for acute and chronic pain conditions." },
             { title: "ENT", icon: <Volume2 />, desc: "Products for ear, nose, and throat conditions including infections, allergies, and congestion." }
           ].map((area, index) => (
             <div key={index} className="fade-in" style={{ 
               padding: '32px', 
               background: 'white', 
               borderRadius: '20px', 
               border: '1px solid var(--gray-200)', 
               transition: 'var(--transition)',
               boxShadow: 'var(--shadow-sm)'
             }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                   <div style={{ color: 'var(--secondary)' }}>{area.icon}</div>
                   <h4 style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: '700' }}>{area.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.6' }}>{area.desc}</p>
             </div>
           ))}
         </div>
      </section>

      {/* ─── CALL TO ACTION SECTION ─── */}
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
         <div style={{ position: 'relative', zIndex: 1 }} className="fade-in">
           <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '32px', fontWeight: '800', color: 'white' }}>
             Delivering reliable pharmaceutical solutions to global healthcare markets.
           </h2>
           <Link to="/contact" className="btn-primary" style={{ background: 'var(--accent)', border: 'none', padding: '18px 48px' }}>
             Contact Us
           </Link>
         </div>
         {/* Decorative circle */}
         <div style={{ 
           position: 'absolute', 
           bottom: '-50px', 
           right: '-50px', 
           width: '300px', 
           height: '300px', 
           background: 'rgba(255,255,255,0.05)', 
           borderRadius: '50%' 
         }}></div>
      </section>
    </div>
  );
};

export default Products;
