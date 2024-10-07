import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;