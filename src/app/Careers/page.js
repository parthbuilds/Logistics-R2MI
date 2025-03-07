import React from 'react'
import Header from '../components/Home/header/header'
import Hero from '../components/Careers/Hero/hero'
import UspGrid from '../components/Careers/UspGrid/uspGrid'
// import VideoBlock from '../components/Careers/VideoBlock/videoBlock'
// import LocationSlider from '../components/Home/location_slider/locationSlider'
import Location from '../components/Home/location/location'
import Crosslink from '../components/Home/CrossLink/crossLink'
import Footer from '../components/Home/footer/footer'

export default function Careers () {
  return (
    <>
    <Header/>
    <Hero/>
    <UspGrid/>
    {/* <VideoBlock/> */}
    <Location title="Build Your Career in Export Operations" description="Join our team and be part of a dynamic export business. Handle global shipments, manage logistics, ensure compliance, and streamline international trade operations. Grow your career in a fast-paced and rewarding industry." button="Apply Now" href="mailto:hr@r2mi.in , Exports@r2mi.in ?subject=Job Application - Export Operations&body=Dear Hiring Manager,%0D%0A%0D%0AMy Name: [Your Name Here] %0D%0AMy Email: [Your Email Here] %0D%0AContact Number: [Your Contact Here]%0D%0AExperience: [Your Experience Here] %0D%0ANotice Period: [Your notice period Here] %0D%0A%0D%0AWhat makes me a strong candidate for this role? %0D%0A[Detailsa]  %0D%0A%0D%0AAttaching my resume for your reference.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest Regards,%0D%0A[Your Name Here]"/>
    {/* <LocationSlider/> */}
    
    <Crosslink/>
    <Footer/>
    </>
    
  )
}
