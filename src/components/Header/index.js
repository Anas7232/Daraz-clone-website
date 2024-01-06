import React from 'react';
import '../../App.css';
import { NavLink, Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { BsCart } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 header-top text-white d-flex gap-10 d-inline-block'>
                        <p className='m-1 paragaph-text-first'>Become a seller</p>
                        <p className='m-1 paragaph-text'>Daraz Affiliat Program</p>
                        <p className='m-1 paragaph-text'>Help & Support</p>
                        <p className='m-1 paragaph-text'>Daraz Logistics Partner</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 header-bottom-text py-2 gap-30 d-flex d-inline-block'>
                        <Link to='/'>
                        <img src='images/header-top.png' alt='header top images' />
                        </Link>
                        <div className="input-group">
                            <input type="text" class="form-control" placeholder="Search in Daraz" aria-label="Daraz in Daraz" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"> <FaSearch /> </span>
                        </div>
                    </div>
                    <div className='col-2 header-left-side gap-10 d-flex d-inline-block py-1'>
                        <div className='icon py-2'>
                            <MdOutlinePersonOutline className='header-bottom-icon' />
                        </div>
                        <div className='gap-30 d-flex'>
                            <Link className=' text-white text-decoration-none  text-szies' to='/login'> Login </Link>
                            <span className='span-line'></span>
                            <Link className=' text-white text-decoration-none  text-szies' to='/signup'> Sing up </Link>
                        </div>
                    </div>
                    <div className='col-2 header-left-side d-flex d-inline-block py-1'>

                        <div className=' d-flex'>
                            <div className='icon py-2'>
                                <TbWorld className='header-bottom-icon' />
                            </div>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle text-sizes bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </button>
                                <ul className="dropdown-menu">
                                    <p className='dropdown-menu-p'> Select Language </p>
                                    <div class="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            <p className='dropdown-menu-p'> UR / Urdu </p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            <p className='dropdown-menu-p'> EN / English </p>
                                        </label>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <BsCart className='header-bottom-icon-cart' />
                        <div className='top_span'>
                            <h5 className='text-h5-span'> 1 </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
