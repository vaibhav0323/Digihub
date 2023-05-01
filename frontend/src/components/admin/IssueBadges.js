import React, { useState, useEffect } from "react";
import app_config from "../../config";

const IssueBadges = ({ studentData }) => {
  const [badgeList, setBadgeList] = useState([]);
  const {apiUrl} = app_config;

  const fetchUserData = async () => {
    const res = await fetch(apiUrl+"/badge/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBadgeList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateStudentData = async (badgeId) => {
    const res = await fetch(apiUrl+"/user/addBadge", {
      method: "PUT",
      body: JSON.stringify({badges : badgeId}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
    }
  }

  const displayBadges = () => {
    return badgeList.map((badge) => {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={badge.badgeImage}
            className="card-img-top"
            alt="..."
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{badge.badgeName}</h5>
            <p className="card-text">{badge.badgeDescription}</p>
            <a href="#" className="btn btn-primary">
              Issue Badge 
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">{displayBadges()}</div>
      </div>
    </div>
  );
};

export default IssueBadges;
