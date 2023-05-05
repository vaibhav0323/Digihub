import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { Link } from "react-router-dom";

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

  return (
    <div className="tab">
      <p className="display-4 text-center"> Manage Badge Data</p>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Title</th>
            <th>Course</th>
            <th>Description</th>
            <th>Icon</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {badgeList.map((badge) => (
            <tr>
              <td>
                <img style={{width: '50px'}} src={apiUrl+'/'+badge.icon} alt="" />
              </td>
              <td>{badge.title}</td>
              <td>{badge.course}</td>
              <td>{badge.description}</td>
              <td>{badge.icon}</td>
              <td>{new Date(badge.createdAt).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-danger"><i class="fas fa-trash-alt    "></i></button>
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
