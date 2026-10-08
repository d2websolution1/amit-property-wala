import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';
import RateChartModal from './components/RateChartModal';
import VideoPlayerModal from './components/VideoPlayerModal';

import HomePage from './pages/HomePage';
import PlotsPage from './pages/PlotsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CalculatorPage from './pages/CalculatorPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [preselectedProject, setPreselectedProject] = useState(null);
  const [rateChartModalOpen, setRateChartModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const openInquiryModal = (projectName = null) => {
    setPreselectedProject(projectName);
    setInquiryModalOpen(true);
  };

  const closeInquiryModal = () => {
    setInquiryModalOpen(false);
    setPreselectedProject(null);
  };

  const openRateChartModal = () => {
    setRateChartModalOpen(true);
  };

  const closeRateChartModal = () => {
    setRateChartModalOpen(false);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app-root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. Universal Top Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openInquiryModal={openInquiryModal}
      />

      {/* Spacer so fixed navbar doesn't overlap content on inner pages */}
      {activePage !== 'home' && (
        <div id="navbar-spacer" className="navbar-spacer" style={{ height: 'var(--site-header-height, 128px)' }} />
      )}

      {/* 2. Main Page Content View */}
      <main style={{ flex: 1, paddingTop: '0' }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            openInquiryModal={openInquiryModal}
            openRateChartModal={openRateChartModal}
            setSelectedVideo={handleVideoSelect}
          />
        )}

        {activePage === 'plots' && (
          <PlotsPage
            openInquiryModal={openInquiryModal}
            openRateChartModal={openRateChartModal}
            setActivePage={setActivePage}
            setSelectedVideo={handleVideoSelect}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            openInquiryModal={openInquiryModal}
            setActivePage={setActivePage}
            setSelectedVideo={handleVideoSelect}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            openInquiryModal={openInquiryModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'calculator' && (
          <CalculatorPage
            openInquiryModal={openInquiryModal}
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* 3. Universal Footer */}
      <Footer
        setActivePage={setActivePage}
        openInquiryModal={openInquiryModal}
        openRateChartModal={openRateChartModal}
      />

      {/* 4. Floating Conversion Actions (WhatsApp, Call, Mobile Bottom Bar) */}
      <FloatingActions
        setActivePage={setActivePage}
        openInquiryModal={openInquiryModal}
        openRateChartModal={openRateChartModal}
      />

      {/* 5. Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={closeInquiryModal}
        preselectedProject={preselectedProject}
      />

      <RateChartModal
        isOpen={rateChartModalOpen}
        onClose={closeRateChartModal}
      />

      <VideoPlayerModal
        video={selectedVideo}
        onClose={closeVideoPlayer}
        openInquiryModal={openInquiryModal}
      />
    </div>
  );
}
