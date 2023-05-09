import React, { useEffect, useState } from "react";
import IssueBadges from "./IssueBadges";

const StudentData = () => {
  const [studentList, setStudentList] = useState([]);
  const [selStudent, setSelStudent] = useState(null);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/student/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setStudentList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="tab2 p-md-3">
        <>
  {/* Button trigger modal */}
  
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">{
          selStudent !==null && (
            <IssueBadges studentData={selStudent} />
            )
        }</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-mdb-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</>

      <h1 className="container-fluid text-center badgeHeading2"> Manage Student Data</h1>
      <hr />
      <table className="table container-fluid badgeTable2 " >
        <thead className="fs-6 headBlock2">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mother Name</th>
            <th>Father Name</th>
            <th>Course</th>
            <th>Gender</th>
            <th>college</th>
            <th>D.O.B</th>
            <th>Contact</th>
            <th>Pincode</th>
            <th>Email</th>
            <th>Manage Badge</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="bodyBlock2">
          {studentList.map((student) => (
            <tr>
              <td>{student._id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.motherName}</td>
              <td>{student.fatherName}</td>
              <td>{student.course}</td>
              <td>{student.maleGender}</td>
              <td>{student.college}</td>
              <td>{student.dob}</td>
              <td>{student.contact}</td>
              <td>{student.pincode}</td>
              <td>{student.email}</td>
              <td>
              <button
    type="button"
    className="btn btn-primary"
    data-mdb-toggle="modal"
    data-mdb-target="#exampleModal"
    onClick={e => setSelStudent(student)}
  >
    Issue Badge
  </button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
