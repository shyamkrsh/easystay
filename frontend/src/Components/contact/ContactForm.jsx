import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function ContactForm() {


    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact/new`, data).then((res) => {
            toast.success("Thanks for Contacting with us", {
                position: 'top-right'
            })
            reset();
        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }
    return (

        <>

            <div className='w-full mt-10 md:mt-8 px-5 md:px-10 pb-10 md:w-[40%] bg-slate-900 rounded-md'>
                <h1 className='text-2xl font-semibold text-center text-white pt-5'>Contact Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <div className='mt-3'>
                        <TextField
                            id="name"
                            label='Enter your name'
                            type="text"
                            autoComplete="current-name"
                            className='w-full'
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
                    <div className='mt-3'>
                        <TextField
                            id="email"
                            label='Enter your email'
                            type="email"
                            autoComplete="current-email"
                            className='w-full'
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
                    <div className='mt-3'>
                        <TextField
                            id="description"
                            label='Write description'
                            type="text"
                            autoComplete="current-description"
                            className='w-full'
                            multiline
                            minRows={2}
                            style={{ backgroundColor: '#3a5d5e', borderRadius: "10px" }}
                            {...register("description", { required: true })}
                            InputLabelProps={{
                                style: { color: 'white' } // Makes label text white
                            }}
                            inputProps={{
                                style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                            }}

                        />
                        {errors.password && <span className='text-red-600'>Please fill this field</span>}
                    </div>


                    <div className='flex flex-col mt-8'>
                        <Button variant="contained" type='submit'>
                            Submit
                        </Button>

                    </div>



                </form>

            </div>
        </>
    )
}

export default ContactForm