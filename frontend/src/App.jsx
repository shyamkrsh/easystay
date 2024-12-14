import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/home/HomePage.jsx'
import Signup from './Components/Signup.jsx'
import Listings from './Components/listings/Listings.jsx'
import ShowListingPage from './Components/showListing/ShowListingPage.jsx'
import axios from 'axios'
import Context from './context/Context.jsx'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice.jsx'
import Login from './Login.jsx'
import NewListingForm from './Components/listings/NewListingForm.jsx'
import DashboardPage from './Components/dashboard/DashboardPage.jsx'
import NotificationsPage from './Components/notification/NotificationsPage.jsx'
import {Toaster} from 'react-hot-toast'
import AboutPage from './Components/about/AboutPage.jsx'
import ContactPage from './Components/contact/ContactPage.jsx'
import ProfilePage from './Components/profile/ProfilePage.jsx'
import PageNotFound from './PageNotFound.jsx'
import EditListingForm from './Components/showListing/EditListingForm.jsx'
import ForgetPassword from './ForgetPassword.jsx'
import ChangePassword from './ChangePassword.jsx'

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user-details`, {
      method: "GET",
      credentials: 'include',
    })

    const dataApi = await dataResponse?.json();
    if (dataApi) {
      dispatch(setUserDetails(dataApi?.data));
    }
  }

  useEffect(() => {
    // user detais

    fetchUserDetails();
  }, [])

  return (
    <>

      <Context.Provider value={{
        fetchUserDetails
      }}>
        <BrowserRouter>
        <Toaster/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
            <Route path='/api/changePassword' element={<ChangePassword />} />
            <Route path='/listings/search/:category' element={<Listings />} />
            <Route path='/listings/new' element={<NewListingForm />} />
            <Route path='/listings/show/:id' element={<ShowListingPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/notifications' element={<NotificationsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/edit/:id' element={<EditListingForm />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>


    </>
  )
}

export default App