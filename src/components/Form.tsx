import { Button, Col, Form, Row } from "react-bootstrap";
import { usePaymentInputs } from "react-payment-inputs";

function FormPage() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  return (
    <>
      <div>
        <Col>
          <h6 id="logo">
            AceCoin<span className="thin">Pay</span>
          </h6>
        </Col>
      </div>
      <Form>
        <Form.Group>
          <Form.Label>
            <h6>Card Number</h6>
            <p>Enter the 16-digit card number on the card</p>
          </Form.Label>
          <Form.Control
            required
            {...getCardNumberProps()}
          />
        </Form.Group>

        <Form.Group className="verifiers">
          <Row>
            <Col>
              <Form.Label>
                <h6>CVC Number</h6>
                <p>Enter the 3 or 4 digit number on the card</p>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control required {...getCVCProps()} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>
                <h6>Expiry Date</h6>
                <p>Enter the expiration date of the card</p>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control required {...getExpiryDateProps()} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>
                <h6>Password</h6>
                <p>Enter your dynamic password</p>
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row className="submit-btn">
        <Button size="lg">Pay Now</Button>
        </Row>
      </Form>
    </>
  );
}

export default FormPage;
