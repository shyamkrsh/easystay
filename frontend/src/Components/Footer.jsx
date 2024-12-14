import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
    return (
        <div>
            <footer className="footer footer-center text-white bg-slate-900" >
                <div className='grid grid-cols-1 bg-slate-900 md:grid-cols-3 w-full items-center rounded-tr-3xl rounded-tl-3xl '>
                    <div className="col-1">
                        <ul className='text-left'>
                            <li className='text-[1.2rem] font-semibold p-5 uppercase text-yellow-500' style={{ letterSpacing: '1px' }}>Contact Deatils</li>
                            <li><Link to="" className='flex items-center py-2'><span className='font-semibold text-[1rem] flex items-center'><MdEmail className='text-2xl me-3' /> Email</span> : <span className='text-blue-700 ms-3'>easystayngp@gmail.com</span></Link></li>
                            <li><Link to="" className='flex items-center py-2'><span className='font-semibold text-[1rem] flex items-center'><FaPhoneVolume className='text-2xl me-3' /> Phone</span> : +91 8200732962</Link></li>
                            <li><Link to="">
                                <button className='bg-green-600 text-white text-xl mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full' onClick={() => window.location.href = `https://wa.me/${+918200732962}`}>
                                    <FaWhatsapp className='text-xl' />
                                    <p>whatsapp</p>
                                </button>
                            </Link></li>

                        </ul>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li className='text-[1.2rem] font-semibold p-5 uppercase text-yellow-500' style={{ letterSpacing: '1px' }}>Important links</li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>About</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Home</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Community</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Roms</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Find your choice</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Refund Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li className='text-[1.2rem] font-semibold p-5 uppercase text-yellow-500' style={{ letterSpacing: '1px' }}>About Us</li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Owner Details</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Company</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Groups</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Branches</Link></li>
                            <li><Link to="" className='hover:underline hover:text-blue-800 text-[1rem]'>Location</Link></li>

                        </ul>
                    </div>
                </div>
                <div className='bg-slate-900 pb-3'>
                    &copy; copyrite 2024 All rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer