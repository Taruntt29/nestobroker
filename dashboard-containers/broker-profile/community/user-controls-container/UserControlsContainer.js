import { Button, Card, Image } from 'react-bootstrap';
import { RiEditBoxFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const UserControlsContainer = ({ numAnswers }) => {
  const { questionDetails } = useSelector(state => state.community);

  return (
    <Card.Footer
      className={`user-controls-container bg-white border-0 d-flex gap-5 pt-0 ${
        questionDetails && `bg-transparent`
      }`}
    >
      {!questionDetails && (
        <>
          <div className="user-control-item d-flex align-items-center gap-2">
            <Image src="/assets/broker/stockUp.png" fluid />
            <span className="control-text">29</span>
            <Image src="/assets/broker/stockDown.png" fluid />
          </div>
          <div className="user-control-item d-flex align-items-center gap-2">
            <span className="control-text">{numAnswers} </span>
          </div>
          <div className="user-control-item d-flex align-items-center gap-2 border rounded-pill px-3 py-1">
            <RiEditBoxFill size={20} />
            <span className="control-text">Write Answer</span>
          </div>
        </>
      )}
      {questionDetails && (
        <>
          <div className="user-control-item user-control-item-answers d-flex align-items-center gap-3 mt-2">
            <Image src="/assets/broker/stockUp.png" fluid />
            <span className="control-text">29</span>
            <Image src="/assets/broker/stockDown.png" fluid />
          </div>
          <Button
            variant="transparent"
            className="p-0 ms-auto user-control-item-report"
          >
            Report
          </Button>
        </>
      )}
    </Card.Footer>
  );
};

export default UserControlsContainer;
