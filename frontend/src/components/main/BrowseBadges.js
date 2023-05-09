import React, { useEffect, useRef, useState } from "react";
import app_config from "../../config";
import { Link } from "react-router-dom";

const BrowseBadges = () => {
  const { apiUrl } = app_config;
  const [badgeList, setBadgeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [masterList, setMasterList] = useState([]);
  // const searchRef = useRef(null);

  const fetchBadgesData = async () => {
    setLoading(true);
    const response = await fetch(apiUrl + "/badge/getall");
    const data = await response.json();
    setBadgeList(data);
    setMasterList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBadgesData();
  }, []);

  const searchBadge = async (e) => {
    const searchValue = e.target.value;
    // const searchValue = searchRef.current.value;
    // if (searchValue === "") {
    //   setBadgeList(masterList);
    //   return;
    // }

    setBadgeList(
      masterList.filter((badge) => badge.title.includes(searchValue))
    );
  };

  const displayBadges = () => {
    return badgeList.map((badge) => (
      <div className="card w-lg-25 my-3 my-lg-0 me-lg-3 carts">
        <div
          className="bg-image hover-overlay  h-50 ripple"
          data-lgb-ripple-color="dark"
        >
          <img src={badge.icon ? (apiUrl+"/"+badge.icon) : '/images/badge_placeholder.png'} className="img-fluid" alt="" />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Data Science</h5>
          <p className="card-text">
            Data science is the study of data to extract meaningful insights for
            business. It is a multidisciplinary approach that combines
            principles and practices from the fields of mathematics, statistics,
            artificial intelligence, and computer engineering to analyze large
            amounts of data.
          </p>
          <Link to={"/main/badgeDetails/"+badge._id} className="btn btn-link">
            View Details
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <header>
        <div className="container py-5">
          <input className="form-control" onChange={searchBadge} />
        </div>
      </header>
      <div className="container my-5 d-lg-flex">
        { loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          ) : (
          displayBadges()
        )}
      </div>
    </div>
  );
};

export default BrowseBadges;
