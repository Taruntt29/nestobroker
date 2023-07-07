import { Form, Button, Alert } from 'react-bootstrap';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import FileUpload from '../file-upload/FileUpload';
import { usePutMutation } from '../../../hooks/LoginQuery';
import { apiEndpoints } from '../../../config/apiEndpoints';
import { useState } from 'react';
const tabKey2 = ['Personal Info', 'Bank Info'];

// personal info
const PersonalInfo = ({ getBrokerByIdResponse }) => {
  const {
    mutate: updatePersonalInfo,
    isLoading: isUpdatePersonalInfoLoading,
    isSuccess: isUpdatePersonalInfoSuccess,
    isError,
    error,
    data,
  } = usePutMutation(apiEndpoints.updatePersonalInfo);

  const [formData, setFormData] = useState({
    id: getBrokerByIdResponse._id,
    email: getBrokerByIdResponse.email ?? '',
    phoneNumber: getBrokerByIdResponse.phoneNumber ?? '',
    address: getBrokerByIdResponse.address ?? '',
    panNumber: getBrokerByIdResponse.panNumber ?? '',
    reraRegistrationNumber: getBrokerByIdResponse.reraRegistrationNumber ?? '',
    name: getBrokerByIdResponse.name ?? '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updatePersonalInfo(formData);
  };

  return (
    <Form className="profile__form ps-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="rounded-0"
          type="email"
          name="email"
          placeholder="enter you email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="enter you phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="enter your address"
          value={formData.address}
          onChange={handleChange}
          name="address"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="address">
        <Form.Label>Pan Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="pan number"
          value={formData.panNumber}
          onChange={handleChange}
          name="panNumber"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Label>RERA Registration Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="rera register number"
          value={formData.reraRegistrationNumber}
          onChange={handleChange}
          name="reraRegistrationNumber"
        />
      </Form.Group>
      <Form.Label>Upload Documents</Form.Label>

      <FileUpload />

      {/* success message */}
      {isUpdatePersonalInfoSuccess && (
        <Alert variant="success" className="py-1" dismissible>
          <Alert.Heading>Successful Updated</Alert.Heading>
        </Alert>
      )}
      {/* success message code end here */}

      <div className="d-flex gap-4 mt-5">
        <Button
          className="btn-color-outline-primary rounded-100 btn-rounded"
          type="submit"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="btn-color-primary rounded-100 btn-rounded"
          disabled={isUpdatePersonalInfoLoading}
        >
          {isUpdatePersonalInfoLoading ? (
            <>
              <span>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                {'  '}
                Update...
              </span>
            </>
          ) : (
            'Save'
          )}
        </Button>
      </div>
    </Form>
  );
};

const BankInfo = ({ getBrokerByIdResponse }) => {
  return (
    <Form className="profile__form ps-2">
      <Form.Group className="mb-4">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="Bank Name"
          value={getBrokerByIdResponse.bankName ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="account number"
          value={getBrokerByIdResponse.accountNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Confirm Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="confirm account number"
          value={getBrokerByIdResponse.accountNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>IFSC Code</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="IFSC CODE"
          value={getBrokerByIdResponse.ifscCode ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <div className="d-flex gap-4 mt-5">
        <Button className="btn-color-outline-primary rounded-100 btn-rounded">
          Cancel
        </Button>
        <Button className="btn-color-primary rounded-100 btn-rounded">
          Save
        </Button>
      </div>
    </Form>
  );
};

const PersonalDetailsForm = ({ getBrokerByIdResponse }) => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}>
        <PersonalInfo
          tabKey={tabKey2[0]}
          getBrokerByIdResponse={getBrokerByIdResponse}
        />
        <BankInfo
          tabKey={tabKey2[1]}
          getBrokerByIdResponse={getBrokerByIdResponse}
        />
      </DashboardTabs>
    </>
  );
};

export default PersonalDetailsForm;
