import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function YourClients() {
    const [time, setTime] = useState("");
    const user = useSelector(state => state.user.user);
    const [clients, setClients] = useState([]);

    useState(() => {
        axios.get(`/api/listings/${user._id}/clients`).then((res) => {
            setClients(res.data.data.clients);
        })
    }, [])

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <>
            <div className='w-full h-[4rem] bg-slate-200 flex items-center justify-between px-5 md:px-10'>
                <h1 className='text-xl font-semibold'>𝙎𝙚𝙚 𝙮𝙤𝙪𝙧 𝙘𝙡𝙞𝙚𝙣𝙩𝙨 𝙙𝙚𝙩𝙖𝙞𝙡𝙨</h1>
                <p className='text-sm'>{time}</p>
            </div>
            <div className='h-[100%] overflow-y-auto'>
                <table className='w-full min-w-[700px]' border="1">
                    <tr className='text-center bg-green-600 text-white h-[2rem]'>
                        <th className='ps-3 w-[7%]'>S. No.</th>
                        <th className='w-[18%]'>Candidate's Name</th>
                        <th className='w-[20%]'>Email</th>
                        <th className='w-[15%]'>Phone</th>
                        <th className='w-[25%]'>Address</th>
                        <th className='w-[15%]'>Payment Status</th>
                    </tr>

                    {
                        clients ? clients.map((client, index) => (
                            <tr key={index} className={index % 2 == 0 ? 'bg-slate-300 h-[2rem]  hover:opacity-80 cursor-pointer': "bg-slate-400 hover:opacity-80 cursor-pointer h-[2rem]"}>
                                <td className='text-center'>{index+1}</td>
                                <td className='text-center'>{client.name}</td>
                                <td className='w-[20%] text-center'>{client.email}</td>
                                <td className='text-center'>+91 {client.mobNumber}</td>
                                <td className='text-center'>{client.location}</td>
                                <td className='text-center text-red-800'>Pending</td>
                            </tr>
                            
                        ))
                        : ""
                    }

                </table>
            </div>
        </>
    )
}

export default YourClients