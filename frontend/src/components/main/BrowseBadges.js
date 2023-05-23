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
    console.log(data);
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
      masterList.filter((badge) =>
        badge.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const displayBadges = () => {
    return badgeList.map((badge) => (
      <div className="col-md-3 mb-3">
        <div className="my-3 my-lg-0 me-lg-3 carts">
          <div
            className="bg-image hover-overlay d-flex align-item-center justify-content-center ripple"
            data-lgb-ripple-color="dark"
          >
            <img
              height={300}
              src={
                badge.icon
                  ? apiUrl + "/" + badge.icon
                  : "/images/reactBadge.png"
              }
              // className="img-fluid"
              alt=""
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
          </div>
          <div className="p-4">
            <h5 className="card-title">{badge.title} </h5>
            <p className="card-text">
              Data science is the study of data to extract meaningful insights
              for business. It is a multidisciplinary approach that combines
              principles and practices from the fields of mathematics,
              statistics, artificial intelligence, and computer engineering to
              analyze large amounts of data.
            </p>
            <Link
              to={"/main/badgeDetails/" + badge._id}
              className="btn btn-link"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <header>
        <div className="container py-5" >
          <h3 style={{ color: "black" }}>Search Badges Here...</h3>
          <div className="input-group mb-3 ">
            <input className="form-control badgeSearch" onChange={searchBadge} />
            <span className="input-group-text" id="basic-addon1">
              <i class="fas fa-magnifying-glass "></i>
            </span>
          </div>

        </div>
      </header>
      <div className="container my-5 d-lg-flex">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">{displayBadges()}</div>
        )}
      </div>
    </div>
  );
};

export default BrowseBadges;
