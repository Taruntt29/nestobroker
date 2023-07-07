import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './ShadowCard.css';

function ShadowCard({ itemLength, text }) {
  return (
    <>
      {Array.from({ length: itemLength }, (_, index) => (
        <Card className="border-0 shadow-card notification__card" key={index}>
          <Card.Body className="d-flex align-items-center p-3">
            <Card.Text className="flex-fill m-0">{text}</Card.Text>
            <Button variant="transparent">
              <RiDeleteBin6Line color="#278FD9" size={30} />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ShadowCard;
