import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight,
  TrendingUp,
  Building,
  Check,
  FileSpreadsheet,
  Car
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

const SLIDES = [
  {
    id: 1,
    image: '/images/township_hero.jpg',
    tag: 'Delcon Homes Official Partner',
    title: '100% Verified Legal Plots with Immediate Registry & Possession in Patna',
    subtitle: 'Prime Residential Townships in Patna, Bihta Ring Road & Expressway with Easy 11 to 18 Months EMI facility.',
    highlight: 'Plots starting from ₹1,150 / sq.ft | Zero Brokerage',
    ctaPrimary: 'View Rate Chart',
    ctaAction: 'projects'
  },
  {
    id: 2,
    image: '/images/commercial_hero.jpg',
    tag: 'High Return Commercial Investment',
    title: 'Prime 60ft & 80ft Road-Facing Commercial Plots Across All Projects',
    subtitle: 'Super prime commercial land for Shopping Centers, Showrooms, Hospitals & Clinics @ ₹3,299/sq.ft (One-Time) & ₹3,599/sq.ft (EMI).',
    highlight: 'Immediate High Rental Yield & Capital Appreciation',
    ctaPrimary: 'Commercial Deals',
    ctaAction: 'projects'
  },
  {
    id: 3,
    image: '/images/farmhouse_hero.jpg',
    tag: 'Scenic Weekend Retreats & Hill View',
    title: 'Scenic Weekend Villa & Farmhouse Plots at Giriyak & Hills Court Ranchi',
    subtitle: 'Surround yourself with nature, lush greenery, and mountain views at Giriyak starting @ only ₹799/sq.ft and Hills Court Ranchi.',
    highlight: 'Special 11 to 18 Months Easy Installment Plan',
    ctaPrimary: 'Explore Farmhouses',
    ctaAction: 'projects'
  }
];

export default function HeroSlider({ setActivePage, openInquiryModal, openRateChartModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchLocation, setSearchLocation] = useState('all');
  const [searchBudget, setSearchBudget] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActivePage('projects');
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '620px', background: '#0B192C' }}>
      {/* Slides Carousel */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 6s linear',
              transform: isActive ? 'scale(1.04)' : 'scale(1)'
            }}
          >
            {/* Background Image with Crisp Enhanced Brightness */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.68) saturate(1.15)'
              }}
            />
            {/* Lighter, Refined Luxury Gradient Veil */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, rgba(15,40,72,0.88) 0%, rgba(15,40,72,0.6) 55%, rgba(15,40,72,0.22) 100%)'
              }}
            />
          </div>
        );
      })}

      {/* Auto-play Progress Indicator Bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'rgba(255,255,255,0.15)', zIndex: 30 }}>
        <div style={{
          height: '100%',
          width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
          background: 'linear-gradient(90deg, #F1A80A, #FDD835)',
          transition: 'width 0.4s ease-out'
        }} />
      </div>

      {/* Main Slide Content Over Carousel */}
      <div className="container" style={{ position: 'relative', zIndex: 10, minHeight: '620px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 24px' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Trust Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(241, 168, 10, 0.18)',
            border: '1px solid rgba(241, 168, 10, 0.4)',
            padding: '6px 16px',
            borderRadius: '50px',
            color: '#F8C045',
            fontSize: '0.86rem',
            fontWeight: 700,
            marginBottom: '18px',
            backdropFilter: 'blur(8px)'
          }}>
            <ShieldCheck size={16} color="#F1A80A" />
            <span>{SLIDES[currentSlide].tag}</span>
            <span style={{ color: '#FFFFFF', opacity: 0.5 }}>|</span>
            <span style={{ color: '#10B981' }}>Patna One Plaza Office</span>
          </div>

          {/* Heading */}
          <h1 style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            marginBottom: '18px',
            textShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}>
            {SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: '#E2E8F0',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: 1.6,
            marginBottom: '22px',
            maxWidth: '720px'
          }}>
            {SLIDES[currentSlide].subtitle}
          </p>

          {/* Price Highlight Strip */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(241, 168, 10, 0.5)',
            padding: '8px 18px',
            borderRadius: '12px',
            color: '#F1A80A',
            fontSize: '1.05rem',
            fontWeight: 800,
            marginBottom: '30px',
            backdropFilter: 'blur(10px)'
          }}>
            <TrendingUp size={20} />
            <span>{SLIDES[currentSlide].highlight}</span>
          </div>

          {/* Action Button Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <button
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary-gold"
              style={{ fontSize: '1rem', padding: '14px 28px' }}
            >
              <span>View All 19 Projects Rate Chart</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openInquiryModal()}
              className="btn-outline-white"
              style={{ fontSize: '1rem', padding: '13px 26px' }}
            >
              <Car size={18} color="#F1A80A" />
              <span>Book Free Site Visit (Cab Provided)</span>
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I saw your website and want to discuss plots in Patna.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '1rem', padding: '13px 22px' }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Amit Chaurasiya</span>
            </a>
          </div>

          {/* Quick 4 Trust USPs */}
          <div style={{
            marginTop: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '0.88rem' }}>
              <div style={{ background: '#10B981', borderRadius: '50%', padding: '2px', display: 'flex' }}><Check size={12} color="#FFF" /></div>
              <span>100% Clear Title & Sale Deed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '0.88rem' }}>
              <div style={{ background: '#10B981', borderRadius: '50%', padding: '2px', display: 'flex' }}><Check size={12} color="#FFF" /></div>
              <span>Immediate Spot Possession</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '0.88rem' }}>
              <div style={{ background: '#10B981', borderRadius: '50%', padding: '2px', display: 'flex' }}><Check size={12} color="#FFF" /></div>
              <span>Flexible 11 to 18 Months EMI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '0.88rem' }}>
              <div style={{ background: '#10B981', borderRadius: '50%', padding: '2px', display: 'flex' }}><Check size={12} color="#FFF" /></div>
              <span>Zero Brokerage / Direct Deal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(11,25,44,0.6)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#F1A80A';
          e.currentTarget.style.color = '#0B192C';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(11,25,44,0.6)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(11,25,44,0.6)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#F1A80A';
          e.currentTarget.style.color = '#0B192C';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(11,25,44,0.6)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators Dots */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        gap: '10px'
      }}>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '36px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: idx === currentSlide ? '#F1A80A' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
