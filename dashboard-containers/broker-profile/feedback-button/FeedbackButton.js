import { Button, Card } from 'react-bootstrap';
import './FeedbackButton.css';

const FeedbackButton = ({ onConfirm, onCancel }) => {
  return (
    <Card className="feedback__card border-0 mt-4">
      <Card.Body>
        <Card.Title className="text-center text-dark">
          Was this information helpful?
        </Card.Title>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent d-flex flex-column flex-sm-row gap-3 gap-sm-5">
        <Button variant="primary" onClick={onConfirm} className="flex-grow-1">
          YES
        </Button>
        <Button variant="secondary" onClick={onCancel} className="flex-grow-1">
          NO
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default FeedbackButton;
