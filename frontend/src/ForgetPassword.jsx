import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import Context from './context/Context';
import toast from 'react-hot-toast';
import DemoNav from './Components/DemoNav'


function ForgetPassword() {

    const [search, setSearch] = useState(false);





    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        setSearch(true)
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/forgetPassword`, data, {
            withCredentials: true,
        }).then((res) => {
            setSearch(false);
            if (res?.data?.success) {
                toast.success("OTP Send successfully", {
                    position: 'top-right'
                });
                fetchUserDetails();
                navigate("/login")
            } else {
                toast.error(res?.data?.message, {
                    position: 'top-right'
                })
            }
        }).catch((err) => {
            setSearch(false);
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }


    return (
        <>
            <DemoNav heading={"Forget Your Password"} />

            <div className="w-[100%] shadow-md mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">


                <h3 className="font-bold text-xl mb-5">Forget Password</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className={'mt-5 md:mt-3'}>
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

                    <div className='flex items-center justify-between px-10 mt-5'>
                        <Button variant="contained" type='submit'>
                            {
                                search ? <p className='flex items-center gap-3'>Sending <span className="loading loading-spinner loading-md"></span></p> : <p>Send Password</p>
                            }
                        </Button>

                    </div>
                </form>

            </div>
        </>
    )
}

export default ForgetPassword