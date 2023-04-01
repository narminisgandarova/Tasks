import React from "react";
import seven1 from '../assets/imgs/seven1.webp'
import seven2 from '../assets/imgs/seven2.webp'
const Seven = () => {
  return (
    <div className="bg">
     <div className="container">
     <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-4">
           <div className="position-relative">
           <img  src={seven1} alt="" style={{width:"100%"}}/>
           <div className=" position-absolute mytext1">
            <p>Jun, 2022</p>
            <h3>Finest Men’s Quality Swiss Watch Collections</h3>
            <button type="button" class="btn btn-outline-light">Read more</button>
           </div>
           </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 ">
           <div className="position-relative">
           <img src={seven2} alt="" style={{width:"100%"}}/>
            <div className=" position-absolute mytext1">
            <p>Jun, 2022</p>
            <h3>Finest Men’s Quality Swiss Watch Collections</h3>
            <button type="button" class="btn btn-outline-light">Read more</button>
           </div>
           </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="text-white d-flex justify-content-center align-items-center flex-column" style={{height:"100%"}}>
            <h2>RECENT NEWS</h2>
            <p>
              Nec feugiat in fermentum posuere urna nec tincidunt praesent.
              Ipsum consequat nisl vel pretium lectus quam. Nulla aliquet enim
              tortor at auctor urna nunc id.
            </p>
            <button type="button" class="btn btn-outline-light">Blogs</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Seven;
