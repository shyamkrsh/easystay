import React, { useEffect, useState } from 'react'

function AddAccount() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <>
            <div className='w-full h-[4rem] bg-slate-200 flex items-center justify-between px-5 md:px-10' style={{backgroundColor: '#201f4d'}}>
                <h1 className='text-xl font-semibold text-white'>Account Details</h1>
                <p className='text-sm text-white'>{time}</p>
            </div>
            <div className='h-[100%] overflow-y-auto'>
                
            </div>
        </>
    )
}

export default AddAccount