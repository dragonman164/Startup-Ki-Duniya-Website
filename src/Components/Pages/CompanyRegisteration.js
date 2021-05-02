import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Alert from "../AlertBox";

const CompanyRegisteration = () => {
  const [show, setShow] = useState(false);
  const text =
    "You Have Successfully Registered your self for the Startup ki Duniya Portal";
  return (
    <>
      <Alert show={show} setShow={setShow} text={text} />

      <div className="container shadow-lg font-weight-bold text-dark my-5 py-3">
        <h2 className="text-center">We require Following Details from you:</h2>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company's Name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="For eg: abc@gmail.com" />
          </Form.Group>
          <Form.Group controlId="number">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="name" placeholder="e.g. 0000000000" />
          </Form.Group>
          <Form.Group controlId="college">
            <Form.Label>College Name</Form.Label>
            <Form.Control type="name" placeholder="e.g. Thapar" />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Company's Location</Form.Label>
            <Form.Control type="location" placeholder="For eg:Patiala" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="retypepassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="link">
            <Form.Label>Add link to one of the id-proof</Form.Label>
            <Form.Control type="link" placeholder="For eg: AadharCard" />
          </Form.Group>
          <Button
            variant="success"
            className="btn-lg"
            onClick={() => setShow(true)}
          >
            Register yourself
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CompanyRegisteration;
