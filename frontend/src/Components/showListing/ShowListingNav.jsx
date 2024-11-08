import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import Badge from '@mui/material/Badge';


function ShowListingNav() {
    return (
        <div className='z-50 flex bg-blue-700 fixed top-0 w-[100vw] h-[4rem] text-white items-center justify-between px-5 md:px-16'>
            <div>
                <Link onClick={() => window.history.back()} > <IoArrowBack className='text-3xl ' /></Link>
            </div>
            <div>
                <h2 className='text-2xl '>𝐒𝐡𝐨𝐰 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</h2>
            </div>
            <div>

                <Badge badgeContent={17} color="error">
                    <IoCart className='ms-auto text-4xl' />
                </Badge>
            </div>
        </div>
    )
}

export default ShowListingNav