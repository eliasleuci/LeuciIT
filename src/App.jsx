import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Showcase from './components/Showcase';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <ProblemSolution />
        <Services />
        <Showcase />
        <HowWeWork />
        <WhyChooseUs />
        <Testimonials />
        <Technologies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;


