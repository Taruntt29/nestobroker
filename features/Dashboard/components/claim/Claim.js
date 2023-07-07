// import { TfiMapAlt } from 'react-icons/tfi';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { claimData, claimDataTitle } from '../../../../data/Constant';
import './Claim.css';

// Claim Hero Section
const ClaimHeroSection = () => {
  return (
    <section className="claim-hero-section mt-3">
      <Container>
        <div
          className="claim-hero-image"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1200x300')",
          }}
        ></div>
      </Container>
      <div className="claim-hero-overlay">
        <Container>
          <Row className="justify-content-center">
            <Col xs={4} md={2} className="mb-3 mb-md-0">
              <div className="rounded-box">
                <Image src="https://via.placeholder.com/150" fluid />
                <div className="overlay-text">3+</div>
              </div>
            </Col>
            <Col xs={4} md={2} className="mb-3 mb-md-0">
              <div className="rounded-box">
                <Image src="https://via.placeholder.com/150" fluid />
                <div className="overlay-text">3+</div>
              </div>
            </Col>
            <Col xs={4} md={2}>
              <div className="rounded-box">
                <Image src="https://via.placeholder.com/150" fluid />
                <div className="overlay-text">3+</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

// claim section

const ClaimSection = () => {
  return (
    <section className="claim__section mt-5">
      <Container>
        <Row className="mb-4">
          <Col className="d-flex justify-content-between align-items-center">
            <h2 className="mr-3">Property Claim</h2>
            <span>Eligible Claim ID : 1253325271</span>
          </Col>
        </Row>
        <Card className="mb-4 claim__section__card border-0 p-2">
          <Card.Header className="border-0 bg-white claim__section__card__header d-flex justify-content-between align-items-center">
            <div className="claim__section__card__header__left d-flex flex-column">
              <span className="text-muted">Property Name</span>
              <span className="text-dark fw-semibold h4">
                Sky Dandelions Flat
              </span>
            </div>
            {/* <TfiMapAlt color="red" /> */}
          </Card.Header>
          <Card.Body>
            <Row className="gy-3">
              {!!Object.entries(claimData).length &&
                Object.entries(claimData).map(([key, value], index) => (
                  <Col md={4} key={index} className="d-flex flex-column">
                    <span className="text-muted">{claimDataTitle[key]}</span>{' '}
                    <span className="text-dark">{value}</span>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

const Claim = () => {
  return (
    <>
      <ClaimHeroSection />
      <ClaimSection />
    </>
  );
};

export default Claim;
