import axios from 'axios';
import React, { Component } from 'react'
import TenCard from './TenCard';

export class Ten extends Component {
    constructor(props){
      super(props);

      this.state={
        mydata:[]
      }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            this.setState({mydata:res.data})
        })
        .catch(err=>console.log(err))
    }
  render() {
    return (
      <div className='ten'>
        <div className="container">
            <div className="row mt-5">
             {
                this.state.mydata.slice(0,20).map((product,index) => (
                  <TenCard img={product.image} title={product.category} price={product.price} key={index}/>
                ))
             }
            </div>
        </div>
      </div>
    )
  }
}

export default Ten