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


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();



    const onSubmit = (data) => {
        axios.post('/api/login', data, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                toast.success("Login successfully", {
                    position: 'top-right'
                });
                fetchUserDetails();
                window.location.href = "/"
            } else {
                toast.error(res.data.message, {
                    position: 'top-right'
                });
            }

        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            });
        })

    }


    const handleLogout = async () => {
        axios.get("/api/logout", {
            withCredentials: true,
        }).then((res) => {
            if (res.data.success) {
                toast.success("Logout successfully", {
                    position: 'top-right'
                })
                dispatch(setUserDetails(null));
                window.location.href = "/"
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
            <MenuItem onClick={() => navigate("/messages")}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={1} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={() => navigate("/notifications")}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={1} color="error">
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
                        (user && user.profileImage) ? (<div>
                            <img src={user.profileImage} alt="" className='w-[40px] rounded-full border-slate-300 border-2' />
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
            <AppBar style={{ position: "fixed", marginTop: "0", zIndex: "1" }}>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer close"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon/> */}

                        <div className="drawer z-20">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">
                                <label htmlFor="my-drawer" className=" drawer-button "><MenuIcon className='-mt-3' /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                                <div className=" bg-white text-base-content min-h-full w-[70vw] md:w-80 p-4 z-50">
                                    <img className='w-[50%] mx-auto' src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-house-with-no-background-png-image_9197435.png" alt="" />
                                    <h2 className='font-bold '>EasyStay</h2>
                                    <ul className='mt-8 sidebar-list ps-5'>

                                        <Link to="/"><li><FaHome id='sidebar-icon' /> Home</li></Link>
                                        <Link to={user && user._id ? "/dashboard" : '/'}><li><MdDashboard id='sidebar-icon' />Dashboard</li></Link>
                                        <Link to="/about" ><li><FcAbout id='sidebar-icon' /> About Us</li></Link>
                                        <Link to="/contact" ><li><IoIosContact id='sidebar-icon' /> Contact Us</li></Link>
                                        <Link to="/help" ><li><MdHelpCenter id='sidebar-icon' /> Help Center</li></Link>
                                        {
                                            user && user._id ? (
                                                <Link onClick={handleLogout} ><li><MdLogout id='sidebar-icon' /> Logout</li></Link>
                                            )
                                                :
                                                (<Link to="/login"  ><li><MdLogin id='sidebar-icon' /> Login</li></Link>)
                                        }


                                        {/* <Link to="/signup" ><li><SiGnuprivacyguard id='sidebar-icon' /> Signup</li></Link> */}


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
                        <h1 className='text-2xl font-bold'>EasyStay</h1>
                    </Typography>

                    <Link to={`/listings/search/${"hostel"}`}>
                        <Search>
                            <form method="get" action="/search" className='md:w-[400px]'>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search area…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </form>
                        </Search>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon onClick={() => navigate("/messages")} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon onClick={() => navigate("/notifications")} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={user && user._id ? handleProfileMenuOpen : handleLoggedProfile}

                            color="inherit"
                        >

                            {
                                (user && user.profileImage) ? (<div>
                                    <img src={user.profileImage} alt="" className='w-[40px] rounded-full border-slate-300 border-2' />
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

                            onClick={user && user._id ? handleMobileMenuOpen : handleLoggedProfile}

                            color="inherit"
                        >
                            {
                                (user && user.profileImage) ? (<div>
                                    <img src={user.profileImage} alt="" className='w-[40px] rounded-full border-slate-300 border-2' />
                                </div>)
                                    :
                                    (<AccountCircle className='text-3xl' style={{ fontSize: "35px" }} />)
                            }



                        </IconButton>
                    </Box>
                </Toolbar>





                <dialog id="my_modal_3" className="modal text-black ">
                    <div className="modal-box p-5">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='mt-5'>

                                <TextField
                                    id="email"
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
                                    id="password"
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
                                <div className='flex items-center justify-between md:mt-3 md:mb-3'>
                                    <p className='text-center mt-5'><Link to={"/signup"} className='underline text-blue-600 text-xs md:text-xl'>Forgot password</Link></p>
                                    <p className='text-center text-xs md:text-xl mt-5'>Create an account <Link to={"/signup"} className='underline text-blue-600'
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
