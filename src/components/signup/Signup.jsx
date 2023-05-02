import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Signup = () => {
    const [isvisible, setIsVisible] = useState(false)
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const handleShowBtn = () => {
        setIsVisible(!isvisible);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 8) {
            alert("Your password must be at least 8 characters");
            return
        }
        // if (!/(?=.*[A-Z])/.test(password)) {
        //     alert("Your password must contain at least one Uppercase letter.");
        //     return
        // }
        // if (!/(?=.*[0-9])/.test(password)) {
        //     alert("Please add at least a digit.");
        //     return
        // }
        // if (!/(?=.*[!@#$%^&*])/.test(password)) {
        //     alert("please add at least one special character.")
        // }
        // if (password !== confirm) {
        //     alert("password did not match.")
        // }
        }
    return (
        <>
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div  className="form-control">
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div  className="form-control">
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control relative">
                            <input type={isvisible? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required/>
                                <button
                                type='button'
                                onClick={handleShowBtn}
                                className='inline absolute top-1/3 right-2'
                                >
                                {isvisible? <FaEye/> : <FaEyeSlash/>}
                                </button>
                        </div>
                        <div className="form-control relative">
                            <input type={isvisible? "text" : "password"} name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                <button
                                type='button'
                                onClick={handleShowBtn}
                                className='inline absolute top-1/3 right-2'
                                >
                                {isvisible? <FaEye/> : <FaEyeSlash/>}
                                </button>
                            </div>
                            <p><small>{feedbackMessage}</small></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-center'><small>Already have an account? <Link to="/login">login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Signup;