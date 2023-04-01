import React, { useContext, useState } from 'react'
import { ProductContex } from '../context/ProductContext'
import ThirdCard from './ThirdCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Search = () => {
  const [query,setQuery] = useState();
  const [products] = useContext(ProductContex);
  return (
    <>
    <div className="bg  py-5">
    <div className="text-center mt-5 text-white">
      <h2>Search</h2>
    <div className="d-flex justify-content-center align-items-center">
    <div className="col-4">
     <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          onChange={e=>setQuery(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
        <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
    </div>
     </div>
    </div>
      <div className="container ">
        <div className="row g-0 mt-5">
           {products.filter(a=>a.title.toLocaleLowerCase().includes(query)).map(item=>{
              return <ThirdCard img={item.img} title={item.title} key={item.id} />
           })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Search