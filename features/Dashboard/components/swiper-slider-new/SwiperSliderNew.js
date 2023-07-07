import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import './SwiperSliderNew.css';

function PromotionalBanner(props) {
  return (
    <div
      className="nes__swiper__slider__new__slide hero-section nes__hero d-flex flex-column justify-content-center mt-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.swiperDataItem.image})`,
      }}
    >
      <Container>
        <div className="hero-caption d-flex flex-column justify-content-center justify-content-sm-start ms-sm-5">
          <h1 className="d-flex flex-column text-white">
            {props.swiperDataItem.title}
          </h1>
          <p className="nes__swiper__slider__new__slide__description">
            {props.swiperDataItem.description}
          </p>
        </div>
      </Container>
    </div>
  );
}

const SwiperSliderNew = ({ swiperData, navigation, pagination }) => {
  return (
    <>
      <div className="nes__swiper__slider__new">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          // navigation
          navigation={navigation ? true : false}
          pagination={pagination ? { clickable: true } : false}
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          className="mt-0 mb-5"
        >
          {swiperData
            ? swiperData.map(swiperDataItem => (
                <SwiperSlide key={swiperDataItem?._id}>
                  <PromotionalBanner swiperDataItem={swiperDataItem} />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSliderNew;
