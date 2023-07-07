// import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import { useGetAllFaqAndSupport } from '../../../hooks/LoginQuery';
import { useSelector } from 'react-redux';
import AccordionCard from '../accordion/AccordionCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import Community from '../community/Community';
import MyQuestionsMyAnswersBtn from '../community/my-questions-my-answers/MyQuestionsMyAnswersBtn';
import MyQuestions from '../community/my-questions-my-answers/MyQuestions';
import MyAnswers from '../community/my-questions-my-answers/MyAnswers';
import { showQuestionDetailsPage } from '../community/CommunitySlice';
import QuestionDetails from '../community/question-details/QuestionDetails';
import Accordion from 'react-bootstrap/Accordion';
import { GrDocumentPdf } from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import FeedbackButton from '../feedback-button/FeedbackButton';
const tabKey = ['Support', 'FAQ', 'Community'];
const myQuestionsMyAnswersTabs = ['My Questions', 'My Answers'];

const Support = () => {
  const { myQuestionsMyAnswers, questionDetails } = useSelector(
    state => state.community
  );
  const {
    getAllFaqAndSupportIsLoading,
    getAllFaqAndSupportIsError,
    getAllFaqAndSupportResponse,
    getAllFaqAndSupportError,
    getAllFaqAndSupportIsSuccess,
  } = useGetAllFaqAndSupport('support');
  const {
    getAllFaqAndSupportIsLoading: isFaqLoading,
    getAllFaqAndSupportIsError: isFaqIsError,
    getAllFaqAndSupportResponse: isFaqResponse,
    getAllFaqAndSupportError: isFaqError,
    getAllFaqAndSupportIsSuccess: isFaqSuccess,
  } = useGetAllFaqAndSupport('faq');

  return (
    <>
      {!questionDetails && (
        <>
          {!myQuestionsMyAnswers && (
            <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
              <Accordion
                className="accordion__wrapper accordion-flush"
                tabKey={tabKey[0]}
              >
                {getAllFaqAndSupportIsSuccess &&
                  !!getAllFaqAndSupportResponse.length &&
                  getAllFaqAndSupportResponse.map((faqSupport, index) => (
                    <Accordion.Item eventKey={`${index}`} key={index}>
                      <Accordion.Header>{faqSupport.question}</Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className="d-flex">
                          <div className="pe-3 flex-fill">
                            {faqSupport.answer}
                          </div>
                          <Button
                            variant="transparent"
                            className="align-self-end p-0"
                          >
                            <GrDocumentPdf size={40} />
                          </Button>
                        </div>
                        <FeedbackButton />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>

              <Accordion
                className="accordion__wrapper accordion-flush"
                tabKey={tabKey[1]}
              >
                {isFaqSuccess &&
                  !!isFaqResponse.length &&
                  isFaqResponse.map((faq, index) => (
                    <Accordion.Item eventKey={`${index}`} key={index}>
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className="d-flex">
                          <div className="pe-3 flex-fill">{faq.answer}</div>
                          <Button
                            variant="transparent"
                            className="align-self-end p-0"
                          >
                            <GrDocumentPdf size={40} />
                          </Button>
                        </div>
                        <FeedbackButton />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>

              <Community tabKey={tabKey[2]} />
            </DashboardTabs>
          )}

          {myQuestionsMyAnswers && (
            <DashboardTabs
              tabsKey={myQuestionsMyAnswersTabs}
              activeState={myQuestionsMyAnswersTabs[0]}
            >
              {/* tabKey={myQuestionsMyAnswersTabs[0]} */}
              {/* <MyQuestionsMyAnswers /> */}
              <MyQuestions tabKey={myQuestionsMyAnswersTabs[0]} />
              <MyAnswers tabKey={myQuestionsMyAnswersTabs[1]} />
            </DashboardTabs>
          )}
        </>
      )}

      {questionDetails && <QuestionDetails />}
    </>
  );
};

export default Support;
