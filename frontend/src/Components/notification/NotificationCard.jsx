import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaUser } from "react-icons/fa";

function NotificationCard({name, content, time, handleDelete, id}) {
    return (
        <div>
            <div className='border w-[90%] md:w-[50%] mx-auto my-2 px-5 py-3 rounded shadow-md hover:shadow-lg cursor-pointer bg-slate-800'>
                <h2 className='flex items-center text-xl'>
                    <FaUser className='text-slate-700'/>
                    <p className='font-semibold ms-3 text-white'>{name}</p>
                </h2>
                <p className='text-slate-300'>{content}</p>
                <div>
                    <p className='text-right me-3'>{time}</p>
                </div>
                <div className='mt-3'>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(id)}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard