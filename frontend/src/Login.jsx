import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import Context from './context/Context';
import toast from 'react-hot-toast';





function Login() {

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('/api/login', data, {
            withCredentials: true,
        }).then((res) => {
            if (res.data.success) {
                toast.success("Login successfully", {
                    position: 'top-right'
                });

                fetchUserDetails();
                navigate("/")
            } else {
                toast.error(res.data.message, {
                    position: 'top-right'
                })
            }


        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }


    return (
        <>
            <div className='bg-blue-600 text-white flex flex-start gap-5 w-[100%] px-5 py-5'>
                <Link onClick={() => window.history.back()} ><IoArrowBack className='text-2xl font-extrabold' /></Link>
                <h2 className='text-xl font-semibold'>Login to your Account</h2>
            </div>

            <div className="w-[100%] mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

                <img className='mx-auto md:w-[50%]' src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-house-with-no-background-png-image_9197435.png" alt="" />
                <h3 className="font-bold text-lg">Login</h3>
                <form action='/login' onSubmit={handleSubmit(onSubmit)} >
                    <div className='mt-5 md:mt-3'>
                        <TextField
                            id="1"
                            label='Enter your email'
                            type="email"
                            autoComplete="current-email"
                            className='w-full'
                            {...register("email", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='mt-3'>

                        <TextField
                            id="2"
                            label='Enter your password'
                            type="password"
                            autoComplete="current-password"
                            className='w-full'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='flex flex-col mt-5'>
                        <Button variant="contained" type='submit'>
                            Login
                        </Button>
                        <p className='text-center mt-5'>Don't have an account <Link to={"/signup"} className='underline text-blue-600'>Signup</Link></p>
                    </div>
                    {/* <p className='text-center'>OR, </p>

                <div className='flex items-center gap-5 mt-5 bg-slate-200 hover:bg-slate-300 justify-center p-3 cursor-pointer rounded-md'>
                    <img src="assets/images/google.png" alt="" style={{ width: "40px" }} />
                    <p className='text-xl'>Login with google</p>
                </div> */}

                </form>
            </div>
        </>
    )
}

export default Login