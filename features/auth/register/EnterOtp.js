import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiTimerLine } from 'react-icons/ri';
// import { CustomModal } from "../../../components";
import { CustomModal } from '../../../../components';
// import OtpContent from './OtpContent';

const EnterOtp = ({ show, onHide }) => {
  const otpInputs = useRef([]);
  const [otpPassword, setOtpPassword] = useState(false);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);

  const handleOtpInputChange = (e, index) => {
    const otpInput = e.target;
    otpInput.value = otpInput.value.replace(/[^0-9]/g, '');

    if (otpInput.value && otpInput.nextSibling) {
      otpInput.nextSibling.focus();
    }

    if (index === 5 && otpInputs.current.every(input => input.value)) {
      // clearInterval(timerInterval);
      if (otpPassword) {
        navigate('/dsa/home-dashboard');
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      otpInputs.current[index + 1]?.focus();
    } else if (e.key === 'ArrowRight' && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && otpInputs.current[index - 1]) {
      otpInputs.current[index - 1].focus();
    } else if (e.key === 'Backspace' && !otpInputs.current[index].value) {
      e.preventDefault();
      otpInputs.current[index - 1]?.focus();
    }
  };

  const resetOtpInputs = () => {
    otpInputs.current.forEach(input => {
      input.value = '';
    });
    otpInputs.current[0].focus();
  };

  const startTimer = () => {
    setTimer(30);
  };

  useEffect(() => {
    otpInputs.current[0]?.focus();
    const timerInterval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      resetOtpInputs();
      startTimer();
    }
  }, [timer]);

  return (
    <CustomModal
      title="OTP Verification"
      show={show}
      border
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      modalHeader
    >
      <p
        className="text-text-muted text-center mb-4"
        style={{ lineHeight: '1.6' }}
      >
        Enter the verification code we just sent on your phone number.
      </p>
      <Form>
        {/* <OtpContent /> */}
        <Form.Group className="mb-3">
          <div className="d-flex justify-content-between align-items-center gap-4 mb-3">
            {[...Array(6)].map((_, index) => (
              <Form.Control
                key={index}
                type="text"
                maxLength={1}
                onChange={e => handleOtpInputChange(e, index)}
                onKeyDown={e => handleKeyDown(e, index)}
                ref={ref => (otpInputs.current[index] = ref)}
              />
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center my-4">
            <Form.Text className="text-muted me-3">
              <div className="d-flex align-items-center justify-content-center gap-1">
                <RiTimerLine color="#278FD9" />
                <span className="otp-timer">
                  {timer >= 10 ? `00:${timer}` : `00:0${timer}`}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span>Didn't received code?</span>
                <Button
                  color="Resend"
                  variant="transparent"
                  onClick={() => {
                    resetOtpInputs();
                    startTimer();
                  }}
                >
                  Resend
                </Button>
              </div>
            </Form.Text>
          </div>
          <Button
            variant="primary"
            className="w-100 rounded-pill bg-color-primary"
            onClick={() => {
              if (otpInputs.current.every(input => input.value)) {
                navigate('/dsa/home-dashboard');
              }
            }}
          >
            Verify
          </Button>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};

export default EnterOtp;
