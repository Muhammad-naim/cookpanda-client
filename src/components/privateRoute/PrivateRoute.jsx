import React, { useContext } from 'react';
import { authContext } from '../../firebase/authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(authContext)
    if (loading) {
        return (
            <div className='my-8 flex justify-center'>
            <progress className="progress w-56 mx-auto"></progress>
        </div>
        )
        
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'} state={{from: location}} replace>
        </Navigate>
    );
};

export default PrivateRoute;