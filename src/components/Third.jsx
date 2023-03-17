import { Dropdown } from '../components/Dropdown'
import React, { Component } from 'react'
export class Third extends Component {
  render() {
    return (
      <div className='third'>
         <div className="container">
           <div className="d-flex justify-content-between ">
           <div className="d-flex">
           <Dropdown title="Demos" optionOne="Shop Demos" optionTwo="Classik Shop" optionThird="Simple Slider" optionFour="Fulscreen Fashion"/>
            <Dropdown title="Features" optionOne="Core Features" optionTwo="What is new?" optionThird="Ux Builder" optionFour="Header Designer"/>
            <Dropdown title="Shop" optionOne="Overview" optionTwo="Off-Canvas Filtering" optionThird="Full width Layout" optionFour="List Layout"/>
            <li className='list-unstyled mt-2 mytext'><a className="dropdown-item" href="#">Blog</a></li>
            <li className='list-unstyled mt-2 mytext ms-2 '><a className="dropdown-item" href="#">Elements</a></li>
           </div>
           <div className="d-none d-md-block">
             <div className="d-flex mytext mt-2 ">
                <p><i class="ms-3 fa-solid fa-envelope"></i>Contact|</p>
                <p><i class="ms-3 fa-regular fa-clock"></i>08:00 - 17:00|</p>
                <p><i class="ms-3 fa-solid fa-phone"></i>+47 900 99 000</p>
                </div>
           </div>
               
           </div>
         </div>
      </div>
    )
  }
}

export default Third