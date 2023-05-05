import React, { useContext } from 'react';
import { authContext } from '../../../firebase/authProvider/AuthProvider';
import { useState } from 'react';

const ResetPassword = () => {
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const { resetPassword } = useContext(authContext);
    const handleResetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        resetPassword(email)
            .then(result => {
                setFeedbackMessage('Check your email.')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Reset password</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleResetPassword}>
                            <div className="form-control">
                                <input type="text" name="email" placeholder="enter your registered email" className="input input-bordered" />
                            </div>
                            <p><small>{feedbackMessage}</small></p> 
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF7B74] hover:bg-[#e96b64]"
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;