import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import Login from '../Login.jsx';
import axios from 'axios';
import profile from './../assets/images/profile.png'
import toast from 'react-hot-toast';


function Signup() {


    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post("/api/signup", data).then((res) => {
            if (res.data.success) {
                toast.success("Signup successfully", {
                    position: 'top-right'
                })
            } else {
                toast.error(res.data.message, {
                    position: 'top-right'
                })
            }

            navigate("/");
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
                <h2 className='text-xl font-semibold'>Create Account</h2>
            </div>

            <div className='w-[100%] mt-0 md:mt-8 p-10 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className='mt-5 text-center  flex items-center justify-center'>
                        <label htmlFor="profileImage"><img src={profile} className='w-[80px]' alt="" /></label>
                        <input
                            type="file"
                            id='profileImage'
                            name='profileImage'
                            className='hidden'
                            {...register("profileImage")}
                        />
                    </div>
                    <div className='mt-3'>
                        <TextField
                            id="name"
                            label='Enter your name'
                            type="text"
                            autoComplete="current-name"
                            className='w-full'
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='mt-3'>
                        <TextField
                            id="email"
                            label='Enter your email'
                            type="email"
                            autoComplete="current-email"
                            className='w-full'
                            {...register("email", { required: true })}
                        />
                        {errors.password && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='mt-5'>
                        <TextField
                            id="mobNumber"
                            label='Enter your mobile number'
                            type="text"
                            autoComplete="current-number"
                            className='w-full'
                            {...register("mobNumber", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='mt-3'>
                        <TextField
                            id="password"
                            label='Enter your password'
                            type="password"
                            autoComplete="current-password"
                            className='w-full'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-600'>Please fill this field</span>}
                    </div>

                    <div className='flex flex-col mt-8'>
                        <Button variant="contained" type='submit'>
                            Signup
                        </Button>

                    </div>

                    <div className='mt-3'>
                        <p className='text-center'>Already have an account <Link to="/login" className='text-blue-900 underline'>Login</Link></p>
                    </div>

                </form>

                <dialog id="my_modal_3" className="modal text-black ">

                    <Login />
                </dialog>
            </div>
        </>
    )
}

export default Signup