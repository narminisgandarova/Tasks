import React, { Component } from 'react'

export class EightCard extends Component {
  render() {
    return (
      <div className='col-12 col-sm-6 col-md-3'>
                <div className="card mt-3" >
            <img src={this.props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.cat}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{this.props.title}</li>
                <li className="list-group-item">${this.props.price}</li>
            </ul>
            </div>
      </div>
    )
  }
}

export default EightCard