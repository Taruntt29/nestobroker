import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

const LoginUser = () => {
  return (
    <Container fluid className="bg-pattens-blue py-4 login__user">
      <h1 className="fw-bold text-center mb-3">Login</h1>
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <Image
            src="/assets/profile.svg"
            fluid
            className="rounded user-img"
            alt="profile"
          />
          <Figure.Caption className="text-center mb-0">
            Login as a DSA
          </Figure.Caption>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
