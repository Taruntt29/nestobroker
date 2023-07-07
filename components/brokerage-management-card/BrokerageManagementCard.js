import { Card, Button, Row, Col } from 'react-bootstrap';
import './BrokerageManagementCard.css';

const BrokerageManagementCard = ({
  type,
  text,
  eligibleClaim,
  claimHistory,
}) => {
  return (
    <>
      <Card className="brokerage__management__card border-0">
        <Row className="g-0">
          {type === 'raise' && (
            <>
              <Col md={4}>
                <Card.Img
                  src="/assets/broker/broker-img.png"
                  alt="Media"
                  className="img-fluid w-100 h-100"
                />
              </Col>

              <Col md={8}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <span className="text-truncate fw-semibold">
                      {eligibleClaim?.propertyId?.name}
                    </span>
                    <span className="text-muted m-0">
                      {eligibleClaim?.bookingDate}
                    </span>
                  </Card.Title>
                  {type !== 'assigned' && (
                    <Card.Text className="text-muted m-0 mb-3">
                      {eligibleClaim?.propertyId?.location}
                    </Card.Text>
                  )}
                  <Row>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Builder Name
                      </Card.Text>
                      <Card.Text>{eligibleClaim?.builderId?.name}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Brokerage Value
                      </Card.Text>
                      <Card.Text>{eligibleClaim?.brokerageValue}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Customer Name
                      </Card.Text>
                      <Card.Text>{eligibleClaim?.customerName}</Card.Text>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    className={`mt-3 rounded-pill w-100 ${
                      type === 'raise' || type === 'claimSubmitted'
                        ? `raise claim-submitted`
                        : type === 'paymentReceived' ||
                          type === 'paid' ||
                          type === 'assigned'
                        ? 'custom-green-btn'
                        : 'claim-approved'
                    }`}
                  >
                    {text}
                  </Button>
                </Card.Body>
              </Col>
            </>
          )}

          {type === 'claimHistory' && (
            <>
              <Col md={4}>
                <Card.Img
                  src={claimHistory?.propertyId?.images[0]}
                  alt="Media"
                  className="img-fluid w-100 h-100"
                />
              </Col>

              <Col md={8}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <span className="text-truncate fw-semibold">
                      {claimHistory?.propertyId?.name}
                    </span>
                    <span className="text-muted m-0">
                      {/* {claimHistory?.bookingDate} */}
                    </span>
                  </Card.Title>
                  {type !== 'assigned' && (
                    <Card.Text className="text-muted m-0 mb-3">
                      {claimHistory?.propertyId?.location}
                    </Card.Text>
                  )}
                  <Row>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Builder Name
                      </Card.Text>
                      <Card.Text>{claimHistory?.builderId?.name}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Claimed Amount
                      </Card.Text>
                      <Card.Text>{claimHistory?.brokerageValue}</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text className="text-muted m-0">
                        Customer Name
                      </Card.Text>
                      <Card.Text>{claimHistory?.customerName}</Card.Text>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    className={`mt-3 rounded-pill w-100 ${
                      type === 'raise' || type === 'claimSubmitted'
                        ? `raise claim-submitted`
                        : type === 'paymentReceived' ||
                          type === 'paid' ||
                          type === 'assigned'
                        ? 'custom-green-btn'
                        : 'claim-approved'
                    }`}
                  >
                    {text}
                  </Button>
                </Card.Body>
              </Col>
            </>
          )}
        </Row>
      </Card>

      {/* <Card className="brokerage__management__card border-0">
        <Row className="g-0">
          {type !== 'assigned' && (
            <Col md={4}>
              <Card.Img
                src="/assets/broker/broker-img.png"
                alt="Media"
                className="img-fluid w-100 h-100"
              />
            </Col>
          )}
          <Col md={type === 'assigned' ? 12 : 8}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span className="text-truncate fw-semibold">
                  Sky Dandelions Apartment
                </span>{' '}
                <span className="text-muted m-0">12/12/2022</span>
              </Card.Title>
              {type !== 'assigned' && (
                <Card.Text className="text-muted m-0 mb-3">
                  Sector-29,Gurugram
                </Card.Text>
              )}
              <Row>
                <Col>
                  <Card.Text className="text-muted m-0">Builder Name</Card.Text>
                  <Card.Text>Lorem Ipsum</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-muted m-0">Lorem Ipsum</Card.Text>
                  <Card.Text>₹ 3.94 L</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-muted m-0">
                    Customer Name
                  </Card.Text>
                  <Card.Text>Lorem Ipsum</Card.Text>
                </Col>
              </Row>
              <Button
                variant="primary"
                className={`mt-3 rounded-pill w-100 ${
                  type === 'raise' || type === 'claimSubmitted'
                    ? `raise claim-submitted`
                    : type === 'paymentReceived' ||
                      type === 'paid' ||
                      type === 'assigned'
                    ? 'custom-green-btn'
                    : 'claim-approved'
                }`}
              >
                {text}
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card> */}
    </>
  );
};

export default BrokerageManagementCard;
