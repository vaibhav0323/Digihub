import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const BadgeDetails = () => {
    const [badgeData, setBadgeData] = useState(null);

    const { id } = useParams();
    const { apiUrl } = app_config;

    const getBadgeById = async () => {
        const response = await fetch(apiUrl + `/badge/getbyid/${id}`);
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        setBadgeData(data);
    };

    useEffect(() => {
        getBadgeById();
    }, []);

    
    const displayBadgeData = () => {
        if (badgeData !== null) {
            return (
                <div className="row h-auto mt-5 mb-4 me-0">
                    <div className="col-md-4 me-4  d-flex align-item-start justify-content-center ">
                        <img src={apiUrl + '/' + badgeData.icon} height={450}></img>
                    </div>
                    <div className="col-md-6 mx-5">
                        <div className="row">
                            <h1>{badgeData.title}</h1>
                            <h5>
                                <i>issued by Digipodium</i>
                            </h5>
                        </div>
                        <div className="d-flex align-item-center justify-content-start mt-4">
                            <p>
                                {badgeData.description}
                            </p>
                        </div>

                        <div className="d-flex-column align-item-center justify-content-start mt-4 ">
                            <h4>Skills</h4>
                            <div className="d-flex align-item-center justify-content-start mt-4">

                                {badgeData.skills.map((skill) => {
                                    return (
                                        
                                            <span className="border border-primary fw-medium w-auto m-1  p-2">
                                            {skill}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="d-flex align-item-center justify-content-start mt-5">
                            <i class="fas fa-chalkboard fa-2x me-3"></i>
                            <p>
                                {/* {badgeData.description} */}
                                <h4>3 months required for the completion</h4>
                            </p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Loading...</h1>;
        }
    };

    return (
        <div>
            <div className="container">
                {displayBadgeData()}
            </div>
        </div>
    );
};

export default BadgeDetails;

{
    /* <a class="ripple" data-lgb-ripple-duration="3s" href="#!">
    <img alt="Los Angeles Skyscrapers" class="img-fluid rounded" src="https://lgbcdn.b-cdn.net/img/new/standard/city/043.webp"/>
  </a>
  
        <button
    type="button"
    data-lgb-ripple-centered="true"
    data-lgb-ripple-duration="3s"
    data-lgb-ripple-color="red"
    className="btn  btn-lg">
    Centered ripple
  </button>
  
  
  
  <span className='ripple' data-lgb-ripple-duration="3s"
    data-lgb-ripple-color="red"
    data-lgb-ripple-centered="true">
      <img src='/images/sign2.png'></img>
  </span>
  */
}
