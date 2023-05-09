import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";

const DisplayBadges = () => {
  return (
    <div className="container">
      <div className="row h-auto mt-5 mb-4 me-0">
        <div className="col-md-4 me-4  d-flex align-item-start justify-content-center ">
          <img src="/images/badge1.jpg" height={500}></img>
        </div>
        <div className="col-md-6">
          <div className="row">
            <h1>React Essentials</h1>
            <h5>
              <i>issued by Digipodium</i>
            </h5>
          </div>
          <div className="d-flex align-item-center justify-content-start mt-4">
            <p>
              Earners of the React Essentials Badge have successfully completed
              Big Nerd Ranch's React Essentials course, which focuses on the
              foundations of React development.
            </p>
          </div>
          <div className="d-flex align-item-center justify-content-start mt-4">
            
            <button
  type="button"
  class="btn btn-outline-primary w-auto m-1 me-1"
  data-mdb-toggle="popover"
  title="Popover title"
  data-mdb-content="And here's some amazing content. It's very engaging. Right?"
>
  Click to toggle popover
</button>
            <button
              type="button"
              class="btn btn-outline-primary w-auto m-1 me-1"
              data-mdb-ripple-color="dark"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-auto m-1 me-1"
              data-mdb-ripple-color="dark"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-auto m-1 me-1"
              data-mdb-ripple-color="dark"
            >
              Primary
            </button>
          </div>
          <div className="d-flex-column align-item-center justify-content-start mt-4">
            <h4>Skills</h4>
            <div className="d-flex align-item-center justify-content-start mt-4">
              <span className="border border-primary fw-medium w-auto m-1 p-2">
                ES6
              </span>
              <span className="border border-primary fw-medium w-auto m-1 p-2">
                paython and java
              </span>
              <span className="border border-primary fw-medium w-auto m-1 p-2">
                HTML and CSS
              </span>
              <span className="border border-primary fw-medium w-auto m-1 p-2">
                javascript
              </span>
            </div>
          </div>

          <div className="d-flex align-item-center justify-content-start mt-5">
            <i class="fas fa-chalkboard fa-2x me-3"></i>
            <p>
              Complete 28 hours a React Essentials course led by a Big Nerd
              Ranch instructor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBadges;
