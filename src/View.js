import React from "react";

const View = ({ employee }) => {
  return employee.map((employee) => (
    <div className="container">
      <hr></hr>
      <p>name={employee.name}</p>
      <p>designation={employee.designation}</p>
      <p>number={employee.number}</p>
      <p>skills={employee.skills}</p>
      <p>Date of birth={employee.dob}</p>
    </div>
  ));
};

export default View;
