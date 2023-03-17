import axios from 'axios';
import React, { Component } from 'react'
import EightCard from './EightCard';

export class Eight extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            myData: []
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            this.setState({myData:res.data})
        })
        .catch(err => console.log(err))
    }
  render() {
    return (
      <div className='eight'>
         <div className="container">
            <div className="text d-flex justify-content-between mt-5">
            <h3>LATEST ON SALE</h3>
            <button type="button" class="btn ">Browse All<i class="fa-solid fa-chevron-right"></i></button>
            </div>
              <div className="row ">
                {
                    this.state.myData.slice(0,4).map((product, index) => (
                        <EightCard img={product.image} title={product.title} key={index} price={product.price}/>
                    ))
                }
              </div>
              <div className="text d-flex justify-content-between mt-5">
            <h3>WEEKLY FEATURED PRODUCTS</h3>
            <button type="button" class="btn ">Browse All<i class="fa-solid fa-chevron-right"></i></button>
            </div>
              <div className="row ">
                {
                    this.state.myData.slice(16,20).map((product, index) => (
                        <EightCard img={product.image} title={product.title} key={index} price={product.price}/>
                    ))
                }
              </div>
         </div>
      </div>
    )
  }
}

export default Eight