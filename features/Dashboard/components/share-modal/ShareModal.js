import { Button, Form } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import {
  CountryDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
import { useState } from 'react';
import { FlagIcon } from 'react-flag-kit';
import 'react-phone-number-input/style.css';
import './ShareModal.css';

const ShareModal = ({ show, onHide }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');

  return (
    <CustomModal show={show} title="Share" border closeBtn onHide={onHide}>
      <Form className="profile__form ps-2 custom__modal__form py-3">
        <Form.Group className="mb-4" controlId="companyName">
          <Form.Label>Client Name</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="text"
            placeholder="Enter company name"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <div className="d-flex align-items-center">
            <CountryDropdown
              className="form-select rounded-0 border-0"
              value={country}
              onChange={setCountry}
              defaultOptionLabel="Select Country"
              whitelist={['US', 'CA', 'MX', 'GB', 'AU', 'DE', 'IT']}
            />
            {country && (
              <div className="ms-3">
                <FlagIcon code={country} />
              </div>
            )}
          </div>
        </Form.Group>

        <Button className="btn-color-primary rounded-pill btn-rounded w-100 mt-3">
          Share Brochure
        </Button>
      </Form>
    </CustomModal>
  );
};

export default ShareModal;
