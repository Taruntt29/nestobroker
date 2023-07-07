import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  showMyQuestionsMyAnswers,
  hideMyQuestionsMyAnswers,
} from '../CommunitySlice';

const MyQuestionsMyAnswersBtn = () => {
  const dispatch = useDispatch();
  const { myQuestionsMyAnswers } = useSelector(state => state.community);

  return (
    <>
      <div className="d-flex">
        {!myQuestionsMyAnswers && (
          <Button
            variant="transparent"
            className="p-0 ms-auto"
            onClick={() => dispatch(showMyQuestionsMyAnswers())}
          >
            <Image src="/assets/broker/my-questions-my-answers.svg" fluid />
          </Button>
        )}

        {myQuestionsMyAnswers && (
          <Button
            variant="transparent"
            className="p-0 ms-auto"
            onClick={() => dispatch(hideMyQuestionsMyAnswers())}
          >
            <Image src="/assets/broker/my-questions-my-answers.svg" fluid />
          </Button>
        )}
      </div>
    </>
  );
};

export default MyQuestionsMyAnswersBtn;
