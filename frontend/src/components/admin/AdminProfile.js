import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import {
  TextField,
} from "@mui/material";
// import Swal from "sweetalert2";

// const AdminSchema = Yup.object().shape({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),

// });

const AdminProfile = () => {
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
                    <div className="mb-2 pb-2">
                      <TextField
                        label="Name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                        variant="outlined"
                        color="secondary"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger "
                      data-mdb-ripple-color="white">
                      Update
                    </button>
              
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
