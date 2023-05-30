import { Card, Col, Row } from "react-bootstrap";
import { IoReceiptOutline, IoWifiOutline } from "react-icons/io5";
import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard, SiApple } from "react-icons/si";
import { BsDot } from "react-icons/bs";
//IoReceiptOutline

function Data() {
  return (
    <section>
      <Card className="card">
        <Row className="card-properties">
          <Col className="text-start">
            <span className="chip">
              <FcSimCardChip />
            </span>
          </Col>
          <Col className="text-end">
            <span className="wifi">
              <IoWifiOutline />
            </span>
          </Col>
        </Row>

        <Card.Text className="card-details name text-center">
          Jonathan Michael
        </Card.Text>
        <Card.Text className="card-details number text-center">
          <span>
            <span>
              <BsDot />
            </span>
            <span>
              <BsDot />
            </span>
            <span>
              <BsDot />
            </span>
            <span>
              <BsDot />
            </span>
            <span></span>
          </span>
          <span>3456</span>
        </Card.Text>
        <Row className="details date">
          <Col className="text-start">
            <Card.Text className="card-details date">09/22</Card.Text>
          </Col>
          <Col className="text-end">
            <span>
              <SiMastercard />
            </span>
            <small>mastercard</small>
          </Col>
        </Row>
      </Card>
      <Card>
        <Card.Body className="checkout">
          <Card.Text className="card-content">
            <Row>
              <Col>
                <span className="type">Company</span>
              </Col>
              <Col className="text-end">
                <span className="item">
                  <SiApple />
                  Apple
                </span>
              </Col>
            </Row>
          </Card.Text>
          <Card.Text className="card-content">
            <Row>
              <Col>
                <span className="type">Order Number</span>
              </Col>
              <Col className="text-end">
                <span className="item">1266201</span>
              </Col>
            </Row>
          </Card.Text>
          <Card.Text className="card-content">
            <Row>
              <Col>
                <span className="type">Product</span>
              </Col>
              <Col className="text-end">
                <span className="item">MacBook Air</span>
              </Col>
            </Row>
          </Card.Text>
          <Card.Text className="card-content">
            <Row>
              <Col>
                <span className="type">VAT(20%)</span>
              </Col>
              <Col className="text-end">
                <span className="item">$100.00</span>
              </Col>
            </Row>
          </Card.Text>
          <span className="border"></span>
          <Card.Text className="card-content">
            <Row>
              <Col className="type">
                <p>You have to pay</p>
                <span className="price">549</span>
                <span className="item">.99</span> USD
              </Col>
              <Col className="text-end">
                <span className="receipt">
                  <IoReceiptOutline />
                </span>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Data;
