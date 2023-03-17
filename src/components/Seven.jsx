import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SevenCard from './SevenCard';
import { FreeMode, Pagination } from "swiper";
export class Seven extends Component {
  render() {
    return (
      <div className='seven'>
       <div className="container">
       <div className="text d-flex justify-content-between mt-3">
        <h3>OUR BESTSELLERS</h3>
        <button type="button" class="btn ">Browse All<i class="fa-solid fa-chevron-right"></i></button>
       </div>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0:{
            slidesPerView:2,
            spaceBetween:10,
          },
          480:{
            slidesPerView:1,
            spaceBetween:10,
          },
          768:{
            slidesPerView:3,
            spaceBetween:15,
          },
          1024:{
            slidesPerView:4,
            spaceBetween:15,
          },
        }}
      >
        <SwiperSlide>
          <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_5_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_5_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
          </SwiperSlide>
        <SwiperSlide>
          <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
        <SwiperSlide>
          <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/hoodie_7_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/hoodie_7_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
        <SwiperSlide>
        <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
        <SwiperSlide>
          <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_5_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_5_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
        <SwiperSlide>
        <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
        <SwiperSlide>
        <SevenCard img1="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg" img2="https://uxflatsome.wpenginepowered.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg" catogory="♥" title="Ninja Silhouetta" price="$20.00" />
        </SwiperSlide>
       
      </Swiper>
       </div>
      </div>
    )
  }
}

export default Seven