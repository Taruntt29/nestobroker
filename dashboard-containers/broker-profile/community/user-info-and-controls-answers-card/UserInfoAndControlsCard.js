import { Card } from 'react-bootstrap';
import Avatar from '../avatar/Avatar';
import UserControlsContainer from '../user-controls-container/UserControlsContainer';
import { useSelector } from 'react-redux';
import './UserInfoAndControlsCard.css';

const UserInfoAndControlsAnswersCard = ({
  avatarSrc,
  username,
  time,
  text,
}) => {
  const { questionDetails } = useSelector(state => state.community);
  return (
    <Card className="user-card-container user-card-container-answers border-0 bg-gray mt-1">
      <Card.Body>
        <div className="user-info-container d-flex align-items-center gap-3">
          <Avatar avatarSrc={avatarSrc} size={100} />
          <div className="user-info-text-container flex-fill">
            <div className="user-info-text d-flex gap-3 align-items-center">
              <Card.Title className="username m-0">{username}</Card.Title>
              <Card.Subtitle className="user-date">{time}</Card.Subtitle>
            </div>
            <Card.Text className="user-text text-dark mt-1">{text}</Card.Text>
            {questionDetails && <UserControlsContainer />}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserInfoAndControlsAnswersCard;
