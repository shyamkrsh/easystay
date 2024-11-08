import React from 'react'
import { Link } from 'react-router-dom'
import itemIcons from './itemIconsData'

function ItemsIcon() {

    return (
        <div className='mt-12'>
            <h1 className='text-center font-semibold md:font-bold text-xl md:text-2xl mt-5 mb-3'>Available Services</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 p-5 services overflow-y-auto overflow-x-hidden'>
                {
                    itemIcons.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <div key={index}>
                                <img src={item.image} className="w-[2rem] md:w-[5rem]" />
                                <p className='text-md md:text-xl font-semibold text-center'>{item.title}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default ItemsIcon