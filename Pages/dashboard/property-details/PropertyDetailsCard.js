import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { RiBuilding2Fill } from 'react-icons/ri';
import './PropertyDetailsCard.css';

const Availability = ({ propertyDetailsCard }) => {
  return (
    <div className="broker__property__details__availability d-flex justify-content-between mt-4 mb-5">
      <div className="broker__property__details__availability__left d-flex gap-2">
        <div className="py-1 px-3">Under Constructions</div>
        <div className="py-1 px-3">{propertyDetailsCard.possessionDate}</div>
      </div>
      <div className="broker__property__details__availability__right py-1 px-3">
        Availability
      </div>
    </div>
  );
};

const Rating = ({ propertyDetailsCard }) => {
  return (
    <>
      {Array.from({ length: propertyDetailsCard.rating }, (_, index) => (
        <AiFillStar key={index} color="#FFB630" />
      ))}
    </>
  );
};

const PropertyDetailsCard = ({ propertyDetailsCard }) => {
  return (
    <section className="mt-3 broker__property__details">
      <Container>
        <Availability propertyDetailsCard={propertyDetailsCard} />
        <Card bg="white" border="0" className="broker__property__details__card">
          <Card.Body className="d-flex">
            <Col className="col-auto align-self-start">
              <img
                rounded
                src={propertyDetailsCard.propertyLogo}
                alt="Profile"
                width={90}
                height={90}
              />
            </Col>
            <Col className="flex-fill">
              <div className="px-4">
                <Card.Title className="nes__product__card__title">
                  {propertyDetailsCard.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted nes__product__card__subtitle">
                  {propertyDetailsCard.location}
                </Card.Subtitle>
                <Row className="my-3 nes__product__card__icons gx-5">
                  {propertyDetailsCard.unitType.map((item, index) => (
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
            </Col>

            <Col className="flex-fill d-flex justify-content-end">
              <div className="px-4 nes__product__card__price d-flex flex-column justify-content-center align-items-center gap-2">
                <h4 className="d-inline-block font-weight-bold m-0">{`${propertyDetailsCard.minPrice} - ${propertyDetailsCard.maxPrice}`}</h4>
                <span className="d-inline-block text-muted m-0">
                  {`${propertyDetailsCard.discountDescription}`}
                </span>
                <Button className="btn-color-outline-primary rounded-pill px-4 mt-3">
                  Book a visit
                </Button>
              </div>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default PropertyDetailsCard;
