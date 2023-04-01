import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart';
const CartCard = ({title,img,id,alldata, quantity}) => {
    const { removeItem, updateItemQuantity } = useCart();
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-5 py-5">
            <h5 className="card-title text-white fs-2 mt-3">{title}</h5>
        <div className="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
           <LinkContainer to={`/${id}`}>
           <button type="button" className="btn btn-outline-light ms-3">Read more</button>
           </LinkContainer>
           <button type="button"  onClick={() => removeItem(id)} className="btn btn-outline-light ms-3 ">Delete</button>
           
        </div>
        </div>
    </div>
  )
}

export default CartCard