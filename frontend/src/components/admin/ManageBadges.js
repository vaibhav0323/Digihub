import React from 'react'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';

const ManageBadges = () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            className="w-100"
            style={{
              borderTopLeftRadius: ".3rem",
              borderTopRightRadius: ".3rem"
            }}
            alt="Sample photo"
          />

          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
              Manage Badges
            </h3>
            <form className="px-md-2">
              <div className="mb-4">
                <MDBInput label='Title' type='text' className='form-control' id='title'/>
              </div>
              <div className="mb-4">
                <MDBInput label='Course Name' type='text' className='form-control' id='course'/>
              </div>
                
              <div className="mb-4">
                  <MDBTextArea label='Description' id='description' rows={2} />
              </div>
              
              <div className="mb-4 datepicker">
                  <MDBInput label='Created At' type='date' className='form-control' id='date'/>
              </div>
              
              <div className="mb-4">
                  <MDBInput label='Icon' type='text' className='form-control' id='icon'/>
              </div>

              
              <button type="submit" className="btn btn-success btn-lg mb-1">
                ADD BADGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ManageBadges