import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <div className='container-fluid main-top-container'>
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <h1 className='login-top-text'> Welcome To Daraz! Please Login </h1>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='login-fome'>
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email*</label>
                                    <input type="email" class="form-control" placeholder='Enter your email ' id="inputEmail4" required/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Password*</label>
                                    <input type="password" class="form-control" placeholder='Enter your password' id="inputPassword4" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 d-flex justify-content-end'>
                                        <Link className='reset-link' to='/reset'> Reset Your Password </Link>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='social-login d-flex d-inline-block text-center '>
                                            <FaFacebookF className='social-icon' />
                                            <p className='text-center social-text mb-0'> Login With Faceebook </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='social-login-google d-flex d-inline-block text-center '>
                                            <FaGoogle className='social-icon' />
                                            <p className='text-center social-text mb-0'> Login With Google </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='social-login-github d-flex d-inline-block text-center '>
                                            <FaGithub className='social-icon' />
                                            <p className='text-center social-text mb-0'> Login With GitHub </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-grid gap-2">
                                        <button className="btn button-bottom" type="submit">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
