import React, { useRef, useState } from "react";
import * as Yup from "yup";
import app_config from "../../config";
import { TextField } from "@mui/material";

const studentBadgeSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  id: Yup.string().required("Required"),
});

const DisplayStudentBadges = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const { apiUrl } = app_config;

  const stuId = useRef(null);

  const getStudentData = async () => {
    const response = await fetch(
      apiUrl + "/student/getbyid/" + stuId.current.value
    );
    const data = await response.json();
    console.log(data);
    setStudentDetails(data);
  };

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
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
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
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div div className="row">
                      <div className="col-md-12 mb-4">
                        <div className=" ">
                          <TextField
                            label="Student ID"
                            type="text"
                            ref={stuId}
                            className="form-control"
                            variant="outlined"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={getStudentData}
                        className="btn btn-primary btn-block mb-4"
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
