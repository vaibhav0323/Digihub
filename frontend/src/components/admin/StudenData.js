import React, { useEffect, useState } from "react";
import IssueBadges from "./IssueBadges";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const deleteStudent = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/student/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      // alert("User Deleted Successfully");
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Student Deleted Successfully",
      });
    }
  };

  return (
    <div className="tab2 p-md-3">
      <div
        className="modal fade"
        id="showstudent"
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
            <div className="modal-body">...</div>
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

      <>
        {/* Button trigger modal */}

        {/* Modal */}
        <div
          className="modal modal-xl fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Issue Badges to {selStudent !== null && (selStudent.firstName + ' ' + selStudent.lastName)}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">

                <h5>Student Name : {selStudent.firstName}</h5>

                {selStudent !== null && (
                  <IssueBadges studentData={selStudent} />
                )}
              </div>
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

      <h1 className="container-fluid text-center badgeHeading2">
        {" "}
        Manage Student Data
      </h1>
      <hr />
      <table className="table container-fluid badgeTable2 ">
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
              <td>{student.gender}</td>
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
                  onClick={(e) => setSelStudent(student)}
                >
                  Issue Badge
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link className="btn btn-link" to="/"> <i class="fas fa-eye"></i> View</Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-mdb-toggle="modal"
                  data-mdb-target="#showstudent"
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
