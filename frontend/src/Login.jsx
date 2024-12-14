import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import Context from './context/Context';
import toast from 'react-hot-toast';
import DemoNav from './Components/DemoNav'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




function Login() {

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const [search, setSearch] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setSearch(true);
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, data, {
            withCredentials: true,
        }).then((res) => {
            setSearch(false);
            if (res?.data?.success) {
                setSearch(false);
                toast.success("Login successfully", {
                    position: 'top-right'
                });

                fetchUserDetails();
                navigate("/")
            } else {
                setSearch(false);
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
            <DemoNav heading={"Login to your account"} />
            <div className='bg-slate-800 w-[100%] h-[100vh]'>
                <div className="w-[100%] mt-0 md:mt-8 p-5 md:w-[40%] bg-slate-800  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <img className='mx-auto w-[200px] h-[200px]' src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-house-with-no-background-png-image_9197435.png" alt="" />
                    <h3 className="font-bold text-lg">Login to your account</h3>
                    <form action='/login' onSubmit={handleSubmit(onSubmit)} >
                        <div className='mt-5 md:mt-3'>
                            <TextField
                                id="1"
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
                                    style: { color: 'white'}
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
                        <div className='flex flex-col mt-5'>
                            <Button variant="contained" type='submit'>
                                {
                                    search ? <p className='flex items-center gap-3'>Logging <span className="loading loading-spinner loading-md"></span></p> : <p>Login</p>
                                }
                            </Button>
                            <p className='text-center mt-5 text-white'>Don't have an account <Link to={"/signup"} className='underline text-blue-600'>Signup</Link></p>
                        </div>
                        {/* <p className='text-center'>OR, </p>

                <div className='flex items-center gap-5 mt-5 bg-slate-200 hover:bg-slate-300 justify-center p-3 cursor-pointer rounded-md'>
                    <img src="assets/images/google.png" alt="" style={{ width: "40px" }} />
                    <p className='text-xl'>Login with google</p>
                </div> */}

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login