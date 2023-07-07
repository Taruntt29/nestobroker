import { RiCheckLine } from 'react-icons/ri';
import { CustomModal } from '../../../../../components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SuccessModal = ({ show, onHide, path }) => {
  return (
    <CustomModal
      show={show}
      title="Book a Visit"
      border
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      size="md"
    >
      <div className="d-flex flex-column justify-content-center align-items-center nes__dashboard__modal__success py-5">
        <div className="nes__dashboard__modal__icon rounded rounded-circle d-flex">
          <RiCheckLine size={120} color="#ffffff" className="m-auto" />
        </div>
        <span className="mt-4">Successful</span>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print
        </p>

        {!path && (
          <Button className="mt-2 btn-color-primary rounded-pill btn-rounded w-100">
            Done
          </Button>
        )}

        {path && (
          <Button
            as={Link}
            to={path}
            className="mt-2 btn-color-primary rounded-pill btn-rounded w-100"
          >
            Done
          </Button>
        )}
      </div>
    </CustomModal>
  );
};

export default SuccessModal;
