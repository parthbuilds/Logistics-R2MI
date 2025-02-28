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
// import Job from "./components/Home/Job/job";
// import Blog from "./components/Home/Blog/blog";
import ContactBlock from "./components/Home/contact/contactBlock";
import Crosslink from "./components/Home/CrossLink/crossLink";
import LocationSlider from "./components/Home/location_slider/locationSlider";
import WhatsAppIcon from "./components/Whatsapp/whatsapp";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
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
          <Location />
          <LocationSlider />
          <CtaBlock />
          <CtaBlocks />
          {/* <Imagewrap /> */}
          <About />
          {/* <Job /> */}
          {/* <Blog /> */}
          <Crosslink />
          <ContactBlock />
          <WhatsAppIcon/>
          <Footer />
        </>
      )}
    </>
  );
}
