import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sheared/navbar/Navbar';

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;