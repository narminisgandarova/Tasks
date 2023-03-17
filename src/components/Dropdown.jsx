import React, { Component } from 'react'

export class Dropdown extends Component {
  render() {
    return (
        <li className="nav-item dropdown me-3 list-unstyled mt-2 mytext">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.props.title}
        </a>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{this.props.optionOne}</a></li>
            <li><a className="dropdown-item" href="#">{this.props.optionTwo}</a></li>
            <li><a className="dropdown-item" href="#">{this.props.optionThird}</a></li>
            <li><a className="dropdown-item" href="#">{this.props.optionFour}</a></li>
        </ul>
        </li>
    )
  }
}

export default Dropdown