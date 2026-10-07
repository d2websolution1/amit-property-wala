import React from 'react';
import { X, MessageSquare, Phone, MapPin, Eye, Calendar, Clock, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

export default function VideoPlayerModal({ video, onClose, openInquiryModal }) {
  if (!video) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(7, 16, 30, 0.92)',
      backdropFilter: 'blur(10px)',
      zIndex: 1100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: '#0B192C',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        border: '1px solid rgba(241, 168, 10, 0.4)'
      }}>
        {/* Modal Top Bar */}
        <div style={{
          padding: '16px 22px',
          background: '#102A45',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/logo.png"
              alt="Amit Chaurasiya Property Wala"
              style={{
                height: '34px',
                width: 'auto',
                borderRadius: '6px',
                background: '#FFFFFF',
                padding: '2px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            />
            <div>
              <span style={{ fontSize: '0.72rem', background: '#F1A80A', color: '#0B192C', padding: '2px 8px', borderRadius: '4px', fontWeight: 800, textTransform: 'uppercase' }}>
                {video.category} Walkthrough
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, marginTop: '4px' }}>
                {video.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#EF4444'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Frame Area */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000000' }}>
          {video.videoSrc ? (
            <video
              src={video.videoSrc}
              controls
              autoPlay
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: '#000000'
              }}
            />
          ) : (
            <iframe
              src={video.videoEmbedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          )}
        </div>

        {/* Video Details & Project Specs */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1, background: '#0B192C', color: '#CBD5E1' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '14px', fontSize: '0.86rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F1A80A', fontWeight: 700 }}>
              <MapPin size={15} /> {video.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} /> {video.duration}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={15} /> {video.views}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} /> {video.date}
            </span>
          </div>

          <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#E2E8F0', marginBottom: '16px' }}>
            {video.description}
          </p>

          {/* Key Highlights list */}
          {video.highlights && (
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>
                On-Site Highlights:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {video.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      color: '#F8FAFC',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <CheckCircle size={13} color="#10B981" /> {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '16px'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Consultant In Charge:</div>
              <div style={{ color: '#FFFFFF', fontWeight: 700 }}>Amit Kumar Chaurasiya</div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Amit ji, I just watched the video for "${video.title}" and want site details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '9px 18px', fontSize: '0.88rem' }}
              >
                <MessageSquare size={16} /> WhatsApp Video Inquiry
              </a>

              <button
                onClick={() => {
                  onClose();
                  openInquiryModal(video.project);
                }}
                className="btn-primary-gold"
                style={{ padding: '9px 18px', fontSize: '0.88rem' }}
              >
                Book Site Inspection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
