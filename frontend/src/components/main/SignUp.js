import { MDBInput } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
  .email("Invalid email")
  .required("Required"),
  phone: Yup.string()
    .min(9, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
  role: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No Password provided."),
  cPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignUp = () => {
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      cPassword: "",
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
          text: "User Added Successfully!!",
        })
      }
    },
  });
  return (
    <section className="vh-200 signMain" >
      <div className="container h-100" >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11 ">
            <div className="card text-black my-5  signBody"  >
              <div className="card-body p-md-5" >
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4 signUpForm"
                      onSubmit={signupForm.handleSubmit}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 mb-4 fa-fw" />

                        {/* name */}

                        <div className="flex-fill mb-0 ">
                          <MDBInput
                            label="Name"
                            type="text"
                            className="form-control"
                            id="name"
                            value={signupForm.values.name}
                            onChange={signupForm.handleChange}
                          />
                          <span>{signupForm.errors.name}</span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 mb-4 fa-fw" />

                        {/* email */}

                        <div className="flex-fill mb-0 ">
                          <MDBInput
                            label="Email"
                            type="email"
                            className="form-control"
                            id="email"
                            value={signupForm.values.email}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-square-phone fa-lg me-3 mb-4 fa-fw"></i>
                        <div className="flex-fill mb-0 ">
                          {/* phone */}

                          <MDBInput
                            label="Contact"
                            type="phone"
                            className="form-control"
                            id="phone"
                            value={signupForm.values.phone}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>

                     

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 mb-4 fa-fw" />
                        <div className="flex-fill mb-0 ">
                          {/* password */}

                          <MDBInput
                            label="Password"
                            className="form-control"
                            type="password"
                            id="password"
                            value={signupForm.values.password}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 mb-4 fa-fw" />
                        <div className="flex-fill mb-0  ">
                          {/* confirm password */}

                          <MDBInput
                            label="Repeat Your Password"
                            type="password"
                            className="form-control"
                            id="cPassword"
                            value={signupForm.values.cPassword}
                            onChange={signupForm.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2 "
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label lab4"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-lg regButton"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex d-flex flex-column align-items-center order-1 order-lg-2">
                  <h3 className="text-center signUpHead">
                      The Power of Proof: Display Your Credentials Digitally.
                    </h3>
                    <img
                      className=""
                      src="/images/signuu.png"
                      height={500}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
