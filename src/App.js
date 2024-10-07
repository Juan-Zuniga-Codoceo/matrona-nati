import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Services } from './components/Services'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;