import { Card } from 'react-bootstrap';
import Avatar from '../avatar/Avatar';
import UserControlsContainer from '../user-controls-container/UserControlsContainer';
import './UserInfoAndControlsCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { showQuestionDetailsPage } from '../CommunitySlice';

const UserInfoAndControlsCard = ({
  avatarSrc,
  username,
  date,
  text,
  numAnswers,
  children,
}) => {
  const dispatch = useDispatch();
  const { questionDetails } = useSelector(state => state.community);
  return (
    <Card
      className="user-card-container border-0 custom__card__shadow mt-5"
      onClick={() => dispatch(showQuestionDetailsPage())}
    >
      <Card.Body>
        <div className="user-info-container d-flex align-items-center gap-3">
          <Avatar avatarSrc={avatarSrc} size={60} />
          <div className="user-info-text-container flex-fill">
            <div className="user-info-text">
              <Card.Title className="username">{username}</Card.Title>
              <Card.Subtitle className="user-date">{date}</Card.Subtitle>
            </div>
          </div>
        </div>
        <Card.Text className="user-text text-dark mt-2">{text}</Card.Text>
        {/* my answers cards */}
        {children}
        {/* my answers card code end here */}
      </Card.Body>
      {!questionDetails && <UserControlsContainer numAnswers={numAnswers} />}
    </Card>
  );
};

export default UserInfoAndControlsCard;
