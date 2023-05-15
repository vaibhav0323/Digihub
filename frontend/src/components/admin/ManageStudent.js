import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

const StudentSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  motherName: Yup.string().required("Required"),
  fatherName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  femaleGender: Yup.string().required("Required"),
  maleGender: Yup.string().required("Required"),
  otherGender: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  college: Yup.string().required("Required"),
  pincode: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  course: Yup.string().required("Required"),
});

const ManageStudent = () => {
  const studentForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      motherName: "",
      fatherName: "",
      address: "",
      gender: "male",
      email: "",
      college: "",
      pincode: "",
      dob: "",
      course: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      // return;
      const response = await fetch("http://localhost:5000/student/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
        validationSchema: StudentSchema,
      });

      console.log(response.status);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Badge Added Successfully!!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  });
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4 studentForm">
              <form onSubmit={studentForm.handleSubmit}>
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>

                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="">
                            <TextField
                              label="First Name"
                              type="text"
                              className="form-control  "
                              id="firstName"
                              value={studentForm.values.firstName}
                              onChange={studentForm.handleChange}
                              variant="outlined"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className=" ">
                            <TextField
                              label="Last Name"
                              type="text"
                              className="form-control  "
                              id="lastName"
                              value={studentForm.values.lastName}
                              onChange={studentForm.handleChange}
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className=" ">
                            <TextField
                              label="Mother's Name"
                              type="text"
                              className="form-control"
                              id="motherName"
                              value={studentForm.values.motherName}
                              onChange={studentForm.handleChange}
                              variant="outlined"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className=" ">
                            <TextField
                              label="Father's Name"
                              type="text"
                              className="form-control"
                              id="fatherName"
                              value={studentForm.values.fatherName}
                              onChange={studentForm.handleChange}
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div>
                          <TextField
                            label="Address"
                            id="address"
                            maxRows={4}
                            variant="outlined"
                            value={studentForm.values.address}
                            onChange={studentForm.handleChange}
                          />
                        </div>
                      </div>

                      {/* <div className="mb-4">
                        <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel
                              value="disabled"
                              disabled
                              control={<Radio />}
                              label="other"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div> */}

                      <div className="  mb-4">
                        <TextField
                          label="Email ID"
                          type="email"
                          className="form-control"
                          placeholder=""
                          id="email"
                          value={studentForm.values.email}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="mb-4">
                        <TextField
                          label="Contact"
                          type="text"
                          className="form-control"
                          placeholder=""
                          id="contact"
                          value={studentForm.values.contact}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="mb-4">
                        <TextField
                          label="Course"
                          type="text"
                          className="form-control  "
                          id="course"
                          value={studentForm.values.course}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="  mb-4">
                        <TextField
                          label="College or University"
                          type="text"
                          className="form-control  "
                          id="college"
                          value={studentForm.values.college}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="  mb-4">
                        <TextField
                          label="DOB"
                          type="text"
                          className="form-control  "
                          id="dob"
                          value={studentForm.values.dob}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="  mb-4">
                        <TextField
                          label="Pincode"
                          type="text"
                          className="form-control  "
                          id="pincode"
                          value={studentForm.values.pincode}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageStudent;
