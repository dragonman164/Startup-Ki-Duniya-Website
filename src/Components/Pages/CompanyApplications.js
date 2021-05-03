import CompanyApplicationCard from "../CompanyApplicationCard";
import { useState } from "react";

let CompanyDetails = [
  {
    id: 1,
    jobtitle: "SDE",
    noofapplicants: "10",
  },
  {
    id: 2,
    jobtitle: "SDE",
    noofapplicants: "10",
  },
  {
    id: 3,
    jobtitle: "SDE",
    noofapplicants: "10",
  },
];

const CompanyApplications = () => {
  const [update, setUpdate] = useState(false);
  function onWithdraw(key) {
    CompanyDetails = CompanyDetails.filter((item) => item.id !== key);
    setUpdate((prev) => !prev);
  }
  return (
    <>
      <h1 className="text-center">My Internships</h1>
      <div className="container text-dark shadow-lg py-5 my-5">
        {CompanyDetails.map((elem) => {
          return (
            <CompanyApplicationCard
              id={elem.id}
              jobtitle={elem.jobtitle}
              noofapplicants={elem.noofapplicants}
              onWithdraw={onWithdraw}
            />
          );
        })}
      </div>
    </>
  );
};

export default CompanyApplications;
