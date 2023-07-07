import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button, Image } from 'react-bootstrap';
import { FiUser, FiClipboard, FiBookOpen, FiHelpCircle } from 'react-icons/fi';
import './Profile.css';
import { RiArrowRightSLine, RiPencilFill } from 'react-icons/ri';
import { BsBoxArrowRight } from 'react-icons/bs';
import PersonalDetailsForm from './personal-details/PersonalDetailsForm';
import TermsConditions from './terms-and-conditions/TermsConditions';
import RaiseQuery from './raise-query/RaiseQuery';
import CardWrapper from './card-wrapper/CardWrapper';
import Support from './support/Support';
import Preferences from './preferences/Preferences';
import Notification from './notification/Notification';
import Refer from './refer/Refer';
import { useDispatch, useSelector } from 'react-redux';
import { setBrokerID } from '../../store/authSlice';
import { useGetBrokerById } from '../../hooks/LoginQuery';
import ErrorMessage from '../../Common/error-message/ErrorMessage';
import LoadingSpinner from '../../Common/loading-spinner/LoadingSpinner';
import { Footer, Header } from '../../features';
import useToken from '../../hooks/useToken';

const tabs = [
  { title: 'Personal Details', icon: <FiUser /> },

  { title: 'Preferences', icon: <FiClipboard /> },
  { title: 'Notification', icon: <FiClipboard /> },
  { title: 'Refer & Earn', icon: <FiClipboard /> },
  { title: 'Terms & Conditions', icon: <FiBookOpen /> },
  { title: 'Support', icon: <FiHelpCircle /> },
  { title: 'Tutorial', icon: <FiHelpCircle /> },
  { title: 'Raise Query', icon: <FiHelpCircle /> },
];

const profileSidebarNavContent = [
  {
    element: <PersonalDetailsForm />,
  },
  {
    element: <Preferences />,
    title: 'Preferences',
  },
  {
    element: <Notification notification />,
    title: 'Notification',
  },
  {
    element: <Refer />,
    title: 'Refer & Earn',
  },
  {
    element: <TermsConditions />,
    title: 'Terms & Conditions',
  },
  {
    element: <Support />,
  },
  {
    element: <RaiseQuery />,
    title: 'Your Recent Queries',
  },
  {
    element: <RaiseQuery />,
    title: 'Your Recent Queries',
  },
  {
    element: <RaiseQuery />,
    title: 'Your Recent Queries',
  },
  {
    element: <RaiseQuery />,
    title: 'Your Recent Queries',
  },
];

const ProfilePage = () => {
  useToken();
  const [activeTab, setActiveTab] = useState(0);
  const brokerID = useSelector(state => state.auth.brokerID);

  const {
    getBrokerByIdIsLoading,
    getBrokerByIdIsError,
    getBrokerByIdResponse,
    getBrokerByIdError,
    getBrokerByIdIsSuccess,
  } = useGetBrokerById(brokerID);

  const handleTabChange = index => {
    setActiveTab(index);
  };

  if (getBrokerByIdIsLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  if (getBrokerByIdIsError) {
    return (
      <>
        <ErrorMessage />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="mt-5">
        <Container fluid="lg" className="profile mb-5">
          <Row className="gy-5 gx-lg-5">
            <Col
              md={5}
              lg={3}
              className="profile-sidebar profile__sidebar__wrapper align-self-start"
            >
              <aside className="d-flex flex-column h-100 justify-content-between py-4">
                <div>
                  {/* profile img */}
                  <div className="text-center">
                    <div className="text-center position-relative profile__image mx-auto">
                      <Image
                        src="/assets/profile-page/profile-mg-big.png"
                        roundedCircle
                      />
                      <div className="profile__image__overlay">
                        <RiPencilFill />
                      </div>
                    </div>
                    <h4 className="mt-3">{getBrokerByIdResponse[0]?.name}</h4>
                    <p className="text-muted">
                      {getBrokerByIdResponse[0]?._id}
                    </p>
                  </div>
                  {/* profile img code end here */}

                  <Nav className="flex-column mt-4">
                    {tabs.map((tab, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link
                          active={activeTab === index}
                          onClick={() => handleTabChange(index)}
                          className="d-flex justify-content-between align-items-center gap-2"
                        >
                          <div className="d-flex align-items-center gap-2">
                            <div className="profile__sidebar__wrapper__icon shadow bg-white d-flex justify-content-center align-items-center">
                              <img
                                src={`/assets/profile-page/profile-icon-${
                                  index + 1
                                }.svg`}
                                alt="profile icon"
                                className="img-fluid"
                              />
                            </div>

                            {tab.title}
                          </div>

                          <RiArrowRightSLine size={28} />
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
                <div className="mt-4 d-grid">
                  <Button
                    variant="transparent"
                    className="d-flex justify-content-center align-items-center gap-2 profile__sidebar__wrapper__signout"
                  >
                    <BsBoxArrowRight className="icon" size={24} /> Sign Out
                  </Button>
                </div>
              </aside>
            </Col>
            <Col md={7} lg={9} className="pt-0 ">
              <Tab.Container activeKey={activeTab}>
                <Tab.Content>
                  {tabs.map((_, index) => (
                    <Tab.Pane key={index} eventKey={index}>
                      <CardWrapper
                        title={profileSidebarNavContent[index]?.title}
                      >
                        {React.cloneElement(
                          profileSidebarNavContent[index]?.element,
                          {
                            getBrokerByIdResponse: getBrokerByIdResponse[0],
                          }
                        )}
                      </CardWrapper>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
