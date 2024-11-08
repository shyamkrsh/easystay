import React from 'react'

function ReachUs() {
    return (
        <div>
            <div className='mb-5 px-[10%]'>
                <h1 className='text-xl font-semibold mt-3 mb-2 text-center md:text-left'>Reach Us By</h1>
                <p className='flex items-center gap-3 my-1'><span className='font-semibold'>Email:</span> easystayngp@gmail.com</p>
                <p className='flex items-center gap-3 my-1'><span className='font-semibold'>Response time:</span>within 24 hours</p>
                <p className='flex items-center gap-3 my-1'><span className='font-semibold'>Call Us Phone:</span>+91 8200732962</p>
                <p className='flex flex-col md:flex-row md:items-center md:gap-3 my-1'><span className='font-semibold'>Follow Us:</span><a href="https://facebook.com/easystay" className='text-blue-700 underline'>https://facebook.com/easystayngp</a></p>
            </div>  
        </div>
    )
}

export default ReachUs