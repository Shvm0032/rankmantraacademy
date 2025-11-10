import ContactHero from '@/components/contact/ContactHero'
import ContactSection from '@/components/contact/ContactSection'
import GoogleMapSection from '@/components/contact/GoogleMapSection'
import NewsletterSection from '@/components/contact/NewsletterSection'
import React from 'react'

const page = () => {
  return (
    <>
    <ContactHero/>
    <ContactSection/>
    <GoogleMapSection/>
    <NewsletterSection/>
    </>
  )
}

export default page