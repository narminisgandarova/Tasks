import React, { Component } from 'react'

export class TenCard extends Component {
  render() {
    return (
      <div className='col-12 col-sm-6 col-md-3'>
          <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={this.props.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">${this.props.price}</p>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}

export default TenCard