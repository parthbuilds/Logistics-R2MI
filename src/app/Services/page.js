'use client'
import React, { useState, useEffect } from 'react';
import '../../assets/global.css';
import Header from '../components/Home/header/header';
import Hero from '../components/Services/hero/hero';
import ServiceSlider from '../components/Services/verticalSlider/verticalSlider';
import Steppersection from '../components/Services/Stepper_section/stepperSection';
import Footer from '../components/Home/footer/footer';
import Crosslink from '../components/Home/CrossLink/crossLink';
import Contact from '../components/Home/contact/contactBlock';
import ServiceCardsBlock from '../components/Services/ServiceCardBlock/serviceCard';
import CardSection from '../components/Services/ProductCard/productcards.js';
import WhatsAppIcon from '../components/Whatsapp/whatsapp';

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const emToPx = (em) => em * parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= emToPx(30)); // 30em converted to px
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <CardSection />
      {!isMobile && <ServiceSlider />} 
      <Steppersection />
      <ServiceCardsBlock />
      <Crosslink />
      <Contact />
      <WhatsAppIcon/>
      <Footer />
    </>
  );
}
