import React, { Component } from 'react'
import slider1 from '../imgs/slider-1.jpg'
import slider2 from '../imgs/slider-2.jpg'
import slider3 from '../imgs/slider-3.jpg'

export class Six extends Component {
  render() {
    return (
      <div className="six ">
        <div className="container" >
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8">
                      <div className="left mt-2">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative" data-bs-interval={10000}>
                    <img src={slider1} className="d-block w-100 myimg " alt="..." />
                    <div className="text d-flex flex-column justify-content-center align-items-center position-absolute mytext" >
                         <p>Five Key Elements for your Living room</p>
                         <button type="button" class="btn mybtn">Browse now</button>
                    </div>
                    </div>
                    <div className="carousel-item position-relative" data-bs-interval={2000}>
                    <img src={slider2} className="d-block w-100 myimg" alt="..." />
                    <div className="text d-flex flex-column justify-content-center align-items-center position-absolute mytext" >
                         <p>Five Key Elements for your Living room</p>
                         <button type="button" class="btn mybtn">Browse now</button>
                    </div>
                    </div>
                    <div className="carousel-item position-relative">
                    <img src={slider3} className="d-block w-100 myimg" alt="..." />
                    <div className="text d-flex flex-column justify-content-center align-items-center position-absolute mytext" >
                         <p>Five Key Elements for your Living room</p>
                         <button type="button" class="btn mybtn">Browse now</button>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                      </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="right mt-2">
                        <div className="right-top d-flex flex-column text-white justify-content-center align-items-center">
                          <h2>Don't miss</h2>
                          <p>SALE ENDS SOON</p>
                          <button type="button" class="btn mybtn">Browse now</button>
                        </div>
                        <div className="right-bottom d-flex flex-column text-white justify-content-center align-items-center">
                          <h2>SUMMER <br /> SALE</h2>
                          <button type="button" class="btn mybtn">Browse now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Six