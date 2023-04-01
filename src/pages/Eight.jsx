import React from "react";
import eight from "../assets/imgs/eight.jpg";
const Eight = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="row g-0 py-4">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="eight d-flex justify-content-center align-items-center">
              <img src={eight} alt="" style={{ width: "50%" }} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="text-white d-flex justify-content-center align-items-center flex-column text-center" style={{height:"100%"}}>
              <h2>TEATIMONIAL</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt saepe sit beatae, amet aliquid minus reiciendis dolorum
                facilis possimus error hic, provident quam, praesentium illo
                iure aliquam perferendis culpa reprehenderit.
              </p>
              <h3>Richard - Sofware Engineer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
