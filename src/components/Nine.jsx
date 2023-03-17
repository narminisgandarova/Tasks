import React, { Component } from 'react'

export class Nine extends Component {
  render() {
    return (
      <div className='nine mt-3'>
        <div className="container">
                   <div className="text-center d-flex align-items-center flex-column justify-content-center text-white ">
                   <h2 className='fw-bolder fs-1'>SALE ENDS SOON</h2>
                   <p  className='fw-bolder fs-2'> UP TO 50% OFF SELECTED PRODUCTS</p>
                   <div className="d-flex mybox ">
                    <div className="box d-flex flex-column me-3 fs-4"><p>0</p><p>HOURS</p></div>
                    <div className="box d-flex flex-column me-3 fs-4"><p>0</p><p>HOURS</p></div>
                    <div className="box d-flex flex-column me-3 fs-4"><p>0</p><p>HOURS</p></div>
                   </div>
                   <button type="button" class="btn mybtn mt-3">Browse now</button>
                   </div>
        </div>
      </div>
    )
  }
}

export default Nine