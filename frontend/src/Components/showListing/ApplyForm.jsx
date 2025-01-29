import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function ApplyForm({ id, amount }) {
    const [search, setSearch] = useState(false)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (!user) {
            navigate("/login");
        }
        let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/application/${id}/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                amount: amount,
            })
        })
        let data = await response.json();
        console.log(data);

        handlePaymentVerify(data?.data);

        const handlePaymentVerify = async (data) => {
            try {
                const options = {
                    key: process.env.RAZORPAY_KEY_ID,
                    amount: data.amount,
                    currency: "INR",
                    name: "Real Estate",
                    description: "Payment",
                    order_id: data.id,
                    handler: async (response) => {
                        try {
                            const verifyResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/application/${id}/verifyPayment`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                credentials: 'include',
                                body: JSON.stringify({
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature,
                                    data: data,
                                })
                            })
                            const verifyData = await verifyResponse.json();
                            console.log(verifyData);
                            
                        } catch (err) {
                            console.log(err)
                        }
                    },
                    theme: {
                        color: '#686CFD'
                    }
                }

                const rzp1 = new window.Razorpay(options);
                rzp1.open();

            } catch (err) {
                console.log(err)
            }

        }
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
                    <button className='bg-yellow-600 text-white p-2 rounded-md font-semibold' type='submit'>
                        {
                            search ? <p className='flex items-center gap-3'>Applying <span className="loading loading-spinner loading-md"></span></p> : <p><span className='text-slate-300'>₹ {amount}</span> Pay & Apply</p>
                        }
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ApplyForm;