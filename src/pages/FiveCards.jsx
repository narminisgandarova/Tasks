import React, { useContext } from 'react'
import { ProductContex } from '../context/ProductContext'
import ThirdCard from './ThirdCard';

const FiveCards = () => {
    const [products] = useContext(ProductContex);
  return (
    <>
   <div className="bg">
   <div className="container">
   <div className="row g-0">
        {products.slice(3,6).map(item=>{
            return <ThirdCard key={item.id} img={item.img} title={item.title} alldata={item} id={item.id} />
        })}
    </div>
   </div>
   </div>
    </>
  )
}

export default FiveCards