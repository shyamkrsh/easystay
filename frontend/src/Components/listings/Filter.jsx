import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { BiSortDown } from "react-icons/bi";


function Filter() {
    const [showShort, setShowShort] = useState(false);

    const handleShort = () => {
        setShowShort(!showShort);
    }

    return (
        <>
            <div className='border w-[100vw] flex justify-around items-center bg-white  -mt-12 shadow-md h-[3rem] fixed top-[6.5rem] z-10'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-3 cursor-pointer ' onClick={handleShort}>
                        <p> <BiSortDown className='text-2xl' /></p>
                        <p className='text-xl'>Sort</p>
                    </div>
                </div>
                <div className='h-[100%] w-[1px] bg-slate-700'></div>
                <div className='flex items-center gap-3'>
                    <p><IoFilter className='text-2xl' /> </p>
                    <p className='text-xl'>Filter</p>
                </div>
            </div>
            <div className={showShort ? "block px-[5%] w-[100%] md:w-[50%] mx-auto bg-yellow-700" : "hidden"}>
                <form action="" className={showShort ? "block" : "hidden"}>
                    <div className='flex items-center gap-16'>
                        <p>price -- low to high</p>
                        <input type="checkbox" name="lth" id="t" />
                    </div>
                    <div className='flex items-center gap-16'>
                        <p>price -- high to low</p>
                        <input type="checkbox" name="rtl" id="t" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter