import React, { useState } from 'react';
import { MessageSquare, Phone, X, Image, Car, ChevronRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

export default function FloatingActions({ setActivePage, openInquiryModal, openRateChartModal }) {
  const [chatOpen, setChatOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Download Full Delcon Rate Chart",
      text: "Hello Amit ji, please share the official Delcon Homes Rate Chart with block-wise prices."
    },
    {
      title: "Book Free Site Visit (Free AC Cab)",
      text: "Hello Amit ji, I want to book a free site visit to inspect plots in Patna this weekend."
    },
    {
      title: "Commercial Plots @ ₹3,299/sq.ft",
      text: "Hello Amit ji, I am interested in Highway-facing Commercial Plots for business/investment."
    },
    {
      title: "11 to 18 Months EMI Option Details",
      text: "Hello Amit ji, please explain the EMI installment schemes and down payment terms."
    }
  ];

  const handlePromptClick = (text) => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setChatOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Widget (Desktop & Tablet) */}
      <div style={{
        position: 'fixed',
        bottom: '88px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }} className="desktop-floating-actions">
        <style>{`
          @media (max-width: 768px) {
            .desktop-floating-actions {
              bottom: 80px !important;
              right: 16px !important;
            }
            .mobile-bottom-bar {
              display: flex !important;
            }
          }
        `}</style>

        {/* Interactive Chat Popup Bubble */}
        {chatOpen && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '18px',
            width: '320px',
            boxShadow: '0 12px 35px rgba(0,0,0,0.22)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            marginBottom: '14px',
            overflow: 'hidden',
            animation: 'floatSlow 0.3s ease-out'
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
              color: '#FFFFFF',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/logo.png"
                  alt="Amit Chaurasiya"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    objectFit: 'contain',
                    padding: '2px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Amit Kumar Chaurasiya</h4>
                  <div style={{ fontSize: '0.72rem', color: '#BBF7D0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }}></span>
                    Online & Ready to Help
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{ color: '#FFFFFF', opacity: 0.8, padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div style={{ padding: '14px', background: '#F8FAFC' }}>
              <div style={{
                background: '#FFFFFF',
                padding: '10px 12px',
                borderRadius: '12px',
                fontSize: '0.84rem',
                color: '#1E293B',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                marginBottom: '12px'
              }}>
                👋 Hello! I am Amit Kumar Chaurasiya. Which project or plot details would you like to explore? Tap below to chat instantly:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {quickPrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePromptClick(item.text)}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      padding: '8px 10px',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#25D366';
                      e.currentTarget.style.background = '#F0FDF4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronRight size={14} color="#25D366" />
                  </button>
                ))}
              </div>

              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <a
                  href={`tel:+91${CONTACT_INFO.phone}`}
                  style={{
                    fontSize: '0.78rem',
                    color: '#0284C7',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Phone size={12} /> Or Direct Call: +91 {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Buttons Row: Call Now + WhatsApp Float Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Quick Call Button */}
          <a
            href={`tel:+91${CONTACT_INFO.phone}`}
            title="Call Amit Kumar Chaurasiya"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#0284C7',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.45)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Phone size={24} />
          </a>

          {/* WhatsApp Button with pulse animation */}
          <button
            onClick={() => setChatOpen(!chatOpen)}
            title="Chat on WhatsApp"
            className="pulse-animation"
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              background: '#25D366',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <MessageSquare size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (App-like experience) */}
      <div 
        className="mobile-bottom-bar"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          background: '#FFFFFF',
          borderTop: '1px solid #CBD5E1',
          zIndex: 998,
          boxShadow: '0 -4px 15px rgba(0,0,0,0.08)',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '6px 8px'
        }}
      >
        {/* 1. Call Now */}
        <a
          href={`tel:+91${CONTACT_INFO.phone}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 4px',
            color: '#0284C7',
            textDecoration: 'none'
          }}
        >
          <Phone size={20} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '2px' }}>Call Now</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I want to inquire about plots in Patna.")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 4px',
            color: '#25D366',
            textDecoration: 'none'
          }}
        >
          <MessageSquare size={20} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '2px' }}>WhatsApp</span>
        </a>

        {/* 3. Gallery */}
        <button
          onClick={() => {
            setActivePage('gallery');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 4px',
            color: '#0B192C'
          }}
        >
          <Image size={20} color="#D48D00" />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '2px' }}>Gallery</span>
        </button>

        {/* 4. Book Visit */}
        <button
          onClick={() => openInquiryModal()}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 4px',
            color: '#C68A02'
          }}
        >
          <Car size={20} />
          <span style={{ fontSize: '0.72rem', fontWeight: 800, marginTop: '2px' }}>Book Visit</span>
        </button>
      </div>
    </>
  );
}
