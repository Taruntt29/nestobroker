import { BrokerageManagementCard } from '../../../../components';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardTabs from '../../../../dashboard-containers/broker-profile/dashboard-tabs/DashboardTabs';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchFilterBox from '../../../../../components/search-filter/SearchFilter';
import useToken from '../../../../hooks/useToken';
import { useSelector } from 'react-redux';
import {
  useGetAllClaim,
  useGetQueryWithId,
} from '../../../../hooks/LoginQuery';
import { apiEndpoints } from '../../../../config/apiEndpoints';
import LoadingSpinner from '../../../../Common/loading-spinner/LoadingSpinner';
import ErrorMessage from '../../../../Common/error-message/ErrorMessage';
const tabKey = ['Eligible Claims', 'Claim History', 'Loan Queries'];

const BrokerageManagement = () => {
  useToken();
  const brokerId = useSelector(state => state.auth.brokerID);
  const {
    isLoading: isGetAllEligibleClaimLoading,
    isError: isGetAllEligibleClaimError,
    data: getAllEligibleClaimResponse,
    error: getAllEligibleClaimError,
    isSuccess: isGetAllEligibleClaimSuccess,
  } = useGetQueryWithId(
    'getAllEligibleClaims',
    apiEndpoints.getAllEligibleClaims,
    brokerId
  );

  // get all claim
  const {
    getAllClaimIsLoading,
    getAllClaimIsError,
    getAllClaimResponse,
    getAllClaimError,
    getAllClaimIsSuccess,
  } = useGetAllClaim('640c30902cdf3673a29ae71d');
  // get all claim code end here

  if (isGetAllEligibleClaimLoading) {
    return <LoadingSpinner />;
  }

  if (isGetAllEligibleClaimError) {
    return <ErrorMessage />;
  }

  if (isGetAllEligibleClaimSuccess && getAllClaimIsSuccess) {
    return (
      <>
        <Header />
        <SearchFilterBox addBtn />
        <section className="mt-3 brokerage__management">
          <Container>
            <Row>
              <Col xs={12}>
                <h1 className="section-title mb-4">Brokerage Management</h1>
              </Col>
              <Col>
                <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
                  {/* <Container tabKey={tabKey[0]}> */}
                  <Row tabKey={tabKey[0]}>
                    {isGetAllEligibleClaimSuccess &&
                      getAllEligibleClaimResponse.map(
                        (eligibleClaim, index) => (
                          <Col lg={6} md={6} className="mb-3" key={index}>
                            <BrokerageManagementCard
                              text="Raise the brokerage claim"
                              type="raise"
                              eligibleClaim={eligibleClaim}
                            />
                          </Col>
                        )
                      )}
                  </Row>
                  {/* </Container> */}
                  {/* <Container tabKey={tabKey[1]}> */}
                  <Row tabKey={tabKey[1]}>
                    {getAllClaimIsSuccess &&
                      getAllClaimResponse.map((claimHistory, index) => (
                        <Col lg={6} md={6} className="mb-3" key={index}>
                          <BrokerageManagementCard
                            text="Raise the brokerage claim"
                            type="claimHistory"
                            claimHistory={claimHistory}
                          />
                        </Col>
                      ))}
                  </Row>
                  {/* </Container> */}
                  {/* <Container tabKey={tabKey[2]}> */}
                  <Row tabKey={tabKey[2]}>
                    <Col lg={6} md={6} className="mb-3">
                      <BrokerageManagementCard
                        text="Claim Submitted"
                        type="claimSubmitted"
                      />
                    </Col>

                    <Col lg={6} md={6} className="mb-3">
                      <BrokerageManagementCard
                        text="Payment Received"
                        type="paymentReceived"
                      />
                    </Col>
                    <Col lg={6} md={6} className="mb-3">
                      <BrokerageManagementCard text="Paid" type="paid" />
                    </Col>
                    <Col lg={6} md={6} className="mb-3">
                      <BrokerageManagementCard
                        text="Claim Approved"
                        type="claimApproved"
                      />
                    </Col>

                    <Col lg={6} md={6} className="mb-3">
                      <BrokerageManagementCard
                        text="Assigned"
                        type="assigned"
                      />
                    </Col>
                  </Row>
                  {/* </Container> */}
                </DashboardTabs>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
};

export default BrokerageManagement;
