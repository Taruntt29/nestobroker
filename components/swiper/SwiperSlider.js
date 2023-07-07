import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Card, Container } from 'react-bootstrap';
// import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import DashboardTabs from '../../../components/dashboard-tabs/DashboardTabs';
import 'swiper/css';
import 'swiper/css/bundle';

import 'swiper/css/navigation';

import SwiperMain from './SwiperMain';

const tabKey = ['All', '2BHK ', ' 3BHK', '4BHK', '5BHK'];

const Slider = ({ floorPlansAndPricing }) => {
  return (
    <Container fluid="lg" className="mt-5">
      <div className="mb-4 mt-5">
        <h5 className="swiper-title">Floor Plans & Pricing</h5>
        <span className="swiper-subtitle">in Arocon Rainbow</span>
      </div>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mt-0 mb-5"
        >
          {!!floorPlansAndPricing.length &&
            floorPlansAndPricing.map(
              ({
                floorPlanImageUrl,
                _id,
                areaSquareFeet,
                areaSquareMeter,
                price,
                unitType,
              }) => (
                <SwiperSlide key={_id}>
                  <Card className="h-100 border-0 shadow-sm swiper__card p-3">
                    <div className="ribbon">
                      <span>{unitType} </span>
                    </div>

                    <Card.Img variant="top" src={floorPlanImageUrl} />
                    <Card.Body className="px-0">
                      <div className="swiper__card__row d-flex justify-content-between align-items-center">
                        <span>Super Built-Up Area</span>
                        <span className="text-right">Price</span>
                      </div>
                      <div className="swiper__card__row d-flex justify-content-between align-items-center">
                        <span>{areaSquareFeet}</span>
                        <span className="swiper__price text-wrap">{price}</span>
                      </div>
                      <div className="swiper__card__row d-flex justify-content-between align-items-center mt-2">
                        <span>{areaSquareMeter}</span>
                        <span>+Govt. Charges</span>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </DashboardTabs>
    </Container>
  );
};

export default Slider;
