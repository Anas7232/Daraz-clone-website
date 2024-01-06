import React from 'react'

const Reset = () => {
    return (
        <>
            <div className='container-fluid main-top-container'>
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <h1 className='login-top-text'> Reset Your Password Here! </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='login-fome'>
                            <form class="row g-3">
                                <div class="col-md-12">
                                    <label for="inputAddress2" class="form-label">Enter Your Email*</label>
                                    <input type="text" class="form-control form-input" id="inputAddress2" placeholder="Enter Your Email...." />
                                </div>

                               
                                <div className="col-md-12">
                                    <div className="d-grid gap-2">
                                        <button className="btn button-bottom" type="button">Reset Password</button>
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

export default Reset
