import { Form, Col, Button } from "react-bootstrap";

const CompanyDashboard = () => {
  return (
    <>
      <h3 className="text-center">
        Enter the following details to post an Internship
      </h3>
      <Form className="container">
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Job Position</Form.Label>
          <Form.Control placeholder="Enter position you are hiring for" />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control type="name" placeholder="Enter location of the work" />
        </Form.Group>

        <Form.Group controlId="formGridNumber">
          <Form.Label>Skills Required</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Skills required"
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Responsibilities of the Candidate</Form.Label>
          <Form.Control as="textarea" placeholder="Enter Responsibilities" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Benifits for the Candidate</Form.Label>
          <Form.Control placeholder="Enter Perks for the Candidate" />
        </Form.Group>

        <Button className="btn-lg mb-5" variant="primary" type="submit">
          Post Internship
        </Button>
      </Form>
    </>
  );
};

export default CompanyDashboard;
