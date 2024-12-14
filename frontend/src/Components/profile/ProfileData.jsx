import React from 'react'
import {Link} from 'react-router-dom'

function ProfileData({user}) {
   
    
    return (
        <>
            <div className='mx-auto'>
                <div className='flex items-center justify-center'>
                    {user && user.profileImage ?
                    <img src={user?.profileImage} className='w-[100px] h-[100px] md:w-[100px] md:h-[100px] rounded-full'/>
                    :
                    <img src="https://i.ibb.co/Pt6K1zh/55f43de2412ad3f18fe90fac70c6472a-removebg-preview.png" className='w-[100px] md:w-[120px] rounded-full'  />
                    }
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-white'>{user?.name}</h1>
                </div>
                <div>
                    <p className='text-lg font-semibold mt-3 text-white'>Gmail: {user?.email}</p>
                </div>
                <div>
                    <p className='text-lg font-semibold mt-3 text-left text-white'>Phone: +91 {user?.mobNumber}</p>
                </div>
                <div className='w-[100vw h-1 bg-pink-800'></div>

                <Link to="/api/changePassword"><button className='bg-primary px-4 py-2 text-white rounded-md font-semibold mt-5'>Change Password</button></Link>
            </div>
        </>
    )
}

export default ProfileData