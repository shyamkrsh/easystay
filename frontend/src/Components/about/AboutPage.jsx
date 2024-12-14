import React from 'react'
import Footer from '../Footer'
import Intro from './Intro'
import Faq from './Faq'
import Community from './Community'
import DemoNav from '../DemoNav'

function AboutPage() {
    return (
        <>
            <DemoNav heading={"About"} />
            <div className='mt-16 md:flex md:justify-evenly'>
                <Intro />
                <Faq />
            </div>
            <Community />
            <Footer />
        </>
    )
}

export default AboutPage
