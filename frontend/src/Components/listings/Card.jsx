import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ image, title, price, duration, description, street_address }) {
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



        <div className="h-[25rem] rounded-md card mx-2 md:mx-2 mb-3 md:mb-5 md:hover:scale-105 transition-all cursor-pointer overflow-hidden z-5" style={{backgroundColor: "#141d30", boxShadow: '-1px -1px 5px white'}}>
            <div className="slider-container ">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    {
                        (image?.length > 0) ? (
                            image?.map((item) => (
                                
                                    <div key={item?._id}>
                                        <img src={item?.url} style={{ width: "100%" }} className=" h-[15rem]" />
                                    </div>
                                
                            ))
                        )
                            :
                            <div>
                                <img src="https://images.pexels.com/photos/3531650/pexels-photo-3531650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: "100%" }} className=" h-[15rem]" />
                            </div>
                    }



                </Slider>
            </div>
            <div className="card-body">
                <h3 className="card-title -mt-3 text-white text-2xl">{title}</h3>
                <p className='text-slate-400'>₹ {price}/{duration}</p>
                <p className='text-slate-300'>{street_address}</p>
                <p className="text-slate-300 pb-2">{description.slice(0, 50)}...</p>
            </div>
        </div>
    )
}

export default Card