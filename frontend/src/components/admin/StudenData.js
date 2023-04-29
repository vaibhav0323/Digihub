import React, { useEffect, useState } from 'react'

const StudentData = () => {

    const [studentList, setStudentList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/student/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setStudentList(data);
    }



    useEffect(() => {
        fetchUserData();

    }, [])
    
    return (
        <div className='tab'>
          <p className='display-4 text-center'> Manage user data</p>
          <hr/>
          <table className='table'>
            <thead>
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
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                    {
                        studentList.map( (student) => 
                        <tr>
                        <td>{student._id}</td>
                        <td>{student.firstName }</td>
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
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                        )
                    }
            </tbody>
          </table>
        </div>
      )
    }
    
    export default StudentData