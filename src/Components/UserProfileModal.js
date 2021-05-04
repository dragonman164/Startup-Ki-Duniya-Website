import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
let name = "";
let email = "";
let phone = "";
let field = "";
let description = "";
let techSkills = [];
let nontechSkills = [];
let programmingLanguages = [];
let educationDetails = [];
// let neweducationDetails=[];
const UserProfileModal = (props) => {
  // eslint-disable-next-line
  const [update, setupDate] = useState(false);
  const UpdateUserProfile = async () => {
    // console.log(educationDetails);

    await educationDetails.filter((user, i) => i != 0);
    // console.log(educationDetails);
    const user_data = {
      description: description,
      fieldOfExpertise: field,
      nonTechSkills: nontechSkills,
      techSkills: techSkills,
      programmingLanguages: programmingLanguages,
      educationDetails: educationDetails,
    };
    console.log(programmingLanguages);
    axios
      .post("http://localhost:5000/v1/userDashboard", user_data)
      .then((res) => {
        console.log(res.data);
      });
  };
  // useEffect(() => {
  // //  console.log(neweducationDetails);
  // }, [neweducationDetails])
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit your Profile Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                name = e.target.value;
              }}
              type="text"
              placeholder="Your Name"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => {
                email = e.target.value;
              }}
              type="email"
              placeholder="Your Email"
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => {
                phone = e.target.value;
              }}
              type="number"
              placeholder="Your Contact Details"
            />
          </Form.Group>

          <Form.Group controlId="field">
            <Form.Label>Field of Expertise</Form.Label>
            <Form.Control
              onChange={(e) => {
                field = e.target.value;
              }}
              type="text"
              placeholder="Eg: Computer Science"
            />
          </Form.Group>

          <h5>Add Education Details</h5>

          <Form.Group controlId="education">
            {educationDetails.map((elem, i) => {
              return (
                <div className="row my-2">
                  <div className="col-5">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        educationDetails[i].year = e.target.value;
                      }}
                      type="number"
                      placeholder="eg:2021"
                    />
                  </div>
                  <div className="col-5">
                    <Form.Label>Degree/Examination</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        educationDetails[i].degree = e.target.value;
                      }}
                      type="text"
                      placeholder="Exam"
                    />
                  </div>
                  <div className="col-5">
                    <Form.Label>Institution/Board</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        educationDetails[i].institution = e.target.value;
                      }}
                      type="text"
                      placeholder="Eg : CBSE"
                    />
                  </div>
                  <div className="col-5">
                    <Form.Label>CGPA/Marks</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        educationDetails[i].cgpa = e.target.value;
                      }}
                      type="text"
                      placeholder="Enter your Marks"
                    />
                  </div>
                </div>
              );
            })}
            <Button
              variant="success mx-2"
              onClick={() => {
                educationDetails.push({});
                setupDate((prev) => !prev);
              }}
            >
              Add More
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                educationDetails.pop();
                setupDate((prev) => !prev);
              }}
            >
              Delete
            </Button>
          </Form.Group>

          <h5> Add Programming Languages</h5>

          <Form.Group controlId="Programming">
            {programmingLanguages.map((elem, i) => {
              return (
                <div className="row my-2">
                  <div className="col-4">
                    <Form.Label>Prog Lang</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        programmingLanguages[i].proglang = e.target.value;
                      }}
                      as="select"
                      defaultValue="C++"
                    >
                      <option value="C++">C++</option>
                      <option value="Pyhton">Python</option>
                      <option value="JS">JS</option>
                      <option value="Java">Java</option>
                    </Form.Control>
                  </div>
                  <div className="col-4">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        programmingLanguages[i].rating = e.target.value;
                      }}
                      type="number"
                      placeholder="Eg: 69.26"
                    />
                  </div>
                  <div className="col-4"></div>
                </div>
              );
            })}

            <Button
              variant="success"
              className="btn-sm my-2"
              onClick={() => {
                programmingLanguages.push({
                  // "proglang": programmingLanguages[i].proglang,
                });
                setupDate((prev) => !prev);
              }}
            >
              Add More
            </Button>

            <Button
              variant="danger"
              className="btn-sm my-3 mx-2"
              onClick={() => {
                programmingLanguages.pop();
                setupDate((prev) => !prev);
              }}
            >
              {" "}
              Delete
            </Button>
          </Form.Group>

          <h5> Add your Techical Skills</h5>

          <Form.Group controlId="techskills" className="my-3">
            {techSkills.map((elem, i) => {
              return (
                <Form.Control
                  onChange={(e) => {
                    techSkills[i] = e.target.value;
                  }}
                  type="text"
                  placeholder="Skill"
                />
              );
            })}
            <Button
              variant="success"
              className="btn-sm my-2"
              onClick={() => {
                techSkills.push("");
                setupDate((prev) => !prev);
              }}
            >
              Add More
            </Button>

            <Button
              variant="danger"
              className="btn-sm my-3 mx-2"
              onClick={() => {
                techSkills.pop();
                setupDate((prev) => !prev);
              }}
            >
              {" "}
              Delete
            </Button>
          </Form.Group>

          <h5> Add your Non Techical Skills</h5>

          <Form.Group controlId="techskills" className="my-3">
            {nontechSkills.map((elem, i) => {
              return (
                <Form.Control
                  onChange={(e) => {
                    nontechSkills[i] = e.target.value;
                  }}
                  type="text"
                  placeholder="Skill"
                />
              );
            })}
            <Button
              variant="success"
              className="btn-sm my-2"
              onClick={() => {
                nontechSkills.push("");
                setupDate((prev) => !prev);
              }}
            >
              Add More
            </Button>

            <Button
              variant="danger"
              className="btn-sm my-3 mx-2"
              onClick={() => {
                nontechSkills.pop();
                setupDate((prev) => !prev);
              }}
            >
              {" "}
              Delete
            </Button>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => {
                description = e.target.value;
              }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>

        <p>Note : Please Fill your details very Carefully</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.update(
              name,
              email,
              phone,
              field,
              description,
              techSkills,
              nontechSkills,
              educationDetails,
              programmingLanguages
            );
            props.handleClose();
            UpdateUserProfile();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserProfileModal;
