import React from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../context/UserContext";
import { TextField } from "@mui/material";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useUserContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm,Submitting }) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
        validationSchema: loginSchema,
      });

      console.log(res.status);

      if (res.status === 200) {
        resetForm();
        Swal.fire({
          icon:'success', title :'Nice', text : 'You have succesfully Logged In'
        })
        setLoggedIn(true);
        const data = await res.json();
        if (data.role === "user") {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/user/home");
        } else {
          sessionStorage.setItem("admin", JSON.stringify(data));
          navigate("/admin/BadgeData");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "something went wrong",
        });
      }
    },
  });
  return (
    <section className="gradient-custom" style={{ minHeight: "100vh" }}>
      <div className="container-fluid">
        <div className="row d-flex flex-md-row flex-sm-column justify-content-center align-items-center pt-lg-5 mb-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/images/baner.png"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={loginForm.handleSubmit}>
              <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                <p
                  className="lead fw-bold fs-large mb-3 me-0"
                  style={{ color: "black", fontSize: "30px" }}
                >
                  → Sign In to Digihub ←{" "}
                </p>
              </div>

              {/* Email input */}
              <div className="mb-4">
              <TextField 
                id="email" 
                type="email" 
                className="form-control log1" 
                label="Email" 
                variant="filled" 
                value={loginForm.values.email}
                onChange={loginForm.handleChange}/>
              </div>
              {/* Password input */}
              <div className="mb-3">
              <TextField 
                label="Password" 
                type="password" 
                id="password" 
                className="form-control log1"
                variant="filled" 
                value={loginForm.values.password}
                onChange={loginForm.handleChange}/>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label text-dark" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="fw-medium" style={{color:"blue"}}>
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-lg logbtn"
                >
                  Login
                </button>
                <p className="small fw-bold text-dark mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/main/signup" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
