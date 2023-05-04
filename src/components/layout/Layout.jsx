import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../sheared/navbar/Navbar';
import Footer from '../sheared/footer/Footer';

const Layout = () => {
    const navigation = useNavigation()
    return (
        <div className='container mx-auto'>
            <Navbar />
            <div>
                {navigation.state === 'loading' ? "loading" : ""}
            </div>
                <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;