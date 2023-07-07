import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Fill } from "react-icons/ri";
import editbutton from "../../../Images/editbutton.png";
import AddRole from "./AddRole";
// import delete from "../../../Images/editbutton.png";

const ManageRole = (props) => {
  const [role, setRole] = useState(false);
  const onRole = () => {
    setRole((prev) => ({ ...prev, role: true }));
  };
  return (
    <>
      <Row className={props.className}>
        <Col>2111321321</Col>
        <Col>91-0000000000</Col>
        <Col>Lorem Ipsum</Col>

        <Col>Lorem Ipsum</Col>

        <Col className="d-flex justify-content-between">
          <Col onClick={onRole}>
            {" "}
            <img src={editbutton} alt="edit" />
            <AddRole show={role.role} onChange={setRole} />
          </Col>
          <Col>
            <RiDeleteBin6Fill />
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default ManageRole;
