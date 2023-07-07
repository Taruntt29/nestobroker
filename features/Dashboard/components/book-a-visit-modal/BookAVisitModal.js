import CreatableSelect from 'react-select/creatable';
// import RangeSlider from '../../range-slider/RangeSlider';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import RangeSlider from '../../../../../components/range-slider/RangeSlider';
import DashboardTabs from '../../../../../components/dashboard-tabs/DashboardTabs';
import { useAddVisitMutation } from '../../../../hooks/LoginQuery';
import { useState } from 'react';
import VisitVerification from './VisitVerification';
import { useDispatch } from 'react-redux';
import { hideBookAVisit } from '../../../../store/ModalsSlice';

const morningSlots = ['9AM', '10AM', '11AM'];
const afternoonSlots = ['1PM', '2PM', '3PM'];
const eveningSlots = ['4PM', '5PM', '6PM'];
const tabKey = ['Old', 'New'];

const BookAVisitModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const {
    addVisit,
    isAddVisitLoading,
    isAddVisitSuccess,
    isAddIsError,
    isAddVisitError,
    isAddVisitResponse,
  } = useAddVisitMutation();
  const [values, setValues] = useState([0, 160]);
  const [visitData, setVisitData] = useState({
    propertyName: '',
    clientName: '',
    phoneNumber: '',
    email: '',
    unitType: [],
    preferredLocation: [],
    minPrice: `${values[0]}`,
    maxPrice: `${values[1]}`,
    date: '',
    chooseSlot: null,
    builderId: '64107bce7b4c4240671aeb94',
    brokerId: '64115c5a377e99eee7cd1a50',
    propertyId: '641bf437067c659dc0be278c',
  });

  const options = [
    { value: '2BHK', label: '2 BHK' },
    { value: '3BHK', label: '3 BHK' },
    { value: '4BHK', label: '4 BHK' },
    { value: '5BHK', label: '5 BHK' },
  ];
  const locationOptions = [{ value: 'gurgaon', label: 'gurgaon' }];

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    setVisitData({ ...visitData, [name]: value });
  };

  const handleUnitTypeChange = selectedOptions => {
    const values = selectedOptions
      ? selectedOptions.map(option => option.value)
      : [];
    setVisitData({
      ...visitData,
      unitType: values,
    });
  };

  const handlePreferredLocationChange = selectedOptions => {
    const values = selectedOptions
      ? selectedOptions.map(option => option.value)
      : [];
    setVisitData({
      ...visitData,
      preferredLocation: values,
    });
  };

  const handleBookVisit = () => {
    addVisit(visitData);
  };

  if (isAddVisitSuccess) {
    console.log('eee');
    console.log(isAddVisitResponse);
    console.log('eee');
    console.log(isAddVisitResponse?._id);
    console.log(isAddVisitResponse?._id);
  }

  return (
    <>
      {isAddVisitSuccess && (
        <VisitVerification
          show={show}
          visitId={isAddVisitResponse?._id}
          visitOTP={isAddVisitResponse?.otp}
        />
      )}
      {!isAddVisitSuccess && (
        <CustomModal
          show={show}
          title="Book a Visit"
          border
          closeBtn
          onHide={onHide}
          cssClassName="nes__dashboard__modal"
          size="lg"
          modalHeader
        >
          <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
            <Form
              className="profile__form ps-2 py-3 custom__modal__form"
              onSubmit={e => e.preventDefault()}
            >
              <InputGroup className="gap-3 mb-4">
                <Form.Group className="flex-grow-1" controlId="companyName">
                  <Form.Label>
                    Client Name<span className="text-dark">*</span>
                  </Form.Label>
                  <Form.Control
                    className="rounded-0 border-0"
                    type="text"
                    placeholder="Enter client name"
                    name="clientName"
                    onChange={handleChange}
                    value={visitData.clientName}
                  />
                </Form.Group>

                <Form.Group className="flex-grow-1" controlId="phoneNumber">
                  <Form.Label>
                    Phone Number<span className="text-dark">*</span>
                  </Form.Label>
                  <Form.Control
                    className="rounded-0 border-0"
                    type="tel"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={visitData.phoneNumber}
                  />
                </Form.Group>
              </InputGroup>

              <Form.Group className="mb-4" controlId="email">
                <Form.Label>
                  Email<span className="text-dark">*</span>
                </Form.Label>
                <Form.Control
                  className="rounded-0 border-0"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={visitData.email}
                />
              </Form.Group>

              <InputGroup className="mb-4 gap-3">
                <Form.Group className="flex-grow-1">
                  <Form.Label>
                    Unit Type<span className="text-dark">*</span>
                  </Form.Label>
                  <CreatableSelect
                    isMulti
                    options={options}
                    placeholder="Add more"
                    name="unitType"
                    onChange={handleUnitTypeChange}
                  />
                </Form.Group>

                <Form.Group className="flex-grow-1">
                  <Form.Label>
                    Preferred Location<span className="text-dark">*</span>
                  </Form.Label>
                  <CreatableSelect
                    isMulti
                    placeholder="Add more"
                    options={locationOptions}
                    name="preferredLocation"
                    onChange={handlePreferredLocationChange}
                  />
                </Form.Group>
              </InputGroup>

              <Form.Group className="mb-4" controlId="email">
                <Form.Label>
                  Property Name<span className="text-dark">*</span>
                </Form.Label>
                <Form.Control
                  className="rounded-0 border-0"
                  type="text"
                  name="propertyName"
                  onChange={handleChange}
                  value={visitData.propertyName}
                />
              </Form.Group>

              {/* range slider */}
              <RangeSlider
                title="Price Range"
                min="0"
                max="160"
                values={values}
                setValues={setValues}
              />
              {/* range slider code end here */}

              <Form.Group className="mb-4">
                <Form.Label>
                  Date<span className="text-dark">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control-sm border-0"
                  type="date"
                  // required
                  name="date"
                  onChange={handleChange}
                  value={visitData.date}
                />
              </Form.Group>

              {/* time slots */}
              <Form.Group className="mb-1">
                <Form.Label>
                  Choose Slot<span className="text-dark">*</span>
                </Form.Label>
              </Form.Group>
              <div>
                <Form.Group className="mb-1">
                  <Form.Label>
                    Choose Slot<span className="text-dark">*</span>
                  </Form.Label>
                </Form.Group>
                <Row className="mb-3 g-3">
                  <Col xs={12}>
                    <Form.Label>Morning</Form.Label>
                    <Row className="mb-3 mb-md-0">
                      {morningSlots.map(slot => (
                        <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                          <Form.Label htmlFor={`${slot}`}>
                            <Form.Check
                              type="radio"
                              id={slot}
                              name="chooseSlot"
                              value={slot}
                              checked={visitData.chooseSlot === slot}
                              onChange={handleChange}
                            />
                            {slot}
                          </Form.Label>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Afternoon</Form.Label>
                    <Row className="mb-3 mb-md-0">
                      {afternoonSlots.map(slot => (
                        <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                          <Form.Label htmlFor={`${slot}`}>
                            <Form.Check
                              type="radio"
                              id={slot}
                              name="chooseSlot"
                              value={slot}
                              checked={visitData.chooseSlot === slot}
                              onChange={handleChange}
                            />
                            {slot}
                          </Form.Label>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Evening</Form.Label>
                    <Row className="mb-3 mb-md-0">
                      {eveningSlots.map(slot => (
                        <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                          <Form.Label htmlFor={`${slot}`}>
                            <Form.Check
                              type="radio"
                              id={slot}
                              name="chooseSlot"
                              value={slot}
                              checked={visitData.chooseSlot === slot}
                              onChange={handleChange}
                            />
                            {slot}
                          </Form.Label>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </div>

              {/* time slots code end here */}

              <div className="d-flex gap-4 mt-5">
                <Button
                  onClick={handleBookVisit}
                  type="submit"
                  className="btn-color-primary rounded-pill btn-rounded w-100"
                  disabled={isAddVisitLoading}
                >
                  {isAddVisitLoading ? 'Booking...' : 'Book'}
                </Button>
              </div>
            </Form>
          </DashboardTabs>
        </CustomModal>
      )}
    </>
  );
};

export default BookAVisitModal;
