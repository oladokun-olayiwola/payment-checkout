import { Col, Form } from "react-bootstrap";
import { usePaymentInputs } from "react-payment-inputs";


function FormPage() {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
      usePaymentInputs();


  return (
    <>
      <div>
        <Col>
          <h3>AceCoinPay</h3>
        </Col>
      </div>
      <Form>
        <Form.Group>
          <Form.Label>
            <h2>Card Number</h2>
            <p>Enter the 16-digit card number on the card</p>
          </Form.Label>
          <Form.Control required {...getCardNumberProps()} />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <h2>CVC Number</h2>
            <p>Enter the 3 or 4 digit number on the card</p>
          </Form.Label>
          <Form.Control required {...getCVCProps()} />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <h2>Expiry Date</h2>
            <p>Enter the expiration date of the card</p>
          </Form.Label>
          <Form.Control required {...getExpiryDateProps()} />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <h2>Password</h2>
            <p>Enter your dynamic password</p>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </>
  );
}

export default FormPage;
