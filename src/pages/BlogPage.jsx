import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Share2, 
  CheckCircle, 
  Sparkles, 
  HelpCircle,
  X,
  ChevronRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { BLOGS_DATA, BLOG_CATEGORIES } from '../data/blogsData';
import { CONTACT_INFO } from '../data/projectsData';

export default function BlogPage({ openInquiryModal, openRateChartModal, setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = useMemo(() => {
    return BLOGS_DATA.filter((post) => {
      const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOGS_DATA[0];

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* 1. Header Hero Banner - Crisp Modern Light Luxury */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        borderBottom: '2px solid #F1A80A',
        padding: '56px 0 44px',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(241, 168, 10, 0.15)', color: '#B45309', padding: '5px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', border: '1px solid rgba(241, 168, 10, 0.35)' }}>
              <BookOpen size={16} /> Official Real Estate & Legal Knowledge Center
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.9rem)', color: '#0F2848', fontWeight: 900, lineHeight: 1.2 }}>
              Bihar & Patna Real Estate Insights & Guides
            </h1>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '12px', lineHeight: 1.6 }}>
              Written and curated by <strong>Amit Kumar Chaurasiya</strong>. Transparent guidance on plot legalities, registry & mutation laws, Bihta ring road master plans, and Delcon Homes EMI installment strategies.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div style={{
            marginTop: '36px',
            background: '#FFFFFF',
            padding: '16px 20px',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(15, 40, 72, 0.08)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '10px',
              padding: '8px 14px',
              flex: '1 1 300px'
            }}>
              <Search size={18} color="#64748B" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. registry, Bihta, EMI, mutation)..."
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  width: '100%',
                  fontSize: '0.92rem',
                  color: '#0F172A'
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: '#94A3B8' }}>
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openRateChartModal()}
                style={{
                  background: 'rgba(241, 168, 10, 0.12)',
                  color: '#B45309',
                  border: '1px solid rgba(241, 168, 10, 0.35)',
                  padding: '9px 16px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <FileCheck size={16} /> Rate Chart
              </button>
              <button
                onClick={() => openInquiryModal()}
                className="btn-primary-gold"
                style={{ padding: '9px 18px', fontSize: '0.86rem' }}
              >
                Book Free Site Visit
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingTop: '16px',
            paddingBottom: '4px',
            scrollbarWidth: 'none'
          }}>
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    background: isActive ? '#0F2848' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    border: isActive ? '1px solid #0F2848' : '1px solid #CBD5E1',
                    boxShadow: isActive ? '0 4px 12px rgba(15, 40, 72, 0.18)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="container" style={{ marginTop: '40px' }}>
        {/* Featured Spotlight Card */}
        {selectedCategory === 'all' && searchQuery === '' && featuredPost && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            marginBottom: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            transition: 'transform 0.3s'
          }}>
            <div style={{ position: 'relative', minHeight: '260px' }}>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#F1A80A',
                color: '#0F172A',
                fontWeight: 800,
                fontSize: '0.78rem',
                padding: '4px 12px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Sparkles size={14} /> Spotlight Analysis
              </div>
            </div>

            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: '#64748B', marginBottom: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} color="#F1A80A" /> {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} color="#F1A80A" /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 
                  onClick={() => setActiveArticle(featuredPost)}
                  style={{
                    fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)',
                    fontWeight: 800,
                    color: '#0F2848',
                    lineHeight: 1.3,
                    cursor: 'pointer',
                    marginBottom: '8px'
                  }}
                >
                  {featuredPost.title}
                </h2>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#B45309', marginBottom: '14px' }}>
                  {featuredPost.titleHindi}
                </h3>

                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {featuredPost.excerpt}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src="/logo.png"
                    alt="Amit Chaurasiya Logo"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'contain', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '2px' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F2848' }}>{featuredPost.author}</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B' }}>{featuredPost.authorRole}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredPost)}
                  className="btn-primary-gold"
                  style={{ padding: '8px 18px', fontSize: '0.86rem' }}
                >
                  Read Full Guide <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F2848' }}>
              {selectedCategory === 'all' ? 'All Investment & Legal Guides' : `${selectedCategory.toUpperCase()} Articles`}
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#64748B', marginTop: '2px' }}>
              Showing {filteredBlogs.length} comprehensive articles
            </p>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div style={{
            background: '#FFFFFF',
            padding: '60px 20px',
            borderRadius: '16px',
            textAlign: 'center',
            border: '1px solid #E2E8F0'
          }}>
            <Search size={48} color="#94A3B8" style={{ margin: '0 auto 16px' }} />
            <h4 style={{ fontSize: '1.2rem', color: '#0F2848', fontWeight: 700 }}>No articles matched your search</h4>
            <p style={{ color: '#64748B', marginTop: '6px' }}>Try searching with keywords like "EMI", "Bihta", or "Registry".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              style={{
                marginTop: '16px',
                padding: '8px 20px',
                background: '#0F2848',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontWeight: 700
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '24px'
          }}>
            {filteredBlogs.map((post) => (
              <div
                key={post.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 40, 72, 0.12)';
                  e.currentTarget.style.borderColor = '#F1A80A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
                onClick={() => setActiveArticle(post)}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '190px' }}>
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
                    backdropFilter: 'blur(6px)',
                    color: '#F1A80A',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '50px',
                    textTransform: 'uppercase'
                  }}>
                    {post.badge || 'Verified Guide'}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', color: '#64748B', marginBottom: '8px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} color="#F1A80A" /> {post.date}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} color="#F1A80A" /> {post.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F2848', lineHeight: 1.35, marginBottom: '6px' }}>
                      {post.title}
                    </h3>
                    <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#B45309', marginBottom: '10px' }}>
                      {post.titleHindi}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '14px',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F2848', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <img src="/logo.png" alt="Logo" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain' }} />
                      Amit Chaurasiya
                    </span>
                    <span style={{ color: '#D97706', fontSize: '0.84rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Read Now <ChevronRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Box */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FEF9C3 100%)',
          borderRadius: '20px',
          padding: '36px 32px',
          border: '2px solid #F1A80A',
          boxShadow: '0 8px 30px rgba(241, 168, 10, 0.15)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#B45309', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
              <ShieldCheck size={16} /> Direct Legal & Plot Advisory
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F2848' }}>
              Have Questions About Land Papers or Site Visits in Patna?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', marginTop: '6px' }}>
              Speak directly with <strong>Amit Kumar Chaurasiya</strong> for personalized plot shortlisting, registry verification, and free air-conditioned car pickup.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`tel:+91${CONTACT_INFO.phone}`}
              className="btn-call"
              style={{ padding: '12px 22px' }}
            >
              <Phone size={16} /> Call +91 {CONTACT_INFO.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Amit ji, I read your real estate articles and have questions about plots in Patna.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '12px 22px' }}
            >
              <MessageSquare size={16} /> WhatsApp Advisory
            </a>
          </div>
        </div>
      </div>

      {/* 3. Full Article Reader Modal */}
      {activeArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 40, 72, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '840px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            border: '2px solid #F1A80A',
            position: 'relative'
          }}>
            {/* Modal Header Bar */}
            <div style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/logo.png"
                  alt="Amit Chaurasiya Logo"
                  style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'contain' }}
                />
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F2848' }}>Amit Kumar Chaurasiya Advisory</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Delcon Homes Authorized Channel Partner</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => handleShare(activeArticle)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    color: '#0F2848',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}
                >
                  <Share2 size={15} /> Share
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#F1F5F9',
                    color: '#0F2848',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div style={{ padding: '28px 32px' }}>
              {/* Badge & Dates */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="badge-gold">
                  <Tag size={12} /> {activeArticle.badge || 'Verified Advisory'}
                </span>
                <span style={{ fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} color="#F1A80A" /> {activeArticle.date}
                </span>
                <span style={{ fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} color="#F1A80A" /> {activeArticle.readTime}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: '#0F2848', fontWeight: 900, lineHeight: 1.25, marginBottom: '8px' }}>
                {activeArticle.title}
              </h1>
              <h2 style={{ fontSize: '1.15rem', color: '#B45309', fontWeight: 700, marginBottom: '20px' }}>
                {activeArticle.titleHindi}
              </h2>

              {/* Cover Image */}
              <div style={{ borderRadius: '14px', overflow: 'hidden', maxHeight: '340px', marginBottom: '24px' }}>
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Summary Lead */}
              <div style={{
                background: '#F8FAFC',
                borderLeft: '4px solid #F1A80A',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                fontSize: '1rem',
                color: '#334155',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}>
                <strong>Executive Summary:</strong> {activeArticle.summary}
              </div>

              {/* Key Takeaways Box */}
              {activeArticle.keyTakeaways && (
                <div style={{
                  background: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  marginBottom: '28px'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#065F46', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={18} color="#059669" /> Key Highlights & Takeaways
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeArticle.keyTakeaways.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#047857', fontSize: '0.92rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Sections */}
              {activeArticle.sections && activeArticle.sections.map((sec, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F2848', marginBottom: '8px' }}>
                    {sec.heading}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7 }}>
                    {sec.content}
                  </p>
                </div>
              ))}

              {/* FAQ Section */}
              {activeArticle.faq && (
                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F2848', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={18} color="#F1A80A" /> Frequently Asked Questions
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {activeArticle.faq.map((item, idx) => (
                      <div key={idx} style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px 18px', border: '1px solid #E2E8F0' }}>
                        <div style={{ fontWeight: 700, color: '#0F2848', fontSize: '0.94rem', marginBottom: '4px' }}>
                          Q: {item.q}
                        </div>
                        <div style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          A: {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA Banner */}
              <div style={{
                marginTop: '36px',
                background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>Ready to Inspect Plots on Site?</h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.88rem', marginTop: '4px' }}>Free AC car pickup from anywhere in Patna with zero booking obligation.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      openInquiryModal();
                    }}
                    className="btn-primary-gold"
                    style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                  >
                    Book Free Site Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
