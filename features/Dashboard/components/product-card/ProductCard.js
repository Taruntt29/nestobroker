import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import { useDispatch } from 'react-redux';
import { openBookAVisit } from '../../../../store/ModalsSlice';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MdShare } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Ribbon from '../ribbon/Ribbon';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import './ProductCard.css';

const ProductCard = ({
  _id,
  images,
  name,
  location,
  unitType,
  minPrice,
  maxPrice,
  discountDescription,
  brokerageValue,
  brokerageType,
  view,
  navigation,
  pagination,
  isBestSelling,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openBookAVisit());
  };
  return (
    <>
      <Card
        bg="white"
        border="0"
        className="custom-card nes__product__card"
        style={{
          background: '#FFFFFF',
          boxShadow: '0px 3.71188px 16.2395px rgba(0, 0, 0, 0.07)',
          borderRadius: '14px',
        }}
      >
        <div className="position-relative">
          {/* swiper image code start */}
          <div className="nes__swiper__slider__new">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView={1}
              navigation={!!navigation}
              pagination={pagination ? { clickable: true } : false}
              centeredSlides={true}
              className="mt-0 mb-5 position-relative"
            >
              {images
                ? images.map((imagesItem, index) => (
                    <SwiperSlide key={index}>
                      <Link to={`/broker/property-details/${_id}`}>
                        <Card.Img
                          variant="top"
                          src={imagesItem}
                          alt="Product Image"
                          className="nes__product__card__image"
                        />
                      </Link>
                    </SwiperSlide>
                  ))
                : null}
              {view === 'broker' && (
                <>
                  {isBestSelling && (
                    <Ribbon cssClass="ribbonStyle" text="Best Seller" />
                  )}
                  {brokerageValue && (
                    <Ribbon
                      cssClass="ribbonStyle2"
                      text={`${brokerageValue}${
                        brokerageType === `percentage` && '%'
                      } Brokerage`}
                    />
                  )}

                  <Button className="nes__product__card__btndark px-4">
                    Ready To Move
                  </Button>
                </>
              )}
              {view !== 'broker' && (
                <Button className="nes__product__card__btndark px-4">
                  Ready To Move
                </Button>
              )}
            </Swiper>
          </div>
          {/* swiper image code end here */}
        </div>
        <Card.Body className="px-0">
          <div className="px-4">
            <Card.Title
              as={Link}
              to={`/broker/property-details/${_id}`}
              className="nes__product__card__title"
            >
              {name}
            </Card.Title>
            <Card.Subtitle className="mt-1 mb-2 text-muted nes__product__card__subtitle">
              {location}
            </Card.Subtitle>
            <Row className="my-3 nes__product__card__icons gx-5">
              {unitType.map((item, index) => (
                <Col
                  key={index}
                  className="col-auto d-flex flex-column justify-content-center align-items-center"
                >
                  <RiBuilding2Fill color="#939197" />
                  <span>{item}</span>
                </Col>
              ))}
            </Row>
          </div>
          {view === 'broker' && (
            <div className="d-flex justify-content-end align-items-center my-2">
              <Ribbon
                cssClass="ribbonStyle3 d-inline-flex align-items-center"
                // text={`Get ₹ ${visitAmount} per Visit`}
                text={`Get ₹ 500 per Visit`}
              />
            </div>
          )}

          <div className="px-4 nes__product__card__price d-flex flex-wrap align-items-center gap-2">
            <h4 className="d-inline-block font-weight-bold m-0">{`${minPrice} - ${maxPrice}`}</h4>
            <span className="d-inline-block text-muted m-0">
              {`${discountDescription}`}
            </span>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end border-0 bg-white pt-0">
          <Button
            className="btn-color-outline-primary rounded-pill px-4"
            onClick={handleClick}
          >
            Book a visit
          </Button>
          <Button variant="transparent">
            <MdShare size={30} color="#278FD9" />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;
