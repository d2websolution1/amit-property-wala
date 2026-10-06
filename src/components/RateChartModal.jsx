import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, MessageSquare, Printer, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, COMMERCIAL_RATE } from '../data/projectsData';

export default function RateChartModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(7, 16, 30, 0.88)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '18px',
        width: '100%',
        maxWidth: '920px',
        maxHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        overflow: 'hidden',
        border: '1px solid rgba(241, 168, 10, 0.4)'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '16px 24px',
          background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid #F1A80A'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#F1A80A" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                  DELCON HOMES PVT. LTD. - Official Rate Chart
                </h3>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1', marginTop: '2px' }}>
                Authorized Partner: Amit Kumar Chaurasiya (Mob: +91 {CONTACT_INFO.phone})
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Zoom Controls */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '2px' }}>
              <button 
                onClick={handleZoomOut} 
                title="Zoom Out"
                style={{ padding: '6px', color: '#CBD5E1' }}
              >
                <ZoomOut size={16} />
              </button>
              <button 
                onClick={handleResetZoom}
                title="Reset Zoom" 
                style={{ padding: '4px 8px', color: '#F1A80A', fontSize: '0.75rem', fontWeight: 700 }}
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button 
                onClick={handleZoomIn} 
                title="Zoom In"
                style={{ padding: '6px', color: '#CBD5E1' }}
              >
                <ZoomIn size={16} />
              </button>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
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
        </div>

        {/* Modal Body - Scanned Document Preview */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          background: '#F1F5F9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: '12px',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-out',
            maxWidth: '100%'
          }}>
            <img 
              src="/images/delcon_official_rate_chart.jpg" 
              alt="Delcon Homes Pvt. Ltd. Official Rate Chart Block Wise"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Highlight note about commercial plots */}
          <div style={{
            marginTop: '20px',
            background: '#FFFBEB',
            border: '1px solid #FCD34D',
            padding: '12px 18px',
            borderRadius: '10px',
            color: '#92400E',
            fontSize: '0.88rem',
            textAlign: 'center',
            maxWidth: '750px',
            width: '100%'
          }}>
            <strong>Commercial Plots Special Mandate:</strong> {COMMERCIAL_RATE.note}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div style={{
          padding: '14px 24px',
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '0.86rem', color: '#64748B' }}>
            Need plot availability confirmation? Contact Amit Chaurasiya directly.
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="/images/delcon_official_rate_chart.jpg"
              download="Delcon_Homes_Official_Rate_Chart.jpg"
              className="btn-outline-navy"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Download size={15} /> Download Scanned Copy
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Amit ji, I inspected the Delcon Homes Rate Chart and want to discuss booking a plot.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <MessageSquare size={15} /> Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
