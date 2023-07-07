import CreatableSelect from 'react-select/creatable';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import RangeSlider from '../../../../../components/range-slider/RangeSlider';

const options = [
  { value: '2 BHK', label: '2 BHK' },
  { value: '3 BHK', label: '3 BHK' },
];

const CustomerModal = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      title="Edit Customer Detail"
      modalHeader
      border
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      // size="lg"
    >
      <Form className="profile__form ps-2 py-3 custom__modal__form">
        <Form.Group className="mb-4" controlId="companyName">
          <Form.Label>
            Client Name<span className="text-dark">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="text"
            placeholder="Enter client name"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>
            Email<span className="text-dark">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phoneNumber">
          <Form.Label>
            Phone Number<span className="text-dark">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="tel"
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phoneNumber">
          <Form.Label>
            Alternate Phone Number<span className="text-dark">*</span>
          </Form.Label>
          <Form.Control
            className="rounded-0 border-0"
            type="tel"
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            Unit Type<span className="text-dark">*</span>
          </Form.Label>
          <CreatableSelect isMulti placeholder="Add more" options={options} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            Preferred Location<span className="text-dark">*</span>
          </Form.Label>
          <CreatableSelect isMulti placeholder="Add more" options={options} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>
            Preferred Location<span className="text-dark">*</span>
          </Form.Label>
          <Form.Control className="rounded-0 border-0" type="text" />
        </Form.Group>

        {/* range slider */}
        <RangeSlider title="Price Range" min="0" max="160" />
        {/* range slider code end here */}

        <div className="d-flex gap-4 mt-5">
          <Button className="btn-color-primary rounded-pill btn-rounded w-100">
            Save Changes
          </Button>
        </div>
      </Form>
    </CustomModal>
  );
};

export default CustomerModal;
