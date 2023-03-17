import React, { Component } from 'react'
import myLogo from '../imgs/logo.webp'
export class Second extends Component {
  render() {
    return (
      <div className='second'>
        <div className="container d-flex justify-content-between">
           <img src={myLogo} className='mylogo' alt="" />
           <div className="d-flex w-75">
            <li className="nav-item dropdown list-unstyled mt-1 mylist rounded-2 me-1 d-none d-md-block">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               All
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
             <div className="input-group  h-25 ">
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn btn-outline-secondary border border-start-0" type="button" ><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

           </div>
           <div className="icons d-flex mt-2 ">
           <i class="fs-5 ms-2 fa-solid fa-heart">|</i>
           <i class="fs-5 ms-2 fa-solid fa-user">|</i>
           <i class="fs-5 ms-2 fa-solid fa-bag-shopping"></i>

           </div>
        </div>
      </div>
    )
  }
}

export default Second