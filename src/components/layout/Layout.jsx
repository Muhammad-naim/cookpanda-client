import React, { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../sheared/navbar/Navbar';
import Footer from '../sheared/footer/Footer';

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;