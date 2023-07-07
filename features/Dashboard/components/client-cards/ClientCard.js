import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { MdModeEditOutline, MdLocalPhone } from 'react-icons/md';
import Footer from '../footer/Footer';
import formatDate from '../../../../helper/formatDate';
import './ClientCard.css';
import { useGetAllRequirement } from '../../../../hooks/LoginQuery';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientCards = ({ getAllCustomerResponse, getAllCustomerIsSuccess }) => {
  const [clientBrokerData, setClientBrokerData] = useState({
    customerId: '',
    brokerId: '',
    visitId: '',
    requirementId: '',
  });
  const {
    getAllRequirementIsLoading,
    getAllRequirementIsError,
    getAllRequirementResponse,
    getAllRequirementError,
    getAllRequirementIsSuccess,
  } = useGetAllRequirement(
    clientBrokerData.brokerId,
    clientBrokerData.customerId
  );

  return (
    <>
      <section className="mt-3">
        <Container className="nes__dashboard__brok__client">
          <Row>
            <Col xs={12}>
              {getAllCustomerIsSuccess && !getAllRequirementIsSuccess && (
                <h1 className="section-title mb-4">Client Management</h1>
              )}
            </Col>

            {/* requirement section code start here */}
            {getAllRequirementIsSuccess && (
              <>
                <Col xs={12}>
                  <h1 className="section-title mb-4">Requirement Details</h1>
                </Col>
                <Col xs={12} className="mb-3">
                  <Card className="client__card border-0 mb-4">
                    <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 p-3">
                      <div className="fw-bold d-flex flex-column">
                        <span className="nes__dashboard__brok__client__name nes__dashboard__brok__client__name-title fw-bold">
                          {getAllRequirementResponse[0]?.customerId?.clientName}
                        </span>
                        <span className="text-muted fw-light">
                          Client ID:
                          {getAllRequirementResponse[0]?.customerId?._id}
                        </span>
                      </div>
                      <div className="d-flex align-items-center fw-bold ms-auto">
                        <div>
                          <button className="me-1 rounded-circle p-0 d-inline-flex nes__dashboard__brok__client__phone">
                            <MdLocalPhone className="m-auto" size={10} />
                          </button>{' '}
                          <span className="nes__dashboard__brok__client__phone__text">
                            {
                              getAllRequirementResponse[0]?.customerId
                                ?.phoneNumber
                            }
                          </span>
                        </div>
                      </div>
                    </Card.Header>
                  </Card>
                </Col>
              </>
            )}
            {/* requirement section code end  */}
            {!getAllRequirementIsSuccess &&
              !!getAllCustomerResponse.length &&
              getAllCustomerResponse.map(
                ({
                  _id,
                  phoneNumber,
                  clientName,
                  preferredLocation,
                  maxPrice,
                  minPrice,
                  unitType,
                  latestVisit,
                  brokerId,
                }) => (
                  <Col lg={4} md={6} className="mb-3" key={_id}>
                    <Card className="client__card border-0">
                      <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 pt-3 pb-0">
                        <div className="fw-bold ">
                          <span className="nes__dashboard__brok__client__name">
                            {clientName}
                          </span>
                          <MdModeEditOutline className="ms-1" color="#278FD9" />

                          {/* {requirementDetails && (
                              <span className="nes__dashboard__brok__client__id">
                                Requirement ID: 2322232323
                              </span>
                            )} */}
                        </div>
                        <div className="d-flex align-items-center fw-bold">
                          <div>
                            <button className="me-1 rounded-circle p-0 d-inline-flex nes__dashboard__brok__client__phone">
                              <MdLocalPhone className="m-auto" size={10} />
                            </button>{' '}
                            <span className="nes__dashboard__brok__client__phone__text">
                              {phoneNumber}
                            </span>
                          </div>

                          {/* {requirementDetails && (
                              <Link className="client__Card__link text-decoration-underline">
                                {' '}
                                Related Search{' '}
                              </Link>
                            )} */}
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text className="mb-3 d-flex justify-content-between">
                          <span className="fw-normal text-muted">
                            Recent Requirement
                          </span>{' '}
                          <span className="fw-semibold d-flex gap-2 justify-content-end">
                            {!!unitType.length &&
                              unitType.map((unit, index) => (
                                <span key={index}>{unit}</span>
                              ))}
                          </span>
                        </Card.Text>
                        <Card.Text className="mb-3 d-flex justify-content-between">
                          <span className="fw-normal text-muted">Budget</span>{' '}
                          <span className="fw-semibold">{`${minPrice}-${maxPrice}`}</span>
                        </Card.Text>
                        <Card.Text className="mb-3 d-flex justify-content-between">
                          <span className="fw-normal text-muted">
                            Preferred Location
                          </span>{' '}
                          <span className="fw-semibold d-flex justify-content-end gap-2">
                            {!!preferredLocation.length &&
                              preferredLocation.map((location, index) => (
                                <span key={index}>{location}</span>
                              ))}
                          </span>
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-between">
                          <span className="fw-normal text-muted">
                            Recent Updated Visit
                          </span>{' '}
                          <span className="fw-semibold text-end">
                            {`${latestVisit.propertyName} | ${formatDate(
                              latestVisit.date
                            )}`}
                          </span>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-transparent border-0 d-flex justify-content-center gap-3 py-3 px-lg-3 px-xl-5">
                        <div className="flex-fill follow-up rounded-pill d-flex justify-content-center align-items-center">
                          Follow Up
                        </div>
                        <Button
                          className="flex-fill btn-color-primary rounded-pill"
                          onClick={() =>
                            setClientBrokerData(prevClientBrokerData => ({
                              ...prevClientBrokerData,
                              brokerId: brokerId._id,
                              customerId: _id,
                            }))
                          }
                        >
                          Visit Summary
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              )}

            {getAllRequirementIsSuccess && (
              <Col lg={4} md={6} className="mb-3">
                <Card className="client__card border-0">
                  <Card.Header className="bg-white d-flex justify-content-between align-items-center border-0 pt-3 pb-0 gap-1">
                    <div
                      className="fw-bold text-truncate"
                      title={getAllRequirementResponse[0]?._id}
                    >
                      <span className="nes__dashboard__brok__client__name text-truncate">
                        Requirement ID: {getAllRequirementResponse[0]?._id}
                      </span>
                    </div>
                    <div className="d-flex align-items-center fw-bold flex-shrink-0">
                      <Link className="client__Card__link text-decoration-underline">
                        Related Search
                      </Link>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Recent Requirement
                      </span>{' '}
                      <span className="fw-semibold d-flex gap-2 justify-content-end">
                        {getAllRequirementResponse[0]?.unitType.map(
                          (unit, index) => (
                            <span key={index}>{unit}</span>
                          )
                        )}
                      </span>
                    </Card.Text>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">Budget</span>{' '}
                      <span className="fw-semibold">{`${getAllRequirementResponse[0]?.minPrice}-${getAllRequirementResponse[0]?.maxPrice}`}</span>
                    </Card.Text>
                    <Card.Text className="mb-3 d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Preferred Location
                      </span>{' '}
                      <span className="fw-semibold d-flex justify-content-end gap-2">
                        {getAllRequirementResponse[0]?.preferredLocation.map(
                          (location, index) => (
                            <span key={index}>{location}</span>
                          )
                        )}
                      </span>
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-between">
                      <span className="fw-normal text-muted">
                        Recent Updated Visit
                      </span>{' '}
                      {/* <span className="fw-semibold text-end">
                        {`${latestVisit.propertyName} | ${formatDate(
                          latestVisit.date
                        )}`}
                      </span> */}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 d-flex justify-content-center gap-3 py-3 px-lg-3 px-xl-5">
                    <div className="flex-fill follow-up rounded-pill d-flex justify-content-center align-items-center">
                      Follow Up
                    </div>
                    <Button
                      className="flex-fill btn-color-primary rounded-pill"
                      onClick={() =>
                        setClientBrokerData(prevClientBrokerData => ({
                          ...prevClientBrokerData,
                          visitId: '',
                          requirementId: '',
                        }))
                      }
                    >
                      Visit Summary
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ClientCards;
