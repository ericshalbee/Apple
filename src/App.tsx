import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';
import AppleCashSupport from './pages/AppleCashSupport';
import AppleCardSupport from './pages/AppleCardSupport';
import AppleWalletSupport from './pages/AppleWalletSupport';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <SchemaMarkup />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <MainContent />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/apple-cash-support" element={<AppleCashSupport />} />
          <Route path="/apple-card-support" element={<AppleCardSupport />} />
          <Route path="/apple-wallet-support" element={<AppleWalletSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;