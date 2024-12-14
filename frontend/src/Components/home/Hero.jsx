import React, { useRef } from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import banner6 from '../../assets/images/banner6.jpg'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Hero() {

    const bottomDivRef = useRef(null);

    const scrollToBottom = () => {
        if (bottomDivRef.current) {
            bottomDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const user = useSelector((state) => state.user.use);
    const navigate = useNavigate();
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="slider-container">

            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <div>
                    <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                        <img src={banner1} style={{ width: "100%", height: "100%" }} className="absolute" />
                        <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                                <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Welcome to Easy Stay</h1>
                                <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                                <div className="">
                                    <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105"
                                        onClick={() => scrollToBottom()}
                                    >Explore Services </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner2} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Search your Choice here</h1>
                            <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <div className="">
                                <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105" onClick={() => navigate("/listings/search/hostel")}>Search Services </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                        <img src={banner3} style={{ width: "100%", height: "100%" }} className="absolute" />
                        <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                                <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Post Your House, hostels Online</h1>
                                <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can post you houses, hostels, to get room seekers.</p>
                                <div className="">
                                    <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105" onClick={() => navigate(user && user._id ? "/listings/new" : "/")}>Post Services </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                        <img src={banner4} style={{ width: "100%", height: "100%" }} className="absolute" />
                        <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                                <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Connect with us</h1>
                                <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can connect with us and and help us grow our services.</p>
                                <div className="">
                                    <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105" onClick={() => navigate("/contact")}>Connect with Us </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                        <img src={banner5} style={{ width: "100%", height: "100%" }} className="absolute" />
                        <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                                <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Get five Start Hostels</h1>
                                <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                                <div className="">
                                    <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105" onClick={() => navigate("/listings/search/hostel")}>Explore Hostels </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                        <img src={banner6} style={{ width: "100%", height: "100%" }} className="absolute" />
                        <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                                <h1 className="text-xl md:text-[3rem] font-bold text-slate-200 w-[90vw] ">Payment for services</h1>
                                <p className="text-sm md:text-xl font-semibold text-gray-400 md:mt-5">Here you can securly payment for the houses, hostels, resturants, hostels, etc.</p>
                                <div className="">
                                    <button className="bg-primary px-4 py-2 border-none rounded text-white gap-1 mt-5 md:text-xl font-semibold  self-center hover:opacity-90 transition-all hover:scale-x-105" onClick={() => navigate("/")}>Explore Payments </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </Slider >
        </div >
    );
}
export default Hero;
