import React from 'react';
import { register } from 'swiper/element/bundle';
import './Carrosel.css';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

const data = [

  { id: '1', image: '.././image/geladeira.png'},
  { id: '2', image: '.././image/iphone15.jpg'},
  { id: '3', image: '.././image/ps5.jpg'},

];

function Slider() {
  return (
    <div className="container">
      <h1 className="title"></h1>

      <Swiper
        slidesPerView={1}
        pagination= {{ clickable: true}}
        
      >
        {data.map ( (item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image} 
              alt=""
              className="slide-item" />
          </SwiperSlide>))}
      </Swiper>
    </div>
  );
}

export default Slider;
