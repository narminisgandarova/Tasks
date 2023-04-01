import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart'
const ThirdCard = ({title,img,id,alldata}) => {
  const { addItem } = useCart();
  const notify = () => toast.success('Added', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <>
    <div className="col-12 col-sm-6 col-md-4">
            <h5 className="card-title text-white fs-2 mt-3">{title}</h5>
        <div className="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body d-flex">
            <button type="button" onClick={() => { notify(addItem(alldata)) }} className="btn btn-outline-light">Add to Cart</button>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
           <LinkContainer to={`/${id}`}>
           <button type="button" className="btn btn-outline-light ms-3">Read more</button>
           </LinkContainer>
        </div>
        </div>
    </div>
    </>
  )
}

export default ThirdCard