import React, { useState } from 'react';
import { 
  Play, 
  Video, 
  MapPin, 
  Clock, 
  Eye, 
  ExternalLink, 
  Share2, 
  CheckCircle,
  Building2,
  Calendar,
  Smartphone,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { VIDEOS_DATA, VIDEO_CATEGORIES } from '../data/videosData';
import { CONTACT_INFO } from '../data/projectsData';

export default function VideosPage({ setSelectedVideo, openInquiryModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = activeCategory === 'all' 
    ? VIDEOS_DATA 
    : VIDEOS_DATA.filter(v => v.category === activeCategory);

  const featuredVideo = VIDEOS_DATA[0];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', color: '#0F2848', paddingBottom: '80px' }}>
      {/* Top Hero Banner - Crisp Modern Light Luxury */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        padding: '54px 0 36px',
        borderBottom: '2px solid #F1A80A',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', padding: '5px 14px', borderRadius: '50px', color: '#DC2626', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>
            <Video size={16} /> 4K Drone Surveys & Ground Reality
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#0F2848', fontWeight: 900 }}>
            Project Video Gallery & Drone Tours
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '8px', maxWidth: '780px', lineHeight: 1.6 }}>
            Watch high-definition drone flyovers, active road construction, demarcated plotting, and client registration moments across all Delcon Homes townships.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Featured Showcase Large Player Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
          marginBottom: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          boxShadow: '0 12px 35px rgba(15, 40, 72, 0.08)'
        }}>
          {/* Thumbnail / Video Preview */}
          <div 
            onClick={() => setSelectedVideo(featuredVideo)}
            style={{ position: 'relative', minHeight: '300px', cursor: 'pointer', overflow: 'hidden' }}
          >
            <img 
              src={featuredVideo.thumbnail} 
              alt={featuredVideo.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(15, 40, 72, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s'
            }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: '#F1A80A',
                color: '#0B192C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(241, 168, 10, 0.6)',
                transition: 'transform 0.2s'
              }}>
                <Play size={32} fill="#0B192C" style={{ marginLeft: '4px' }} />
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: '#EF4444',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: '50px',
              fontWeight: 800,
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF', display: 'inline-block' }}></span>
              FEATURED DRONE TOUR
            </div>

            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              background: 'rgba(15, 40, 72, 0.85)',
              color: '#FFFFFF',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 700
            }}>
              {featuredVideo.duration}
            </div>
          </div>

          {/* Details */}
          <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(241, 168, 10, 0.15)', color: '#B45309', padding: '3px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
                <Building2 size={14} /> {featuredVideo.project}
              </div>

              <h2 style={{ fontSize: '1.6rem', color: '#0F2848', fontWeight: 800, lineHeight: 1.3, marginBottom: '12px' }}>
                {featuredVideo.title}
              </h2>

              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {featuredVideo.description}
              </p>

              <div style={{ display: 'flex', gap: '24px', color: '#64748B', fontSize: '0.88rem', marginBottom: '24px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Eye size={16} color="#F1A80A" /> {featuredVideo.views} views
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="#F1A80A" /> {featuredVideo.duration} duration
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedVideo(featuredVideo)}
                className="btn-primary-gold"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <Play size={18} fill="#0B192C" /> Watch in Full HD
              </button>
              <button
                onClick={() => openInquiryModal(featuredVideo.project)}
                className="btn-outline-navy"
                style={{ padding: '12px 20px', fontSize: '0.92rem' }}
              >
                Book Site Inspection
              </button>
            </div>
          </div>
        </div>

        {/* Live WhatsApp Video Tour Call Notice */}
        <div style={{
          background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          border: '1px solid #10B981',
          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Smartphone size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#065F46' }}>
                Live Virtual Tour via WhatsApp Video Call
              </h3>
              <p style={{ color: '#047857', fontSize: '0.88rem', marginTop: '2px' }}>
                Can't visit right now? Request Amit Chaurasiya for a direct video call straight from the project site!
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I want to request a Live WhatsApp Video Call tour of your Delcon township site.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <MessageSquare size={16} /> Request Live Video Call
          </a>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '30px',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '16px'
        }}>
          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 800 : 600,
                  background: isActive ? '#0F2848' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid #0F2848' : '1px solid #CBD5E1',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 40, 72, 0.15)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#F1A80A';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 40, 72, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              {/* Thumbnail Container */}
              <div 
                onClick={() => setSelectedVideo(video)}
                style={{ position: 'relative', height: '210px', cursor: 'pointer', overflow: 'hidden' }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(15, 40, 72, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#F1A80A',
                    color: '#0B192C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 20px rgba(241, 168, 10, 0.5)'
                  }}>
                    <Play size={22} fill="#0B192C" style={{ marginLeft: '3px' }} />
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(15, 40, 72, 0.85)',
                  color: '#FFFFFF',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '0.74rem',
                  fontWeight: 700
                }}>
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 700, marginBottom: '6px' }}>
                  {video.project}
                </div>

                <h3 style={{ fontSize: '1.1rem', color: '#0F2848', fontWeight: 800, lineHeight: 1.4, marginBottom: '10px' }}>
                  {video.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                  {video.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{video.views}</span>

                  <button
                    onClick={() => setSelectedVideo(video)}
                    style={{
                      color: '#D97706',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Play Video <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
