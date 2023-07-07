import './Ribbon.css';

const Ribbon = ({ text, cssClass }) => {
  return (
    <div
      className={`${cssClass} orange d-flex justify-content-center align-items-center`}
    >
      {text}
    </div>
  );
};

export default Ribbon;
