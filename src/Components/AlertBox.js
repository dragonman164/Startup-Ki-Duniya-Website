import { Button, Alert } from "react-bootstrap";

const AlertBox = (props) => {
  return (
    <>
      <Alert show={props.show} variant="success">
        <Alert.Heading>Congratulations!!!</Alert.Heading>
        <p>{props.text}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => props.setShow(false)}
            variant="outline-success"
          >
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default AlertBox;
