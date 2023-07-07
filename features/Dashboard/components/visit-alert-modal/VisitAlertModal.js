import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import { RiPhoneFill, RiUserFill, RiWechat2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './VisitAlertModal.css';

const visitModalData = [
  { label: 'Client Name', value: 'Tisha Kakkar' },
  { label: 'Visit ID', value: '265468473878' },
  { label: 'Property Name', value: 'ABCDEF' },
  { label: 'Visit Date', value: '26-10-22, 10 AM' },
  { label: 'Unit Type', value: 'RK' },
  {
    label: 'Location',
    value: (
      <Link to="/location" color="#278FD9" className="text-decoration-none">
        Link
      </Link>
    ),
  },
];

const VisitAlertModal = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      modalHeader
      size="lg"
    >
      <div className="nes__dashboard__modal__visit">
        <div className="nes__dashboard__modal__visit__img-small rounded-circle d-flex overflow-hidden">
          <RiUserFill size={100} color="#278FD9" className="m-auto" />
        </div>

        <Card className="border-0 rounded-0">
          <Card.Title className="text-center mt-3 mb-0">Visit Alert</Card.Title>
          <Card.Img variant="top" src=" /assets/modal-img.png" fluid />
          <Card.Body className="px-0 overflow-visible">
            <Row>
              {visitModalData.map(({ label, value }) => (
                <>
                  <Col xs={12} sm={6} className="mb-3">
                    <Row>
                      <Col xs={12} lg={7}>
                        <span>{label}:</span>
                      </Col>
                      <Col xs={12} lg={5} className="text-wrap">
                        {value}
                      </Col>
                    </Row>
                  </Col>
                </>
              ))}
            </Row>
          </Card.Body>
          <Card.Footer className="bg-transparent border-0 px-0 d-flex flex-column flex-sm-row align-items-center gap-4 justify-content-center">
            <div className="d-flex gap-2">
              <Button className="btn-color-outline-primary rounded-pill px-4 py-2">
                Remind Later
              </Button>
              <Button className="btn-color-outline-primary rounded-pill px-4 py-2">
                Summary
              </Button>
            </div>
            <div className="nes__dashboard__modal__visit__cta d-flex gap-2">
              <Button className="btn-color-danger rounded-circle p-0">
                <RiWechat2Fill size={30} />
              </Button>
              <Button className="btn-color-danger rounded-circle p-0">
                <RiPhoneFill size={30} />
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </CustomModal>
  );
};

export default VisitAlertModal;
