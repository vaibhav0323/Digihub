import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BadgeData = () => {
  const [badgeList, setBadgeList] = useState([]);
  const {apiUrl} = app_config;

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/badge/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBadgeList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteBadge = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/badge/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Badge Deleted Successfully",
      });
    }
  };

  return (
    <div className="tab p-md-3">
      
      <h1 className="container-fluid text-center badgeHeading"> Manage Student Data</h1>
      <table  className="table container-fluid badgeTable ">
        <thead className="fs-4 headBlock">
          <tr>
            <th>Icon</th>
            <th>Title</th>
            <th>Course</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Remove</th>
            <th>View</th>
            
          </tr>
        </thead>
        <tbody className="bodyBlock">
          {badgeList.map((badge) => (
            <tr>
              <td>
                <img style={{width: '50px',borderRadius:'50px '}} src={apiUrl+'/'+badge.icon} alt="" />
              </td>
              <td>{badge.title}</td>
              <td>{badge.course}</td>
              <td>{badge.description.slice(0, 30)}...</td>
              <td>{new Date(badge.createdAt).toLocaleDateString()}</td>
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => deleteBadge(badge._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link className="btn btn-primary" to={'/main/badgeDetails/'+badge._id}>
                  <i class="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BadgeData;
