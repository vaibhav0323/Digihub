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
        <Swiper
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



      </Swiper>
    </div>
  )
}

export default Home
