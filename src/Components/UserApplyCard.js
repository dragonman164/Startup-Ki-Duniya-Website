import { Card, Button } from "react-bootstrap";

const UserApplyCard = (props) => {
  return (
    <Card className="bg-white mx-5 my-5 text-dark">
      <Card.Body>
        <Card.Title>
          <h5 className="font-weight-bold">Company Name : {props.name}</h5>
        </Card.Title>
        <Card.Subtitle className="font-weight-bold my-3"></Card.Subtitle>
        <Card.Text className="font-weight-bolder">
          <p>Job Title : {props.title} </p>
          <p>You may contact the following Records for more Details: </p>
          <p> Email Id : {props.email}</p>
          <p>Phone Number : {props.phone}</p>
          <Button
            variant="success"
            onClick={() => {
              props.changeList(props.id);
            }}
          >
            Apply
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserApplyCard;
