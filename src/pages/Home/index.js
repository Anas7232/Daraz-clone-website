import React from 'react';
import '../../App.css';
import { FaCartFlatbed } from "react-icons/fa6";
import { BsBrushFill } from "react-icons/bs";
import { BsClipboard2Fill } from "react-icons/bs";
import { GrRestroomWomen } from "react-icons/gr";
import { FaBaby } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdHeadphonesBattery } from "react-icons/md";
import { FaTabletScreenButton } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaBaseballBall } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdBikeScooter } from "react-icons/md";

const Home = () => {
    return (
        <>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-md-3 first-slide'>
                        <div className='home-right-side-dev mt-2'>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaCartFlatbed className='home-icon' />
                                <p className='home-p-text mb-0'>Garocries & Pets</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <BsBrushFill className='home-icon' />
                                <p className='home-p-text mb-0'>Health & Beauty</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <BsClipboard2Fill className='home-icon' />
                                <p className='home-p-text mb-0'>Mens's Fasion</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <GrRestroomWomen className='home-icon' />
                                <p className='home-p-text mb-0'>Women's Fasion</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaBaby className='home-icon' />
                                <p className='home-p-text mb-0'>Mother's & Baby</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaCar className='home-icon' />
                                <p className='home-p-text mb-0'>Home & Lifestyle</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <MdHeadphonesBattery className='home-icon' />
                                <p className='home-p-text mb-0'>Electronic Devices</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaTabletScreenButton className='home-icon' />
                                <p className='home-p-text mb-0'>Electronic Accessories</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <RiComputerLine className='home-icon' />
                                <p className='home-p-text mb-0'>TV & Home Appliances</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaBaseballBall className='home-icon' />
                                <p className='home-p-text mb-0'>Sport's & Outdoor</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <FaBagShopping className='home-icon' />
                                <p className='home-p-text mb-0'>Watch's Bag's & Jewellery</p>
                            </div>
                            <div className='home-top-first d-flex d-inline-block gap-10'>
                                <MdBikeScooter className='home-icon' />
                                <p className='home-p-text mb-2'>Automotive & Moterbike's</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 second-slid'>
                        <div className='home-left-side-dev'>
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/firstcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/seccar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/thirdcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/fourcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/fivecar.png" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/sixcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/sevcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/eigcar.jpg" className="d-block carousal-img w-100 h-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev d-flex justify-content-start" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next d-flex justify-content-end" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 bottom-banner'>
                        <img src='images/bottom-banner.png' />
                    </div>
                </div>
            </div>

            <div className='container-xl'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-md-2 home-banner-fields firstcol gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/payment.png' />
                                <p className='mb-0 home-banner-fields-text'> Safe Payments </p>

                            </div>
                            <div className='col-md-2 home-banner-fields gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/returns.png' />
                                <p className='mb-0 home-banner-fields-text'> Easy Returns </p>

                            </div>
                            <div className='col-md-2 home-banner-fields gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/price.png' />
                                <p className='mb-0 home-banner-fields-text'> Price Guatanted </p>

                            </div>
                            <div className='col-md-2 home-banner-fields gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/authentic.png' />
                                <p className='mb-0 home-banner-fields-text'> 100% Authentic </p>

                            </div>
                            <div className='col-md-2 home-banner-fields gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/verified.png' />
                                <p className='mb-0 home-banner-fields-text'> Daraz Verified </p>

                            </div>
                            <div className='col-md-2 home-banner-fields gap-10 mt-4 d-flex d-inline-block'>
                                <img className='mb-0' src='images/dellivery.png' />
                                <p className='mb-0 home-banner-fields-text'> Dellivery </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 home-product-section'>
                        <div className='row'>
                            <div className='col-md-6 d-flex d-inline-block'>
                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/prodfirst.png' />
                                    <p className='product-home-text'> Mart </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/fasion.png' />
                                    <p className='product-home-text'> Fasion </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/beauty.png' />
                                    <p className='product-home-text'> Beauty </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/deor.png' />
                                    <p className='product-home-text'> Decor </p>
                                </div>
                            </div>
                            <div className='col-md-6 d-flex d-inline-block'>
                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/mobile.png' />
                                    <p className='product-home-text'> Mobile </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/home.png' />
                                    <p className='product-home-text'> Dellivery </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/shop.png' />
                                    <p className='product-home-text'> Shop Now </p>
                                </div>

                                <div className='home-product-field'>
                                    <img className='img-fluid' src='images/new.png' />
                                    <p className='product-home-text'> New </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='fasl-sale-text'> Flash Sale </h3>
                    </div>
                </div>
            </div>

            <div className='container flas-sale-container'>
                <div className='row'>
                    <div className='col-sm-12 top-text-part d-flex d-inline-block justify-content-between'>
                        <p className='fasl-sale-text-bottom mt-0'> On Sale Now </p>
                        
                        <div className='flash-sale-btn'>
                            SHOP NOW
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-2 '>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/salefirst.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.3000</del> -73%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/airpods.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.3999</del> -77%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/air.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.3000</del> -73%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/shoese.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1777</del> -45%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/fly.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1300</del> -13%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/salefirst.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1500</del> -52%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='fasl-sale-text'> Categoies </h3>
                    </div>
                </div>
            </div>

            <div className='container-xl'>
                <div className='row'>
                    <div className='col-sm-12 category-top-col'>
                        <div className='row'>
                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/oil.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text'> Oil </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/mois.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-second'> Moisturizer </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/tights.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-third'> Tights </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/caps.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text'> Caps </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/shampoo.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-four'> Shampoo </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/noodels.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-five'> Noodels </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-sm-12 category-top-col'>
                        <div className='row'>
                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/milk.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text'> Milk </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/wireless.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-second'> Wireless </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/tool.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-third'> Cleaning </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/elec.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text'> Electric </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/cloth.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-four'> Clothing </p>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='category-section'>
                                    <img src='images/wash.jpg' className='img-fluid category-section-img' />
                                    <p className='category-section-text-five'> Washing </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='fasl-sale-text'> Just For You </h3>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forfirst.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.1,299 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1599</del> -19%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forsec.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.188 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.299</del> -25%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forthird.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.3000</del> -73%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forfor.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1777</del> -45%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forfive.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.5999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1322</del> -33%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/salefirst.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1500</del> -52%</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forsix.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.9,282 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.199</del> -10%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forsev.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.2872 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.982</del> -45%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/foreig.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.1,999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.30</del> -3%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/fornine.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.2,00 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.77</del> -4%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forten.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.599 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.122</del> -23%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/forelev.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.3,999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.233</del> -22%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/bofirst.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.1,282 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.299</del> -13%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/botsec.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.2872 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.982</del> -45%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/botthird.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.1,999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.30</del> -3%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/botfor.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.5,99 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.100</del> -41%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/botfiv.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.99 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.12</del> -3%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/botsix.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.9,999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.2323</del> -42%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastfirst.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.1,299 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1599</del> -19%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastsec.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.188 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.299</del> -25%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastthird.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.3000</del> -73%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastfor.jpg' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1777</del> -45%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastfiv.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.5999 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1322</del> -33%</p>
                                </div>
                            </div>
                            <div className='col-sm-2'>
                                <div className='sale-section sale-hover-effect'>
                                    <img src='images/lastsix.webp' className='img-fluid' />
                                    <p className='sale-text-p mb-0'> TWS i12 Wireless Bluetooth Foldable Headset With.... </p>
                                    <p className='price-sale-text'> Rs.798 </p>
                                    <p className='del-text'><del className='text-secondary'>Rs.1500</del> -52%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
