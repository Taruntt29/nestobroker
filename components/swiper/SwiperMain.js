import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Card, Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/bundle';

import 'swiper/css/navigation';

// swiper styles
import './SwiperSlider.css';
import React from 'react';

const SwiperMain = ({ swiperData, slidesPerView, spaceBetween, children }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="mt-0 mb-5"
    >
      {swiperData
        ? swiperData.map(swiperDataItem => (
            <SwiperSlide key={swiperDataItem?._id}>
              {React.cloneElement(children, { swiperDataItem: swiperDataItem })}
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};

export default SwiperMain;
