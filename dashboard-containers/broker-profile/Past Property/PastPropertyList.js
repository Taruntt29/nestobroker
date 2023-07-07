import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyadded.png";
import subs from "../../../Images/subs.png";
import buld from "../../../Images/buld.png";
import edit from "../../../Images/editbutton.png";

const PastPropertyList = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Card className="m-4" style={{ width: "23rem" }}>
        <Card.Img variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}

          <Card.Text>
            <Row>
              <Col className="d-flex justify-content-between">
                <Row>Sky Danelions Apartment</Row>
                <img src={subs} alt="property" />
              </Col>
              <Row style={{ opacity: 0.5 }}>
                Luxury Apartment in Sector-29,Gurugram
              </Row>

              <br></br>
              <br></br>

              <Row>
                <img src={buld} alt="build" />
              </Row>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col
                style={{
                  color: "#000000",
                  fontSize: "1.3em",
                  fontWeight: "bold",
                }}
              >
                Rs.3.94-6.01 Cr
              </Col>
              <br></br>
              <Col style={{ color: "#7D7F88", fontSize: "0.6em" }}>
                Book now & get 5% discount
              </Col>
            </Row>
            <div
              className="d-flex justify-content-end gap-2"
              style={{ borderColor: "#278FD9" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill"
                style={{ color: "#278FD9" }}
              >
                50 Visits
              </button>
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill"
                style={{ color: "#278FD9" }}
              >
                <img src={edit} alt="edit" />
                Edit
              </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Container className="mt-5">
      {/* <div className="row justify-content-between">
        <h3 className="col-4" style={{ fontFamily: "Bahnschrift" }}>
          Recently Added
        </h3>
        <i
          className="col-1"
          style={{
            color: "#FC5C67",
            fontFamily: "Bahnschrift",
            textDecorationLine: "underline",
          }}
        >
          View all
        </i>
      </div> */}
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div
        className="mt-4 row row-cols-2 justify-content-center"
        style={{ fontFamily: "Bahnschrift" }}
      >
        {propertyListing}
      </div>
    </Container>
  );
};
export default PastPropertyList;
