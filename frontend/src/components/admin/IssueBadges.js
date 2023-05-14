import React, { useState, useEffect } from "react";
import app_config from "../../config";

const IssueBadges = ({ studentData }) => {
  const [badgeList, setBadgeList] = useState([]);
  const { apiUrl } = app_config;

  const fetchUserData = async () => {
    const res = await fetch(apiUrl + "/badge/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBadgeList(data);
  };

  const checkBadgeAlreadyIssued = (badgeId) => {
    // if(!studentData) return false;
    return studentData.badges.find((badge) => badge._id === badgeId);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateStudentData = async (badgeId) => {
    const res = await fetch(apiUrl + "/student/addBadge/" + studentData._id, {
      method: "PUT",
      body: JSON.stringify({ badges: badgeId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
    }
  };

  const displayBadges = () => {
    return badgeList.map((badge) => {
      return (
        <div className="col-md-3">
          <div className="card mb-3" >
            <img
              src={
                badge.badgeImage ? badge.icon : "/images/badge_placeholder.png"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{badge.badgeName}</h5>
              <p className="card-text">{badge.badgeDescription}</p>
              <button
                disabled={checkBadgeAlreadyIssued(badge._id)}
                onClick={(e) => updateStudentData(badge._id)}
                className="btn btn-primary"
              >
                {checkBadgeAlreadyIssued(badge._id)
                  ? "Already Issued"
                  : "Issue"}
              </button>
            </div>
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
