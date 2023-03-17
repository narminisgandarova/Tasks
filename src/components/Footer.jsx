import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-white mt-5">
                    <h4>ABOUT US</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className="d-flex">
                        <div className="box rounded-circle ms-2"><i class="fa-brands fa-facebook-f"></i></div>
                        <div className="box rounded-circle ms-2"><i class="fa-brands fa-instagram"></i></div>
                        <div className="box rounded-circle ms-2"><i class="fa-brands fa-twitter"></i></div>
                        <div className="box rounded-circle ms-2"><i class="fa-regular fa-envelope"></i></div>
                        <div className="box rounded-circle ms-2"><i class="fa-brands fa-pinterest-p"></i></div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-white mt-5">
                        <h4>LATEST NEWS</h4>
                            <div className="box1 d-flex mb-2">
                                <div className="small-box">
                                    19 <br /> Nov
                                </div>
                                <p className='mt-2 ms-2'>Welcome to Flatsome</p>
                            </div>
                            <div className="box1 d-flex mb-2">
                            <div className="small-box">
                                    13 <br /> Oct
                                </div>
                                <p className='mt-2 ms-2'>Just another post with A Gallery</p>
                            </div>
                            <div className="box1 d-flex mb-2">
                            <div className="small-box">
                            13 <br /> Oct
                                </div>
                                <p className='mt-2 ms-2'>A Simple Blog Post</p>
                            </div>
                            <div className="box1 d-flex mb-2">
                            <div className="small-box">
                                    01 <br /> Jan
                                </div>
                                <p className='mt-2 ms-2'>A Video Blog Post</p>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-white mt-5">
                    <h4>TAGS</h4>
                    <div className="d-flex">
                        <div className="box2 me-2 p-1">bag</div>
                        <div className="box2 me-2 p-1">classic</div>
                        <div className="box2 me-2 p-1">converse</div>
                        <div className="box2 me-2 p-1">diesel</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="box2 me-2 p-1">fit</div>
                        <div className="box2 me-2 p-1">green</div>
                        <div className="box2 me-2 p-1">Jack and Jones</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="box2 me-2 p-1">Jack and Jones-2</div>
                        <div className="box2 me-2 p-1">jeans</div>
                        <div className="box2 me-2 p-1">Jumper</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="box2 me-2 p-1">leather</div>
                        <div className="box2 me-2 p-1">Lee</div>
                        <div className="box2 me-2 p-1">levis</div>
                        <div className="box2 me-2 p-1">man</div>
                        <div className="box2 me-2 p-1">nypd</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="box2 me-2 p-1">bag</div>
                        <div className="box2 me-2 p-1">classic</div>
                        <div className="box2 me-2 p-1">converse</div>
                        <div className="box2 me-2 p-1">diesel</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="box2 me-2 p-1">fit</div>
                        <div className="box2 me-2 p-1">green</div>
                        <div className="box2 me-2 p-1">Jack and Jones</div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-white mt-5">
                        <h4>SIGNUP FOR NEWSLETTER</h4>
                        <p>Signup to get news about Flatsome & WooCommerce. We don't spam!</p>
                        <form>
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-pill myinput text-white bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email(required)' />
                        </div>
                        <button type="button" class="btn mybtn rounded-pill fw-bolder">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
           
          </div>
          <div className="myrow">
            <div className="container">
            <div className="row mt-3">
                <div className="d-flex justify-content-between ">
                      <div className="box3 mt-1">
                        <ul className='list-unstyled d-flex text-white'>
                            <li className='me-2'>ABOUT</li>
                            <li className='me-2'>OUR STORES</li>
                            <li className='me-2'>BLOG</li>
                            <li className='me-2'>CONTACT</li>
                            <li className='me-2'>FAQ</li>
                        </ul>
                        <p >Copyright 2023 © Flatsome Theme</p>
                      </div>
                      <div className="d-none d-md-block">
                      <div className="d-flex mt-1 box4 ">
                        <div className="icons me-3 fs-1"><i class="fa-brands fa-cc-visa"></i></div>
                        <div className="icons me-3 fs-1"><i class="fa-brands fa-cc-paypal"></i></div>
                        <div className="icons me-3 fs-1"><i class="fa-brands fa-cc-stripe"></i></div>
                        <div className="icons me-3 fs-1"><i class="fa-brands fa-cc-mastercard"></i></div>
                        <div className="icons me-3 fs-1"><i class="fa-solid fa-sack-dollar"></i></div>
                      </div>
                      </div>
                </div>
            </div>
            </div>
            </div>
      </div>
    )
  }
}

export default Footer