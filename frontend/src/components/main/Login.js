import React from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
  .required("Please enter your email"),
  password: Yup.string()
  .required("Please enter your password"),
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      const response = await fetch("http://localhost:5000/login/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
        validationSchema: loginSchema,
      });

      console.log(response.status);
    }
  });
  return (
    <section >
  <div className="container-fluid h-custom ">
    <div className="row d-flex flex-md-row flex-sm-column justify-content-center align-items-center h-100 mt-lg-5 mb-5" >
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
        <form onSubmit={loginForm.handleSubmit}>
          <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-3 me-0" style={{color:"black"}}>Sign in with</p>

            <div className='d-flex flex-row align-items-center justify-content-center'>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in" />
            </button>
            </div>
            <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          </div>
          
          {/* Email input */}
          <div className="mb-4">
                    <MDBInput
                      label="Email"
                      type="email"
                      className="form-control"
                      id="email"
                      value={loginForm.values.email}
                      onChange={loginForm.handleChange}
                    />
            
          </div>
          {/* Password input */}
          <div className="mb-3">
          <MDBInput
                      label="Password"
                      type="password"
                      className="form-control"
                      id="password"
                      value={loginForm.values.password}
                      onChange={loginForm.handleChange}
                    />
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
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login