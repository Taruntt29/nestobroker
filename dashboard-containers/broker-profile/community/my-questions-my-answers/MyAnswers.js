import MyQuestionsMyAnswersBtn from './MyQuestionsMyAnswersBtn';
import SearchFilter from '../../../../../components/search-filter/SearchFilter';
import UserInfoAndControlsCard from '../user-info-and-controls/UserInfoAndControlsCard';
import UserInfoAndControlsAnswersCard from '../user-info-and-controls-answers-card/UserInfoAndControlsCard';

const userInfoAndControlsCardData = [
  {
    avatarSrc: '/assets/broker/user.png',
    username: 'Lorem Ipsum',
    date: 'Nov 29',
    text: 'What was something unexpected that you found in your new home from the previous owner?',
    numAnswers: `${5} answers`,
    answers: [
      {
        avatarSrc: '/assets/broker/user-ans.png',
        username: 'Rashi',
        time: '9m',
        text: 'What was something unexpected that you found in your new home from the previous owner?',
      },
    ],
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
    answers: [
      {
        avatarSrc: '/assets/broker/user-ans.png',
        username: 'Rashi',
        time: '9m',
        text: 'What was something unexpected that you found in your new home from the previous owner?',
      },
    ],
  },
];

const MyAnswers = () => {
  return (
    <>
      <SearchFilter addBtn />
      <MyQuestionsMyAnswersBtn />
      {userInfoAndControlsCardData.map((user, index) => (
        <UserInfoAndControlsCard {...user} key={index}>
          {user?.answers &&
            user.answers.map((ans, index) => (
              <UserInfoAndControlsAnswersCard key={index} {...ans} />
            ))}
        </UserInfoAndControlsCard>
      ))}
    </>
  );
};

export default MyAnswers;
