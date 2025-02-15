import React from 'react'
import ContactHero from '@/app/contact-us/ContactHero'
import ContactForm from '@/app/contact-us/ContactForm'
import ContactInfo from '@/app/contact-us/ContactInfo'

function page() {
  return (
    <div>
        <ContactHero/>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

export default page