import { Form, Button } from 'react-bootstrap';
import { CustomModal } from '../../../components';

const ForgetPassword = ({ show }) => {
  return (
    <CustomModal show={show} title="Forget Password">
      <form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Enter your mobile number/Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="w-100 rounded-0  mt-4 bg-color-primary"
        >
          Submit
        </Button>
      </form>
    </CustomModal>
  );
};

export default ForgetPassword;
