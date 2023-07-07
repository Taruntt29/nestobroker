import MyQuestionsMyAnswersBtn from './MyQuestionsMyAnswersBtn';
import SearchFilter from '../../../../../components/search-filter/SearchFilter';
import UserInfoAndControlsCard from '../user-info-and-controls/UserInfoAndControlsCard';

const userInfoAndControlsCardData = [
  {
    avatarSrc: '/assets/broker/user.png',
    username: 'Lorem Ipsum',
    date: 'Nov 29',
    text: 'What was something unexpected that you found in your new home from the previous owner?',
    numAnswers: `${5} answers`,
  },
  {
    avatarSrc: '/assets/broker/user.png',
    username: 'Lorem Ipsum',
    date: 'Nov 29',
    text: 'What was something unexpected that you found in your new home from the previous owner?',
    numAnswers: `${5} answers`,
  },
  {
    avatarSrc: '/assets/broker/user.png',
    username: 'Lorem Ipsum',
    date: 'Nov 29',
    text: 'What was something unexpected that you found in your new home from the previous owner?',
    numAnswers: `${5} answers`,
  },
];
const MyQuestions = () => {
  return (
    <>
      <SearchFilter addBtn />
      <MyQuestionsMyAnswersBtn />
      {userInfoAndControlsCardData.map((user, index) => (
        <UserInfoAndControlsCard {...user} key={index} />
      ))}
    </>
  );
};

export default MyQuestions;
