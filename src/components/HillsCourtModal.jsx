import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  MessageSquare, 
  Phone, 
  Compass, 
  Building2, 
  Trees, 
  Car, 
  CheckCircle,
  FileText,
  Navigation
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

export default function HillsCourtModal({ isOpen, onClose, openInquiryModal }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('map'); // 'map', 'landmarks', 'specs'

  if (!isOpen) return null;

  const nearbyLocations = [
    { name: "DAV School", distance: "3 km", type: "School & Education", icon: "🏫" },
    { name: "Ring Road", distance: "4 km", type: "Major Arterial Highway", icon: "🛣️" },
    { name: "Pithouriya Bazar", distance: "4 km", type: "Local Market & Daily Needs", icon: "🛍️" },
    { name: "Birsa Agriculture College", distance: "5 km", type: "Prestigious University", icon: "🎓" },
    { name: "Veterinary College", distance: "5 km", type: "State Veterinary College", icon: "🐾" },
    { name: "Medanta Hospital", distance: "7 km", type: "Multi-Speciality Healthcare", icon: "🏥" },
    { name: "RIMS (Rajendra Institute of Medical Sciences)", distance: "8 km", type: "Premier Government Hospital", icon: "🏥" },
    { name: "Kanke Mentor Hospital", distance: "10 km", type: "Specialized Healthcare", icon: "🏥" },
    { name: "Patratu Dam & Valley", distance: "10 km", type: "Scenic Tourism Hub", icon: "🌊" },
    { name: "Sant Xavier School", distance: "15 km", type: "Reputed Elite School", icon: "🏫" },
    { name: "Ranchi Junction Railway Station", distance: "22 km", type: "Central Rail Connectivity", icon: "🚆" }
  ];

  const layoutBreakdown = [
    { label: "Total Project Land Area", value: "6,00,673 SQ.FT", highlight: true },
    { label: "Total Plots for Sale", value: "3,27,160 SQ.FT (57.39%)", highlight: false },
    { label: "Total Demarcated Plots", value: "246 Plots", highlight: true },
    { label: "Commercial Plots Frontage", value: "17,565 SQ.FT (07 Plots)", highlight: false },
    { label: "Company Farm House", value: "22,488 SQ.FT (3.74%)", highlight: false },
    { label: "Lush Park & Cycle Track", value: "10,812 SQ.FT (1.80%)", highlight: false },
    { label: "Wide Internal Roads", value: "1,75,880 SQ.FT (29.28%)", highlight: false },
    { label: "Road Widths Inside", value: "20ft, 25ft, 30ft Wide Roads + Govt Road", highlight: true },
    { label: "Special Amenities", value: "Pray Area, Fountain, 10ft Cycle Track", highlight: false }
  ];

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(7, 16, 30, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '1150px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
          border: '2px solid #F1A80A'
        }}
      >
        {/* Modal Top Bar */}
        <div style={{
          background: 'linear-gradient(135deg, #0F2848 0%, #1A365D 100%)',
          color: '#FFFFFF',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '3px solid #F1A80A'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F1A80A', color: '#0B192C', padding: '3px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
              <Compass size={13} /> Official Master Plan & Nearest Locations
            </div>
            <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
              HILLS COURT RANCHI, (JHARKHAND)
            </h2>
            <div style={{ fontSize: '0.84rem', color: '#CBD5E1', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} color="#F1A80A" /> Near Pithouriya Bazar, Ring Road & Patratu Dam Corridor
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a 
              href="/hills_court_master_plan.pdf" 
              download="Hills_Court_Ranchi_Master_Plan.pdf"
              className="btn-primary-gold"
              style={{ padding: '8px 14px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={15} /> Download PDF Map
            </a>
            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#EF4444'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{
          display: 'flex',
          background: '#F1F5F9',
          borderBottom: '1px solid #E2E8F0',
          padding: '8px 24px',
          gap: '10px'
        }}>
          <button
            onClick={() => setActiveTab('map')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'map' ? '#0F2848' : 'transparent',
              color: activeTab === 'map' ? '#F1A80A' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            🗺️ Master Layout Map (246 Plots)
          </button>
          <button
            onClick={() => setActiveTab('landmarks')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'landmarks' ? '#0F2848' : 'transparent',
              color: activeTab === 'landmarks' ? '#F1A80A' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            📍 11 Nearest Locations & Distances
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'specs' ? '#0F2848' : 'transparent',
              color: activeTab === 'specs' ? '#F1A80A' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            📊 Layout Land Area Breakdown
          </button>
        </div>

        {/* Modal Body Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          
          {/* TAB 1: MASTER LAYOUT MAP */}
          {activeTab === 'map' && (
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ fontSize: '0.88rem', color: '#64748B' }}>
                  Inspect every plot demarcation, road width (20ft, 25ft, 30ft), and park zone on this certified site map.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                    style={{ padding: '6px 12px', borderRadius: '6px', background: '#F1F5F9', border: '1px solid #CBD5E1', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    <ZoomIn size={14} /> Zoom In
                  </button>
                  <button 
                    onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                    style={{ padding: '6px 12px', borderRadius: '6px', background: '#F1F5F9', border: '1px solid #CBD5E1', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    <ZoomOut size={14} /> Zoom Out
                  </button>
                  <button 
                    onClick={() => setZoomLevel(1)}
                    style={{ padding: '6px 12px', borderRadius: '6px', background: '#F1F5F9', border: '1px solid #CBD5E1', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    <Maximize2 size={14} /> Reset
                  </button>
                </div>
              </div>

              {/* Map Viewer Container with Scroll and Zoom */}
              <div style={{
                position: 'relative',
                background: '#0B192C',
                borderRadius: '16px',
                overflow: 'auto',
                maxHeight: '58vh',
                border: '1px solid #CBD5E1',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)',
                display: 'flex',
                justifyContent: 'center',
                padding: '12px'
              }}>
                <img 
                  src="/images/hills_court_master_plan.png" 
                  alt="Hills Court Ranchi Master Layout Plan"
                  style={{
                    maxWidth: zoomLevel === 1 ? '100%' : 'none',
                    width: `${zoomLevel * 100}%`,
                    height: 'auto',
                    objectFit: 'contain',
                    transition: 'width 0.25s ease',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                />
              </div>

              {/* Quick Map Feature Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginTop: '16px'
              }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>TOTAL PLOTS</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0F2848' }}>246 Plots (Index A - Block)</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>INTERNAL ROADS</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#059669' }}>20', 25' & 30' Wide Roads</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>TOTAL AREA</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#D97706' }}>6,00,673 SQ.FT</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>POPULAR SIZES</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#2563EB' }}>1200, 1500, 1800 & Corner</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 11 NEAREST LOCATIONS */}
          {activeTab === 'landmarks' && (
            <div>
              <div style={{ marginBottom: '16px' }}>
                <span className="badge-gold">Strategic Location & Prime Connectivity</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0F2848', marginTop: '6px' }}>
                  Nearest Important Locations from Hills Court Plot Site
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px' }}>
                  Hills Court Ranchi is exceptionally well-connected to Ranchi Ring Road, top medical hospitals, prominent universities, and tourism spots.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px'
              }}>
                {nearbyLocations.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#F1A80A';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 40, 72, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.6rem' }}>{loc.icon}</span>
                      <div>
                        <div style={{ fontWeight: 800, color: '#0F2848', fontSize: '0.98rem' }}>
                          {loc.name}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                          {loc.type}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      background: '#FEF3C7',
                      color: '#92400E',
                      fontWeight: 900,
                      fontSize: '0.92rem',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      border: '1px solid #FCD34D',
                      whiteSpace: 'nowrap'
                    }}>
                      {loc.distance}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LAYOUT AREA BREAKDOWN */}
          {activeTab === 'specs' && (
            <div>
              <div style={{ marginBottom: '16px' }}>
                <span className="badge-verified">Official Document Figures</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0F2848', marginTop: '6px' }}>
                  Index A - Block Complete Layout Statistics
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px' }}>
                  Official measurement breakdown approved for Hills Court (Ranchi, Jharkhand) project.
                </p>
              </div>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ background: '#0F2848', color: '#FFFFFF' }}>
                      <th style={{ padding: '12px 18px' }}>SPECIFICATION / ZONE</th>
                      <th style={{ padding: '12px 18px', textAlign: 'right' }}>OFFICIAL AREA / COUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layoutBreakdown.map((row, idx) => (
                      <tr 
                        key={idx}
                        style={{ 
                          borderBottom: '1px solid #E2E8F0',
                          background: row.highlight ? 'rgba(241, 168, 10, 0.08)' : (idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC')
                        }}
                      >
                        <td style={{ padding: '12px 18px', fontWeight: row.highlight ? 800 : 600, color: '#0F2848' }}>
                          {row.label}
                        </td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: 800, color: row.highlight ? '#D97706' : '#334155' }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div style={{
          background: '#F8FAFC',
          borderTop: '1px solid #E2E8F0',
          padding: '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '0.86rem', color: '#475569' }}>
            Rate: <strong>₹1,499 /sq.ft</strong> (One-Time) | <strong>₹1,699 /sq.ft</strong> (11 Months EMI)
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                onClose();
                if (openInquiryModal) openInquiryModal("HILLS COURT (RANCHI)");
              }}
              className="btn-primary-gold"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Book Site Visit in Ranchi
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I saw the Hills Court Ranchi Master Layout Plan and want to book a plot in Ranchi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '10px 18px', fontSize: '0.9rem' }}
            >
              <MessageSquare size={16} /> WhatsApp Deal
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
