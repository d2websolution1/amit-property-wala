import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Car,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { PROJECTS_DATA, CONTACT_INFO, COMMERCIAL_RATE } from '../data/projectsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: 'DELCON CITY & DREAM CITY',
    plotSize: '1200 sq.ft',
    visitDate: '',
    pickupLocation: 'Patna (Free AC Cab Pickup)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Is immediate property registry and mutation (Dakhil-Kharij) done?",
      a: "Yes, all Delcon Homes projects have 100% clear title and revenue-verified land. On full payment, the Sale Deed (Kewala) is registered immediately at the Registry Office, followed by Mutation (Dakhil-Kharij)."
    },
    {
      q: "What is the EMI process and tenure?",
      a: "You can book your preferred plot with 25% to 30% down payment. The remaining amount can be paid in easy monthly installments of 6, 11, or 18 months directly to the company — no bank loan required."
    },
    {
      q: "Is there any charge for a Site Visit?",
      a: "Absolutely not! We provide a free air-conditioned (AC) cab pick and drop facility for you and your family from anywhere in Patna."
    },
    {
      q: "What are the rates for Commercial Plots?",
      a: `Commercial plots are available on the main 60ft & 80ft roads across all projects. The rate is ₹3,299 per sq. ft. for One-Time (lump sum) payment and ₹3,599 per sq. ft. on EMI.`
    },
    {
      q: "How to reach the Patna One Plaza office?",
      a: `Our office is located at 'Patna One Plaza', 5th Floor, Room No. 501, at Dak Bangla Chauraha — the heart of Patna. It is just 5 minutes from Patna Junction.`
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide Name and Mobile Number");
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Site Visit & Plot Inquiry*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🏗️ *Project:* ${formData.project}\n` +
      `📐 *Plot Size:* ${formData.plotSize}\n` +
      `📅 *Preferred Date:* ${formData.visitDate || 'This Weekend'}\n` +
      `🚗 *Pickup Location:* ${formData.pickupLocation}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
      `\n_Sent to Amit Kumar Chaurasiya via Property Portal_`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner - Light Luxury Style */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        color: '#0F2848',
        padding: '54px 0 38px',
        borderBottom: '3px solid #F1A80A',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <span className="badge-gold">Get in Touch</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#0F2848', marginTop: '10px', fontWeight: 900 }}>
            Contact Us & Book a Free Site Visit
          </h1>
          <p style={{ color: '#475569', fontSize: '1rem', marginTop: '8px', maxWidth: '750px', lineHeight: 1.6 }}>
            Directly connect with <strong>Amit Kumar Chaurasiya</strong> for genuine Delcon Homes plots, verified rate sheets, and complimentary pick-and-drop vehicle service.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Contact Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* Card 1: Phone */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Phone size={24} />
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#0B192C', fontWeight: 800, marginBottom: '4px' }}>
              Call Directly
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '12px' }}>
              Direct line to Amit Kumar Chaurasiya
            </p>
            <a
              href={`tel:+91${CONTACT_INFO.phone}`}
              style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0284C7', display: 'block', marginBottom: '8px' }}
            >
              +91 {CONTACT_INFO.phoneFormatted}
            </a>
            <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 700 }}>● Instant Assistance</span>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <MessageSquare size={24} />
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#0B192C', fontWeight: 800, marginBottom: '4px' }}>
              WhatsApp Chat
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '12px' }}>
              Get rate chart & layout PDF on phone
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Amit ji, I want the Delcon Homes Rate Chart.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.15rem', fontWeight: 800, color: '#16A34A', display: 'block', marginBottom: '8px' }}
            >
              +91 {CONTACT_INFO.phoneFormatted}
            </a>
            <span style={{ fontSize: '0.78rem', color: '#16A34A', fontWeight: 700 }}>● Online 24x7</span>
          </div>

          {/* Card 3: Email */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Mail size={24} />
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#0B192C', fontWeight: 800, marginBottom: '4px' }}>
              Email Inquiry
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '12px' }}>
              Send official investment inquiries
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0B192C', display: 'block', wordBreak: 'break-all', marginBottom: '8px' }}
            >
              {CONTACT_INFO.email}
            </a>
            <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Official Response within 2 hours</span>
          </div>

          {/* Card 4: Office */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F1F5F9', color: '#0F2848', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <MapPin size={24} />
            </div>
            <h3 style={{ fontSize: '1.1rem', color: '#0B192C', fontWeight: 800, marginBottom: '4px' }}>
              Head Office
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748B', marginBottom: '6px' }}>
              Dak Bangla Patna One Plaza, 5th Floor, Suite 501
            </p>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B192C' }}>
              Patna, Bihar - 800001
            </div>
            <span style={{ fontSize: '0.78rem', color: '#64748B', display: 'block', marginTop: '6px' }}>Mon - Sun: 9:30 AM - 7:30 PM</span>
          </div>
        </div>

        {/* Two Column: Form & Office Landmark Visual */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'start',
          marginBottom: '50px'
        }}>
          {/* Booking Form */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid #E2E8F0'
          }}>
            <span className="badge-gold">Complimentary AC Cab</span>
            <h2 style={{ fontSize: '1.4rem', color: '#0B192C', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
              Book Free Site Visit Cab
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B192C', marginBottom: '8px' }}>
                  Thank You, {formData.name}!
                </h4>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Your site visit request has been received. Amit Kumar Chaurasiya will call you shortly at <strong>+91 {formData.phone}</strong>.
                </p>
                <button
                  onClick={handleWhatsAppDirect}
                  className="btn-whatsapp"
                  style={{ width: '100%', padding: '12px' }}
                >
                  <MessageSquare size={18} /> Confirm on WhatsApp Directly
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10 digit number"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Select Preferred Project:
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      background: '#FFF'
                    }}
                  >
                    <option value="COMMERCIAL PLOTS (₹3299/sqft)">🔥 COMMERCIAL PLOTS (₹3,299 / ₹3,599 EMI)</option>
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} (₹{p.oneTimeRate}/sqft)</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Plot Size:
                    </label>
                    <select
                      name="plotSize"
                      value={formData.plotSize}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        background: '#FFF'
                      }}
                    >
                      <option value="600 sq.ft">600 sq.ft</option>
                      <option value="1000 sq.ft">1000 sq.ft</option>
                      <option value="1200 sq.ft (1 Katha)">1200 sq.ft (1 Katha)</option>
                      <option value="1500 sq.ft">1500 sq.ft</option>
                      <option value="2000+ sq.ft">2000+ sq.ft</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Preferred Date:
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Pickup Location (Anywhere in Patna):
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="e.g. Danapur Station, Boring Road, Bailey Road"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="submit"
                    className="btn-primary-gold"
                    style={{ flex: 1, padding: '12px' }}
                  >
                    <Send size={16} /> Submit Site Visit Booking
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn-whatsapp"
                    style={{ padding: '12px 18px' }}
                    title="Send on WhatsApp"
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Office Address Visual Guide & Map Mock */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div>
              <span className="badge-verified">Patna City Central Location</span>
              <h3 style={{ fontSize: '1.3rem', color: '#0B192C', fontWeight: 800, marginTop: '8px' }}>
                Office Landmark & Directions
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px' }}>
                Visit Amit Kumar Chaurasiya at Patna's most recognized commercial address.
              </p>
            </div>

            {/* Stylized Map Card */}
            <div style={{
              background: 'linear-gradient(135deg, #0B192C 0%, #173860 100%)',
              borderRadius: '16px',
              padding: '24px',
              color: '#FFFFFF',
              border: '1px solid rgba(241,168,10,0.3)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#F1A80A', color: '#0B192C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>PATNA ONE PLAZA</h4>
                  <div style={{ fontSize: '0.78rem', color: '#F1A80A', fontWeight: 700 }}>Floor 5, Suite 501</div>
                </div>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '16px' }}>
                📍 <strong>Full Address:</strong> Dak Bangla Patna One plaza 5th floor 501 pin code 800001, Patna, Bihar.
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '12px', fontSize: '0.82rem', color: '#94A3B8' }}>
                ✓ 5 min from Patna Junction Railway Station<br />
                ✓ Opposite Fraser Road / Dak Bangla Chauraha<br />
                ✓ Dedicated visitor parking & high-speed elevators
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`tel:+91${CONTACT_INFO.phone}`}
                className="btn-call"
                style={{ flex: 1, padding: '11px', fontSize: '0.9rem' }}
              >
                <Phone size={16} /> Direct Call: 7677971641
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I want the live location of your Patna One Plaza office.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, padding: '11px', fontSize: '0.9rem' }}
              >
                <MessageSquare size={16} /> Get Live Location
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="badge-gold">Frequently Asked Questions</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', color: '#0B192C', marginTop: '6px' }}>
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontSize: '0.96rem',
                      fontWeight: 700,
                      color: isOpen ? '#0B192C' : '#334155',
                      background: isOpen ? '#FEF3C7' : '#FFFFFF',
                      transition: 'background 0.2s'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#D97706" /> : <ChevronDown size={20} color="#64748B" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '18px 22px', fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, borderTop: '1px solid #FDE68A' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
