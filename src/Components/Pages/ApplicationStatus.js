import ApplicationStatusCard from "../ApplicationStatusCard";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ApplicationStatusModal from "../ApplicationStatusModal";
let CompanyDetails = [
  {
    id: 1,
    company: "abc",
    status: "Accepted",
    email: "abc@gmail.com",
    contact: "1234567890",
    title: "Computer Scientist",
  },
  {
    id: 2,
    company: "abc",
    status: "Rejected",
    email: "abc@gmail.com",
    contact: "1234567890",
    title: "Computer Scientist",
  },
  {
    id: 3,
    company: "abc",
    status: "In Review",
    email: "abc@gmail.com",
    contact: "1234567890",
    title: "Computer Scientist",
  },
];

const ApplicationStatus = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line
  const [update, setUpdate] = useState(false);

  function addCompany(elem) {
    CompanyDetails.push(elem);
    setUpdate((prev) => !prev);
  }
  function removeCompany(id) {
    CompanyDetails = CompanyDetails.filter((elem) => elem.id !== id);
    setUpdate((prev) => !prev);
  }

  return (
    <>
      <ApplicationStatusModal
        show={show}
        handleClose={handleClose}
        apply={CompanyDetails}
        add={addCompany}
      />
      <div className="container shadow-lg text-dark py-5 my-5 p-5" >
        <h1>You Have Applied for Following Companies:</h1>
        {CompanyDetails.map((elem) => {
          return (
            <ApplicationStatusCard
              id={elem.id}
              key={elem.id}
              company={elem.company}
              status={elem.status}
              email={elem.email}
              contact={elem.contact}
              title={elem.title}
              rem={removeCompany}
            />
          );
        })}

        <Button
          variant="primary"
          className="btn-lg font-weight-bold mx-5 my-3"
          onClick={() => {
            handleShow();
          }}
        >
          Click Here to Apply for Available Companies
        </Button>
      </div>
    </>
  );
};

export default ApplicationStatus;
