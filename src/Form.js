import React, { useEffect, useState } from "react";
import View from "./View";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("employee");
  console.log(JSON.parse(data));
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export const Form = () => {
  const [employee, setEmployee] = useState(getDataFromLocalStorage());

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [number, setNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [dob, setDob] = useState("");

  const PostData = (e) => {
    e.preventDefault();

    let employeeObject = {
      name,
      designation,
      number,
      skills,
      dob,
    };
    console.log(number);
    if (number.length > 10) {
      alert("enter valid phone number");
      return;
    } else if (!number.match("[0-9]{10}")) {
      alert("Enter valid phone number no aplabets are used");
      return;
    }

    setEmployee([...employee, employeeObject]);
    setName("");
    setDesignation("");
    setNumber("");
    setSkills("");
    setDob("");
  };

  console.log(employee);
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employee));
  }, [employee]);

  const downloadJSON=()=>{
    const data = JSON.stringify(JSON.parse(localStorage.getItem("employee")));
    console.log(data)
    const a= document.createElement("a");
    const file = new Blob([data] , {type: "text/plian"});
    a.href = URL.createObjectURL(file);
    a.download = "data.json";
    a.click();


  }
  return (
    <>
      <h3 className="text-center font-weight-bold text-primary">
        Employee Data
      </h3>
      <div className="container jumbotron">
        <form onSubmit={PostData} autoComplete="off">
          <div className="row form-group ">
            <div className="col-sm">
              <label for="exampleFormControlInput1 font-weight-bold">
                Name
              </label>
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-sm"></div>
          </div>
          <div className="row form-group">
            <div className="col-sm">
              <label for="exampleFormControlInput1">Designation</label>
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                required
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div className="col-sm"></div>
          </div>
          <div className="row form-group">
            <div className="col-sm">
              <label for="exampleFormControlInput1">Contact Details</label>
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type"
              />
            </div>
            <div className="col-sm">
              {" "}
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm">
              <label for="exampleFormControlInput1">Skills</label>
            </div>
            <div className="col-sm">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="col-sm"></div>
          </div>
          <div className="row form-group">
            <div className="col-sm">
              <label for="exampleFormControlInput1">Date of Birth</label>
            </div>
            <div className="col-sm">
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="col-sm"></div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-4 ">
              Add Employee
            </button>
            <br />
            <button type="submit" className="btn btn-primary px-4">
              View Data
            </button>
          </div>
        </form>
      </div>

      {employee.length > 0 && (
        <>
          <div className="container jumbotron">
            <View employee={employee}></View>
          </div>
        </>
      )}
      <div className="text-center">
            <button type="submit" onClick={downloadJSON} className="btn btn-primary mb-4 ">
            Download JSON
            </button>
          
          </div>
    </>
  );
};

export default Form;
