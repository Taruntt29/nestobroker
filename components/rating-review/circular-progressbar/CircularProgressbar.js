import { CircularProgressbar } from 'react-circular-progressbar';
import CircularProgressbarText from './circular-progressbar-text/CircularProgressbarText';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgressbar.css';

const CustomCircularProgressbar = ({ value, text }) => {
  const ratingValue = parseFloat(value);
  const progressValue = ratingValue * 20;
  return (
    <div className="circular__progressbar d-flex align-items-center gap-2">
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar value={progressValue} text={text} />
      </div>
      <CircularProgressbarText />
    </div>
  );
};

export default CustomCircularProgressbar;
