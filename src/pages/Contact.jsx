import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="box">
          <div className="text-center  ">
            <p className="fs-1">Contact</p>
            <div className="d-flex justify-content-center fs-3">
              <p>home</p>
              <span>/</span>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="container">
          <div className="row g-2 py-5">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="box1 text-white">
                <div className="ms-4">
                  <div className="icon my-3">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <p>Phone</p>
                  <p>0000 - 123 - 456789</p>
                  <p>0000 - 123 - 456789</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="box1 text-white">
                <div className="ms-4">
                  <div className="icon my-3">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <p>Phone</p>
                  <p>0000 - 123 - 456789</p>
                  <p>0000 - 123 - 456789</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="box1 text-white">
                <div className="ms-4">
                  <div className="icon my-3">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <p>Phone</p>
                  <p>0000 - 123 - 456789</p>
                  <p>0000 - 123 - 456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31327.057591149776!2d77.04431!3d11.047458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8583a7d68dff5%3A0x181af0c54e886b2e!2sWeDesignTech!5e0!3m2!1sen!2sus!4v1679679842616!5m2!1sen!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
                    <form action="">
                    <h2 className="text-white">Contact Form</h2>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" className="input" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" className="input" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" className="mt-3" label="Phone">
                    <Form.Control type="number" placeholder="Phone" className="input"/>
                  </FloatingLabel>
                  <textarea name=""  className="mt-3 input"  id="" cols="30" placeholder="Message" rows="10" style={{width:"100%"}}></textarea>
                  <Button variant="outline-light" className="mt-3">Send</Button>
                    </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
