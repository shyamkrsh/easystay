import React, { useState } from 'react'
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoPeopleSharp } from "react-icons/io5";
import { TbMessageReportFilled } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import YourPosts from './YourPosts';
import YourClients from './YourClients';
import Reports from './Reports';
import Payments from './Payments';
import { MdMenuOpen } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import AddAccount from './AddAccount'

function Hero() {

    const [showCount, setShowCount] = useState(1);

    const [open, setOpen] = useState(false);


    const handleCloseSideBar = () => {
        setOpen(!open);
    }

    return (
        <div className='w-[100vw] mt-16'>
            <div className='w-[100%] bg-slate-100 h-[3rem]  flex items-center md:hidden px-5'>
                <MdMenuOpen className='text-3xl font-semibold ' onClick={handleCloseSideBar}/>
            </div>
            <div className='md:h-[95vh] flex'>
                <div id='sidebar' className={open ? "sidebar w-[100%] md:w-[25%] h-[100%] bg-slate-50 absolute z-10 md:relative" : "hidden md:block sidebar w-[100%] md:w-[25%] h-[100%] bg-slate-50 relative z-10 md:relative"}>
                    <Link to="/" >
                        <h1 className='text-center font-bold text-2xl my-5 text-black'>𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝗘𝗮𝘀𝘆𝗦𝘁𝗮𝘆</h1>
                    </Link>
                    <div className='w-full bg-slate-50 h-[100%]'>
                        <ul className=' w-[100%] list-none bg-slate-50 h-[100vh]'>
                            <li className='ps-10 hover:bg-slate-200 py-2' onClick={() => {handleCloseSideBar(), setShowCount(1)}}>
                                <Link className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <MdLocalPostOffice className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Your Posts</p>
                                </Link>
                            </li>
                            <li className='ps-10 hover:bg-slate-200 py-2' onClick={() => {handleCloseSideBar(), setShowCount(2)}}>
                                <Link className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <IoPeopleSharp className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Your Clients</p>
                                </Link>
                            </li>
                            <li className='ps-10 hover:bg-slate-200 py-2' onClick={() => {handleCloseSideBar(), setShowCount(3)}}>
                                <Link className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <TbMessageReportFilled className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Reports</p>
                                </Link>
                            </li>
                            <li className='ps-10 hover:bg-slate-200 py-2'>
                                <Link to="/" className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <FaHome className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Back to home</p>
                                </Link>
                            </li>
                            <li className='ps-10 hover:bg-slate-200 py-2' onClick={() => {handleCloseSideBar(), setShowCount(4)}}>
                                <Link className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <MdPayments className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Payments</p>
                                </Link>
                            </li>
                            <li className='ps-10 hover:bg-slate-200 py-2' onClick={() => {handleCloseSideBar(), setShowCount(5)}}>
                                <Link className='flex items-center gap-3 opacity-80 hover:opacity-100'>
                                    <AiFillBank className='text-3xl' />
                                    <p className='text-xl font-semibold text-black'>Account Details</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='displaySide' className="displaySide w-[100%]  md:w-[75%] h-[100%] bg-white ">
                    {
                        showCount == 1 ? <YourPosts /> : showCount == 2 ? <YourClients /> : showCount == 3 ? <Reports /> : showCount == 5 ? <AddAccount/> :  <Payments /> 
                    }

                </div>
            </div>
        </div>
    )
}

export default Hero