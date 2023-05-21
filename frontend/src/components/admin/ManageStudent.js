import React, { useState } from "react";
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
import app_config from "../../config";

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

  const [selGender, setSelGender] = useState('male');
  const { apiUrl } = app_config;

  const [selImage, setSelImage] = useState('');

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("myfile", file);
    setSelImage(file);
    fetch(apiUrl + "/util/uploadfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Image Uploaded Successfully!!",
          });
        }
      })
  }

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
      values.avatar = selImage.name;
      values.gender = selGender;
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
    <section className="h-100 mainReg">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col ">
            <div className="card card-registration my-4 studentForm">
              <form onSubmit={studentForm.handleSubmit}>
                <div className="row g-0">
                  <div className="col-xl-4 d-none d-xl-block leftPart">
                    <div className="mt-5 imgdiv">
                      <img
                        src="/images/reg1.png"
                        alt="Sample photo"
                        width={500}
                        className="img-fluid imgreg"
                      />
                    </div>

                    <div className="mt-md-5 textdiv">
                      <h3 className="mt-5">Welcome</h3>
                      <p className="fw-bold mt-4">Register, Learn, Succeed: Your Path to Achievement</p>
                    </div>

                  </div>

                  <div className="col-xl-8 rightpart">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-center">
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
                              color="secondary"
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
                              color="secondary"
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
                              color="secondary"
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
                              color="secondary"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div>
                          <TextField
                            fullWidth
                            label="Address"
                            id="address"
                            multiline
                            rows={2}
                            variant="outlined"
                            value={studentForm.values.address}
                            onChange={studentForm.handleChange}
                            color="secondary"
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="mb-4">
                            <FormControl>
                              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group" onChange={(e, v) => setSelGender(v)} value={selGender}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />

                              </RadioGroup>
                            </FormControl>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="#uploadimage" >Uplaod Imahe</label>
                          <input id="uploadimage" type="file" onChange={uploadImage} />
                        </div>
                      </div>


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
                          color="secondary"
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
                          color="secondary"
                        />
                      </div>

                      <div className="mb-4">
                        <TextField
                          label="Course"
                          type="text"
                          className="form-control"
                          id="course"
                          value={studentForm.values.course}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                          color="secondary"
                        />
                      </div>

                      <div className="  mb-4">
                        <TextField
                          label="College or University"
                          type="text"
                          className="form-control"
                          id="college"
                          value={studentForm.values.college}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                          color="secondary"
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
                          color="secondary"
                        />
                      </div>

                      <div className="  mb-4">
                        <TextField
                          label="Pincode"
                          type="text"
                          className="form-control"
                          color="secondary"
                          id="pincode"
                          value={studentForm.values.pincode}
                          onChange={studentForm.handleChange}
                          variant="outlined"
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" className="btn fw-bold btn-lg" style={{ backgroundColor: "skyblue", color: "black" }}>
                          Reset all
                        </button>
                        <button
                          type="submit"
                          className="btn fw-bold ms-2 btn-lg" style={{ backgroundColor: "rgb(255, 187, 0)", color: "black" }}
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
