import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ type, message }) => {

    const id = 'meow'

    useEffect(() => {
        if (type === "success") {
            toast.success(message,{
                toastId:id
            });
        }
        if (type === "error") {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER,
                toastId:id
            });
        }
    }, [type, message])

    return (
        <div>
            <ToastContainer />
        </div>
    );
}

export default Notification;