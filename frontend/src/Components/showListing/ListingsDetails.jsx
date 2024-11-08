import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaWhatsapp } from "react-icons/fa6";
import map from '../../assets/images/map.jpg'
import { toast } from 'react-hot-toast';

function ListingsDetails({ owner, data }) {
    return (
        <div>
            <div className='main-container w-[100%] md:w-[100%]'>
                <h2 className=' font-semibold md:text-2xl'>{data.title}</h2>
                <h4 className={(data.availability == 'available') ? 'text-green-700' : 'text-red-700'}>{data.availability}</h4>
                {/* Rating goes here */}
                <p>Rating: </p>
                <h2>⭐⭐⭐⭐⭐</h2>
                <p className='mt-3'><span className='font-semibold text-xl'>Description</span> : {data.description}</p>
                <p className='mt-1'>
                    <span className=''>
                        {/* <LocationOnIcon /> */}
                    </span>
                    <span className='font-semibold text-xl'>Location</span>
                    : {data.location}</p>

                <div>
                    <img src={map} className='my-5 rounded-md' />
                </div>
                <p><span className='mt-6 text-xl font-semibold'>Price</span> : ₹ {data.price}/-</p>
                <p><span className='text-xl font-semibold'>Owner</span> : {owner?.name}</p>
                <p><span className='text-xl font-semibold'>Contact</span> : +91 {owner?.mobNumber}</p>

                <p className='flex items-center justify-between'>
                    <button className='bg-green-600 text-white text-xl mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-md' onClick={() => window.location.href = `https://wa.me/${owner?.mobNumber}`}>
                        <FaWhatsapp className='text-xl' />
                        <p>whatsapp</p>
                    </button>
                    <button className='bg-blue-600 text-white text-xl mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-md' onClick={() => window.location.href = ``}>
                        <p>Save</p>
                    </button>
                </p>
            </div>
        </div >
    )
}

export default ListingsDetails