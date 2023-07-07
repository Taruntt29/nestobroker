import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CustomModal } from '../../../components';
import OtpContent from './OtpContent';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const ResetPasswordModal = ({ show }) => {
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmNewPassword: false,
  });

  return (
    <CustomModal show={show} title="Reset Password?">
      <p className="text-text-muted text-center mb-0">
        An OTP has been sent to your mobile number.
      </p>
      <Form>
        <OtpContent />
        <Form.Label className="mt-4">Create New Password</Form.Label>
        <InputGroup className="mb-4">
          <Form.Control
            type={`${showPassword.newPassword ? 'text' : `password`}`}
            name="password"
            aria-label="Password"
            className="rounded-0 border-end-0"
          />
          <Button
            variant="transparent"
            type="button"
            className="border border-start-0 rounded-0"
            onClick={() =>
              setShowPassword(prevShowPassword => ({
                ...prevShowPassword,
                newPassword: !showPassword.newPassword,
              }))
            }
          >
            {showPassword.newPassword && <RiEyeFill color="#fc5c67" />}
            {!showPassword.newPassword && <RiEyeOffFill color="#fc5c67" />}
          </Button>
        </InputGroup>

        <Form.Label>Confirm New Password</Form.Label>
        <InputGroup className="mb-4">
          <Form.Control
            type={`${showPassword.confirmNewPassword ? 'text' : `password`}`}
            name="password"
            aria-label="Password"
            className="rounded-0 border-end-0"
          />
          <Button
            variant="transparent"
            type="button"
            className="border border-start-0 rounded-0"
            onClick={() =>
              setShowPassword(prevShowPassword => ({
                ...prevShowPassword,
                confirmNewPassword: !showPassword.confirmNewPassword,
              }))
            }
          >
            {showPassword.confirmNewPassword && <RiEyeFill color="#fc5c67" />}
            {!showPassword.confirmNewPassword && (
              <RiEyeOffFill color="#fc5c67" />
            )}
          </Button>
        </InputGroup>
        <Button
          variant="primary"
          className="w-100 rounded-0 bg-color-primary my-4"
        >
          Submit
        </Button>
      </Form>
    </CustomModal>
  );
};

export default ResetPasswordModal;
