import { Col, Container, Row } from "react-bootstrap";
import { FormPage, Data } from "../components";

const Main = () => {
  return (
    <Container fluid="md">
      <Row>
    <Col xs={12} sm={12} md={5} lg={6}>
        <FormPage />
    </Col>
    <Col xs={12} sm={12} md={7} lg={6}>
        <Data/>
    </Col>
      </Row>
    </Container>
  );
};

export default Main;
