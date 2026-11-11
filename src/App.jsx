import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryBar from './components/TelemetryBar';
import EventIntro from './components/EventIntro';
import Day01Technical from './components/Day01Technical';
import CheckeredFlagTransition from './components/CheckeredFlagTransition';
import Day02Cultural from './components/Day02Cultural';
import CircuitMapAndFAQ from './components/CircuitMapAndFAQ';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [eventForRegistration, setEventForRegistration] = useState(null);

  // Open Event Details Modal
  const handleOpenEventModal = (event) => {
    setSelectedEventForModal(event);
  };

  const handleCloseEventModal = () => {
    setSelectedEventForModal(null);
  };

  // Open Registration Modal
  const handleOpenRegistration = (event = null) => {
    setEventForRegistration(event);
    setSelectedEventForModal(null); // Close event modal if open
    setRegisterModalOpen(true);
  };

  const handleCloseRegistration = () => {
    setRegisterModalOpen(false);
    setEventForRegistration(null);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-body selection:bg-[#E10600] selection:text-white">
      
      {/* Sticky Top Navigation */}
      <Navbar onOpenRegister={() => handleOpenRegistration(null)} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenRegister={handleOpenRegistration} />

        {/* Live Telemetry Ticker */}
        <TelemetryBar />

        {/* 2. Race Weekend / Event Introduction */}
        <EventIntro />

        {/* 3. Day 01 — Technical Events */}
        <Day01Technical
          onSelectEvent={handleOpenEventModal}
          onOpenRegister={handleOpenRegistration}
        />

        {/* 5. Checkered Flag Transition (Between Day 01 and Day 02) */}
        <CheckeredFlagTransition />

        {/* 4. Day 02 — Cultural Events */}
        <Day02Cultural
          onSelectEvent={handleOpenEventModal}
          onOpenRegister={handleOpenRegistration}
        />

        {/* Circuit Layout Map & Scrutineering FAQ */}
        <CircuitMapAndFAQ />
      </main>

      {/* 9. Motorsport Footer */}
      <Footer onOpenRegister={() => handleOpenRegistration(null)} />

      {/* 6. Event Details Overlay Modal */}
      {selectedEventForModal && (
        <EventModal
          event={selectedEventForModal}
          onClose={handleCloseEventModal}
          onRegister={(event) => handleOpenRegistration(event)}
        />
      )}

      {/* 7. Registration and Razorpay Payment Drawer/Modal */}
      {registerModalOpen && (
        <RegistrationModal
          initialEvent={eventForRegistration}
          onClose={handleCloseRegistration}
        />
      )}

    </div>
  );
}

