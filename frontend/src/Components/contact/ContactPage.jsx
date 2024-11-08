import React from 'react'
import ContactNav from './ContactNav';
import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';
import Footer from '../Footer'
import ReachUs from './ReachUs';
import Faq from '../about/Faq'

function ContactPage() {
    return (
        <>
            <ContactNav />
            <div className='mt-24 md:mt-32 px-[10%] md:flex md:justify-evenly md:items-center'>
                <ContactIntro />
                <ContactForm />
            </div>
            <div className='my-8 md:flex md:items-center md:justify-evenly'>
                <ReachUs />
                <Faq />
            </div>
            <Footer />
        </>
    )
}

export default ContactPage