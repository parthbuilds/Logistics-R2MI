import React from "react";
import "@/assets/global.css";
import Hero from "../components/Home/header/header";
import Header from "../components/About/hero/hero.js";
import LocationSearchBlock from "../components/About/locationSearch/location";
import Crosslink from "../components/Home/CrossLink/crossLink";
import ContactBlock from "../components/Home/contact/contactBlock";
import Footer from "../components/Home/footer/footer";
// import DataSlider from "../components/About/DataSlider/dataslider";
// import ContentBlock from "../components/About/ContentBox/ContentBox";
import UpsBlock from "../components/Home/UpsBlock/upsBlock";

export default function About() {
  return (
    <>
      <Hero />
      <Header />
      <LocationSearchBlock />
      {/* <DataSlider/>
      <ContentBlock/> */}
      <UpsBlock />
      <Crosslink />
      <ContactBlock />
      <Footer />
    </>
  );
}
