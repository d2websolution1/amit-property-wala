import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  ArrowUpRight,
  ExternalLink,
  FileCheck
} from 'lucide-react';
import { CONTACT_INFO, COMMERCIAL_RATE } from '../data/projectsData';

export default function Footer({ setActivePage, openInquiryModal, openRateChartModal }) {
  const quickLinks = [
    { id: 'home', label: 'Home Page' },
    { id: 'projects', label: 'Rate Chart & All Projects' },
    { id: 'blog', label: 'Real Estate Blog & Guides' },
    { id: 'about', label: 'About Amit Kumar Chaurasiya' },
    { id: 'contact', label: 'Book Free Site Visit' }
  ];

  const topProjects = [
    "Delcon City & Dream City (₹1399/sqft)",
    "Hi-Tech Town Bihta Corridor (₹1499/sqft)",
    "Orchard Green Block A & OG (₹1750/sqft)",
    "North Park & North Park Ext. (₹2000-₹3000)",
    "Pragati Nagar Patna (₹2200/sqft)",
    "Hills Court Ranchi (₹1499/sqft)",
    "Giriyak Farmhouse Plots (₹799/sqft)",
    "Commercial Plots Highway Frontage (₹3299/sqft)"
  ];

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#07101E', color: '#94A3B8', paddingTop: '60px', paddingBottom: '30px', borderTop: '4px solid #F1A80A' }}>
      <div className="container">
        {/* Top Highlight Banner in Footer */}
        <div style={{
          background: 'linear-gradient(135deg, #102A45 0%, #1A3E6D 100%)',
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '50px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          border: '1px solid rgba(241, 168, 10, 0.3)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F1A80A', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>
              <ShieldCheck size={18} /> Official Channel Partner
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '6px', fontWeight: 800 }}>
              Delcon Homes Pvt. Ltd. Rate Chart Verified
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginTop: '4px' }}>
              All 19 township projects with authentic 11-18 month EMI options & instant possession.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => openRateChartModal()}
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '10px 18px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileCheck size={16} color="#F1A80A" /> View Original Scanned Chart
            </button>
            <button
              onClick={() => openInquiryModal()}
              className="btn-primary-gold"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Free Site Visit Pickup
            </button>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="Amit Chaurasiya Property Wala"
                style={{
                  height: '48px',
                  width: 'auto',
                  maxHeight: '48px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  padding: '3px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 800 }}>CHAURASIYA</h4>
                <p style={{ color: '#F1A80A', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Property Wala & Investment</p>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94A3B8', marginBottom: '16px' }}>
              Led by <strong style={{ color: '#F8FAFC' }}>Amit Kumar Chaurasiya</strong>, providing transparent, 100% legal, registry-ready residential and commercial plots across Patna, Bihta, Ranchi, and Nalanda with flexible EMI plans.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981' }}>
                <CheckCircle size={15} /> 100% Mutation & Posh Gated Communities
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981' }}>
                <CheckCircle size={15} /> Free Site Visit in Air-Conditioned Vehicle
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981' }}>
                <CheckCircle size={15} /> Direct Owner/Developer Transparency
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', borderBottom: '2px solid #F1A80A', paddingBottom: '8px', display: 'inline-block' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    style={{
                      color: '#CBD5E1',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F1A80A';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowUpRight size={14} color="#F1A80A" /> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Projects */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', borderBottom: '2px solid #F1A80A', paddingBottom: '8px', display: 'inline-block' }}>
              Top Delcon Projects
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {topProjects.map((proj, idx) => (
                <li key={idx} style={{ fontSize: '0.86rem', color: '#CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ color: '#F1A80A', fontWeight: 700 }}>•</span>
                  <span>{proj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', borderBottom: '2px solid #F1A80A', paddingBottom: '8px', display: 'inline-block' }}>
              Head Office (Patna)
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#F1A80A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>Patna One Plaza</strong>
                  <span style={{ color: '#CBD5E1' }}>5th Floor, Suite No. 501, Dak Bangla Chauraha, Patna, Bihar - 800001</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#F1A80A" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:+91${CONTACT_INFO.phone}`} style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem' }}>
                    +91 {CONTACT_INFO.phone}
                  </a>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Amit Kumar Chaurasiya (Direct)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#F1A80A" style={{ flexShrink: 0 }} />
                <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: '#CBD5E1', wordBreak: 'break-all' }}>
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} color="#F1A80A" style={{ flexShrink: 0 }} />
                <span style={{ color: '#CBD5E1' }}>{CONTACT_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Plot Special Notice Strip */}
        <div style={{
          background: 'rgba(241, 168, 10, 0.1)',
          borderLeft: '4px solid #F1A80A',
          padding: '12px 18px',
          borderRadius: '8px',
          marginBottom: '30px',
          fontSize: '0.88rem',
          color: '#F8FAFC'
        }}>
          <strong style={{ color: '#F1A80A' }}>Important Notice (Commercial Plots):</strong> {COMMERCIAL_RATE.note}
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Chaurasiya Investment Property Wala</strong> - Amit Kumar Chaurasiya. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Patna One Plaza, Dak Bangla, Patna 800001</span>
            <span>•</span>
            <span style={{ color: '#F1A80A' }}>Delcon Homes Channel Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
