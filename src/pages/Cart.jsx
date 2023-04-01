import React from 'react'
import { useCart } from 'react-use-cart'
import CartCard from './CartCard';
const Cart = () => {
  const {items} = useCart();
  return (
    <>
   <div className="bg">
   <div className="container py-5">
   <div className="row g-0 ">
    {
      items.map((item,index)=>(
        <CartCard key={item.id} alldata={item} img={item.img} title={item.title} id={item.id}/>
      ))
    }
    </div>
   </div>
   </div>
    </>
  )
}

export default Cart