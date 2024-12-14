import React, { useEffect, useState } from 'react'
import PostLists from './PostLists';

function YourPosts() {
    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <>
            <div className='w-full h-[4rem] flex items-center justify-between px-5 md:px-10' style={{backgroundColor: '#201f4d'}}>
                <h1 className='text-xl font-semibold text-white'>𝙎𝙚𝙚 𝙮𝙤𝙪𝙧 𝙥𝙤𝙨𝙩𝙨</h1>
                <p className='text-sm text-white'>{time}</p>
            </div>
            <div className='h-[100vh] overflow-y-scroll overflow-x-hidden'>
               <PostLists/>
            </div>

        </>
    )
}

export default YourPosts