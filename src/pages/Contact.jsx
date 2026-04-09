import React, { useState } from 'react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our export executive will contact you shortly.');
  };

  const faqs = [
    { q: "What is your Minimum Order Quantity (MOQ)?", a: "MOQs are highly dependent on the specific formulation, dosage form, and packaging requirements (e.g., customized packaging vs standard export packaging). Please reach out with your exact requirements for a precise quote." },
    { q: "Do you provide dossiers for Ministry of Health registration?", a: "Yes, our regulatory affairs team is highly experienced in preparing and submitting comprehensive product registration dossiers in both CTD and ACTD formats tailored to your country's guidelines." },
    { q: "How do you handle shipping for temperature-sensitive drugs?", a: "We utilize validated cold-chain logistics. Products like vaccines, insulin, and certain injectables are packed with specialized refrigerants and shipped via expedited air freight with continuous temperature data loggers." },
    { q: "Are your manufacturing facilities audited?", a: "Absolutely. We strictly partner with WHO-GMP, ISO, and CDSCO certified facilities. Most facilities also hold local approvals from international health ministries across Africa and the CIS." }
  ];

  return (
    <section id="contact" style={{ minHeight: 'calc(100vh - 72px)', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="contact-layout">
        <div className="contact-info">
          <div className="section-eyebrow">Get in Touch</div>
          <h2 className="section-title">Ready to Forge a Global Partnership?</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '18px', lineHeight: '1.8', marginBottom: '48px' }}>Whether you're an importer seeking to source high-efficacy generic pharmaceuticals, a hospital network looking for reliable hospital supplies, or a distributor requiring full dossier support for local registrations, our specialized export executives are ready to assist you.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">✉️</div>
              <div>
                <h4>Global Sales & Inquiries</h4>
                <a href="mailto:arvindpharma@gmail.com">arvindpharma@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">📞</div>
              <div>
                <h4>Export Division Helpline</h4>
                <a href="tel:+917057306968">+91 70573 06968</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">🏢</div>
              <div>
                <h4>Corporate Headquarters</h4>
                <span>Pune, Maharashtra, India - 411001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="contact-form-wrap">
            <h3>Initiate a Trade Inquiry</h3>
            <p style={{ fontSize: '14px', color: 'var(--gray-600)', marginBottom: '32px' }}>Complete the form below to request product lists, COAs, pricing catalogs, or regulatory assistance.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Institution</label>
                  <input type="text" id="company" required placeholder="Your Organization Name" />
                </div>
              </div>
              <div className="form-row">
                 <div className="form-group">
                   <label htmlFor="email">Corporate Email Address</label>
                   <input type="email" id="email" required placeholder="john@example.com" />
                 </div>
                 <div className="form-group">
                   <label htmlFor="country">Destination Country</label>
                   <input type="text" id="country" required placeholder="E.g., Kenya, Uzbekistan" />
                 </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject / Specific Formulation Needed</label>
                <input type="text" id="subject" required placeholder="E.g. Quotation for Diclofenac Injections" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Detailed Message</label>
                <textarea id="message" rows="4" required placeholder="Please provide details about required volume, packaging nuances, or dossier requirements..."></textarea>
              </div>
              <button type="submit" className="form-submit">Submit Official Inquiry</button>
            </form>
          </div>
        </div>
      </div>

      {/* NEW FAQ SECTION */}
      <div style={{ marginTop: '120px', maxWidth: '900px', marginInline: 'auto' }}>
         <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--primary)', marginBottom: '56px', fontWeight: '800' }}>Frequently Asked Questions</h3>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, index) => (
               <div key={index} style={{ border: '1px solid var(--gray-200)', borderRadius: '20px', overflow: 'hidden', background: 'white', boxShadow: activeFaq === index ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transition: 'var(--transition)' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', background: 'white', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                     <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '17px' }}>{faq.q}</span>
                     <span style={{ color: 'var(--secondary)', fontSize: '24px', transition: 'var(--transition)', transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  {activeFaq === index && (
                     <div style={{ padding: '0 32px 32px', background: 'white' }}>
                       <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>{faq.a}</p>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Contact;
