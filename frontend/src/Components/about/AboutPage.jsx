import React from 'react'
import AboutNav from './AboutNav'
import Footer from '../Footer'
import Intro from './Intro'
import Faq from './Faq'

function AboutPage() {
    return (
        <>
            <AboutNav />
            <div className='mt-16 md:flex md:justify-evenly'>
                <Intro/>
                <Faq/>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage
