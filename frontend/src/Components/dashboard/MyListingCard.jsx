import React, { useRef } from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyListingCard({ image, title, price, description, street_address }) {
    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const handleEditListing = () => {
        console.log("Editing Listing")
    }

    const handleDeleteListing = () => {
        console.log("Deleting Listing");
    }


    return (



        <div className="h-[35rem] border card bg-base-100 shadow-xl mx-2 md:mx-2 mb-3 md:mb-5 md:hover:scale-105 transition-all cursor-pointer overflow-hidden z-5">
            <div className="slider-container">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    {
                        (image?.length > 0) ? (
                            image?.map((item) => (

                                <div key={item?._id}>
                                    <img src={item?.url} style={{ width: "100%" }} className=" h-[15rem] " />
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
                <h3 className="card-title -mt-3">{title}</h3>
                <p className=''>₹ {price}/-</p>
                <p className=''>{street_address}</p>
                <p>{description.slice(0, 50)}...</p>
            </div>
            <div className="flex items-center justify-evenly p-3">
                <Fab color="secondary" aria-label="edit" onClick={handleEditListing}>
                    <EditIcon className="text-xl" />
                </Fab>
                <Button variant="outlined" startIcon={<DeleteIcon />} className="h-[2.5rem]" onClick={handleDeleteListing}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default MyListingCard