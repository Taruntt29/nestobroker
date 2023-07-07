import { useState } from 'react';
import { useSendOtpMutation } from '../../../hooks/LoginQuery';
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
import EnterOtp from './EnterOtp';
import './LoginForm.css';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const {
    sendOtp,
    isSendingOtp,
    isSendOtpSuccess,
    isSendOtpIsError,
    isSendOtpError,
    sendOtpResponse,
  } = useSendOtpMutation();

  // const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = event => {
    const inputText = event.target.value;
    const emailPhoneRegex =
      /^(?:\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b|\b(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})\b)?$/;
    const isMatch = emailPhoneRegex.test(inputText);

    setPhoneNumber(inputText);

    if (isMatch) {
      setShowErrorMessage(false);
      event.target.classList.remove('is-invalid');
      event.target.classList.add('is-valid');
    } else {
      setShowErrorMessage(true);
      event.target.classList.remove('is-valid');
      event.target.classList.add('is-invalid');
    }
  };

  const handleSendOtp = e => {
    e.preventDefault();

    if (!showErrorMessage) {
      // my api integration
      sendOtp(phoneNumber);
    }
  };

  return (
    <>
      {isSendOtpSuccess && <EnterOtp show={true} phoneNumber={phoneNumber} />}

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
                Welcome Back! <br></br>Glad to see you, Again!
              </h2>
              <Row className="justify-content-center align-items-center">
                <Col xs="auto" className="d-flex align-items-center gap-2">
                  <Image
                    src="/assets/profile.svg"
                    fluid
                    className="rounded user-img"
                    alt="profile"
                  />
                  <Figure.Caption className="text-center mb-0">
                    Login as a Broker
                  </Figure.Caption>
                </Col>
              </Row>
            </div>
            <Form onSubmit={handleSendOtp}>
              <InputGroup className="mb-0 mt-5">
                <Form.Control
                  name="emailPhone"
                  className="rounded-2"
                  required
                  type="text"
                  value={phoneNumber}
                  maxLength="10"
                  placeholder="Enter your phone number"
                  onChange={handleInputChange}
                  isInvalid={showErrorMessage}
                  isValid={!showErrorMessage && phoneNumber !== ''}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Valid Phone Number!
                </Form.Control.Feedback>
              </InputGroup>

              {isSendOtpError && (
                <div className="text-danger">
                  Network Error please try again
                </div>
              )}

              <div className="d-grid mt-3">
                <Button
                  disabled={isSendingOtp}
                  type="submit"
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary"
                >
                  {isSendingOtp ? (
                    <>
                      <span>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {'  '}
                        Sending OTP...
                      </span>
                    </>
                  ) : (
                    'Continue'
                  )}
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

export default LoginForm;
