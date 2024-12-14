import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaWhatsapp } from "react-icons/fa6";
import map from '../../assets/images/map.jpg'
import { toast } from 'react-hot-toast';
import axios from 'axios';

function ListingsDetails({ owner, data , id}) {

    const [listingData, setListingData] = useState(null);
    const [countReviews, setCountReviews] = useState(1);
    let avgRating = 0;
    
        listingData?.map((item) => (
            avgRating += item.rating
        ))

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews/${id}/show`).then((res) => {
                setListingData(res?.data?.data?.reviews);
                setCountReviews(Math.floor(avgRating/listingData?.length));
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    })
   
    return (
        <div>
            <div className='main-container w-[100%]'>
                <h2 className=' font-semibold text-2xl md:text-3xl text-white'>{data?.title}</h2>
                <h4 className={(data?.availability == 'available') ? 'text-green-500 text-xl' : 'text-red-700'}>{data?.availability}</h4>
                {/* Rating goes here */}
                <p className='text-white text-xl'>Rating: </p>
                
                <h2>{countReviews == 1? '⭐': countReviews == 2 ? '⭐⭐': countReviews == 3 ? '⭐⭐⭐': countReviews == 4 ? '⭐⭐⭐⭐': '⭐⭐⭐⭐⭐'}</h2>
                <p className='mt-3 text-slate-300'><span className='font-semibold text-xl text-white'>Description</span> : {data?.description}</p>
                <p className='mt-1 text-slate-300'>
                    <span className=''>
                        {/* <LocationOnIcon /> */}
                    </span>
                    <span className='font-semibold text-xl text-white'>Location</span>
                    : {data?.location}</p>

                <div>
                    <img src={map} className='my-5 rounded-md' />
                </div>
                <p className='text-slate-300'><span className='mt-6 text-xl font-semibold text-white'>Price</span> : ₹ {data?.price}/{data?.duration}</p>
                <p className='text-slate-300'><span className='text-xl font-semibold text-white'>Owner</span> : {owner?.name}</p>
                <p className='text-slate-300'><span className='text-xl font-semibold text-white'>Contact</span> : +91 {owner?.mobNumber}</p>

                <p className='flex items-center justify-between'>
                    <button className='bg-green-600 text-white text-xl mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-md' onClick={() => window.location.href = `https://wa.me/+91${owner?.mobNumber}`}>
                        <FaWhatsapp className='text-xl' />
                        <p>whatsapp</p>
                    </button>
                    <button className='bg-blue-600 text-white text-xl mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-md'>
                        <p>Save</p>
                    </button>
                </p>
            </div>
        </div >
    )
}

export default ListingsDetails