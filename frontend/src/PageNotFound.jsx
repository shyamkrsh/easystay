import React from 'react'
import Navbar from './Components/Navbar'

function PageNotFound() {
    return (
        <>
            <Navbar />
            <div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                    <h1 className='text-[5rem] font-bold text-slate-700'>404</h1>
                    <h1 className='text-4xl font-bold w-full'>Page Not Found !</h1>
                </div>
            </div>
        </>
    )
}

export default PageNotFound