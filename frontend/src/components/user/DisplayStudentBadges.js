import React, { useRef, useState } from "react";
import * as Yup from "yup";
import app_config from "../../config";
import { TextField } from "@mui/material";

const studentBadgeSchema = Yup.object().shape({
  id: Yup.string().required("Required"),
});

const DisplayStudentBadges = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const { apiUrl } = app_config;
  const [stuId, setStuId] = useState('');

  const getStudentData = async () => {
    const response = await fetch(
      apiUrl + "/student/getbyid/" + stuId
    );
    const data = await response.json();
    console.log(data);
    setStudentDetails(data);
  };

  const displayBadges = (badgeList) => {
    return badgeList.map((badge) => (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <img src={apiUrl+'/'+badge.icon} />
            <h5 className="card-title">{badge.title}</h5>
            </div>
        </div>
      </div>

    ))
  }

  const displayStudentDetails = () => {
    if (studentDetails !== null) {
      return (
        <>
          <div className="row">
            <div className="col-md-6">
              <h3>Student Details</h3>
              <p>First Name: {studentDetails.firstName}</p>
              <p>Last Name: {studentDetails.lastName}</p>
              <p>Student ID: {studentDetails._id}</p>
            </div>
            <div className="col-md-6">
              <h3>Student Badges</h3>
              <div className="row">
                {displayBadges(studentDetails.badges)}
              </div>
              {/* <p>Badges: {studentDetails.badges}</p> */}
            </div>
          </div>
        </>
      );
    } else {
      <h1>Student Not Found</h1>;
    }
  };

  return (
    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                View & Verify Your <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  Digital Badges
                </span>
              </h1>
              <p
                className="mb-4 opacity-90"
                style={{ color: "hsl(218, 81%, 85%)" }}
              > Welcome to the digital realm where your achievements shine bright! Here,
                you can proudly showcase your hard-earned digital badges. These virtual
                accolades are a testament to your skills, knowledge, and accomplishments.
                Each badge represents a milestone in your journey, whether it's mastering 
                a new language, completing a challenging course, or exhibiting leadership 
                qualities. With a quick glance, you can witness the colorful array of badges
                that symbolize your dedication and expertise. Embrace the power of these digital
                badges and let them be a source of inspiration as you continue to explore and 
                grow in this dynamic digital world.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="">
                          <TextField
                            label="Student ID"
                            placeholder=""
                            type="text"
                            onChange={e => setStuId(e.target.value)}
                            value={stuId}
                            className="form-control"
                            variant="outlined"
                            color="warning"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={getStudentData}
                        className="btn btn-success btn-block mb-4"
                      >
                        See Your Badges
                      </button>
                      {/* Register buttons */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {displayStudentDetails()}
    </>
  );
};

export default DisplayStudentBadges;
