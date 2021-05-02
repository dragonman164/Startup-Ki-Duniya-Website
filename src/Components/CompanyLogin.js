import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import AlertBox from "./AlertBox";

const CompanyLoginModal = (props) => {
  const [show, setShow] = useState(false);
  const text =
    "You Have Successfully Logged In into the Startup Ki Duniya Portal";

  return (
    <>
      <AlertBox show={show} setShow={setShow} text={text} />
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="my-3">Welcome Back! </h5>
          <Form>
            <Form.Group controlId="userid">
              <Form.Label>Email-Id</Form.Label>
              <Form.Control type="email" placeholder="Enter Email-id" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                setShow(true);
                props.handleClose();
              }}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Are you new here?</p>
          <Link to="/companyregistration">
            <Button
              variant="warning btn-lg font-weight-bold"
              onClick={props.handleClose}
            >
              Create New Account
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompanyLoginModal;
