import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import Login from '../Login.jsx';
import axios from 'axios';
import profile from './../assets/images/profile.png'
import toast from 'react-hot-toast';
import DemoNav from './DemoNav.jsx'
import { RiImageAddFill } from "react-icons/ri";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Signup() {

    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [search, setSearch] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setSearch(true);
        const formData = new FormData();
        formData.append("image", image); // assuming `image` is the file
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/signup`, formData).then((res) => {
            if (res?.data?.success) {
                setSearch(false);
                toast.success("Signup successfully", {
                    position: 'top-right'
                })
            } else {
                setSearch(false);
                toast.error(res?.data?.message, {
                    position: 'top-right'
                })
            }

            navigate("/login");
        }).catch((err) => {
            setSearch(false);
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }


    return (

        <>
            <DemoNav heading={"Signup here"} />
            <div className='w-[100%] bg-slate-800 h-[100vh] pt-24 md:pt-16 p-10 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className='mt-5 text-center  flex items-center justify-center'>
                        <label htmlFor="image" className='flex flex-col items-center justify-center relative'>
                            {
                                imageUrl ? <img src={imageUrl} alt="" className='w-[100px] h-[100px] rounded-full' /> : <img src={profile} alt="" className='w-[100px] h-[100px] rounded-full' />
                            }
                            {
                                imageUrl ? <RiImageAddFill className='text-white text-[3rem] absolute top-22 right-8' /> : ""
                            }

                          
                        </label>
                        <input type="file" name="image" id="image" className='hidden' onChange={(e) => { setImage(e?.target?.files[0]), setImageUrl(URL.createObjectURL(e?.target?.files[0])) }} />
                    </div>
                    <div className='mt-3'>
                        <TextField
                            id="name"
                            label='Enter your name'
                            type="text"
                            autoComplete="current-name"
                            className='w-full'
                            {...register("name", { required: true })}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                            inputProps={{
                                style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
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
                                style: { color: 'white' }
                            }}
                            inputProps={{
                                style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                            }}
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
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                            inputProps={{
                                style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "white", // Default border color
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#90caf9", // Hover border color
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4caf50", // Focus border color
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white", // Label color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#4caf50", // Focused label color
                                },
                            }}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className='mt-3'>
                        <TextField
                            id="password"
                            label="Enter your password"
                            type={showPassword ? "text" : "password"} // Dynamically change type
                            autoComplete="current-password"
                            className="w-full"
                            {...register("password", { required: true })}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                            inputProps={{
                                style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '5px' }
                            }}

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={togglePasswordVisibility}
                                            edge="end"
                                            style={{ color: 'white' }} // Adjust icon color
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "white", // Default border color
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#90caf9", // Hover border color
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4caf50", // Focus border color
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white", // Label color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#4caf50", // Focused label color
                                },
                            }}
                        />
                        {errors.password && <span className='text-red-600'>Please fill this field</span>}
                    </div>

                    <div className='flex flex-col mt-8'>
                        <Button variant="contained" type='submit'>
                            {
                                search ? <p className='flex items-center gap-3'>Registering <span className="loading loading-spinner loading-md"></span></p> : <p>Signup</p>
                            }
                        </Button>
                    </div>

                    <div className='mt-3'>
                        <p className='text-center text-white'>Already have an account <Link to="/login" className='text-blue-900 underline ms-2'>Login</Link></p>
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