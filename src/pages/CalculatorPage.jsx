import React, { useState } from 'react';
import { 
  Calculator, 
  Percent, 
  Calendar, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Coins, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { PROJECTS_DATA, COMMERCIAL_RATE, CONTACT_INFO } from '../data/projectsData';

export default function CalculatorPage({ openInquiryModal, setActivePage }) {
  const [selectedProjectId, setSelectedProjectId] = useState('1'); // 'commercial' or project id
  const [unitType, setUnitType] = useState('sqft'); // 'sqft' or 'katha' (1 katha = 1361 sqft in Patna/Bihar)
  const [areaInput, setAreaInput] = useState(1200);
  const [paymentType, setPaymentType] = useState('emi'); // 'onetime' or 'emi'
  const [downPaymentPercent, setDownPaymentPercent] = useState(30); // 25, 30, 40, 50
  const [emiTenureMonths, setEmiTenureMonths] = useState(11);

  // Determine current project rate
  let currentProject = null;
  let ratePerSqft = 1399;
  let isCommercial = selectedProjectId === 'commercial';

  if (isCommercial) {
    ratePerSqft = paymentType === 'onetime' ? COMMERCIAL_RATE.oneTimeRate : COMMERCIAL_RATE.emiRate;
  } else {
    currentProject = PROJECTS_DATA.find((p) => p.id === parseInt(selectedProjectId)) || PROJECTS_DATA[0];
    if (paymentType === 'onetime') {
      ratePerSqft = currentProject.oneTimeRate;
    } else {
      ratePerSqft = currentProject.emiRate || currentProject.oneTimeRate;
    }
  }

  // Calculate area in sq.ft
  const areaInSqft = unitType === 'katha' ? Math.round(areaInput * 1361.25) : Number(areaInput) || 0;

  // Total plot cost
  const totalCost = areaInSqft * ratePerSqft;

  // Down Payment & EMI calculations
  const downPaymentAmount = Math.round(totalCost * (downPaymentPercent / 100));
  const remainingBalance = totalCost - downPaymentAmount;
  const monthlyInstallment = emiTenureMonths > 0 ? Math.round(remainingBalance / emiTenureMonths) : 0;

  const handleWhatsAppSend = () => {
    const projName = isCommercial ? "Commercial Plot (60/80ft Road)" : currentProject.name;
    const msg = `*Delcon Homes Plot Cost & EMI Estimate*\n\n` +
      `🏗️ *Project:* ${projName}\n` +
      `📐 *Plot Area:* ${areaInput} ${unitType === 'katha' ? 'Katha' : 'sq.ft'} (${areaInSqft} sq.ft)\n` +
      `💳 *Rate:* ₹${ratePerSqft} / sq.ft (${paymentType === 'onetime' ? 'One-Time Cash' : 'EMI Plan'})\n` +
      `💰 *Total Estimated Cost:* ₹${totalCost.toLocaleString('en-IN')}\n` +
      (paymentType === 'emi' ? 
        `💵 *Down Payment (${downPaymentPercent}%):* ₹${downPaymentAmount.toLocaleString('en-IN')}\n` +
        `⏳ *Tenure:* ${emiTenureMonths} Months\n` +
        `📅 *Approx Monthly EMI:* ₹${monthlyInstallment.toLocaleString('en-IN')} / month\n` : ''
      ) +
      `\n_Namaste Amit ji, I calculated this on your website and want to finalize this plot._`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header - Light Luxury Style */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
        color: '#0F2848',
        padding: '50px 0 35px',
        borderBottom: '3px solid #F1A80A',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(241,168,10,0.18)', border: '1px solid rgba(241,168,10,0.4)', padding: '4px 14px', borderRadius: '50px', color: '#B45309', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase' }}>
              <Calculator size={15} /> Instant Investment Planner
            </div>
            {setActivePage && (
              <button
                onClick={() => { setActivePage('plots'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: '#0F2848', color: '#FFFFFF', padding: '8px 16px',
                  borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, border: 'none', cursor: 'pointer'
                }}
              >
                ← Back to Available Plots
              </button>
            )}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0F2848', fontWeight: 900 }}>
            Plot Price & EMI Calculator
          </h1>
          <p style={{ color: '#475569', fontSize: '0.96rem', marginTop: '6px', maxWidth: '750px', lineHeight: 1.6 }}>
            Calculate accurate plot pricing, down payment requirements, and monthly installments across all 19 Delcon Homes projects in Patna, Ranchi, and Rajgir.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {/* Left Column: Form & Sliders */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid #E2E8F0'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0B192C', fontWeight: 800, marginBottom: '20px' }}>
              1. Select Plot & Project Details
            </h3>

            {/* Project Dropdown */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Select Delcon Project:
              </label>
              <select
                value={selectedProjectId}
                onChange={(e) => {
                  setSelectedProjectId(e.target.value);
                  if (e.target.value === '11') setEmiTenureMonths(18);
                  else if (e.target.value === '18') setEmiTenureMonths(6);
                  else setEmiTenureMonths(11);
                }}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.92rem',
                  outline: 'none',
                  background: '#FFFFFF'
                }}
              >
                <option value="commercial">🔥 COMMERCIAL PLOTS (₹3,299 / ₹3,599 EMI) Across All Sites</option>
                {PROJECTS_DATA.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (One-Time: ₹{p.oneTimeRate} {p.emiRate ? `| EMI: ₹${p.emiRate}` : ''})
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Mode Selector */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                Payment Plan:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setPaymentType('onetime')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: paymentType === 'onetime' ? 800 : 600,
                    background: paymentType === 'onetime' ? '#0B192C' : '#F1F5F9',
                    color: paymentType === 'onetime' ? '#F1A80A' : '#475569',
                    border: paymentType === 'onetime' ? '2px solid #F1A80A' : '1px solid #CBD5E1'
                  }}
                >
                  One-Time Cash Deal
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('emi')}
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: paymentType === 'emi' ? 800 : 600,
                    background: paymentType === 'emi' ? '#0B192C' : '#F1F5F9',
                    color: paymentType === 'emi' ? '#34D399' : '#475569',
                    border: paymentType === 'emi' ? '2px solid #10B981' : '1px solid #CBD5E1'
                  }}
                >
                  Easy EMI Scheme
                </button>
              </div>
            </div>

            {/* Area Measurement Unit & Input */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                  Plot Area Size:
                </label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => { setUnitType('sqft'); setAreaInput(1200); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: unitType === 'sqft' ? '#0B192C' : '#E2E8F0',
                      color: unitType === 'sqft' ? '#F1A80A' : '#475569'
                    }}
                  >
                    Sq. Ft
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnitType('katha'); setAreaInput(1); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: unitType === 'katha' ? '#0B192C' : '#E2E8F0',
                      color: unitType === 'katha' ? '#F1A80A' : '#475569'
                    }}
                  >
                    Katha
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="number"
                  min={unitType === 'katha' ? 0.5 : 300}
                  max={unitType === 'katha' ? 20 : 25000}
                  step={unitType === 'katha' ? 0.25 : 100}
                  value={areaInput}
                  onChange={(e) => setAreaInput(Number(e.target.value))}
                  style={{
                    width: '120px',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#64748B' }}>
                  {unitType === 'katha' ? `Katha (~${areaInSqft.toLocaleString()} sq.ft)` : 'Square Feet'}
                </span>
              </div>

              {/* Quick Area Presets */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                {[600, 1000, 1200, 1500, 2000].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => { setUnitType('sqft'); setAreaInput(size); }}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: areaInput === size && unitType === 'sqft' ? '#FEF3C7' : '#F1F5F9',
                      border: areaInput === size && unitType === 'sqft' ? '1px solid #F59E0B' : '1px solid transparent',
                      fontSize: '0.78rem',
                      color: '#0F172A',
                      fontWeight: 600
                    }}
                  >
                    {size} sqft
                  </button>
                ))}
              </div>
            </div>

            {/* EMI Options (Only if EMI chosen) */}
            {paymentType === 'emi' && (
              <>
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                    Down Payment Percentage: ({downPaymentPercent}%)
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[25, 30, 40, 50].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setDownPaymentPercent(pct)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: downPaymentPercent === pct ? 800 : 600,
                          background: downPaymentPercent === pct ? '#059669' : '#F1F5F9',
                          color: downPaymentPercent === pct ? '#FFFFFF' : '#334155'
                        }}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                    EMI Tenure (Months):
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[6, 11, 12, 18].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setEmiTenureMonths(m)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: emiTenureMonths === m ? 800 : 600,
                          background: emiTenureMonths === m ? '#0B192C' : '#F1F5F9',
                          color: emiTenureMonths === m ? '#F1A80A' : '#334155'
                        }}
                      >
                        {m} Months
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Instant Calculation Output & WhatsApp Booking */}
          <div style={{
            background: 'linear-gradient(135deg, #0B192C 0%, #152E4D 100%)',
            borderRadius: '20px',
            padding: '30px',
            color: '#FFFFFF',
            boxShadow: '0 12px 35px rgba(11,25,44,0.3)',
            border: '2px solid rgba(241, 168, 10, 0.4)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <span className="badge-gold">Summary Output</span>
              <span style={{ fontSize: '0.8rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={14} /> Zero Hidden Charges
              </span>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Selected Project:</div>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800, marginTop: '2px', marginBottom: '20px' }}>
              {isCommercial ? 'Commercial Plots (Main Road Frontage)' : currentProject.name}
            </h3>

            {/* Total Estimated Price Display */}
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '14px',
              padding: '18px',
              border: '1px solid rgba(241, 168, 10, 0.3)',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1', textTransform: 'uppercase' }}>
                Total Estimated Plot Cost
              </div>
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#F1A80A', marginTop: '4px' }}>
                ₹{totalCost.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                Rate applied: ₹{ratePerSqft} / sq.ft ({paymentType === 'onetime' ? 'One-Time Cash' : 'EMI Rate'})
              </div>
            </div>

            {/* EMI Breakdown (if selected) */}
            {paymentType === 'emi' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>Down Payment ({downPaymentPercent}%):</span>
                  <span style={{ fontWeight: 800, color: '#FFFFFF' }}>₹{downPaymentAmount.toLocaleString('en-IN')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>Remaining Balance:</span>
                  <span style={{ fontWeight: 800, color: '#FFFFFF' }}>₹{remainingBalance.toLocaleString('en-IN')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>Tenure Duration:</span>
                  <span style={{ fontWeight: 800, color: '#FFFFFF' }}>{emiTenureMonths} Monthly Installments</span>
                </div>

                <div style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10B981',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#A7F3D0', fontWeight: 700 }}>ESTIMATED MONTHLY EMI</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34D399' }}>
                      ₹{monthlyInstallment.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#E2E8F0' }}>per month</span>
                </div>
              </div>
            ) : (
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '14px',
                marginBottom: '24px',
                fontSize: '0.88rem',
                color: '#CBD5E1'
              }}>
                ✓ Immediate Registration & Spot Possession on full one-time payment.<br />
                ✓ Best value price with zero interest or processing cost.
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppSend}
                className="btn-whatsapp"
                style={{ width: '100%', padding: '13px', fontSize: '0.96rem' }}
              >
                <MessageSquare size={18} /> Send Calculation to Amit Chaurasiya
              </button>

              <button
                onClick={() => openInquiryModal(isCommercial ? 'COMMERCIAL PLOTS (₹3299/sqft)' : currentProject.name)}
                className="btn-primary-gold"
                style={{ width: '100%', padding: '13px', fontSize: '0.96rem' }}
              >
                Book Free Site Visit for this Plot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
