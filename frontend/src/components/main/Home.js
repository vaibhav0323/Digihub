import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div>
      <div className="row" style={{ height: "auto" }}>
        <MDBCarousel showControls dealy={5}>
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={1}
            src="/images/s1.jpg"
            alt="..."
            height={"600px"}
          />
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={2}
            src="/images/s2.jpeg"
            alt="..."
            height={"600px"}
          />
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={3}
            src="/images/s3.jpeg"
            alt="..."
            height={"600px"}
          />
        </MDBCarousel>
      </div>
      <div className="conatainer d-flex align-item-center justify-content-center mt-lg-5 ">
        <div className="row heading">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="container mt-lg-5 mb-5">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        </MDBRow>
      </div>
    </div>
  )
}

export default Home
