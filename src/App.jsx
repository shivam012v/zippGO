
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PricingPage from '@/pages/PricingPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import CancellationPolicyPage from '@/pages/CancellationPolicyPage';
import StartEarningPage from '@/pages/StartEarningPage';
import TrackRidePage from '@/pages/TrackRidePage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
          <Route path="/start-earning" element={<StartEarningPage />} />
          <Route path="/track-ride" element={<TrackRidePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
