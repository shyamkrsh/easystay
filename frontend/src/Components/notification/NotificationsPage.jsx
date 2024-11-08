import React from 'react'
import NotificationsNav from './NotificationsNav';
import NotificationCard from './NotificationCard';
import Footer from '../Footer'

function NotificationsPage() {
    return (
        <>
        <NotificationsNav/>
        <div className='mt-16'>
            <div className='overflow-x-hidden overflow-y-auto'>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NotificationsPage
