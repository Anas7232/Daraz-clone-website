import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Login = () => {
    return (
        <>
            <div className='container-fluid main-top-container'>
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <h1 className='login-top-text'> Create Your Daraz Account </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='login-fome'>
                            <form class="row g-3">
                                <div class="col-md-12">
                                    <label for="inputAddress2" class="form-label">Full Name*</label>
                                    <input type="text" class="form-control form-input" id="inputAddress2" placeholder="Enter your first and last name" required/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email*</label>
                                    <input type="email" class="form-control" placeholder='Enter your email ' id="inputEmail4" required/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Password*</label>
                                    <input type="password" class="form-control" placeholder='Enter your password' id="inputPassword4" required />
                                </div>
                                <div class="col-md-12">
                                    <label for="inputAddress" class="form-label">Address*</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                                </div>
                                <div class="col-md-12">
                                    <label for="inputAddress2" class="form-label">Address*</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City*</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder='Enter your city' required />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State*</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Select your country</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label">Zip*</label>
                                    <input type="text" class="form-control" id="inputZip" placeholder='Zip code...' required/>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" required/>
                                        <label class="form-check-label" for="gridCheck">
                                            I'd like to receive exclusive offers and promotions via SMS
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy
                                        </label>
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
                                <div class="col-md-12">
                                    <div class="d-grid gap-2">
                                        <button class="btn button-bottom" type="submit">Sign Up</button>
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
