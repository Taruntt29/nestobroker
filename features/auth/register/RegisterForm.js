import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
  Figure,
} from 'react-bootstrap';
import { useRegisterMutation } from '../../../hooks/LoginQuery';
import './Register.css';

const RegisterForm = () => {
  const { phoneNumber } = useSelector(state => state.login);
  const [username, setUsername] = useState('');

  const {
    register,
    registerResponse,
    isLoadingRegister,
    isRegisterSuccess,
    isRegisterIsError,
    isRegisterError,
  } = useRegisterMutation();

  const handleInputChange = event => {
    const username = event.target.value;
    if (username) {
      setUsername(username);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    register({ name: username, phoneNumber: phoneNumber });
  };

  return (
    <>
      <Container fluid="lg" className="container-md my-5 login-shadow">
        <Row className="g-0 login__form">
          <Col md={6} className="d-none d-md-block">
            <Image
              className="h-100 nes__dsa__login__img"
              src="/assets/dsa/login-page.jpg"
              fluid
              alt="login img"
            />
          </Col>
          <Col
            md={6}
            className="px-4 nes__dsa__login__formwrapper d-flex flex-column justify-content-center"
          >
            <div className="mt-4">
              <h2 className="fw-bold text-center mb-3">
                Hello! Register to get started
              </h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-0 mt-3">
                <Form.Control
                  name="username"
                  className="rounded-2"
                  required
                  type="text"
                  value={username}
                  maxLength="10"
                  placeholder="Name"
                  onChange={handleInputChange}
                  // isInvalid={showErrorMessage}
                  // isValid={!showErrorMessage && inputValue !== ''}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Valid Phone Number!
                </Form.Control.Feedback>
              </InputGroup>

              <InputGroup className="mb-0 mt-3">
                <Form.Control
                  name="emailPhone"
                  className="rounded-2"
                  required
                  type="text"
                  readOnly
                  value={phoneNumber}
                  maxLength="10"
                  placeholder="Enter your phone number"
                  onChange={handleInputChange}
                  // isInvalid={showErrorMessage}
                  // isValid={!showErrorMessage && inputValue !== ''}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Valid Phone Number!
                </Form.Control.Feedback>
              </InputGroup>

              <div className="text-center mt-3">
                I agree to the Terms of Service and Privacy Policy
              </div>

              <div className="d-grid mt-3">
                <Button
                  disabled={isLoadingRegister}
                  type="submit"
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary"
                >
                  {isLoadingRegister ? `loading` : 'Continue'}
                </Button>
              </div>
            </Form>
            <div className="d-flex align-items-center my-4">
              <div className="divider flex-grow-1"></div>
              <p className="m-0 px-1">Or Login</p>
              <div className="divider flex-grow-1"></div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-grid mb-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 wd-200 px-5 btn-shadow"
                >
                  <Image
                    src="/assets/profile.svg"
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="builder"
                  />
                  Builder
                </Button>
              </div>
              <div className="d-grid mb-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 wd-200 px-5 btn-shadow"
                >
                  <Image
                    src="/assets/profile.svg"
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="broker"
                  />
                  Broker
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterForm;
