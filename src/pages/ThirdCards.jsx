import React, { useContext } from 'react'
import { ProductContex } from '../context/ProductContext'
import ThirdCard from './ThirdCard';

const ThirdCards = () => {
    const [products] = useContext(ProductContex);
  return (
    <>
   <div className="bg">
   <div className="container">
   <div className="row g-0">
        {products.slice(0,3).map(item=>{
            return <ThirdCard key={item.id} alldata={item} img={item.img} title={item.title} id={item.id}  />
        })}
    </div>
   </div>
   </div>
    </>
  )
}

export default ThirdCards