import React, { useState } from 'react';
import { X, Camera, MapPin, MessageSquare, ZoomIn, Play, Video, Download } from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';
import { VIDEOS_DATA } from '../data/videosData';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/hills_court_master_plan.png',
    title: 'Hills Court Ranchi - Official Master Layout Map (246 Plots)',
    location: 'Ranchi, Jharkhand (Near Ring Road & Patratu Dam)',
    category: 'farmhouse',
    badge: 'Master Map (246 Plots)',
    isMap: true
  },
  {
    id: 2,
    src: '/images/awadh.png',
    title: 'Awadh Ashiyana Muzaffarpur',
    location: 'Muzaffarpur Corridor, Bihar',
    category: 'township',
    badge: 'Verified Project'
  },
  {
    id: 3,
    src: '/images/township_hero.jpg',
    title: 'Delcon City Township',
    location: 'Patna - Bihta Ring Road',
    category: 'township',
    badge: 'Featured'
  },
  {
    id: 4,
    src: '/images/commercial_hero.jpg',
    title: 'Commercial Plot Zone',
    location: 'Prime Road-Facing Location',
    category: 'commercial',
    badge: 'Hot'
  },
  {
    id: 5,
    src: '/images/farmhouse_hero.jpg',
    title: 'Farmhouse & Nature Retreat',
    location: 'Rajgir, Nalanda',
    category: 'farmhouse',
    badge: 'Scenic'
  },
  {
    id: 6,
    src: '/images/township_hero.jpg',
    title: 'Hi-Tech Town Project',
    location: 'Patna Expressway Corridor',
    category: 'township',
    badge: 'Premium'
  },
  {
    id: 7,
    src: '/images/commercial_hero.jpg',
    title: 'Hills Court Ranchi',
    location: 'Ranchi Hill View',
    category: 'farmhouse',
    badge: 'Hill View'
  },
  {
    id: 8,
    src: '/images/farmhouse_hero.jpg',
    title: 'East Park Residential',
    location: 'Patna East Growth Corridor',
    category: 'township',
    badge: 'Affordable'
  },
  {
    id: 9,
    src: '/images/township_hero.jpg',
    title: 'Green Valley Township',
    location: 'Bihta Expressway',
    category: 'township',
    badge: 'Eco'
  },
  {
    id: 10,
    src: '/images/commercial_hero.jpg',
    title: 'Commercial Hub Plaza',
    location: 'Delcon City Main Road',
    category: 'commercial',
    badge: 'New'
  },
  {
    id: 11,
    src: '/images/farmhouse_hero.jpg',
    title: 'Rajgir Valley View',
    location: 'Rajgir, Bihar',
    category: 'farmhouse',
    badge: 'Budget'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'township', label: 'Township' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'farmhouse', label: 'Farmhouse' }
];

export default function GalleryPage({ openInquiryModal, setActivePage, setSelectedVideo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [localVideo, setLocalVideo] = useState(null);

  const realVideos = VIDEOS_DATA.filter((v) => v.videoSrc);

  const filtered = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
        padding: '54px 0 42px',
        borderBottom: '3px solid #F1A80A',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/township_hero.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.12
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge-gold" style={{ marginBottom: '14px', display: 'inline-block' }}>
            <Camera size={13} style={{ display: 'inline', marginRight: '5px' }} />
            Official Site Photos & 4K Video Tours
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>
            Project Gallery & Live Videos
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '650px' }}>
            Watch real on-site drone walkthroughs & inspect genuine ground photos of Delcon Homes townships, commercial zones, and scenic farmhouse retreats.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Section 1: Live Project Videos (4 Official Videos) */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          border: '1px solid #E2E8F0',
          marginBottom: '46px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239, 68, 68, 0.1)', color: '#DC2626', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                <Video size={13} /> Official On-Site Video Footage
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#0F2848', fontWeight: 900 }}>
                Live Project Videos & Walkthroughs ({realVideos.length} Videos)
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.92rem', marginTop: '4px' }}>
                Click any video below to watch actual road construction, plot demarcation, and site reality.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {realVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => {
                  if (setSelectedVideo) {
                    setSelectedVideo(video);
                  } else {
                    setLocalVideo(video);
                  }
                }}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#F1A80A';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 40, 72, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                  <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(15, 40, 72, 0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '50%',
                      background: '#F1A80A', color: '#0B192C',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(241, 168, 10, 0.6)'
                    }}>
                      <Play size={22} fill="#0B192C" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: '8px', right: '8px',
                    background: 'rgba(15, 40, 72, 0.85)', color: '#FFFFFF',
                    padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700
                  }}>
                    {video.duration}
                  </div>
                </div>
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.74rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {video.project}
                  </div>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0F2848', lineHeight: 1.35, marginBottom: '8px', flex: 1 }}>
                    {video.title}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} color="#F1A80A" /> {video.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Photos Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#0F2848', fontWeight: 900 }}>
            Project Photo Gallery
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.92rem', marginTop: '4px' }}>
            Filter photos by township, commercial, or farmhouse plots
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px', justifyContent: 'center' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                fontWeight: selectedCategory === cat.id ? 800 : 600,
                fontSize: '0.92rem',
                background: selectedCategory === cat.id
                  ? 'linear-gradient(135deg, #F1A80A 0%, #D48D00 100%)'
                  : '#FFFFFF',
                color: selectedCategory === cat.id ? '#0B192C' : '#64748B',
                border: selectedCategory === cat.id ? 'none' : '1px solid #E2E8F0',
                boxShadow: selectedCategory === cat.id ? '0 4px 14px rgba(241,168,10,0.35)' : '0 2px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Photo Grid */}
        <div style={{
          columns: '3 320px',
          gap: '20px'
        }}>
          {filtered.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxImg(img)}
              style={{
                breakInside: 'avoid',
                marginBottom: '20px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s',
                background: '#0B192C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  height: index % 3 === 0 ? '280px' : '220px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
              />

              {/* Hover Overlay */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(0deg, rgba(11,25,44,0.88) 0%, rgba(11,25,44,0.1) 60%, transparent 100%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                padding: '16px'
              }}>
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: '#F1A80A', color: '#0B192C',
                  padding: '3px 10px', borderRadius: '4px',
                  fontSize: '0.72rem', fontWeight: 800
                }}>
                  {img.badge}
                </div>

                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                  borderRadius: '50%', width: '34px', height: '34px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <ZoomIn size={16} color="#FFFFFF" />
                </div>

                <h3 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>
                  {img.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#CBD5E1', fontSize: '0.8rem' }}>
                  <MapPin size={12} color="#F1A80A" /> {img.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '56px',
          background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
          borderRadius: '24px',
          padding: '48px 32px',
          textAlign: 'center',
          border: '1px solid rgba(241,168,10,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at 70% 50%, rgba(241,168,10,0.08) 0%, transparent 60%)'
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F1A80A', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Book a Free Site Visit
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#FFFFFF', fontWeight: 900, marginTop: '10px', marginBottom: '12px' }}>
              See These Plots in Person
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '500px', margin: '0 auto 28px' }}>
              Get a free AC cab pick-up from anywhere in Patna for a guided site tour with Amit Kumar Chaurasiya.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => openInquiryModal()}
                className="btn-primary-gold"
                style={{ padding: '14px 32px', fontSize: '1rem' }}
              >
                Book Free Site Visit
              </button>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Amit ji, I saw the gallery and want to visit the plots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                <MessageSquare size={18} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.92)', zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden' }}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ background: '#0F2848', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>{lightboxImg.title}</div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <MapPin size={12} color="#F1A80A" /> {lightboxImg.location}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {lightboxImg.isMap && (
                  <a
                    href="/hills_court_master_plan.pdf"
                    download="Hills_Court_Ranchi_Master_Plan.pdf"
                    className="btn-primary-gold"
                    style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                  >
                    <Download size={14} /> Download PDF
                  </a>
                )}
                <button
                  onClick={() => setLightboxImg(null)}
                  style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', cursor: 'pointer' }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fallback Local Video Modal */}
      {localVideo && (
        <div
          onClick={() => setLocalVideo(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(7,16,30,0.92)', backdropFilter: 'blur(10px)',
            zIndex: 2100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#0B192C', borderRadius: '18px', width: '100%', maxWidth: '850px', overflow: 'hidden', border: '1px solid #F1A80A', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
          >
            <div style={{ padding: '14px 20px', background: '#102A45', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <span style={{ fontSize: '0.72rem', background: '#F1A80A', color: '#0B192C', padding: '2px 8px', borderRadius: '4px', fontWeight: 800, textTransform: 'uppercase' }}>
                  {localVideo.project}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, margin: '4px 0 0' }}>{localVideo.title}</h3>
              </div>
              <button
                onClick={() => setLocalVideo(null)}
                style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000000' }}>
              <video
                src={localVideo.videoSrc}
                controls
                autoPlay
                playsInline
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
