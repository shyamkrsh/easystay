import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import shyam from '../../public/assets/images/shyam.jpg'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IoArrowBack } from "react-icons/io5";
import { useContext } from 'react';
import Context from '../context/Context';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserDetails } from '../store/userSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { IoMicCircle } from "react-icons/io5";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function SearchNavbar({ search, setSearch , setShowListen}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    let baseUrl = import.meta.env.VITE_API_BASE_URL;
    const onSubmit = (data) => {
        axios.post(`${baseUrl}/api/login`, data, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res?.data?.success) {
                toast.success("Login successfully", {
                    position: 'top-right'
                });
                fetchUserDetails();
                window.location.href = "/"
            } else {
                toast.error(res?.data?.message, {
                    position: 'top-right'
                });
            }

        }).catch((err) => {
            toast.error(err?.message, {
                position: 'top-right'
            });
        })

    }
    const handleLogout = () => {
        axios.post(`${baseUrl}/api/logout`, {}, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                toast.success("Logout successfully", {
                    position: 'top-right'
                })
                dispatch(setUserDetails(null))
                setTimeout(() => {
                    window.location.href = "/"
                }, 500);
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


    const handleSearch = (event) => {
        event.preventDefault();
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleLoggedProfile = () => {
        document.getElementById('my_modal_3').showModal();
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript;
        setSearch(transcript);
        recognition.stop();
        setShowListen(false);
    };

    let handleMicSearch = () => {
        setShowListen(true);
        recognition.start();
        setTimeout(() => {
            setShowListen(false);
        }, 15000);
    }



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => navigate("/dashboard")}>My Dashboard</MenuItem>
            <MenuItem onClick={() => navigate("/listings/new")}>Post services</MenuItem>
            <MenuItem onClick={handleLogout} >Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={() => navigate("/notifications")}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={user?.notifications?.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {
                        user && user?.profileImage ? (<div>
                            <img src={user?.profileImage || user?.picture} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
                        </div>)
                            :
                            (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                    }
                </IconButton>
                <p>Profile</p>
            </MenuItem>


        </Menu>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ position: "fixed", marginTop: "0", zIndex: "10", backgroundColor: '#201f4d' }}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon/> */}

                        <div className="drawer z-20">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">

                                {/* Back Icon goes here */}
                                <button onClick={() => window.history.back()} ><IoArrowBack /></button>

                            </div>

                        </div>

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        {/* Logo goes here */}
                        <h1 className='text-2xl font-bold'>EasyStay</h1>
                    </Typography>

                    <Search>
                        <form onSubmit={handleSearch} className='md:w-[400px] flex items-center justify-between pe-3 '>
                            <div className='w-[100%]'>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search area…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={search}
                                    onChange={() => setSearch(event.target.value)}
                                />
                            </div>
                            <IoMicCircle className='text-4xl cursor-pointer' onClick={handleMicSearch} />
                        </form>
                    </Search>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            {
                                user && user._id ? <Badge badgeContent={user?.notifications?.length} color="error">
                                    <NotificationsIcon onClick={() => navigate("/notifications")} />
                                </Badge>
                                    : ""
                            }
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={user && user?._id ? handleProfileMenuOpen : handleLoggedProfile}
                            color="inherit"
                        >

                            {
                                user && user?.profileImage ? (<div>
                                    <img src={user?.profileImage || user?.picture} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
                                </div>)
                                    :
                                    (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                            }


                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={user && user?._id ? handleMobileMenuOpen : handleLoggedProfile}
                            color="inherit"
                        >
                            {
                                user && user.profileImage ? (<div>
                                    <img src={user?.profileImage || user?.picture} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
                                </div>)
                                    :
                                    (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                            }
                        </IconButton>
                    </Box>
                </Toolbar>
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                <dialog id="my_modal_3" className="modal-box p-5 bg-slate-700 text-white w-[100%]">
                    <div className="bg-slate-700 text-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg text-center">Login to your Account</h3>
                        <form action='/login' onSubmit={handleSubmit(onSubmit)} >
                            <div className='mt-5'>
                                <TextField
                                    id=""
                                    label='Enter your email'
                                    type="text"
                                    autoComplete="current-email"
                                    className='w-full'
                                    {...register("email", { required: true })}
                                    InputLabelProps={{
                                        style: { color: 'white' }
                                    }}

                                    inputProps={{
                                        style: { color: 'white', backgroundColor: '#628b8c', borderRadius: '3px' }
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Label color
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "white", // Focused label color
                                        },
                                    }}
                                />
                                {errors.name && <span className='text-red-600'>Please fill this field</span>}
                            </div>
                            <div className='mt-3'>
                                <TextField
                                    id=""
                                    label='Enter your password'
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    className='w-full'
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
                                                    style={{ color: 'white' }} 
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", 
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", 
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Label color
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "white", // Focused label color
                                        },
                                    }}
    
                                />
                                {errors.password && <span className='text-red-600'>Please fill this field</span>}
                            </div>
                            <div className='flex flex-col mt-5'>
                                <Button variant="contained" type='submit'
                                >
                                    Login
                                </Button>
                                <div className='flex items-center justify-between md:mt-3 md:mb-3'>
                                    <p className='text-center mt-5'><Link to={"/forgetPassword"} className='text-blue-600 text-[14px]'>Forgot password</Link></p>
                                    <p className='text-center  mt-5'>Create an account <Link to="/signup" className='text-blue-600'
                                        onClick={() => document.getElementById('my_modal_3').hideModal()}
                                    >Signup</Link></p>
                                </div>
                            </div>

                        </form>
                    </div>
                </dialog>

            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
