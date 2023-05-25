import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <div>
      <div><Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='myslide1 w-lg-100'>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='myslide2 w-lg-100'>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='myslide3 w-lg-100'>

          </div>
        </SwiperSlide>
      </Swiper></div>
      <hr></hr>
      <div className='container'>
        <h2 className='bg-light text-dark text-center fw-bold fs-larger'> Our Services</h2>
      </div>
      <hr></hr>
      <div className='container mb-md-3'>
        <div className="row d-flex align-item-center justify-content-around">

         {/* 1st card */}
          <div className="col-md-3 border border-2 border-grey des2card" >
            <div className='text-center mt-md-3 mt-sm-1'>
              <img src='/images/accessible.png' width={80} className='img-fluid ' alt='accessible_logo'></img>
            </div>
            <div className='text-center mt-md-3'>
              <h3 className='mt-md-3 fw-medium '>Easy Accessiblity</h3>
              <h5>Enabling inclusive access digitally </h5>
              <h5> bridging opportunities</h5>
              <h5>for the all</h5>
            </div>
          </div>

          {/* 2st card */}
          <div className="col-md-3 border border-2 border-grey des2card" >
            <div className='text-center mt-md-3 mt-sm-1'>
              <img src='/images/security.png' width={80} className='img-fluid ' alt='accessible_logo'></img>
            </div>
            <div className='text-center mt-md-3'>
              <h3 className='mt-md-3 fw-medium '>Enahanced Security</h3>
              <h5>Securing digital credentials</h5>
              <h5>protecting trust in the</h5>
              <h5>digital world</h5>
            </div>
          </div>

          {/* 3st card */}
          <div className="col-md-3 border border-2 border-grey des2card" >
            <div className='text-center mt-md-3 mt-sm-1'>
              <img src='/images/verification.png' width={80} className='img-fluid ' alt='accessible_logo'></img>
            </div>
            <div className='text-center mt-md-3'>
              <h3 className='mt-md-3 fw-medium '>Quick verification</h3>
              <h5>Easily verified digital badges</h5>
              <h5>empowering efficiency</h5>
              <h5>and reliability</h5>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Home
