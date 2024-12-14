import React, { useRef } from "react";
import Slider from "react-slick";
import shyam from '../../assets/images/shyam.jpg'
import sonu from '../../assets/images/sonu.jpg'
import mrityunjay from '../../assets/images/mrityunjay.jpg'
import sumit from '../../assets/images/sumit.jpg'
import rajat from '../../assets/images/rajat.jpg'
import deepak from '../../assets/images/deepak.jpg'
import dhananjay from '../../assets/images/dhananjay.jpeg'

function PeopleSays() {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // screen width below 768px
                settings: {
                    slidesToShow: 1, // show only 1 slide
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // screen width below 1024px
                settings: {
                    slidesToShow: 2, // show 2 slides on medium screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-center mt-8 text-blue-600 font-sans">People Says</h1>
            <div className="slider-container mt-12 mb-[20rem] md:mb-[10rem]" style={{backgroundColor: "#141d30"}}>
                <Slider ref={slider => (sliderRef = slider)} {...settings}>

                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={shyam} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}} />
                            <p className="mt-3 italic text-white"> - Shyam Kumar Sharma</p>
                            <p className="text-slate-400 mt-5 text-justify">“Easy Stay has completely changed the way I travel! The platform is so user-friendly, and I can always find cozy and affordable accommodations in any city I visit. The booking process is smooth, and the reviews from other users are super helpful. Highly recommend it to fellow wanderers!”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={sonu} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}}  />
                            <p className="mt-3 italic text-white"> - Sonu Kumar</p>
                            <p className="text-slate-400 mt-5">“As a host, Easy Stay has been a game-changer for me. Listing my property was incredibly simple, and I've been able to connect with amazing guests from all over. The customer support team is always available and responsive, making hosting a breeze!”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={dhananjay} className="w-[80px] h-[80px] mx-auto rounded-full"  style={{boxShadow: '-1px -1px 10px white'}} />
                            <p className="mt-3 italic text-white"> - Dhananjay Kumar</p>
                            <p className="text-slate-400 mt-5">“The design and functionality of Easy Stay are top-notch! From the user-friendly interface to the seamless booking process, it’s clear how much thought went into developing this platform.”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={mrityunjay} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}}  />
                            <p className="mt-3 italic text-white"> - Mrityunjay Kumar</p>
                            <p className="text-slate-400 mt-5">“Easy Stay made finding a cozy and affordable place so simple! The website is super easy to navigate, and I love how transparent everything is. It's my go-to platform for booking stays.”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={sumit} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}}  />
                            <p className="mt-3 italic text-white"> - Sumit Kumar</p>
                            <p className="text-slate-400 mt-5">“I travel a lot for work and need accommodations that are not only comfortable but also convenient. Easy Stay provides excellent options with great locations, reliable Wi-Fi, and smooth check-ins. It’s perfect for busy professionals like me.”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={rajat} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}}  />
                            <p className="mt-3 italic text-white"> - Rajat Kumar</p>
                            <p className="text-slate-400 mt-5">“What I love most about Easy Stay is the range of affordable options they offer. Whether it’s a quick weekend getaway or a long stay, I can always find something that fits my budget without compromising on quality. Love this platform!”</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10 p-2">
                            <img src={deepak} className="w-[80px] h-[80px] mx-auto rounded-full" style={{boxShadow: '-1px -1px 10px white'}}  />
                            <p className="mt-3 italic text-white"> - Deepak Kumar</p>
                            <p className="text-slate-400 mt-5">“I was nervous about booking online, but Easy Stay made the process so reassuring. Their customer service is excellent, and I found the perfect stay for my family vacation. Highly recommend!”</p>
                        </div>
                    </div>

                </Slider >
            </div >

        </>

    )
}

export default PeopleSays;