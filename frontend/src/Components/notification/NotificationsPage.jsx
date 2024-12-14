import React from 'react'
import NotificationCard from './NotificationCard';
import Footer from '../Footer'
import DemoNav from '../DemoNav'
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

function NotificationsPage() {
    let baseUrl = import.meta.env.VITE_API_BASE_URL;
    const user = useSelector((state) => state.user.user);
    
    let  handleDelete = (id) => {
        axios.delete(`${baseUrl}/api/notifications/${id}/delete`, {withCredentials: true}).then((res) => {
            toast.success("Notification Deleted", {
                position: 'top-right'
            })
        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }
    return (
        <>
            <DemoNav heading={"Notifications"} />
            <div className='pt-28 w-[100vw] h-[100vh] bg-slate-800 overflow-x-hidden overflow-y-scroll'>
                <div className='overflow-x-hidden overflow-y-scroll w-[100vw] h-[100%] bg-slate-800'>
                    {
                        user && user._id ?
                            user.notifications.map((item) => (
                                <div>
                                    <NotificationCard name={item.name} content={item.content} time={item.createdAt} id={item._id} handleDelete={handleDelete} />
                                </div>
                            ))
                            : ""
                    }
                </div>
            </div>

        </>
    )
}

export default NotificationsPage
