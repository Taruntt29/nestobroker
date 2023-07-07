import { Card } from 'react-bootstrap';
import './TermsConditions.css';
import { useGetAllTermsAndConditionsBroker } from '../../../hooks/LoginQuery';

const TermsConditions = () => {
  const {
    getAllTermsAndConditionsBrokerIsLoading,
    getAllTermsAndConditionsBrokerIsError,
    getAllTermsAndConditionsBrokerResponse,
    getAllTermsAndConditionsBrokerError,
    getAllTermsAndConditionsBrokerIsSuccess,
  } = useGetAllTermsAndConditionsBroker();
  if (getAllTermsAndConditionsBrokerIsLoading) {
    return <div>loading</div>;
  }

  if (getAllTermsAndConditionsBrokerIsError) {
    return <div>{getAllTermsAndConditionsBrokerIsError.message}</div>;
  }
  return (
    <Card.Text className="refer__terms__and__conditions">
      <ul>
        {getAllTermsAndConditionsBrokerResponse[0]?.description
          .split('\n')
          .map((sentence, index) => (
            <li key={index}>
              {sentence}
              <br />
            </li>
          ))}
      </ul>
    </Card.Text>
  );
};

export default TermsConditions;
