'use client'
import React, { useState, useEffect } from "react";
import '../assets/global.css';
import LoadingScreen from "./components/LoadingScreen/loadingScreen";
import Hero from "./components/Home/hero/hero";
import Header from "./components/Home/header/header";
import UpsBlock from "./components/Home/UpsBlock/upsBlock";
import Location from "./components/Home/location/location";
import Footer from "./components/Home/footer/footer";
import CtaBlock from "./components/Home/ctaBlock/ctaBlock";
import CtaBlocks from "./components/Home/Section/section";
// import Imagewrap from "./components/Home/imagewrap/imagewrap";
import About from "./components/Home/About/about";
import Job from "./components/Home/Job/job";
import Blog from "./components/Home/Blog/blog";
import ContactBlock from "./components/Home/contact/contactBlock";
import Crosslink from "./components/Home/CrossLink/crossLink";
import LocationSlider from "./components/Home/location_slider/locationSlider";
import WhatsAppIcon from "./components/Whatsapp/whatsapp";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header color="#333" />
          <Hero />
          <UpsBlock />
          <Location title="Comprehensive Export Solutions" description="Across the globe, our teams are committed to fulfilling your export requirements. As a member of the R2M Group, we harness group resources to enhance our solutions, offering both financial stability and flexibility, all for your advantage." button="About Us" href="/About"/>
          <div style={{ backgroundColor: '#2086ae', paddingTop: '1rem', overflow: 'hidden', paddingBottom: '3rem' }}>
          <LocationSlider/>
          </div>
          <CtaBlock />
          <CtaBlocks />
          {/* <Imagewrap /> */}
          <About />
          {/* <Job />
          <Blog /> */}
          <Crosslink />
          <ContactBlock />
          <WhatsAppIcon/>
          <Footer />
        </>
      )}
    </>
  );
}
