import React from 'react'
import slider1 from '../assets/imgs/slider01.webp'
import slider2 from '../assets/imgs/slider02.webp'
import slider3 from '../assets/imgs/slider03.webp'
import CardDetails from './CardDetails'
import Eight from './Eight'
import FiveCards from './FiveCards'
import Fourth from './Fourth'
import Seven from './Seven'
import Six from './Six'
import ThirdCards from './ThirdCards'

const Home = () => {
  return (
   <>
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="position-relative " style={{width:"100%"}}>
      <img src="https://cdn.shopify.com/s/files/1/0559/0505/8894/files/mblslider01_c330bd75-0328-4de1-99b9-60934b6db59d_768x940.jpg?v=1655446977" className="d-block w-100"  alt="..." />
      <div className="text-white position-absolute mybox">
        <p className='fs-3'>Best Watches</p>
        <h2 className='fs-1'>PRETTY AND WORLD <br/> BEST WATCHES</h2>
        <button type="button" className="mybtn  my-3">Shop Now</button>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="position-relative">
      <img src={slider2} className="d-block w-100 " alt="..."  />
      <div className="text-white position-absolute mybox1" style={{right:"200px"}}>
        <p className='fs-3'>Best Watches</p>
        <h2 className='fs-1'>PRETTY AND WORLD <br/> BEST WATCHES</h2>
        <button type="button" className="mybtn  my-3">Shop Now</button>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="position-relative">
      <img src={slider3} className="d-block w-100" alt="..." />
      <div className="text-white position-absolute mybox">
        <p className='fs-3'>Best Watches</p>
        <h2 className='fs-1'>PRETTY AND WORLD <br/> BEST WATCHES</h2>
        <button type="button" className="mybtn  my-3">Shop Now</button>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="row g-0">
  <div className="col-12 col-sm-6 col-md-5">
    <div className="left d-flex justify-content-center align-items-center flex-column text-white ">
       <h2>HYBRID WATCHES</h2>
       <p>Tortor aliquam nulla facilisi cras fermen.</p>
       <button type="button" className="mybtn  my-3">Shop Now</button>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-md-7">
   <div className="right d-flex justify-content-center  flex-column text-white">
   <div className="ms-5">
   <h2>AN UNIQUE TIMEPIECE</h2>
       <p>Gravida di dui sapien eget mi proin sed. Porttitor lacus luctus.</p>
       <button type="button" className="mybtn  my-3">Shop Now</button>
   </div>
   </div>
  </div>
</div>
 <ThirdCards/>
 <Fourth/>
 <FiveCards/>
 <Six/>
 <Seven/>
 <Eight/>
   </>
  )
}

export default Home