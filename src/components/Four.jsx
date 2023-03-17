import React, { Component } from 'react'

export class Four extends Component {
  render() {
    return (
      <div className='four'>
         <div className="container">
           <div className="d-none d-md-block">
           <div className="d-flex py-3 ms-5">
                <div className="d-flex ms-5"><i class="mt-1 fs-5 fa-solid fa-star"></i>Free Delivery World Wide* Learn more   |</div>
                <div className="d-flex ms-5"><i class="mt-1 fs-5 fa-regular fa-heart"></i>Loved by our Customers. 5000+ Reviews  |</div>
                <div className="d-flex ms-5"><i class="mt-1 fs-5 fa-solid fa-check "></i>Free Returns and Free Shipping</div>
            </div>
           </div>
         </div>
      </div>
    )
  }
}

export default Four