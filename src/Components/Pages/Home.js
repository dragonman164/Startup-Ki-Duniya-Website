import { Modal, Button } from "react-bootstrap";
import UserApplyCard from "../UserApplyCard";
import { useState } from "react";

let CompanyApplyDetails = [
  {
    id: 4,
    company: "checker",
    status: "In Review",
    email: "abc@gmail.com",
    contact: "1234567890",
    title: "Computer Scientist",
  },
  {
    id: 5,
    company: "XYZ",
    status: "In Review",
    email: "abc@gmail.com",
    contact: "1234567890",
    title: "Computer Scientist",
  },
];

const ApplicationStatusModal = (props) => {
  const [update, setUpdate] = useState(false);
  function addCompany(elem) {
    //CompanyDetails.push(elem);
    setUpdate((prev) => !prev);
  }
  // eslint-disable-next-line
  const [change, makeChange] = useState(false);

  function removefromCompany(id) {
    let elem = CompanyApplyDetails.find((elem) => elem.id === id);
    addCompany(elem);
    CompanyApplyDetails = CompanyApplyDetails.filter((elem) => elem.id !== id);
    makeChange((prev) => !prev);
  }

  return (
    <p>
      {CompanyApplyDetails.map((elem) => {
        return (
          <UserApplyCard
            id={elem.id}
            key={elem.id}
            name={elem.company}
            title={elem.title}
            email={elem.email}
            phone={elem.contact}
            changeList={removefromCompany}
          />
        );
      })}
    </p>
  );
};

export default ApplicationStatusModal;
