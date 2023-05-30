import { Col, Container, Row } from "react-bootstrap";
import { FormPage, Data } from "../components";

const Main = () => {
  return (
    <Container>
      <Row>
    <Col xs={12} md={8}>
        <FormPage />
    </Col>
    <Col xs={12} md={4}>
        <Data/>
    </Col>
      </Row>
    </Container>
  );
};

export default Main;
