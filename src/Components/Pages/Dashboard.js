import { Table, ProgressBar, Button } from "react-bootstrap";
import { useState } from "react";
import UserProfileModal from "../UserProfileModal";
import { Row, Col } from "react-bootstrap";
let name = "";
let email = "";
let phone = "";
let field = "";
let description = "";
let techSkills = [];
let nontechSkills = [];
let education = [];

let programmingLanguages = [];

const Dashboard = () => {
  const [updatePage, setUpdatePage] = useState(true);

  function updateDashBoard(
    newname,
    newemail,
    newphone,
    newfield,
    newDescription,
    newTechSkills,
    newnontechSkills,
    newEducation,
    newProgrammingLanguages
  ) {
    name = newname;
    email = newemail;
    phone = newphone;
    field = newfield;
    description = newDescription;
    techSkills = newTechSkills;
    nontechSkills = newnontechSkills;
    education = newEducation;
    programmingLanguages = newProgrammingLanguages;
    setUpdatePage((prev) => !prev);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <h1 className="text-center my-3">Profile/Resume</h1>
      <UserProfileModal
        update={updateDashBoard}
        show={show}
        handleClose={handleClose}
      />
      <div className="container shadow-lg text-dark my-3 py-3">
        <div className="p-4">
          {" "}
          <Row>
            <Col sm={5}>
              <p>
                <h4>
                  Name:{" "}
                  {name !== "" ? (
                    <input
                      type="text"
                      value={name}
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                    />
                  ) : (
                    <p></p>
                  )}
                </h4>
              </p>
            </Col>
            <Col sm={7}>
              <p>
                <h4>
                  Email:{" "}
                  {email !== "" ? (
                    <input
                      type="text"
                      value={email}
                      disabled
                      style={{
                        width: "80%",
                        border: "none",
                        backgroundColor: "white",
                      }}
                    />
                  ) : (
                    <p></p>
                  )}
                </h4>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={5}>
              {" "}
              <p>
                <h4>
                  Contact:{" "}
                  {phone !== "" ? (
                    <input
                      type="text"
                      value={phone}
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                    />
                  ) : (
                    <p></p>
                  )}
                </h4>
              </p>
            </Col>
            <Col sm={7}>
              {" "}
              <p>
                <h4>
                  Field of Expertise:{" "}
                  {field !== "" ? (
                    <input
                      type="text"
                      value={field}
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                    />
                  ) : (
                    <p></p>
                  )}
                </h4>
              </p>
            </Col>
          </Row>
        </div>
        {/* {name === "" ? <h1>Name</h1> : <h1>{name}</h1>}{" "} */}
        {/* {email === "" ? <h3>Email</h3> : <h1>{email}</h1>} */}
        {/* {phone === "" ? <h3>Phone</h3> : <h1>{phone}</h1>} */}

        {/* <h6 className="my-3">Field of Expertise : {field}</h6> */}
        <div className="p-4">
          <h4> Education </h4>
          <Table
            // striped
            bordered
            hover
            variant="light"
            className="table-responsive-md "
          >
            <thead style={{ backgroundColor: "#E2E3E5" }}>
              <tr>
                <th>Year</th>
                <th>Degree/Examination</th>
                <th>Institution/Board</th>
                <th>CGPA/%</th>
              </tr>
            </thead>
            <tbody>
              {education.map((elem) => {
                return (
                  <tr>
                    <td>{elem.Year}</td>
                    <td>{elem.Exam}</td>
                    <td>{elem.Board}</td>
                    <td>{elem.Marks}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="p-4">
          <h4>Description : </h4>
          <p className="h6">{description}</p>
        </div>

        <div className="p-4">
          {" "}
          <h4>Programming Languages: </h4>
          <ol className="h5">
            {programmingLanguages.map((elem) => {
              return (
                <li className="my-2" style={{ width: "50%" }}>
                  {elem.language}
                  <ProgressBar
                    variant="info"
                    animated
                    now={elem.rating}
                    className="my-2"
                  />
                </li>
              );
            })}
          </ol>
        </div>

        <div className="p-4">
          <h4>Techincal Skills:</h4>
          <ol className="h5 ">
            {techSkills.map((elem) => {
              return <li>{elem}</li>;
            })}
          </ol>
        </div>
        <div className="p-4">
          <h4>Non Techincal Skills:</h4>
          <ol className="h5 ">
            {nontechSkills.map((elem) => {
              return <li>{elem}</li>;
            })}
          </ol>
        </div>
        <div className="p-4">
          <Button
            variant="outline-info btn-lg"
            className="text-dark mt-4 mb-4  p-3"
            style={{
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
            onClick={() => {
              setShow(true);
            }}
          >
            Click Here to make Changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
