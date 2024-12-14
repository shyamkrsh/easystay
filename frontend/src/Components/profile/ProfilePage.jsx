import React from 'react'
import ProfileData from './ProfileData.jsx'
import { useSelector } from 'react-redux';
import DemoNav from '../DemoNav.jsx'

function ProfilePage() {
    const user = useSelector((state) => state.user.user);
    return (
        <>
            <DemoNav heading={"My profile"}/>
            <div className='pt-20 text-center shadow-md md:w-[50%] flex items-center justify-center mx-auto py-10 bg-slate-900 w-[100%] h-[100vh]'>
               <ProfileData user={user}/>
            </div>
        </>
    )
}

export default ProfilePage