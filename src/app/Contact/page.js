import React from 'react'
import '@/assets/global.css' 
import Form from '../components/contact/Form/form'
import Crosslink from '../components/Home/CrossLink/crossLink'
import Footer from '../components/Home/footer/footer'
import ContactBlock from '../components/Home/contact/contactBlock'
import Header from '../components/Home/header/header'

export default function Contact () {
  return (<>
    <Header color='#333'/>
    <Form/>
    <Crosslink/>
    <ContactBlock/>
    <Footer/>
    </>
  )
}
