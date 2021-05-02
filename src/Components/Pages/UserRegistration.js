import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Alert from "../AlertBox";

const UserRegistration = () => {
  const [show, setShow] = useState(false);
  const text =
    "You Have Successfully Registered your self for the Startup ki Duniya Portal";

  return (
    <>
      <Alert show={show} setShow={setShow} text={text} />

      <div className="container bg-dark text-light my-5 py-3">
        <h2>Welcome to Startup ki Duniya ka Portal User!!</h2>
        <h4>We require Following Details from you:</h4>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="For eg: abc@gmail.com" />
          </Form.Group>

          <Form.Group controlId="occupation">
            <Form.Label>Your Current Expertise</Form.Label>
            <Form.Control type="text" placeholder="For Eg: Computer Science" />
          </Form.Group>
          <Form.Group controlId="City">
            <Form.Label>Your Current City</Form.Label>
            <Form.Control type="text" placeholder="For Eg: New Delhi" />
          </Form.Group>
          <Form.Group controlId="State">
            <Form.Label>Your Current State</Form.Label>
            <Form.Control type="text" placeholder="For Eg: Punjab" />
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="For Eg: 53" />
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
              <option>TranGender</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="retypepassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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

export default UserRegistration;
