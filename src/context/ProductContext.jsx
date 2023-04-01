import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const ProductContex = createContext();

export const ProductProvider=(props)=>{
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:5500/src/Data/Data.json")
    .then((res) => {
      setProducts(res.data);
    });
  },[])
  
return <ProductContex.Provider value={[products,setProducts]}>
       {props.children}
</ProductContex.Provider>

}