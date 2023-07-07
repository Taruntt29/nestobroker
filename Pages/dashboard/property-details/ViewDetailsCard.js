import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ViewDetailsCard.css';

const ViewDetailsCard = ({
  title,
  link,
  bg,
  media,
  img,
  propertyDescription,
  loanApprovedByIds,
  aboutTheBuilder,
  termAndCondition,
  brochureUrl,
}) => {
  return (
    <Card
      className={`border-0 shadow-sm property__details__text mb-5 ${
        bg ? `bg-white` : `bg-transparent shadow-none`
      }`}
    >
      <Card.Header
        className={`d-flex justify-content-between align-items-center ${
          bg ? `bg-white` : `bg-transparent border-0 px-0`
        }`}
      >
        <Card.Title className={`${!bg ? `no-bg-title px-0` : ''}`}>
          {title}
        </Card.Title>
        {link && <Link className="card-link">{link}</Link>}
      </Card.Header>
      <Card.Body
        className={`py-4 ${bg ? `border rounded` : ''} ${
          img ? `shadow-sm border-0` : ''
        }`}
      >
        {img && (
          <Row>
            {loanApprovedByIds.map(({ _id, name, image }) => (
              <Col
                key={_id}
                md={3}
                className="d-flex justify-content-center align-items-center"
              >
                <img src={image} className="img-fluid" alt={name} />
              </Col>
            ))}
          </Row>
        )}
        {!media && !img && propertyDescription && (
          <Card.Text>{propertyDescription}</Card.Text>
        )}
        {!media && !img && aboutTheBuilder && (
          <Card.Text>{aboutTheBuilder}</Card.Text>
        )}
        {media && <Card.Img src={brochureUrl} />}

        {termAndCondition && <Card.Text>{termAndCondition}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default ViewDetailsCard;
