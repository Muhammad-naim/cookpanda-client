import React, { useState } from 'react';
import Navbar from '../sheared/navbar/Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    const [isvisible, setIsVisible] = useState(false)
    const [feedbackMessage, setFeedbackMessage] = useState('')
    // const navigate = useNavigate();
    // const location = useLocation()
    // console.log(location);
    // const from = (location.state?.from?.pathname || "/");
    // console.log(from);
    const handleShowBtn = () => {
        setIsVisible(!isvisible);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;