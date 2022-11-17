import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddStudentForm(props) {
  const [studentData, setStudentData] = useState("");

  const navigate = useNavigate();

  const createNewUser = (event) => {
    event.preventDefault();

    setStudentData({
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      email: studentData.email,
      phoneNumber: studentData.phoneNumber,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(studentData);

    let requestOptionsPost = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/student/add", requestOptionsPost)
      .then((response) => response.json())
      .then((result) => console.log(result), navigate("../home"))
      .catch((error) => console.log("error", error));
  };

  const handleFirstName = (event) => {
    setStudentData({
      firstName: event.target.value,
      lastName: studentData.lastName,
      email: studentData.email,
      phoneNumber: studentData.phoneNumber,
    });
  };

  const handleLastName = (event) => {
    setStudentData({
      firstName: studentData.firstName,
      lastName: event.target.value,
      email: studentData.email,
      phoneNumber: studentData.phoneNumber,
    });
  };

  const handleEmail = (event) => {
    setStudentData({
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      email: event.target.value,
      phoneNumber: studentData.phoneNumber,
    });
  };

  const handlePhoneNumber = (event) => {
    setStudentData({
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      email: studentData.email,
      phoneNumber: event.target.value,
    });
  };

  return (
    <div className="addStudentDiv card">
        <div className="card-body">
        <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            onChange={handleFirstName}
          />
          <label for="exampleInputName1" class="form-label">
            Surname
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            onChange={handleLastName}
          />
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleEmail}
          />
          <label for="exampleInputPhone" class="form-label">
            Phone number
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPhone"
            onChange={handlePhoneNumber}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={createNewUser}>
          Create new student
        </button>
      </form>
        </div>
      
    </div>
  );
}

export default AddStudentForm;
