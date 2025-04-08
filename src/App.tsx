import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Description />
      <Events />
      <Footer />
    </div>
  );
}

export default App;