import React, { useEffect, useState } from 'react'

function Payments() {
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
                <h1 className='text-xl font-semibold text-white'>𝙎𝙚𝙚 𝙥𝙖𝙮𝙢𝙚𝙣𝙩 𝙙𝙚𝙩𝙖𝙞𝙡𝙨</h1>
                <p className='text-sm text-white'>{time}</p>
            </div>
            <div className='h-[100%] overflow-y-auto '>
                <table className='w-full min-w-[700px]' border="1">
                    <tr className='text-center bg-green-600 text-white h-[2rem]'>
                        <th className='ps-3 w-[7%]'>S. No.</th>
                        <th className='w-[20%]'>Email</th>
                        <th className='w-[15%]'>Phone</th>
                        <th className='w-[25%]'>Amount</th>
                        <th className='w-[15%]'>Payment Status</th>
                    </tr>
                    <tr className='bg-slate-400 h-[2rem] hover:bg-slate-300 cursor-pointer'>
                        <td className='text-center'>1.</td>
                        <td className='w-[20%] text-center'>sharmashyamkumar717@gmail.com</td>
                        <td className='text-center'>+91 8200732962</td>
                        <td className='text-center'>₹ 4000 /-</td>
                        <td className='text-center'>Pending</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Payments