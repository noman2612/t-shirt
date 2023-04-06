import React from 'react';
import Heder from '../Heder/Heder';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Main;