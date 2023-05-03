import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../firebase/authProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(authContext)

    const handleLogOut = () => {
        logOut()
    }




    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <h2 className='text-2xl font-bold'>COOK<span className='text-primary'>PANNDA</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>  <div className='tooltip tooltip-left' data-tip={user?.displayName}>
                            <img src={user?.photoURL} alt="user"
                                className='max-h-8 max-w-8 rounded-full  border-2 shadow-md'
                            />
                        </div>

                        <button
                            className='btn btn-sm btn-primary ml-2'
                            onClick={handleLogOut}
                        >
                            Logout
                        </button>
                    </> :
                    <Link to="/login" className="btn btn-sm btn-primary hover:">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;