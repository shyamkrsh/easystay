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
import { FiMenu } from "react-icons/fi";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import shyam from '../assets/images/shyam.jpg'
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
import axios from 'axios';
import { useContext } from 'react';
import Context from '../context/Context.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice.jsx';
import { MdDashboard } from "react-icons/md";
import toast from 'react-hot-toast';
import { MdHelpCenter } from "react-icons/md";
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IoMicCircle } from "react-icons/io5";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// all module imported above


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

export default function Navbar() {

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

    const [search, setSearch] = React.useState(false)
    let baseUrl = import.meta.env.VITE_API_BASE_URL;

    const onSubmit = (data) => {
        setSearch(true)
        axios.post(`${baseUrl}/api/login`, data, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            setSearch(false);
            if (res.data.success) {
                toast.success("Login successfully", {
                    position: 'top-right'
                });
                fetchUserDetails();
                window.location.href = "/"
            } else {
                setSearch(false);
                toast.error(res.data.message, {
                    position: 'top-right'
                });
            }

        }).catch((err) => {
            setSearch(false);
            console.log(err)
            toast.error(err.message, {
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
                        (user && user?.profileImage) ? (<div>
                            <img src={user?.profileImage} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
                        </div>)
                            :
                            (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                    }


                </IconButton>
                <p>Profile</p>
            </MenuItem>


        </Menu>
    );

    const handleLoggedProfile = () => {
        document.getElementById('my_modal_3').showModal();
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ position: "fixed", marginTop: "0", zIndex: "1", backgroundColor: '#201f4d' }}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer close"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon/> */}

                        <div className="drawer z-20 lg:hidden">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">
                                <label htmlFor="my-drawer" className=" drawer-button ">
                                    <FiMenu />

                                </label>
                            </div>
                            <div className="drawer-side ">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                                <div className=" bg-slate-700 text-white min-h-full w-[70vw] md:w-80 p-4 z-50">
                                    <div className='flex items-centerps-3 mt-10'>
                                        <h1 className='text-3xl font-bold '>εαѕyѕтαy</h1>
                                    </div>
                                    <div className='w-100 h-1 bg-pink-500 mt-2'></div>
                                    <ul className='mt-8 sidebar-list ps-5 text-white'>

                                        <Link to="/"><li className='text-white'><FaHome id='sidebar-icon' /> Home</li></Link>
                                        <Link to={user && user?._id ? "/dashboard" : '/'} className={user && user?._id ? 'text-white': 'hidden'}><li className='text-white'><MdDashboard id='sidebar-icon' />Dashboard</li></Link>

                                        <Link to={user && user?._id ? "/listings/new" : '/'} className={user && user?._id ? 'text-white': 'hidden'}><li className='text-white'><AddIcon id='sidebar-icon' />Post services</li></Link>

                                        <Link to="/about" ><li className='text-white'><FcAbout id='sidebar-icon' /> About Us</li></Link>
                                        <Link to="/contact" ><li className='text-white'><IoIosContact id='sidebar-icon' /> Contact Us</li></Link>
                                        <Link to="/help" ><li className='text-white'><MdHelpCenter id='sidebar-icon' /> Help Center</li></Link>
                                        {
                                            user && user?._id ? (
                                                <Link onClick={handleLogout} ><li className='text-white'><MdLogout id='sidebar-icon' /> Logout</li></Link>
                                            )
                                                :
                                                (<Link to="/login"  ><li className='text-white'><MdLogin id='sidebar-icon' /> Login</li></Link>)
                                        }


                                    </ul>
                                </div>
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
                        <h1 className='text-2xl font-bold me-[8rem] hidden lg:block'>EasyStay</h1>
                    </Typography>


                    <Link to={`/listings/search/${"hostel"}`}>
                        <Search className='hidden lg:block'>
                            <form method="get" action="/search" className='w-[400px] flex items-center justify-between pe-3 '>
                                <div>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search area…"
                                        inputProps={{ 'aria-label': 'search...' }}
                                    />
                                </div>
                                <IoMicCircle className='text-3xl' />
                            </form>
                        </Search>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    <div className='list-none gap-5 hidden lg:flex '>
                        <Link to="/"><li className='font-semibold'> Home</li></Link>
                        <div className={user && user._id ? 'flex gap-5' : 'hidden'}>
                            <Link to={user && user?._id ? "/dashboard" : '/'}><li className='font-semibold'>Dashboard</li></Link>

                            <Link to={user && user?._id ? "/listings/new" : '/'}><li className='font-semibold'>Post services</li></Link>

                        </div>
                        <Link to="/about" ><li className='font-semibold'> About Us</li></Link>
                        <Link to="/contact" ><li className='font-semibold'> Contact Us</li></Link>
                    </div>

                    <div className='lg:hidden' onClick={() => navigate(`/listings/search/${"hostel"}`)}>
                        <SearchIcon />
                    </div>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            {
                                (user && user?._id) ?
                                    <Badge badgeContent={user?.notifications?.length} color="error">
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
                                (user && user?.profileImage) ? (<div>
                                    <img src={user?.profileImage} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
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
                                (user && user?.profileImage) ? (<div>
                                    <img src={user?.profileImage} alt="" className='w-[40px] h-[40px] rounded-full border-slate-300 border-2' />
                                </div>)
                                    :
                                    (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                            }



                        </IconButton>
                    </Box>
                </Toolbar>





                <dialog id="my_modal_3" className="modal-box p-5 bg-slate-700 text-white w-[100%]">
                    <div className="bg-slate-700 text-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-xl text-center">Login to your Account</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-5'>
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
                                    id="password"
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
                                            color: "white", 
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
                                <div className='flex items-center justify-between md:mt-3 md:mb-3'>
                                    <p className='text-center mt-5'><Link to={"/forgetPassword"} className='text-blue-600'>Forgot password</Link></p>
                                    <p className='text-center  mt-5'>Create an account <Link to={"/signup"} className='text-blue-600'
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
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
