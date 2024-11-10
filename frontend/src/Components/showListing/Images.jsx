import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Images({ img1, img2, img3, img4 }) {

 


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
        <div className="slider-container w-[80%] m-auto text-black">
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                {/* {img.map((image, index) => ( */}
                    <div>
                        <img src={img1} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem] cursor-zoom-in" />
                    </div>
                    <div>
                        <img src={img2} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem] cursor-zoom-in" />
                    </div>
                    <div>
                        <img src={img3} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem] cursor-zoom-in" />
                    </div>
                    <div>
                        <img src={img4} style={{ width: "100%" }} className="mt-2 h-[15rem] md:h-[25rem] cursor-zoom-in" />
                    </div>
                {/* ))
                } */}

            </Slider >
        </div >
    );
}
export default Images;
