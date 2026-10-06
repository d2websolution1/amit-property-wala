import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, Calendar, MapPin, User, FileText } from 'lucide-react';
import { PROJECTS_DATA, CONTACT_INFO } from '../data/projectsData';

export default function InquiryModal({ isOpen, onClose, preselectedProject = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: preselectedProject || 'DELCON CITY & DREAM CITY',
    plotSize: '1200 sq.ft',
    purpose: 'Residential Home',
    visitDate: '',
    pickupLocation: 'Patna (Free AC Cab Pickup)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill your Name and Mobile Number");
      return;
    }

    // Save lead in localStorage for local persistence
    try {
      const existingLeads = JSON.parse(localStorage.getItem('property_inquiries') || '[]');
      existingLeads.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('property_inquiries', JSON.stringify(existingLeads));
    } catch (err) {
      console.error("Local storage error", err);
    }

    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Property Inquiry / Site Visit Request*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🏗️ *Project:* ${formData.project}\n` +
      `📐 *Plot Size:* ${formData.plotSize}\n` +
      `🎯 *Purpose:* ${formData.purpose}\n` +
      `📅 *Preferred Visit Date:* ${formData.visitDate || 'This Weekend'}\n` +
      `🚗 *Pickup Location:* ${formData.pickupLocation}\n` +
      (formData.message ? `💬 *Note:* ${formData.message}\n` : '') +
      `\n_Sent from Chaurasiya Property Wala Portal_`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(11, 25, 44, 0.85)',
      backdropFilter: 'blur(6px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '560px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        border: '1px solid rgba(241, 168, 10, 0.4)'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '16px 22px',
          background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '3px solid #F1A80A'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/logo.png"
              alt="Amit Chaurasiya Property Wala"
              style={{
                height: '42px',
                width: 'auto',
                borderRadius: '8px',
                background: '#FFFFFF',
                padding: '2px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            />
            <div>
              <span style={{ fontSize: '0.72rem', color: '#F1A80A', fontWeight: 800, textTransform: 'uppercase' }}>
                Free Site Visit & Consultation
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                Book Your Dream Plot
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#EF4444'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                background: '#ECFDF5', 
                color: '#10B981', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px' 
              }}>
                <CheckCircle size={40} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                Thank You, {formData.name}!
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Your request for <strong>{formData.project}</strong> has been received. Amit Kumar Chaurasiya will call you shortly at <strong>+91 {formData.phone}</strong> to confirm your site visit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={handleWhatsAppDirect}
                  className="btn-whatsapp"
                  style={{ width: '100%', fontSize: '1rem', padding: '12px' }}
                >
                  <MessageSquare size={18} /> Send Details Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    color: '#64748B',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                    <User size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Mobile Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 36px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                    <Phone size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              {/* Project Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Select Delcon Project *
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
                    background: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="COMMERCIAL PLOTS (₹3299/sqft)">🔥 COMMERCIAL PLOTS (₹3,299 / ₹3,599 EMI) Across All Sites</option>
                  {PROJECTS_DATA.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (One-Time: ₹{p.oneTimeRate} {p.emiRate ? `| EMI: ₹${p.emiRate}` : ''})
                    </option>
                  ))}
                </select>
              </div>

              {/* Plot Size & Purpose */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Approx. Plot Size
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
                      outline: 'none',
                      background: '#FFF'
                    }}
                  >
                    <option value="600 sq.ft (Budget Plot)">600 sq.ft (Budget Plot)</option>
                    <option value="1000 sq.ft">1,000 sq.ft</option>
                    <option value="1200 sq.ft (Standard 1 Katha)">1,200 sq.ft (Standard 1 Katha)</option>
                    <option value="1500 sq.ft">1,500 sq.ft</option>
                    <option value="2000 sq.ft">2,000 sq.ft</option>
                    <option value="3000+ sq.ft (Farmhouse/Commercial)">3,000+ sq.ft (Commercial/Farm)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Purchase Intent
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none',
                      background: '#FFF'
                    }}
                  >
                    <option value="Residential Home Construction">Home Construction</option>
                    <option value="Investment / Capital Growth">Investment (High ROI)</option>
                    <option value="Commercial Shop / Plaza">Commercial Shop / Plaza</option>
                    <option value="Farmhouse Retreat">Farmhouse Retreat</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Free Pickup */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Preferred Visit Date
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
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Pickup Location (Patna)
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="e.g. Danapur, Boring Rd, Kankarbagh"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Need corner plot / looking for 11 months EMI details..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Free Pick & Drop note */}
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '0.82rem',
                color: '#166534',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <MapPin size={16} color="#16A34A" />
                <span>Complimentary Site Visit: Free AC Cab Pick & Drop anywhere in Patna.</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="submit"
                  className="btn-primary-gold"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <Send size={16} /> Confirm Booking Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-whatsapp"
                  style={{ padding: '12px 18px' }}
                  title="Direct WhatsApp"
                >
                  <MessageSquare size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
