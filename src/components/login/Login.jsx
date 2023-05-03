import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isvisible, setIsVisible] = useState(false)
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const handleShowBtn = () => {
        setIsVisible(!isvisible);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    const handleSignInWithsocials = (provider) => {
        
    }
    return (
        <>
            <div className="hero  lg:min-h-screen  bg-base-100">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body pb-2" onSubmit={handleLogin}>
                            <div className="form-control">
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <input type={isvisible ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                <button
                                    type='button'
                                    onClick={handleShowBtn}
                                    className='inline absolute top-1/3 right-2'
                                >
                                    {isvisible ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            <p><small>{feedbackMessage}</small></p> {/* error message */}
                            <label className="label">
                                <Link
                                    to="/reset"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?</Link>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'><small>New here? <Link to="/register">register</Link></small></p>
                        </form>
                        <div className='form-control mb-4'>
                            <button
                                className="btn btn-sm btn-outline btn-primary w-56 my-1 mx-auto"
                                onClick={() => handleSignInWithsocials(googleProvider)}
                            >
                                <FaGoogle className='mr-1' />Continue with Google
                            </button>
                            <button
                                className="btn btn-sm btn-outline btn-primary w-56 my-1 mx-auto"
                                onClick={() => { handleSignInWithsocials(gitHubProvider) }}
                            >
                                <FaGithub className='mr-1' />Continue with Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;