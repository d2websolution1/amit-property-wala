import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  MessageSquare, 
  FileText, 
  Sparkles,
  Table,
  LayoutGrid,
  Play,
  Compass,
  Navigation,
  Download
} from 'lucide-react';
import { PROJECTS_DATA, COMMERCIAL_RATE, CONTACT_INFO } from '../data/projectsData';
import HillsCourtModal from '../components/HillsCourtModal';

export default function PlotsPage({ openInquiryModal, openRateChartModal, setActivePage, setSelectedVideo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [hillsCourtModalOpen, setHillsCourtModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All 19 Plots' },
    { id: 'patna', label: 'Patna Corridor' },
    { id: 'ranchi', label: 'Ranchi Hills' },
    { id: 'rajgir', label: 'Rajgir & Nalanda' },
    { id: 'scenic', label: 'Valley & Eco Plots' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || 
      project.category === selectedCategory || 
      (selectedCategory === 'rajgir' && (project.category === 'rajgir' || project.category === 'giriyak'));
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.block.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        color: '#0F2848',
        padding: '54px 0 38px',
        borderBottom: '3px solid #F1A80A',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '750px' }}>
              <span className="badge-gold">Delcon Homes Pvt. Ltd. Official</span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#0F2848', marginTop: '10px', fontWeight: 900 }}>
                Available Plots & Block-Wise Rate Chart (19 Projects)
              </h1>
              <p style={{ color: '#475569', fontSize: '1rem', marginTop: '8px', lineHeight: 1.6 }}>
                Browse all available residential, commercial & farmhouse plots with official one-time and EMI rates, directly authorized by Delcon Homes Pvt. Ltd.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={openRateChartModal} className="btn-primary-gold" style={{ fontSize: '0.95rem', padding: '12px 20px' }}>
                <FileText size={18} /> View Scanned Rate Chart
              </button>
              <button
                onClick={() => { setActivePage('calculator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-outline-navy"
                style={{ fontSize: '0.92rem', padding: '10px 18px' }}
              >
                Calculate Monthly EMI
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        <div style={{
          background: 'linear-gradient(90deg, #102A45 0%, #173860 100%)',
          borderRadius: '16px', padding: '20px 24px', marginBottom: '30px',
          border: '1.5px solid #F1A80A', color: '#FFFFFF',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F1A80A', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>
              <Sparkles size={14} /> Official Commercial Notice
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>Commercial Plots Across All Projects</h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.9rem', marginTop: '2px' }}>{COMMERCIAL_RATE.note}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>ONE-TIME RATE</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#F1A80A' }}>₹3,299 /sq.ft</div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>EMI RATE</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#34D399' }}>₹3,599 /sq.ft</div>
            </div>
            <button onClick={() => openInquiryModal("COMMERCIAL PLOTS (₹3299/sqft)")} className="btn-primary-gold" style={{ padding: '8px 16px', fontSize: '0.86rem', marginLeft: '6px' }}>
              Enquire Now
            </button>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '18px 24px', boxShadow: '0 4px 18px rgba(0,0,0,0.04)', marginBottom: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                style={{ padding: '8px 16px', borderRadius: '10px', fontSize: '0.88rem', fontWeight: selectedCategory === cat.id ? 800 : 600, background: selectedCategory === cat.id ? '#0B192C' : '#F1F5F9', color: selectedCategory === cat.id ? '#F1A80A' : '#475569', transition: 'all 0.2s' }}
              >{cat.label}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', minWidth: '240px' }}>
              <input type="text" placeholder="Search plot / project name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '0.88rem', outline: 'none' }}
              />
              <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '10px', padding: '3px' }}>
              <button onClick={() => setViewMode('grid')} title="Grid Card View"
                style={{ padding: '6px 12px', borderRadius: '8px', background: viewMode === 'grid' ? '#FFFFFF' : 'transparent', color: viewMode === 'grid' ? '#0B192C' : '#64748B', boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: 700 }}
              ><LayoutGrid size={15} /> Grid</button>
              <button onClick={() => setViewMode('table')} title="Official Table View"
                style={{ padding: '6px 12px', borderRadius: '8px', background: viewMode === 'table' ? '#FFFFFF' : 'transparent', color: viewMode === 'table' ? '#0B192C' : '#64748B', boxShadow: viewMode === 'table' ? '0 2px 6px rgba(0,0,0,0.1)' : 'none', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: 700 }}
              ><Table size={15} /> Rate Sheet</button>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#64748B' }}>
          Showing <strong>{filteredProjects.length}</strong> of 19 Delcon Plots
        </div>

        {viewMode === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#0B192C', color: '#F1A80A', padding: '3px 8px', borderRadius: '4px', fontSize: '0.74rem', fontWeight: 800 }}>
                    #{project.id} - {project.block}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                    {project.status}
                  </div>
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <MapPin size={13} color="#F1A80A" /> {project.location}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: '#0B192C', fontWeight: 800, marginBottom: '6px' }}>{project.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>{project.description}</p>
                  
                  {/* Master Plan Button for Hills Court */}
                  {project.hasMasterPlan && (
                    <button
                      onClick={() => setHillsCourtModalOpen(true)}
                      style={{
                        width: '100%',
                        marginBottom: '12px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #0F2848 0%, #1A365D 100%)',
                        color: '#F1A80A',
                        border: '1.5px solid #F1A80A',
                        fontWeight: 800,
                        fontSize: '0.84rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(15, 40, 72, 0.15)'
                      }}
                    >
                      <Compass size={16} /> 🗺️ View Layout Map (246 Plots) & 11 Locations
                    </button>
                  )}

                  {/* Video Walkthrough Button for Awadh Ashiyana / Projects with Video */}
                  {project.hasVideo && (
                    <button
                      onClick={() => {
                        if (setSelectedVideo) {
                          setSelectedVideo({
                            id: `vid-${project.id}`,
                            title: project.videoTitle || `${project.name} On-Site Tour`,
                            project: project.name,
                            location: project.location,
                            videoSrc: project.videoSrc,
                            videoEmbedUrl: project.videoSrc,
                            thumbnail: project.image,
                            duration: "Site Video",
                            views: "Verified Footage",
                            description: project.description
                          });
                        }
                      }}
                      style={{
                        width: '100%',
                        marginBottom: '12px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
                        color: '#FFFFFF',
                        border: 'none',
                        fontWeight: 800,
                        fontSize: '0.84rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)'
                      }}
                    >
                      <Play size={16} fill="#FFFFFF" /> ▶️ Watch On-Site Reality Video Tour
                    </button>
                  )}

                  {/* Nearby Key Locations Pills */}
                  {project.nearbyLandmarks && (
                    <div style={{ marginBottom: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 12px' }}>
                      <div style={{ fontSize: '0.74rem', color: '#B45309', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} color="#F1A80A" /> Nearest Key Locations:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {project.nearbyLandmarks.slice(0, 5).map((nl, idx) => (
                          <span key={idx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#1E293B', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                            {nl.name}: <strong style={{ color: '#D97706' }}>{nl.distance}</strong>
                          </span>
                        ))}
                        {project.nearbyLandmarks.length > 5 && (
                          <button 
                            onClick={() => setHillsCourtModalOpen(true)}
                            style={{ background: '#FEF3C7', border: '1px solid #FCD34D', color: '#92400E', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer', padding: '3px 8px', borderRadius: '4px' }}
                          >
                            +{project.nearbyLandmarks.length - 5} More Locations...
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 14px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                        ONE-TIME CASH {project.oldOneTimeRate && project.oldOneTimeRate !== '-' && project.oldOneTimeRate !== 'NIL' && (
                          <span style={{ color: '#94A3B8', textDecoration: 'line-through', marginLeft: '4px' }}>({project.oldOneTimeRate})</span>
                        )}
                      </div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0B192C' }}>₹{project.oneTimeRate} <span style={{ fontSize: '0.72rem', color: '#64748B' }}>/sq.ft</span></div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{project.emiRate ? project.emiDuration : 'PAYMENT'}</div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: project.emiRate ? '#059669' : '#0B192C' }}>
                        {project.emiRate ? `₹${project.emiRate}/sq.ft` : 'One-Time Only'}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button onClick={() => openInquiryModal(project.name)} className="btn-primary-gold" style={{ padding: '8px 12px', fontSize: '0.84rem' }}>Book Visit</button>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Namaste Amit ji, I want rate breakdown for "${project.name}" (Block ${project.block}).`)}`}
                      target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '8px 12px', fontSize: '0.84rem' }}>
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#0B192C', color: '#FFFFFF', fontSize: '0.82rem' }}>
                    <th style={{ padding: '14px 12px', textAlign: 'center' }}>S.N.</th>
                    <th style={{ padding: '14px 16px' }}>NAME OF THE PROJECT</th>
                    <th style={{ padding: '14px 12px', textAlign: 'center' }}>BLOCK</th>
                    <th style={{ padding: '14px 14px' }}>OLD RATE (ONE-TIME)</th>
                    <th style={{ padding: '14px 14px' }}>OLD RATE (FOR EMI)</th>
                    <th style={{ padding: '14px 16px', background: '#F1A80A', color: '#0B192C', fontWeight: 900 }}>NEW RATE (ONE-TIME)</th>
                    <th style={{ padding: '14px 16px', background: '#F59E0B', color: '#0B192C', fontWeight: 900 }}>NEW RATE (FOR EMI)</th>
                    <th style={{ padding: '14px 14px', textAlign: 'center' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((p, idx) => (
                    <tr key={p.id}
                      style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#FEF3C7'}
                      onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'}
                    >
                      <td style={{ padding: '12px', textAlign: 'center', fontWeight: 800, color: '#64748B' }}>{p.sn || p.id}</td>
                      <td style={{ padding: '12px 16px', fontWeight: 800, color: '#0F2848' }}>
                        <div>{p.name}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 500 }}>{p.location}</div>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', fontWeight: 800 }}>
                        <span style={{ background: '#E2E8F0', padding: '3px 8px', borderRadius: '4px', fontSize: '0.78rem' }}>{p.block}</span>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#64748B', fontSize: '0.84rem' }}>
                        {p.oldOneTimeRate && p.oldOneTimeRate !== '-' ? p.oldOneTimeRate : '-'}
                      </td>
                      <td style={{ padding: '12px 14px', color: '#64748B', fontSize: '0.84rem' }}>
                        {p.oldEmiRate && p.oldEmiRate !== '-' ? p.oldEmiRate : '-'}
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: 900, color: '#0B192C', fontSize: '0.98rem', background: 'rgba(241, 168, 10, 0.08)' }}>
                        {p.oneTimeRate ? `₹${p.oneTimeRate}/-` : '-'}
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: 800, color: p.emiRate ? '#059669' : '#64748B', fontSize: '0.94rem', background: 'rgba(241, 168, 10, 0.04)' }}>
                        {p.emiRate ? `₹${p.emiRate}/- ${p.emiDuration}` : (p.emiDuration || '-')}
                      </td>
                      <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
                          {p.hasMasterPlan && (
                            <button 
                              onClick={() => setHillsCourtModalOpen(true)}
                              title="View Master Layout Plan Map"
                              style={{ background: '#0F2848', color: '#F1A80A', padding: '6px 8px', borderRadius: '6px', fontWeight: 800, fontSize: '0.74rem', border: '1px solid #F1A80A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                            >
                              <Compass size={12} /> Map
                            </button>
                          )}
                          {p.hasVideo && (
                            <button 
                              onClick={() => setSelectedVideo && setSelectedVideo({ id: `vid-${p.id}`, title: p.videoTitle || `${p.name} Site Inspection`, project: p.name, location: p.location, videoSrc: p.videoSrc, videoEmbedUrl: p.videoSrc })}
                              title="Watch Video Tour"
                              style={{ background: '#DC2626', color: '#FFFFFF', padding: '6px 8px', borderRadius: '6px', fontWeight: 800, fontSize: '0.74rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}
                            >
                              <Play size={12} fill="#FFF" /> Video
                            </button>
                          )}
                          <button onClick={() => openInquiryModal(p.name)}
                            style={{ background: '#F1A80A', color: '#0B192C', padding: '6px 10px', borderRadius: '6px', fontWeight: 700, fontSize: '0.76rem', border: 'none', cursor: 'pointer' }}>
                            Book Visit
                          </button>
                          <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Namaste Amit ji, I want official rate breakdown for "${p.name}" (Block ${p.block}).`)}`}
                            target="_blank" rel="noopener noreferrer"
                            style={{ background: '#25D366', color: '#FFFFFF', padding: '6px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                            <MessageSquare size={14} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Official Chart Footer Note from Image 4 */}
            <div style={{
              padding: '16px 20px',
              background: '#FEF3C7',
              borderTop: '2px solid #FDE68A',
              color: '#92400E',
              fontSize: '0.88rem',
              fontWeight: 800,
              textAlign: 'center'
            }}>
              📢 सभी प्रोजेक्ट के कमर्शियल प्लॉट का रेट वन टाइम (ONE-TIME) में ₹3,299 प्रति वर्ग फुट है, और ई.एम.आई. (EMI) में ₹3,599 प्रति वर्ग फुट है।
            </div>
          </div>
        )}
      </div>

      {/* Hills Court Ranchi Master Plan & 11 Locations Modal */}
      <HillsCourtModal
        isOpen={hillsCourtModalOpen}
        onClose={() => setHillsCourtModalOpen(false)}
        openInquiryModal={openInquiryModal}
      />
    </div>
  );
}
