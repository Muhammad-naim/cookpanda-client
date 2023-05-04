import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center pt-12'>
            <img className='max-w-xs mx-auto' src="https://i.ibb.co/RgrwMRX/5203299.jpg" />
            <h1 className='text-5xl font-semibold text-red-600'>Oops!</h1>
            <p className='text-lg text-red-700'>{error.statusText}</p>
            <p className='text-lg text-red-700'>Sorry, an unexpected error has occurred.</p>
            <p>Go to <Link to={"/"}>Home</Link></p>
            

        </div>
    );
};

export default ErrorPage;