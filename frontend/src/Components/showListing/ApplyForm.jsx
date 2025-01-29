import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function ApplyForm({ id , amount}) {
    const [search, setSearch] = useState(false)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        if(!user){
            navigate("/login");
        }
        setSearch(true)
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/application/${id}/payment`, data, {
            withCredentials: true,
        }).then((res) => {
            setSearch(false);
            if(res.data.success){
                toast.success("Application accepted", {
                    position: 'top-right'
                })
            }else{
                toast.error(res.data.message, {
                    position: 'top-right'
                });
            }
            reset()
        }).catch((err) => {
            setSearch(false);
            toast.error(err.message, {
                position: 'top-right'
            });
        })
    }

    return (
        <div className='bg-slate-900 rounded-md shadow-md w-[100%] p-5'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className='text-center text-2xl font-bold text-white'>Book Your Choice</h2>
                <div className='mt-3'>
                    <TextField
                        id=""
                        label='Enter your name'
                        type="text"
                        autoComplete="current-name"
                        className='w-full '
                        {...register("name", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.name && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-3 '>
                    <TextField
                        id=""
                        label='Enter your email'
                        type="email"
                        autoComplete="current-email"
                        className='w-full '
                        {...register("email", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.password && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-5'>
                    <TextField
                        id=""
                        label='Enter your mobile number'
                        type="text"
                        autoComplete="current-number"
                        className='w-full'
                        {...register("mobNumber", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.name && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-3'>
                    <TextField
                        id=""
                        label='Enter your address'
                        type="text"
                        autoComplete="current-address"
                        className='w-full'
                        {...register("location", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.password && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-5 text-right'>
                   
                </div>
                <div className='flex flex-col mt-5'>
                    <Button variant="contained" type='submit'>
                        {
                            search ? <p className='flex items-center gap-3'>Applying <span className="loading loading-spinner loading-md"></span></p> : <p>Apply</p>
                        }
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default ApplyForm;