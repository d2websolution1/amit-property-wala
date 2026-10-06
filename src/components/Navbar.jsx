import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  Building2,
  Info,
  Award,
  FileSpreadsheet,
  BookOpen
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

export default function Navbar({ activePage, setActivePage, openInquiryModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Always show when near top
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 6) {
        // Scrolling down – hide
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (lastScrollY.current - currentY > 6) {
        // Scrolling up – show
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'projects', label: 'Projects & Rates', icon: FileSpreadsheet },
    { id: 'blog', label: 'Blog & Guides', icon: BookOpen, badge: 'New' },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: MapPin }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="site-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Top Ticker Notification - Light Gold Luxury Marquee */}
      <div className="ticker-wrap" style={{ background: 'linear-gradient(90deg, #FEF3C7 0%, #FFFBEB 50%, #FEF3C7 100%)', color: '#92400E', borderBottom: '1px solid #FDE68A', padding: '6px 0', fontSize: '0.82rem', fontWeight: 700 }}>
        <div className="ticker-content">
          <span>
            ✨ <strong>DELCON HOMES PVT. LTD. AUTHORIZED CHANNEL PARTNER</strong> ✨ |
            📍 Prime Office: Dak Bangla Patna One Plaza, 5th Floor, Suite 501, Patna 800001 |
            🔥 New Commercial Plots Across All Projects @ ₹3,299/sq.ft (One-Time) & ₹3,599/sq.ft (EMI) |
            🚗 Free Site Visit with AC Pick & Drop anywhere in Patna |
            📞 Call Consultant Amit Kumar Chaurasiya: +91 76779 71641 |
            📜 100% Legal Title, Immediate Spot Registry & Possession
          </span>
          <span style={{ marginLeft: '40px' }}>
            ✨ <strong>DELCON HOMES PVT. LTD. AUTHORIZED CHANNEL PARTNER</strong> ✨ |
            📍 Prime Office: Dak Bangla Patna One Plaza, 5th Floor, Suite 501, Patna 800001 |
            🔥 New Commercial Plots Across All Projects @ ₹3,299/sq.ft (One-Time) & ₹3,599/sq.ft (EMI) |
            🚗 Free Site Visit with AC Pick & Drop anywhere in Patna |
            📞 Call Consultant Amit Kumar Chaurasiya: +91 76779 71641 |
            📜 100% Legal Title, Immediate Spot Registry & Possession
          </span>
        </div>
      </div>

      {/* Top Utility Contact Bar - Crisp Light Style */}
      <div style={{ background: '#F8FAFC', color: '#475569', fontSize: '0.82rem', padding: '7px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0F2848' }}>
              <Award size={14} color="#D97706" />
              <strong>Amit Kumar Chaurasiya</strong> (Founder & Property Advisor)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#D97706" /> Dak Bangla Patna One Plaza, 5th Floor - 501
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D97706'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <Mail size={13} color="#D97706" /> {CONTACT_INFO.email}
            </a>
            <a
              href={`tel:+91${CONTACT_INFO.phone}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#D97706', fontWeight: 800 }}
            >
              <Phone size={13} /> {CONTACT_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px' }}>
        {/* Brand Logo - Uses Official Logo Image */}
        <div
          onClick={() => handleNavClick('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <img
            src="/logo.png"
            alt="Amit Chaurasiya Property Wala Official Logo"
            style={{
              height: '52px',
              width: 'auto',
              maxHeight: '52px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))'
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F2848', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                CHAURASIYA
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #F1A80A 0%, #D48D00 100%)',
                color: '#0B192C',
                fontSize: '0.66rem',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '4px',
                textTransform: 'uppercase'
              }}>
                Property Wala
              </span>
            </div>
            {/* <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Investment & Delcon Homes Partner</span>
              <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <ShieldCheck size={12} /> Verified
              </span>
            </div> */}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          <style>{`
            @media (min-width: 1100px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#0B192C' : '#475569',
                  background: isActive ? 'rgba(241, 168, 10, 0.15)' : 'transparent',
                  borderBottom: isActive ? '2px solid #F1A80A' : '2px solid transparent',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#0B192C';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#475569';
                }}
              >
                <Icon size={16} color={isActive ? '#D48D00' : '#64748B'} />
                <span>{link.label}</span>
                {link.badge && (
                  <span style={{
                    fontSize: '0.62rem',
                    background: link.id === 'videos' ? '#EF4444' : link.id === 'blog' ? '#F1A80A' : '#10B981',
                    color: link.id === 'blog' ? '#0B192C' : '#FFFFFF',
                    padding: '1px 5px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Quick CTA Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '10px' }} className="desktop-nav">
          <button
            onClick={() => openInquiryModal()}
            className="btn-primary-gold"
            style={{ padding: '9px 20px', fontSize: '0.88rem' }}
          >
            Book Free Site Visit
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            padding: '8px',
            borderRadius: '8px',
            color: '#0B192C',
            background: '#F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          padding: '16px 20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(241, 168, 10, 0.15)' : '#F8FAFC',
                    color: isActive ? '#0B192C' : '#334155',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '1rem',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={18} color={isActive ? '#D48D00' : '#64748B'} />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      background: '#10B981',
                      color: '#FFFFFF',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 700
                    }}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openInquiryModal();
                }}
                className="btn-primary-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Free Site Visit (Patna)
              </button>

              <a
                href={`tel:+91${CONTACT_INFO.phone}`}
                className="btn-call"
                style={{ width: '100%', fontSize: '0.9rem', justifyContent: 'center' }}
              >
                <Phone size={16} /> Direct Call: {CONTACT_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
