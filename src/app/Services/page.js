import React from 'react'
import '../../assets/global.css'
import Header from '../components/Home/header/header'
import Hero from '../components/Services/hero/hero'
import ServiceSlider from '../components/Services/verticalSlider/verticalSlider'
import Steppersection from '../components/Services/Stepper_section/stepperSection';
import Footer from '../components/Home/footer/footer';
import Crosslink from '../components/Home/CrossLink/crossLink';
import Contact from '../components/Home/contact/contactBlock';
import ServiceCardsBlock from '../components/Services/ServiceCardBlock/serviceCard';
import CardSection from '../components/Services/ProductCard/productcards.js';


export default function Services() {
  return (
    <>
      <Header/>
      <Hero />
      <CardSection/>
      <ServiceSlider />
      <Steppersection />
      <ServiceCardsBlock/>
      <Crosslink/>
      <Contact/>
      <Footer />

    </>


  )
}
