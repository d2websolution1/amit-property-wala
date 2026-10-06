import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  FileCheck, 
  Users, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';

export default function AboutPage({ setActivePage, openInquiryModal }) {
  const steps = [
    {
      step: '01',
      title: 'Free Site Visit & Consultation',
      titleHi: 'Free Site Visit',
      desc: 'We pick you up from your doorstep anywhere in Patna in a comfortable air-conditioned car. Inspect the township roads, parks, and available plot numbers.'
    },
    {
      step: '02',
      title: 'Plot Selection & Legal Check',
      titleHi: 'Plot Selection & Document Verification',
      desc: 'Choose your desired frontage, corner, or park-facing plot. Examine 30-year Khatiyan, Jamabandi, and revenue receipts with our legal team.'
    },
    {
      step: '03',
      title: 'Agreement & Flexible EMI Plan',
      titleHi: 'Agreement & EMI Selection',
      desc: 'Lock in your official Delcon Homes rate with a token amount. Choose convenient 11 or 18 month installment terms or direct one-time payment.'
    },
    {
      step: '04',
      title: 'Official Registry & Mutation (Possession)',
      titleHi: 'Legal Registry & Mutation (Dakhil Kharij)',
      desc: 'Get the registered sale deed (Kewala) in your name at the government Registry Office, followed by official Mutation (Dakhil Kharij).'
    }
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner - Light Luxury Style */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        color: '#0F2848',
        padding: '56px 0 38px',
        borderBottom: '3px solid #F1A80A',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge-gold">About Our Leadership & Trust</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#0F2848', marginTop: '10px', fontWeight: 900 }}>
              Amit Kumar Chaurasiya — Founder & Property Advisor
            </h1>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginTop: '8px', lineHeight: 1.6 }}>
              Founder & Property Advisor at <strong>Chaurasiya Investment Property Wala</strong>. Official Authorized Channel Partner for <strong>Delcon Homes Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Profile Card & Office Overview */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 10px 35px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
          marginBottom: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {/* Left Column: Amit Chaurasiya Brand Portrait */}
          <div style={{
            background: 'linear-gradient(135deg, #0F2848 0%, #1E3E62 100%)',
            color: '#FFFFFF',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="Amit Chaurasiya Property Wala"
                style={{
                  height: '60px',
                  width: 'auto',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  padding: '4px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              />
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F1A80A', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <Award size={16} /> Verified Advisor
                </div>
                <div style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 900 }}>Amit Kumar Chaurasiya</div>
              </div>
            </div>

            <div style={{ color: '#F1A80A', fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px' }}>
              Chaurasiya Investment Property Wala
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              "Our primary mission is to provide every family in Bihar and Patna with fair, transparent, and 100% legally registered land. No middlemen. No hidden charges."
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#F1A80A" />
                <span>+91 {CONTACT_INFO.phoneFormatted}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#F1A80A" />
                <span style={{ wordBreak: 'break-all' }}>{CONTACT_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#F1A80A" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Dak Bangla Patna One Plaza, 5th Floor, Suite 501, Pin 800001</span>
              </div>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '10px' }}>
              <a
                href={`tel:+91${CONTACT_INFO.phone}`}
                className="btn-call"
                style={{ flex: 1, padding: '10px' }}
              >
                <Phone size={16} /> Call Amit ji
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Namaste Amit ji, I want to book an appointment at your Patna One Plaza office.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ flex: 1, padding: '10px' }}
              >
                <MessageSquare size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Delcon Homes Partnership & Credentials */}
          <div style={{ padding: '40px 32px' }}>
            <span className="badge-verified">Official Authorization</span>
            <h3 style={{ fontSize: '1.4rem', color: '#0B192C', fontWeight: 800, marginTop: '8px', marginBottom: '14px' }}>
              Delcon Homes Pvt. Ltd. Official Partner
            </h3>

            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              As the authorized partner for <strong>Delcon Homes Pvt. Ltd.</strong>, Amit Kumar Chaurasiya brings direct access to the entire 19-project portfolio with official builder rate sheets, verified cadastral maps, and direct registry processing.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0B192C' }}>19+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Township Projects</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#059669' }}>12,500+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Delighted Clients</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D97706' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Registry & Mutation</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#2563EB' }}>0%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Brokerage Charges</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#334155' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#10B981" /> <strong>All Bihar Projects:</strong> Patna, Bihta, Giriyak, Nalanda & Ranchi
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#10B981" /> <strong>Commercial Land:</strong> 60ft & 80ft Road @ ₹3,299 / ₹3,599 EMI
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#10B981" /> <strong>Central Office:</strong> Heart of Patna at Dak Bangla Chauraha
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Buying Process */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <span className="badge-gold">Transparent Workflow</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0B192C', marginTop: '6px' }}>
              4 Simple & Safe Steps to Buy Land
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.94rem', marginTop: '4px' }}>
              Our transparent 4-step framework guarantees safety, peace of mind, and hassle-free ownership.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {steps.map((st, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'rgba(241, 168, 10, 0.18)',
                  position: 'absolute',
                  top: '10px',
                  right: '16px',
                  lineHeight: 1
                }}>
                  {st.step}
                </div>

                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#0B192C',
                  color: '#F1A80A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  marginBottom: '16px'
                }}>
                  {st.step}
                </div>

                <h3 style={{ fontSize: '1.1rem', color: '#0B192C', fontWeight: 800, marginBottom: '4px' }}>
                  {st.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#D48D00', fontWeight: 700, marginBottom: '10px' }}>
                  {st.titleHi}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Patna One Plaza Office Guide */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '36px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <span className="badge-gold">Visit Us In Person</span>
            <h3 style={{ fontSize: '1.4rem', color: '#0B192C', fontWeight: 800, marginTop: '6px' }}>
              Dak Bangla Chauraha, Patna One Plaza (5th Floor)
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.94rem', marginTop: '6px', maxWidth: '650px' }}>
              Conveniently located at <strong>Dak Bangla Patna One Plaza, 5th Floor, Suite 501, Pin Code 800001</strong>. Just 5 minutes from Patna Junction Railway Station and Frazer Road.
            </p>
            <div style={{ marginTop: '12px', fontSize: '0.88rem', color: '#0F172A', fontWeight: 600 }}>
              ⏰ Office Open: Monday - Sunday, 9:30 AM - 7:30 PM
            </div>
          </div>

          <button
            onClick={() => openInquiryModal()}
            className="btn-primary-gold"
            style={{ padding: '13px 26px', fontSize: '0.95rem' }}
          >
            Schedule Office Meeting
          </button>
        </div>
      </div>
    </div>
  );
}
