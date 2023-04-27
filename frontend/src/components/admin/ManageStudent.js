import React from 'react'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';

const ManageStudent = () => {
  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
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
                    <MDBInput label='First Name' type='text' className='form-control' id='fname'/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label='Last Name' type='text' className='form-control' id='lname'/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label="Mother's Name" type='text' className='form-control' id='mname'/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className=" ">
                      <MDBInput label="Father's name" type='text' className='form-control' id='fname'/>
                    </div>
                  </div>
                </div>
                <div className="  mb-4">
                  <MDBTextArea label='Address' id='address' rows={2} />
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="  mb-4">
                  <MDBInput label='Course' type='email' className='form-control' id='course'/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='College or University' type='email' className='form-control' id='college'/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='DOB' type='text' className='form-control' id='dob'/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='Pincode' type='number' className='form-control' id='pincode'/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='Course' type='text' className='form-control' id='course'/>
                </div>

                <div className="  mb-4">
                  <MDBInput label='Email ID' type='email' className='form-control' id='mail'/>
                </div>
                
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
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

export default ManageStudent