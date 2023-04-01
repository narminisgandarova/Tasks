import React from 'react'
import six1 from '../assets/imgs/six1.webp'
const Six = () => {
  return (
   <div className="bg">
    <div className="container">
    <div className="row g-0 py-5">
        <div className="col-12 col-sm-6 col-md-6  ">
            <div className="text-white d-flex flex-column justify-content-center align-items-center h-100 ">
                <p>Trending Model</p>
                <h2>THE HOTTEST WRIST WATCHES @ 50% DISCOUNT</h2>
                <p>Semper eget duis at tellus at urna condimentum mattis pellentesque. Nec dui nunc mattis enim ut tellus elem.</p>
                <button type="button" class="btn btn-outline-secondary">Shop Now</button>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
            <div className="border1 mt-5 ms-3">
                <img  src={six1}  alt=""  style={{width:"70%"}} />
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Six