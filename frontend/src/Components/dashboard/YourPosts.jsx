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
            <div className='w-full h-[4rem] bg-slate-200 flex items-center justify-between px-5 md:px-10'>
                <h1 className='text-xl font-semibold'>𝙎𝙚𝙚 𝙮𝙤𝙪𝙧 𝙥𝙤𝙨𝙩𝙨</h1>
                <p className='text-sm '>{time}</p>
            </div>
            <div className='h-[100%] overflow-y-auto overflow-x-hidden'>
               <PostLists/>
            </div>

        </>
    )
}

export default YourPosts