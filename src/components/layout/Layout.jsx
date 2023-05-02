import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sheared/navbar/Navbar';
import Footer from '../sheared/footer/Footer';

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;