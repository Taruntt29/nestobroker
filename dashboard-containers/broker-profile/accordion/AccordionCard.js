import Accordion from 'react-bootstrap/Accordion';
import { GrDocumentPdf } from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import FeedbackButton from '../feedback-button/FeedbackButton';
import './AccordionCard.css';

const AccordionCard = ({ itemLength, accordionTitle, accordionText }) => {
  return (
    <>
      <Accordion className="accordion__wrapper accordion-flush">
        {!!itemLength &&
          Array.from({ length: itemLength }, (_, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header>{accordionTitle}</Accordion.Header>
              <Accordion.Body className="pt-0">
                <div className="d-flex">
                  <div className="pe-3">{accordionText}</div>
                  <Button variant="transparent" className="align-self-end p-0">
                    <GrDocumentPdf size={40} />
                  </Button>
                </div>
                <FeedbackButton />
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </>
  );
};

export default AccordionCard;
