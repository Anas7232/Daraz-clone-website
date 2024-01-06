import React from 'react';
import '../../App.css';

const Footer = () => {
    return (
        <>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-sm-12 d-flex align-center justify-content-center'>
                        <div className='footer-more-btn'>
                            <h4 className='mb-0 text-footer'> Load More </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xl py-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4 className='footer-main-text'> Customer Care </h4>
                        <p className='mb-0 footer-bootom-text'> Help Center </p>
                        <p className='mb-0 footer-bootom-text'> How to Buy</p>
                        <p className='mb-0 footer-bootom-text'> Corporate & Bulk Purchasing </p>
                        <p className='mb-0 footer-bootom-text'>Returns & Refunds </p>
                        <p className='mb-0 footer-bootom-text'> Daraz Shop </p>
                        <p className='mb-0 footer-bootom-text'> Contact Us </p>
                        <p className='mb-0 footer-bootom-text'>Purchase Protection</p>
                        <p className='mb-0 footer-bootom-text'>Daraz Pick up Points</p>
                        <br />
                        <h4 className='footer-main-text'> Make Money With Us </h4>
                        <p className='mb-0 footer-bootom-text'> Daraz University </p>
                        <p className='mb-0 footer-bootom-text'> Sell on Daraz</p>
                        <p className='mb-0 footer-bootom-text'> Join Daraz Affiliate Program</p>

                    </div>
                    <div className='col-md-3'>
                        <h4 className='footer-main-text'> Daraz </h4>
                        <p className='mb-0 footer-bootom-text'> About Us </p>
                        <p className='mb-0 footer-bootom-text'> Digital Payments</p>
                        <p className='mb-0 footer-bootom-text'> Daraz Donates </p>
                        <p className='mb-0 footer-bootom-text'>Daraz Blog </p>
                        <p className='mb-0 footer-bootom-text'> Terms & Conditions </p>
                        <p className='mb-0 footer-bootom-text'> Privacy Policy </p>
                        <p className='mb-0 footer-bootom-text'>NTN Number : 4012118-6</p>
                        <p className='mb-0 footer-bootom-text'>STRN Number : 1700401211818</p>
                        <p className='mb-0 footer-bootom-text'>Online Shopping App</p>
                        <p className='mb-0 footer-bootom-text'>Online Grocery Shopping</p>
                        <p className='mb-0 footer-bootom-text'>Daraz Exclusive</p>
                    </div>
                    <div className='col-md-3'>
                        <h4 className='footer-main-text'> Daraz International </h4>
                        <p className='mb-0 footer-bootom-text'> Pakistan </p>
                        <p className='mb-0 footer-bootom-text'> Bangladesh </p>
                        <p className='mb-0 footer-bootom-text'> Sri Lanka </p>
                        <p className='mb-0 footer-bootom-text'> Myanmar </p>
                        <p className='mb-0 footer-bootom-text'> Nepal </p>
                        <br />
                        <h4 className='footer-main-text'> Payment Methods </h4>
                        <div className='row'>
                            <div className='col-md-2'>
                                <img src='images/visa.jpeg' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/mater.png' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/cashon.png' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/easy.jpeg' className=' footer-img' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                                <img src='images/wallet.jpeg' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/jazz.jpeg' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/uni.jpeg' className=' footer-img' />
                            </div>
                            <div className='col-md-2'>
                                <img src='images/hbl.jpeg' className=' footer-img' />
                            </div>
                        </div>
                        <br />
                        <h4 className='footer-main-text'> Verified by </h4>
                        <div className='row'> 
                            <div className='col-md-4'>
                            <img src='images/ptat.jpeg' className='footer-img-last' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h4 className='footer-main-text'>Exclusive Deals and Offers! </h4>
                        <div className='row'>
                            <div className='col-md-6'>
                            <img src='images/qr.webp' className='footer-img-lastone' />
                            </div>
                            <div className='col-md-6'>
                                <img src='images/app.png' className='footer-img-last py-1' />
                                <img src='images/play.png' className='footer-img-last py-1' />
                                <img src='images/gel.png' className='footer-img-last py-1' />
                            </div>
                        </div><br/>
                        <div className='row'>
                            <div className='col-md-12 d-flex d-inline-block'>
                                <img src='images/daraz.png' className='footer-mid-section' />
                                <h2 className='footer-mid-text'> Happy Shopping  </h2>
                            </div>
                        </div><br/><br/>
                        <div className='row'>
                            <div className='col-md-12'>
                                <img src='images/facebook.png' className='last-footer-section' />
                                <img src='images/tweet.png' className='last-footer-section' />
                                <img src='images/insta.png' className='last-footer-section' />
                                <img src='images/you.png' className='last-footer-section' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
