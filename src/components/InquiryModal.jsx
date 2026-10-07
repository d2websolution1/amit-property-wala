import React, { useState } from 'react';
import { X, Phone, MapPin, User, MessageSquare } from 'lucide-react';
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
    handleWhatsAppDirect();
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

              {/* Action Buttons - Direct WhatsApp Submit */}
              <div style={{ marginTop: '6px' }}>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Details on WhatsApp
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
