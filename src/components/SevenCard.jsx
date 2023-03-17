import React, { Component } from 'react'

export class SevenCard extends Component {
  render() {
    return (
      <div>
        <div className="card mycard position-relative mt-3" >
        <img src={this.props.img1} className="card-img-top position-absolute myimg1" alt="..." />
        <img src={this.props.img2} className="card-img-top position-absolute  myimg2 " alt="" />
        <div className="card-body">
            <h5 className="card-title fs-1">{this.props.catogory}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.title}</li>
            <li className="list-group-item">{this.props.price}</li>
        </ul>
        </div>
      </div>
    )
  }
}

export default SevenCard