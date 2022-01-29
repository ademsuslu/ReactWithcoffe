import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Icon from "./Slideİcon/Icon.png";
const Slide = () => {
  return <div className="Slide">
    <h1>Testimonials</h1>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      //   navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide
        style={{
        }}>
        <div className="Slider">
       <img src={Icon} className="slider-icon"/>
          <div className="Slider-desc">
            <h3>I have been dreaming about this kinda place for a long time.</h3>
            <span>John S.</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
        }}>
        <div className="Slider">
       <img src={Icon} className="slider-icon"/>
          <div className="Slider-desc">
            <h3>I have been dreaming about this kinda place for a long time.</h3>
            <span>John S.</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
        }}>
        <div className="Slider">
       <img src={Icon} className="slider-icon"/>
          <div className="Slider-desc">
            <h3>I have been dreaming about this kinda place for a long time.</h3>
            <span>John S.</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
        }}>
        <div className="Slider">
       <img src={Icon} className="slider-icon"/>
          <div className="Slider-desc">
            <h3>I have been dreaming about this kinda place for a long time.</h3>
            <span>John S.</span>
          </div>
        </div>
      </SwiperSlide>
    
    </Swiper>
  </div>;
};

export default Slide;
