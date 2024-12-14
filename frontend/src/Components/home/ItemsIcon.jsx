import React from 'react'
import { Link } from 'react-router-dom'
import itemIcons from './itemIconsData'

function ItemsIcon() {

    return (
        <div className='mt-8 md:mt-12'>
            <h1 className='text-center font-semibold md:font-bold text-[2rem] md:text-[2.5rem] mt-5 mb-1 md:mb-5 text-white font-arial'>Available Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 services mt-8'>
                {
                    itemIcons?.map((item, index) => (
                        <Link to={item?.link} key={index}>
                            <div key={index} className=' h-[12rem] md:h-[15rem]  rounded-md shadow-md px-10 md:py-10 transition-all bg-slate-700 text-white hover:scale-105'>
                                <img src={item?.image} className="w-[5rem]" />
                                <h1 className='text-center font-semibold  text-2xl  text-white font-arial'>{item?.title}</h1>
                                <p className='text-md md:text-xl font-semibold text-center text-slate-300'>{item?.content}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default ItemsIcon