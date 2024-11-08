import React, {  useRef} from "react";
import Slider from "react-slick";

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import banner6 from '../../assets/images/banner6.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Hero() {


    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="slider-container">

            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <div>
                    <img src={banner1} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>
                <div>
                    <img src={banner2} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>
                <div>
                    <img src={banner3} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>
                <div>
                    <img src={banner4} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>
                <div>
                    <img src={banner5} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>
                <div>
                    <img src={banner6} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem]" />
                </div>

             
            </Slider>
        </div>
    );
}
export default Hero;
