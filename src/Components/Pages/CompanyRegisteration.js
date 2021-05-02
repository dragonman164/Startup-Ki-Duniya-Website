import { Form, Button, Col } from "react-bootstrap";
import { useState } from "react";
import Alert from "../AlertBox";

const CompanyRegisteration = () => {
  const [show, setShow] = useState(false);
  const text =
    "You Have Successfully Registered your self for the Startup ki Duniya Portal";
  return (
    <>
      <Alert show={show} setShow={setShow} text={text} />
      <div className="container ">
        <h3>Enter the following details to register</h3>
        <Form>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Name of Startup</Form.Label>
            <Form.Control placeholder="Enter Name of the startup" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control placeholder="Enter Contact Number" type="contact" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>College Name</Form.Label>
            <Form.Control placeholder="Enter your college name" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CompanyRegisteration;
