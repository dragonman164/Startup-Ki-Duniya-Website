import { Card, Row, Col } from "react-bootstrap";
const ApplicationStatusCard = (props) => {
  let color = "success";
  let input_color = "#ffffff";
  if (props.status === "Accepted") {
    color = "success";
    input_color = "#93D3A2";
  } else if (props.status === "Rejected") {
    color = "danger";
    input_color = "#ED9AA2";
  } else {
    color = "warning";
    input_color = "#FFE595";
  }

  return (
    <>
      <Card className={`mx-5 my-5 text-dark border border-${color}`}>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Card.Title>
                <h4 className="font-weight-bold">Company Name :</h4>
                <h4>{props.company}</h4>
              </Card.Title>
            </Col>
            <Col sm={6}>
              <div>
                <h4 className="font-weight-bold">Status:</h4>
                <h4>
                  <input
                    type="color"
                    disabled
                    style={{ border: "none" }}
                    value={input_color}
                  />
                  {props.status}
                </h4>
              </div>
            </Col>
          </Row>
          <Card.Subtitle className="font-weight-bold my-3">
            {/* <h4 className="font-weight-bold">
              Application Status: {props.status}
            </h4> */}
          </Card.Subtitle>
          <Card.Text className="font-weight-bolder">
            <h5 className="font-weight-bold">Job Title : {props.title}</h5>
            <h5 className="font-weight-bold">
              You may contact the following Records for More Details:
            </h5>
            <h5> Email Id : {props.email}</h5>
            <h5> Phone Number : {props.contact}</h5>
          </Card.Text>
          {/* <Button
            variant="danger"
            className="btn btn-lg"
            onClick={() => {
              props.rem(props.id);
            }}
          >
            Withdraw your Application
          </Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ApplicationStatusCard;
