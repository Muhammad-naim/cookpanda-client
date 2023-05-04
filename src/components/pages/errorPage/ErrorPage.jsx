import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='text-center'>
            <img className='max-w-xs mx-auto' src="https://i.ibb.co/RgrwMRX/5203299.jpg" />
            <h1 className='text-5xl font-semibold text-red-600'>Oops!</h1>
            <p className='text-lg'>Sorry, an unexpected error has occurred.</p>
            <p>Go to <Link to={"/"}>Home</Link></p>
            

        </div>
    );
};

export default ErrorPage;