import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import OngoingEvents from './components/OngoingEvents';
import UpcomingEvents from './components/UpcomingEvents';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <AboutUs />
        <OngoingEvents />
        <UpcomingEvents />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;