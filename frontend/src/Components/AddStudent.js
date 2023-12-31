import React, { useState,useEffect } from "react";
import axios from "axios";

function AddStudent() {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px", // Set your desired maximum width
    margin: "auto", // Center the form
  };

  const mb3Style = {
    marginBottom: "10px", // Adjust the spacing between elements
  };

  const headingStyle1 = {
    color: "blue",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
 

  function senddata(e) {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };
    axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
      alert("Student Added")
    }).catch((err)=>{
      alert(err)
    })
  }



  return (
    <div style={formStyle}>
      <form onSubmit={senddata}>
        <div style={headingStyle1}>Add a Student</div>

        <div className="mb-3" style={mb3Style}>
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            className="form-control"
            id="name"
            placeholder="Enter First & Last Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3" style={mb3Style}>
          <label for="age" className="form-label">
            Age
          </label>
          <input
            className="form-control"
            id="age"
            placeholder="Enter Student age(6-18)"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3" style={mb3Style}>
          <label for="age" className="form-label">
            Gender
          </label>
          <input
            className="form-control"
            id="gender"
            placeholder="Enter Student Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      

    </div>
  );
}
export default AddStudent;
