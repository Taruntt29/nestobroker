import { Button, Container, Modal } from "react-bootstrap";

const AddRole = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
  };
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <br />
        <Container className="pt-1 pb-5 dashboard__wrapper">
          <h5>Add</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}> Property Manager</h5>
            </div>
          </Container>
          <br />
          <h5>Name</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}> Lorem Ipsum</h5>
            </div>
          </Container>
          <br />
          <h5>Email</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}> Lorem Ipsum</h5>
            </div>
          </Container>
          <br />
          <h5>Mobile Number</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}> Lorem Ipsum</h5>
            </div>
          </Container>
          <br />
          <h5>Select Properties</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}> Lorem Ipsum</h5>
            </div>
          </Container>
        </Container>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Button
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={submitHandler}
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default AddRole;
