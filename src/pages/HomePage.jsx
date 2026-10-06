import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Video, 
  Play, 
  FileText, 
  TrendingUp, 
  Car, 
  Users, 
  Award,
  Clock,
  Sparkles,
  Percent,
  Compass,
  Star,
  BookOpen
} from 'lucide-react';
import { PROJECTS_DATA, COMMERCIAL_RATE, CONTACT_INFO } from '../data/projectsData';
import { VIDEOS_DATA } from '../data/videosData';
import { BLOGS_DATA } from '../data/blogsData';

export default function HomePage({ setActivePage, openInquiryModal, openRateChartModal, setSelectedVideo }) {
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 6);
  const homeVideos = VIDEOS_DATA.slice(0, 3);
  const homeBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <div style={{ background: '#F8FAFC' }}>
      {/* 1. Hero Slider */}
      <HeroSlider 
        setActivePage={setActivePage} 
        openInquiryModal={openInquiryModal} 
        openRateChartModal={openRateChartModal} 
      />

      {/* 2. Key Trust Bar */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '24px 0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <div className="container">
          <div className="stagger-children" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>100% Legal Registry</h4>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Direct Khata & Legal Title</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>Immediate Possession</h4>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Immediate Spot Possession</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>11 to 18 Months EMI</h4>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Easy Monthly Installments</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FDF2F8', color: '#DB2777', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Car size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A' }}>Free Site Visit Cab</h4>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>Free AC Pickup Across Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commercial Rate Highlight Special Banner */}
      <section className="container" style={{ margin: '36px auto 10px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0B192C 0%, #1A3E6D 100%)',
          borderRadius: '18px',
          padding: '28px 32px',
          color: '#FFFFFF',
          border: '2px solid #F1A80A',
          boxShadow: '0 12px 35px rgba(11,25,44,0.18)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F1A80A', color: '#0B192C', padding: '3px 12px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
              <Sparkles size={14} /> Commercial Special Mandate
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.3 }}>
              Commercial Plots Across All Delcon Townships
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.96rem', marginTop: '6px' }}>
              {COMMERCIAL_RATE.note}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '14px', fontSize: '0.88rem', color: '#FCD34D' }}>
              <span>✓ 60ft & 80ft Main Road Frontage</span>
              <span>✓ Showrooms & Shopping Hub</span>
              <span>✓ Best Capital Appreciation in Bihar</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 18px', borderRadius: '12px', border: '1px solid rgba(241,168,10,0.4)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>ONE-TIME CASH RATE</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#F1A80A' }}>₹3,299 <span style={{ fontSize: '0.8rem', color: '#FFF' }}>/ sq.ft</span></div>
            </div>
            <button
              onClick={() => openInquiryModal("COMMERCIAL PLOTS (₹3299/sqft)")}
              className="btn-primary-gold"
              style={{ width: '100%', padding: '11px 20px', fontSize: '0.9rem' }}
            >
              Enquire Commercial
            </button>
          </div>
        </div>
      </section>

      {/* 4. Featured Township Projects */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <span className="badge-gold animate-scale-in">Verified Townships</span>
              <h2 className="gold-underline" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', color: '#0B192C', marginTop: '8px' }}>
                Featured Delcon Projects & Prime Plots
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.96rem', marginTop: '4px' }}>
                Handpicked prime plotting projects in Patna, Bihta Road, and Ranchi with verified legal clearance.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-outline-navy"
            >
              <span>View All 19 Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Projects Cards Grid */}
          <div className="stagger-children" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Project Image Banner */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(11,25,44,0.85)',
                    color: '#F1A80A',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(241,168,10,0.4)'
                  }}>
                    {project.status}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(16, 185, 129, 0.95)',
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    Block: {project.block}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '0.8rem', marginBottom: '6px' }}>
                    <MapPin size={14} color="#F1A80A" />
                    <span>{project.location}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                    {project.name}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Highlights pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {project.highlights.slice(0, 3).map((hl, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#F1F5F9',
                          color: '#334155',
                          fontSize: '0.74rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontWeight: 600
                        }}
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  {/* Pricing Box */}
                  <div style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    marginBottom: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>ONE-TIME RATE</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0B192C' }}>
                        ₹{project.oneTimeRate} <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/sq.ft</span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                        {project.emiRate ? `${project.emiDuration} EMI` : 'PLAN'}
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: project.emiRate ? '#059669' : '#0B192C' }}>
                        {project.emiRate ? `₹${project.emiRate}/sq.ft` : 'One-Time'}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button
                      onClick={() => openInquiryModal(project.name)}
                      className="btn-primary-gold"
                      style={{ padding: '9px 12px', fontSize: '0.84rem' }}
                    >
                      Book Visit
                    </button>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Namaste Amit ji, I want more details and plot availability for "${project.name}" (Rate: ₹${project.oneTimeRate}/sq.ft).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: '9px 12px', fontSize: '0.84rem' }}
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO SHOW SECTION (Site & Drone Walkthroughs - Modern Light Luxury) */}
      <section style={{ background: '#F1F5F9', color: '#0F2848', padding: '64px 0', position: 'relative', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#DC2626', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                <Video size={14} /> Video Showcase & Site Reality
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: '#0F2848', fontWeight: 900 }}>
                Watch Live Project Tours & On-Site Drone Footage
              </h2>
              <p style={{ color: '#475569', fontSize: '0.96rem', marginTop: '6px' }}>
                Don't just believe words - watch actual 4K drone footage, road construction, and boundary work.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('videos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary-gold"
            >
              <span>Explore All Videos</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Video Cards Grid - Crisp White Luxury Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {homeVideos.map((video) => (
              <div
                key={video.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
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
                {/* Video Thumbnail with Play Button */}
                <div
                  onClick={() => setSelectedVideo(video)}
                  style={{ position: 'relative', height: '200px', cursor: 'pointer', overflow: 'hidden' }}
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
                    background: 'rgba(15, 40, 72, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#F1A80A',
                      color: '#0B192C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(241, 168, 10, 0.6)',
                      transition: 'transform 0.2s'
                    }}>
                      <Play size={24} fill="#0B192C" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(15, 40, 72, 0.85)',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 700, marginBottom: '6px' }}>
                    {video.project}
                  </div>

                  <h3 style={{ fontSize: '1.08rem', color: '#0F2848', fontWeight: 800, lineHeight: 1.4, marginBottom: '10px' }}>
                    {video.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                    {video.description.substring(0, 100)}...
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{video.views}</span>
                    <button
                      onClick={() => setSelectedVideo(video)}
                      style={{ color: '#D97706', fontSize: '0.86rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Watch Video <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5B. REAL ESTATE BLOG & GUIDES (NEW FEATURE) */}
      <section style={{ padding: '64px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(241, 168, 10, 0.15)', color: '#B45309', border: '1px solid rgba(241, 168, 10, 0.35)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                <BookOpen size={14} /> Knowledge & Legal Insights
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: '#0F2848', fontWeight: 900 }}>
                Patna Real Estate Investment & Registry Guides
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.96rem', marginTop: '6px' }}>
                Clear explanations on land registry laws, Bihta elevated corridor growth, and Delcon EMI installment advantages.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-outline-navy"
            >
              <span>View All Guides & Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {homeBlogs.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  setActivePage('blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
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
                <div style={{ height: '180px', position: 'relative' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(15, 40, 72, 0.85)',
                    color: '#F1A80A',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '50px',
                    textTransform: 'uppercase'
                  }}>
                    {post.badge}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '6px' }}>
                      {post.date} • {post.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F2848', lineHeight: 1.35, marginBottom: '6px' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '14px' }}>
                      {post.excerpt.substring(0, 110)}...
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#D97706',
                    fontSize: '0.86rem',
                    fontWeight: 700
                  }}>
                    <span>Read Full Guide</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quick Rate Chart Teaser with Scanned Chart CTA */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
              <div>
                <span className="badge-verified">DELCON HOMES PVT. LTD.</span>
                <h3 style={{ fontSize: '1.6rem', color: '#0B192C', marginTop: '6px' }}>
                  Official Rate Chart & Block-Wise Pricing
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem' }}>
                  Authentic rate snapshot from official document. No hidden charges or extra broker margins.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openRateChartModal()}
                  className="btn-outline-navy"
                  style={{ fontSize: '0.9rem' }}
                >
                  <FileText size={16} /> View Scanned Document
                </button>
                <button
                  onClick={() => {
                    setActivePage('calculator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary-gold"
                  style={{ fontSize: '0.9rem' }}
                >
                  Calculate EMI Now
                </button>
              </div>
            </div>

            {/* Quick table sample of 5 items */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#0B192C', color: '#FFFFFF' }}>
                    <th style={{ padding: '12px 16px', borderRadius: '8px 0 0 0' }}>S.N.</th>
                    <th style={{ padding: '12px 16px' }}>Name of Project</th>
                    <th style={{ padding: '12px 16px' }}>Block</th>
                    <th style={{ padding: '12px 16px' }}>One-Time Rate</th>
                    <th style={{ padding: '12px 16px' }}>EMI Rate</th>
                    <th style={{ padding: '12px 16px', borderRadius: '0 8px 0 0' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECTS_DATA.slice(0, 5).map((p, i) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #E2E8F0', background: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 700 }}>{p.id}</td>
                      <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0F2848' }}>{p.name}</td>
                      <td style={{ padding: '12px 16px' }}>{p.block}</td>
                      <td style={{ padding: '12px 16px', color: '#0B192C', fontWeight: 800 }}>₹{p.oneTimeRate}/-</td>
                      <td style={{ padding: '12px 16px', color: p.emiRate ? '#059669' : '#64748B', fontWeight: 700 }}>
                        {p.emiRate ? `₹${p.emiRate}/- (${p.emiDuration})` : 'NIL'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <button
                          onClick={() => openInquiryModal(p.name)}
                          style={{
                            color: '#0284C7',
                            fontWeight: 700,
                            fontSize: '0.85rem'
                          }}
                        >
                          Book Visit →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <button
                onClick={() => {
                  setActivePage('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  color: '#D48D00',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                View all 19 projects including Giriyak, Ranchi, Kausar City & Commercial Plots <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Amit Chaurasiya Property Wala */}
      <section style={{ padding: '60px 0', background: '#F1F5F9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 46px' }}>
            <span className="badge-gold">Proven Excellence</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', color: '#0B192C', marginTop: '8px' }}>
              Why Choose Amit Chaurasiya Property Wala?
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.96rem', marginTop: '4px' }}>
              Over 10 years of trusted land advisory in Patna, ensuring complete safety for your hard-earned savings.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            <div className="glass-card" style={{ padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                100% Legal & Undisputed Land
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Every single plot undergoes rigorous revenue record verification, clean title deed search, and mutation clearance. Zero land disputes.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Percent size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                Easy Monthly EMI Installments
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Pay nominal down payment and spread the rest over 6, 11, or 18 easy monthly installments without heavy bank interest penalties.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <MapPin size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                Prime Office at Dak Bangla, Patna
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                Meet Amit Kumar Chaurasiya in person at Patna One Plaza, 5th Floor, Suite 501, Dak Bangla Chauraha for face-to-face consultation.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F5F3FF', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Car size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0B192C', fontWeight: 800, marginBottom: '8px' }}>
                Free Site Inspection AC Cab
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                We provide free pick and drop facility in air-conditioned vehicles from anywhere in Patna to visit any of the 19 project sites with family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call To Action Banner with Amit Chaurasiya Contact */}
      <section style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #07101E 0%, #0F2848 100%)',
            borderRadius: '24px',
            padding: '44px 36px',
            color: '#FFFFFF',
            border: '2px solid rgba(241, 168, 10, 0.4)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <span style={{ color: '#F1A80A', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                Immediate Booking & Assistance
              </span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', color: '#FFFFFF', marginTop: '6px' }}>
                Book Your Desired Plot Today!
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '0.98rem', marginTop: '8px', lineHeight: 1.6 }}>
                Direct consultation with <strong>Amit Kumar Chaurasiya</strong>. Get verified registry advice, transparent rate sheet, and free vehicle for site inspection.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '18px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F8FAFC' }}>
                  <Phone size={18} color="#F1A80A" />
                  <strong>+91 {CONTACT_INFO.phoneFormatted}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F8FAFC' }}>
                  <MapPin size={18} color="#F1A80A" />
                  <span>Dak Bangla Patna One Plaza (Floor 5)</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => openInquiryModal()}
                className="btn-primary-gold"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                Book Free Site Visit
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Amit ji, I want to discuss plot booking in Delcon Projects.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '13px 28px', fontSize: '1rem' }}
              >
                <MessageSquare size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
