import ApplicationStatusCard from "../ApplicationStatusCard";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ApplicationStatusModal from "./Home";
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
  // eslint-disable-next-line
  function removeCompany(id) {
    CompanyDetails = CompanyDetails.filter((elem) => elem.id !== id);
  }

  return (
    <>
      {/* <ApplicationStatusModal apply={CompanyDetails} add={addCompany} /> */}
      <h1 className="text-center">My Applications</h1>
      <div className="container shadow-lg text-dark py-5 my-5 p-5">
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
      </div>
    </>
  );
};

export default ApplicationStatus;
