import React, { Component } from 'react'

export class First extends Component {
  render() {
    return (
      <div className="first">
        <div className="container">
        <div className="d-flex justify-content-between">
            <p>ADD ANYTHING HERE OR JUST REMOVE IT....</p>
            <div className="d-none d-md-block">
                  <ul className='d-flex list-unstyled mt-1 '>
                <li className='ms-3 '>About |</li>
                <li className='ms-3 '>Our Stores |</li>
                <li className='ms-3'>Blog |</li>
                <li className='ms-3'>Contact |</li>
                <li className='ms-3'>FAQ |</li>
                <li className='ms-3'><i class="fa-regular fa-envelope"></i>Newsletter |</li>
                <li className='ms-3'>Languages<i class="fa-solid fa-caret-down"></i></li>
            </ul>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default First