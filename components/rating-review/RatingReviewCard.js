import { ProgressBar, Card, Row, Col } from 'react-bootstrap';
import CustomCircularProgressbar from './circular-progressbar/CircularProgressbar';
import { FaStar } from 'react-icons/fa';
import './RatingReviewCard.css';

const RatingReviewCard = ({ rating }) => {
  return (
    <Card className="nes__rating__review__card mb-5 border-0">
      <Card.Header className="bg-transparent px-0 border-0">
        Rating & Review
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <h3>4.0/5</h3>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar style={{ color: '#ccc' }} />
            <p>(893 Reviews)</p>
            <ProgressBar variant="success" now={100} label="5" />
            <ProgressBar variant="info" now={80} label="4" />
            <ProgressBar variant="warning" now={60} label="3" />
            <ProgressBar variant="danger" now={40} label="2" />
            <ProgressBar variant="secondary" now={20} label="1" />
          </Col>
          <Col>
            <h3 className="nes__rating__review__card__heading2 mb-3">
              Ratings by Features
            </h3>
            <Row className="g-3" lg={2}>
              <Col>
                <CustomCircularProgressbar value={rating} text={rating} />
              </Col>
              <Col>
                <CustomCircularProgressbar value="5" text="5" />
              </Col>
              <Col>
                <CustomCircularProgressbar value={rating} text={rating} />
              </Col>
              <Col>
                <CustomCircularProgressbar value={rating} text={rating} />
              </Col>
              <Col>
                <CustomCircularProgressbar value={rating} text={rating} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RatingReviewCard;
