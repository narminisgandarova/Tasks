import React, { useContext} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom'
import { ProductContex } from '../context/ProductContext';

const CardDetails = () => {
  const [products] = useContext(ProductContex);
  const {id} = useParams();
const CardDetails = products.find(p=> p.id == id);
  return (
<>
{CardDetails === undefined ? <h1>Loading...</h1> : 
<div className="bg text-white">
<div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{CardDetails.title}</h1>
            <p className="lead">{CardDetails.desc}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <LinkContainer to='/'>
                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Back</button>
                </LinkContainer>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add to cart</button>
            </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={CardDetails.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
        </div>
        </div>
</div>
        }
</>

  )
}

export default CardDetails