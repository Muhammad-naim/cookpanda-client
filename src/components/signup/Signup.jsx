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
        const imgURL = form.imageUrl.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(imgURL, name, email, password, confirm);
        if (password.length < 6) {
            setFeedbackMessage("Your password must be at least 6 characters");
            return
        }
        if (password !== confirm) {
            setFeedbackMessage("password didn't match.")
        }

    }
    return (
        <>
            <div className="hero max-h-screen lg:min-h-screen ">
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
                            <input type="url" name="imageUrl" placeholder="Photo URL" className="input input-bordered" required/>
                        </div>
                        <div  className="form-control">
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control relative">
                            <input type={isvisible? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required/>
                                <span
                                onClick={handleShowBtn}
                                className='inline absolute top-1/3 right-2'
                                >
                                {isvisible? <FaEye/> : <FaEyeSlash/>}
                                </span>
                        </div>
                        <div className="form-control relative">
                            <input type={isvisible? "text" : "password"} name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                <span
                                onClick={handleShowBtn}
                                className='inline absolute top-1/3 right-2'
                                >
                                {isvisible? <FaEye/> : <FaEyeSlash/>}
                                </span>
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