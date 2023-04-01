import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './AppRouter';
import "swiper/css";
import "swiper/css/navigation";
import '../src/assets/sass/style.css'
import { ProductContex, ProductProvider, } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';
import 'react-toastify/dist/ReactToastify.css';

const Main=()=>{
  const [products]= useContext(ProductContex);
  return(
    <>
    {products.length=== undefined ? <h1>Loading...</h1> :<AppRouter/>}
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <AppRouter/> */}
 <CartProvider>
<ProductProvider>
  <Main/>

 </ProductProvider>
</CartProvider>

  </React.StrictMode>
);
