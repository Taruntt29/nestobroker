import { Button, Card } from 'react-bootstrap';
import { CustomModal } from '../../../../components';
import { Link } from 'react-router-dom';

const NotRegisteredModal = ({ show }) => {
  return (
    <CustomModal
      show={show}
      // cssClassName="nes__dashboard__modal"
    >
      <Card.Title className="text-center fw-bold">Not Registered</Card.Title>
      <Card.Text className="text-center">
        You are not register with us! Please share your intent
      </Card.Text>
      <Button
        as={Link}
        to="/broker/register"
        variant="primary"
        className="w-100 rounded-pill bg-color-primary"
      >
        Share Your Intent
      </Button>
    </CustomModal>
  );
};

export default NotRegisteredModal;
