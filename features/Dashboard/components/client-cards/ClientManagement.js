import { useSelector } from 'react-redux';
import SearchFilterBox from '../../../../../components/search-filter/SearchFilter';
import useToken from '../../../../hooks/useToken';
import Header from '../header/Header';
import ClientCards from './ClientCard';
import { useGetAllCustomer } from '../../../../hooks/LoginQuery';
import LoadingSpinner from '../../../../Common/loading-spinner/LoadingSpinner';
import ErrorMessage from '../../../../Common/error-message/ErrorMessage';

const ClientManagement = () => {
  useToken();
  const brokerId = useSelector(state => state.auth.brokerID);
  const {
    getAllCustomerIsLoading,
    getAllCustomerIsError,
    getAllCustomerResponse,
    getAllCustomerError,
    getAllCustomerIsSuccess,
  } = useGetAllCustomer(brokerId);

  if (getAllCustomerIsLoading) {
    return <LoadingSpinner />;
  }

  if (getAllCustomerIsError) {
    return <ErrorMessage />;
  }

  if (getAllCustomerIsSuccess) {
    return (
      <>
        <Header />
        <SearchFilterBox addBtn />
        <ClientCards
          getAllCustomerResponse={getAllCustomerResponse}
          getAllCustomerIsSuccess={getAllCustomerIsSuccess}
        />
      </>
    );
  }
};

export default ClientManagement;
