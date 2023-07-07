import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Image, Row, Col } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperSliderDashboard.css';
import { useGetAllPromotionBanner } from '../../../../hooks/LoginQuery';
import ErrorMessage from '../../../../Common/error-message/ErrorMessage';
import LoadingSpinner from '../../../../Common/loading-spinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const SwiperSliderDashboard = () => {
  const {
    getAllPromotionBannerIsLoading,
    getAllPromotionBannerIsError,
    getAllPromotionBannerResponse,
    getAllPromotionBannerError,
    getAllPromotionBannerIsSuccess,
  } = useGetAllPromotionBanner();

  if (getAllPromotionBannerIsLoading) {
    return <LoadingSpinner />;
  }

  if (getAllPromotionBannerIsError) {
    return <ErrorMessage />;
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}

      className="mt-0 mb-5"
    >
      {getAllPromotionBannerIsSuccess &&
        getAllPromotionBannerResponse?.map(
          ({
            _id,
            propertyId,
            propertyId: {
              _id: property_id,
              images,
              location,
              name,
              minPrice,
              propertyDescription,
              amenities,
            },
          }) => (
            <SwiperSlide key={_id}>
              <Link to={`/broker/property-details/${property_id}`}>
                <div className="swiper-item h-100 border-0 p-0 swiper__card nes__broker__swiper__item">
                  <Row className="p-0 g-0">
                    <Col md={6}>
                      <Image
                        className="swiper-image w-100 h-100"
                        src={!!images && images[0]}
                        alt="placeholder"
                        fluid
                      />
                    </Col>
                    <Col md={6} className="nes__broker__swiper__item__content">
                      <div className="swiper-text p-4 py-3">
                        <div className="nes__broker__swiper__item__location">
                          <IoLocationSharp color="#278FD9" size={15} />
                          <span>{location}</span>
                        </div>
                        <h3 className="nes__broker__swiper__item__title">
                          {name}
                        </h3>
                        <div className="nes__broker__swiper__item__price d-inline-block px-3 mt-3">
                          {`Price Started from ₹${minPrice}`}
                        </div>
                        <p className="nes__broker__swiper__item__desc my-4">
                          {propertyDescription}
                        </p>

                        <div className="nes__broker__swiper__item__icons d-flex flex-wrap gap-4">
                          {amenities.map(({ iconUrl, name, _id }, index) => (
                            <div
                              className="nes__broker__swiper__item__icons__icon d-flex align-items-center gap-2"
                              key={_id}
                            >
                              <Image
                                width={20}
                                fluid
                                src={iconUrl}
                                alt={name}
                              />
                              <span>{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Link>
            </SwiperSlide>
          )
        )}
    </Swiper>
  );
};

export default SwiperSliderDashboard;
