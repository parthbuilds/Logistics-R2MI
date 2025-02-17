import React from 'react'
import Header from '../components/Home/header/header'
import Hero from '../components/Careers/Hero/hero'
import UspGrid from '../components/Careers/UspGrid/uspGrid'
import VideoBlock from '../components/Careers/VideoBlock/videoBlock'
import LocationSlider from '../components/Home/location_slider/locationSlider'
import Location from '../components/Home/location/location'
import Crosslink from '../components/Home/CrossLink/crossLink'
import Footer from '../components/Home/footer/footer'

export default function Careers () {
  return (
    <>
    <Header/>
    <Hero/>
    <UspGrid/>
    <Location/>
    <LocationSlider/>
    <VideoBlock/>
    <Crosslink/>
    <Footer/>
    </>
    
  )
}
