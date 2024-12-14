import axios from 'axios'
import React, { useState, useEffect } from 'react'


function ShowReviews({ id }) {
    const [listingData, setListingData] = useState(null);


    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/reviews/${id}/show`).then((res) => {
                setListingData(res?.data?.data?.reviews);
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    })

    return (
        <div className='mb-40'>
            <div className='text-xl font-semibold mb-5 text-white'>
                All Reviews :
            </div>
            <div className='mb-64 pb-64'>
                {
                    listingData ?
                        listingData?.map((item, index) => (
                            <div className='mb-4 shadow-md bg-slate-800 p-3 rounded' key={index}>
                                <div className='flex items-center'>
                                    {
                                        item?.author?.profileImage ?
                                            <img src={item?.author?.profileImage} className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full mr-3' />
                                            :
                                            <img src="https://i.ibb.co/Pt6K1zh/55f43de2412ad3f18fe90fac70c6472a-removebg-preview.png" className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full mr-3' />
                                    }



                                    <div>
                                        <h3 className='text-xl font-semibold text-slate-200'>{item?.author?.name}</h3>
                                        <p className='text-[12px]'>{(item?.rating == 1) ? '⭐' : ((item?.rating == 2) ? '⭐⭐' : ((item?.rating == 3) ? '⭐⭐⭐' : (item?.rating == 4) ? '⭐⭐⭐⭐' : (item?.rating == 5) ? '⭐⭐⭐⭐⭐' : ""))}</p>
                                    </div>
                                </div>

                               
                                <p className='ps-5 text-slate-300'>{item?.content}</p>
                                <span className='text-slate-500 text-sm ps-5'>{item?.createdAt}</span>
                            </div>
                        ))
                        : ""
                }

            </div>
        </div>
    )
}

export default ShowReviews