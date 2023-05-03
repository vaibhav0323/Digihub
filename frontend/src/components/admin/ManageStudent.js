import React from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentSchema = Yup.object().shape({
  firstName: Yup.string()
  .required("Required"),
  lastName: Yup.string()
  .required("Required"),
  motherName: Yup.string()
  .required("Required"),
  fatherName: Yup.string()
  .required("Required"),
  address: Yup.string()
  .required("Required"),
  femaleGender: Yup.string()
  .required("Required"),  
  maleGender: Yup.string()
  .required("Required"),
  otherGender: Yup.string()
  .required("Required"),
  
  email: Yup.string()
  .required("Required"),
  college: Yup.string()
  .required("Required"),
  pincode: Yup.string()
  .required("Required"),
  dob: Yup.string()
  .required("Required"),
  course: Yup.string()
  .required("Required"),
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
      return;
      const response = await fetch("http://localhost:5000/student/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
        validationSchema: StudentSchema,
      });

      console.log(response.status);
    }
  });
  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <form onSubmit={studentForm.handleSubmit}>
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
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
                    <div className=" ">
                    <MDBInput label='First Name' type='text' className='form-control' id='firstName' value={studentForm.values.firstName}
                      onChange={studentForm.handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label='Last Name' type='text' className='form-control' id='lastName'value={studentForm.values.lastName}
                      onChange={studentForm.handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label="Mother's Name" type='text' className='form-control' id='motherName'value={studentForm.values.motherName}
                      onChange={studentForm.handleChange}/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label="Father's name" type='text' className='form-control' id='fatherName'value={studentForm.values.fatherName}
                      onChange={studentForm.handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="  mb-4">
                  <MDBTextArea label='Address' id='address' rows={2} value={studentForm.values.address}
                      onChange={studentForm.handleChange}/>
                </div>
                <div className="d-md-flex justify-content-between align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4 ">
                    <div role="group">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                    />
                     <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>

                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>

                    </div>
                   
                   

                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                   
                  </div>
                  <div className="mb-4">
                      <MDBInput label="Contact" type='text' className='form-control' id='contact' value={studentForm.values.contact}
                      onChange={studentForm.handleChange}/>
                    </div>
                </div>
                
                <div className="  mb-4">
                  <MDBInput label='Course' type='text' className='form-control' id='course' value={studentForm.values.course}
                      onChange={studentForm.handleChange}/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='College or University' type='text' className='form-control' id='college' value={studentForm.values.college}
                      onChange={studentForm.handleChange}/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='DOB' type='text' className='form-control' id='dob' value={studentForm.values.dob}
                      onChange={studentForm.handleChange}/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='Pincode' type='text' className='form-control' id='pincode'value={studentForm.values.pincode}
                      onChange={studentForm.handleChange}/>
                </div>


                <div className="  mb-4">
                  <MDBInput label='Email ID' type='email' className='form-control' id='email'value={studentForm.values.email}
                      onChange={studentForm.handleChange}/>
                </div>
                
                <div className="d-flex justify-content-end pt-3">
                  <button type="reset" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">
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

  )
}

export default ManageStudent