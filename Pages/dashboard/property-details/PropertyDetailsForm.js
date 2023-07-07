import { Card, Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import React from 'react';
import Select from 'react-select';

import Testimonial from '../comment-history-testimonial/CommentHistoryTestimonial';
import './PropertyDetailsForm.css';

const followUpTime = ['Morning Slots', 'Afternoon Slots', 'Evening Slots'];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
];

const options = [
  { value: 'hDFC Bank', label: 'HDFC Bank' },
  { value: 'bank2', label: 'Bank2' },
  { value: 'Bank3', label: 'Bank3' },
];

const PropertyDetailsForm = () => {
  return (
    <>
      <Card className="property__details__form shadow-sm border-0">
        <Card.Header className="border-0 bg-white shadow-sm">
          <h4>Loan Query Details</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col lg={4}>
                <FloatingLabel
                  controlId="clientNameInput"
                  label="Client Name"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="text"
                    placeholder="Enter client name"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="clientMobileNoInput"
                  label="Client Mobile No"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="tel"
                    placeholder="Enter client mobile no"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="clientEmailInput"
                  label="Client Email"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="email"
                    placeholder="Enter client email"
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col lg={4}>
                <FloatingLabel
                  controlId="loanRequirementInput"
                  label="Loan Requirement"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="text"
                    placeholder="Enter loan requirement"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="requiredDateInput"
                  label="Required Date"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="date"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col className="my-3 my-lg-0" lg={4}>
                <Form.Group>
                  <Select closeMenuOnSelect={false} isMulti options={options} />
                </Form.Group>
              </Col>

              <Col lg={4}>
                <FloatingLabel
                  controlId="select1Input"
                  label="Select 1"
                  className="mb-3"
                >
                  <Form.Select required>
                    <option>Select option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="loanApplicationInput"
                  label="Loan Application"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="text"
                    placeholder="Enter loan application"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="applicationDateInput"
                  label="Application Date"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="date"
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col lg={4}>
                <FloatingLabel
                  controlId="statusSelect"
                  label="Status"
                  className="mb-3"
                >
                  <Form.Select required>
                    <option>Select status</option>
                    <option value="status1">Status 1</option>
                    <option value="status2">Status 2</option>
                    <option value="status3">Status 3</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3" xs={1}>
              <Col>
                <FloatingLabel
                  controlId="commentInput"
                  label="Comment"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    as="textarea"
                    placeholder="Enter comment"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3" xs={1}>
              <Col>
                <Form.Label>Comment History</Form.Label>
                <div
                  className="overflow-auto p-4 wild-sand-bg"
                  style={{ height: '200px' }}
                >
                  {Array.from({ length: 3 }, (_, index) => (
                    <Testimonial />
                  ))}
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5 className="mt-5 mb-2">Follow Up Date</h5>
              </Col>
            </Row>

            <Row className="mb-5" xs={1} md={2} lg={4}>
              <Col>
                <FloatingLabel
                  controlId="followUpDateInput"
                  label="Follow-up Date"
                >
                  <Form.Control className="form-control-sm" type="date" />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5 className="mb-3">Follow Up Time</h5>
              </Col>
            </Row>

            <Row className="mb-3 g-3">
              {followUpTime.map((item, index) => (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Form.Label>{item}</Form.Label>
                  <Row className="mb-3 mb-md-0">
                    {Array.from({ length: 3 }, (_, index) => (
                      <Col key={index} className="my-2 my-lg-0" md={6} lg={4}>
                        <Form.Select className="form-control-sm">
                          <option>Choose time slot</option>
                          {timeSlots.map(timeSlot => (
                            <option key={timeSlot} value={timeSlot}>
                              {timeSlot}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    ))}
                  </Row>
                </Col>
              ))}
            </Row>

            <Row className="mb-3" xs={1} md={2} lg={4}>
              <Col>
                <FloatingLabel
                  controlId="queryStatusSelect"
                  label="Query Status"
                >
                  <Form.Select>
                    <option>Select</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-color-primary px-5"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* disbursements details */}
      <Card className="property__details__form shadow-sm border-0 my-5">
        <Card.Header className="bg-white shadow-sm border-0">
          <h4>Disbursement Details</h4>
        </Card.Header>
        <Card.Body>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <FloatingLabel
                controlId="select1Input"
                label="Bank/NBFC  Name"
                className="mb-3"
              >
                <Form.Select required>
                  <option>Select option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="loanApplicationInput"
                label="Loan Application No."
                className="mb-3"
              >
                <Form.Control
                  className="form-control-sm"
                  type="text"
                  placeholder="Enter loan application"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="applicationDateInput"
                label="Disbursement Date"
                className="mb-3"
              >
                <Form.Control
                  className="form-control-sm"
                  type="date"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="clientMobileNoInput"
                label="Disbursement Amount"
                className="mb-3"
              >
                <Form.Control
                  className="form-control-sm"
                  type="tel"
                  placeholder="Enter client mobile no"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PropertyDetailsForm;
