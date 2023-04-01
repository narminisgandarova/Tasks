import React from 'react'
const Footer = () => {
  return (
   <>
  <div className="bg">
  <div className="container">
    <div className="row">
    <div className="col-12 col-sm-6 col-md-4">
     <img src="https://cdn.shopify.com/s/files/1/0559/0505/8894/files/headerlogo_a4e1978f-8eb8-422d-b58e-91b9b5f50ba4.png?v=1655190450" alt="" />
    </div>
    <div className="col-12 col-sm-6 col-md-4">
     <div className="h2 text-white">QUICK LINKS</div>
     <div className="row">
      <div className="col-12 col-sm-6 col-md-4">
        <p className='text-white fw-bolder'>Our Store</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <p className='text-white fw-bolder'>Store Map</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <p className='text-white fw-bolder'>Return Policy</p>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <p className='text-white fw-bolder'>Cancellation</p>
      </div>
     </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 text-white">
     <p className='text-white fw-bolder mt-3'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508
      Mail: imail@example.com
      Phone: 0000 - 123 - 456789
      </p>
    </div>
    <hr className='text-white' />
    </div>
    <div className="d-flex justify-content-between">
      <p className='text-white'>© 2023 dt-dark fashion Design Themes</p>
      <div className="d-flex">
      <i class="ms-4  text-white fa-brands fa-facebook-f"></i>
      <i class="ms-4  text-white fa-brands fa-instagram"></i>
      <i class="ms-4  text-white fa-brands fa-twitter"></i>
      <i class="ms-4  text-white fa-brands fa-youtube"></i>
      </div>
      <div className="d-flex">
      <i class="ms-1 text-white fa-brands fa-cc-visa"></i>
      <i class="ms-1 text-white fa-solid fa-credit-card"></i>
      <i class="ms-1 text-white fa-brands fa-cc-mastercard"></i>
      <i class="ms-1 text-white fa-solid fa-tachograph-digital"></i>
      </div>
    </div>
    </div>
  </div>
   </>
  )
}

export default Footer