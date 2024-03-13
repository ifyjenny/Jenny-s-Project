import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <div className="cover">
        <div className="text-center pt-3 text-light">
          <h2 className="pt-5">Contact</h2>
          <p>
            Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Kindly Call / Chat us or Send us an email.
            </p>
            <div className="">
              <div className="mb-3">
                <a
                  href="tel:08066751605"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 8066751605
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://wa.me/+2348066751605"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 8066751605
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="mailto:ifeyjennyy22@gmail.com.com"
                  className="text-decoration-none text-dark"
                >
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  ifeyjenny22@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
