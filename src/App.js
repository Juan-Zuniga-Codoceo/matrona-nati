import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Services } from './components/Services'
import SocialBox from './components/SocialBox';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      
      <Contact />
      <SocialBox />
      <Footer />
    </div>
  );
};

export default App;