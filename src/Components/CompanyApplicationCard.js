import { Card, Button } from "react-bootstrap";

const CompanyApplicationCard = (props) => {
  // let color = "success";

  return (
    <>
      <Card className={` mx-5 my-5 text-dark `}>
        <Card.Body>
          <Card.Title>
            <h3 className="font-weight-bold">Job Title: {props.jobtitle}</h3>
          </Card.Title>
          <Card.Subtitle className="font-weight-bold my-3">
            <h4 className="font-weight-bold">
              Number of Applicants: {props.noofapplicants}
            </h4>
          </Card.Subtitle>
          <Card.Text className="font-weight-bolder"></Card.Text>
          <Button className="btn-lg font-weight-bold mx-2 my-1">
            {" "}
            Withdraw post
          </Button>

          <Button className="btn-lg font-weight-bold mx-2 my-1">
            Review Applicants
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CompanyApplicationCard;
