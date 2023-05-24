import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(9, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
    email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});



const AdminProfile = () => {
  const adminForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      const response = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });

      console.log(response.status);
      if (response.status === 200) {
        resetForm();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Admin Updated Successfully!!",
        });
      }
    },
  });
  
  return (
    <section className="h-100 adminProfile">
      <div className="container py-5 h-100" >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="card card-registration card-registration-2 adProfileBody"
 >
            <div className="card-body p-0">
              <div className="row g-lg-3">
                <div className="col-lg-6">
                  <div className="p-5" style={{ height: "100%" }}>
                    <h1 className="fs-large mb-5" style={{ color: "black" }}>
                      Admin Details</h1>
                    <h3 style={{ marginBottom: "3%" }}> Name : </h3>
                    <h3 style={{ marginBottom: "3%" }}> Contact: </h3>
                    <h3 style={{ marginBottom: "3%" }}> Email : </h3>
                    <h3 style={{ marginBottom: "3%" }}> Address: </h3>
                  </div>
                </div>
                <div className="col-lg-5 " >
                  <div className="p-5 ">
                    <h3 className="fw-bold fs-large mb-4" style={{color:"black"}}>Update Details</h3>
                    <form onSubmit={AdminProfile.handleSubmit}>
                    <div className="mb-2 pb-2">
                      <TextField
                        label="Name"
                        type="text"
                        className="form-control"
                        id="name"
                        value={adminForm.values.name}
                        onChange={adminForm.handleChange}
                        variant="outlined"
                        color="secondary"
                      />
                    </div>
                    <div className="mb-2 pb-2">
                      <TextField
                        label="Contact"
                        type="text"
                        className="form-control"
                        id="phone"
                        value={adminForm.values.phone}
                        onChange={adminForm.handleChange}
                        variant="outlined"
                        color="secondary"
                      />
                    </div>
                    <div className="mb-2 pb-2">
                      <TextField
                        label="Email"
                        type="text"
                        className="form-control"
                        id="email"
                        value={adminForm.values.email}
                        onChange={adminForm.handleChange}
                        variant="outlined"
                        color="secondary"
                      />
                    </div>
                    <div className="mb-2 pb-2">
                      <TextField
                        label="Address"
                        type="text"
                        className="form-control"
                        id="address"
                        value={adminForm.values.address}
                        onChange={adminForm.handleChange}
                        variant="outlined"
                        color="secondary"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger "
                      data-mdb-ripple-color="white">
                      Update
                    </button>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </section>


  )
}

export default AdminProfile
