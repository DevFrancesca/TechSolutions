import ContactUs from '@/components/contactUs/page'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <article className="flex-grow">
        <ContactUs/>
      </article>
    </div>
  )
}

export default ContactPage
