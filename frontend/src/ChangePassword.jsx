import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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



function ChangePassword() {

    let { userId } = useParams();
    const [search, setSearch] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleOldPasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
    };

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setSearch(true);
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/changePassword`, data, {
            withCredentials: true,
        }).then((res) => {
            setSearch(false);
            if (res?.data?.success) {
                toast.success("Password changed successfully", {
                    position: 'top-right'
                });
                fetchUserDetails();
                navigate("/")
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
            <DemoNav heading={"Change your password"} />

            <div className='w-[100vw] h-[100vh] bg-slate-800'>
                <div className="w-[100%] shadow-md mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="font-bold text-xl mb-5">Change Password</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className={'mt-5 md:mt-3'}>
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

                        <div className={'mt-5 md:mt-3 block'}>
                            <TextField
                                id="1"
                                label='Enter old password'
                                type={showOldPassword ? "text" : "password"}
                                autoComplete="current-otp"
                                className='w-full'

                                {...register("oldpassword", { required: true })}
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
                                                onClick={toggleOldPasswordVisibility}
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
                            {errors.name && <span className='text-red-600'>Please fill this field</span>}
                        </div>
                        <div className={'mt-5 md:mt-3 block'}>
                            <TextField
                                id="1"
                                label='Enter your new password'
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                className='w-full'
                                {...register("newpassword", { required: true })}
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
                            {errors.name && <span className='text-red-600'>Please fill this field</span>}
                        </div>



                        <div className={'flex flex-col mt-5'}>
                            <Button variant="contained" type='submit'>
                                {
                                    search ? <p className='flex items-center gap-3'>Submitting <span className="loading loading-spinner loading-md"></span></p> : <p>Submit</p>
                                }
                            </Button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default ChangePassword