import { Button } from 'react-bootstrap';
import ShadowCard from '../shadow-card/ShadowCard';
import './Notification.css';
const Notification = ({ notification }) => {
  return (
    <>
      <div className="notification__wrapper d-flex flex-column">
        {notification && (
          <>
            <ShadowCard
              itemLength={3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut."
            />
            <Button className="btn-color-primary rounded-100 btn-rounded mt-5 w-100">
              Delete All
            </Button>
          </>
        )}

        {!notification && 'No new notification'}
      </div>
    </>
  );
};

export default Notification;
