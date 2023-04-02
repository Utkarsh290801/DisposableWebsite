import React, { useState } from "react";
import "./Feedback.css";
import app_config from "../../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
export default function Feedback() {
  const url = app_config.backend_url;
  const FeedbackForm = {
    name: "",
    designation: "",
    review: "",
  };
  const TestimonialSubmit = async (formdata, { setSubmitting, resetForm }) => {
    console.log(formdata);
    setSubmitting(true);

    // asynchronous function returns promise
    const response = await fetch(url + "/testimonial/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("data saved");
      toast.success("Thanks for giving feedback !!", {
        position: "top-right",
      });
      resetForm({ values: "" });
    } else if (response.status === 500) {
      console.log(response.status);
      console.log("something went wrong");
      toast.error("Something went Wrong!!", {
        position: "top-right",
      });
    }

    setSubmitting(false);
  };

  

  return (
    <div className="feedback-main-container" id="contactme">
      <div className="feedback-contactme-container">
        <div className="feedback-contactme-parent">
          What My Clients Say About Us
          <h3 className="feedback-contactme-heading">Testimonial Feedback</h3>
        </div>
        <div className="feedback-container-parent">
          <div className="feedback-container">
            <div className="feedback-contactinfo">
              <div className="feedback-box">
                <div className="feedback-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="feedback-text">
                  <h3>Phone</h3>
                  <p>+91 8275693296</p>
                </div>
              </div>

              <div className="feedback-box">
                <div className="feedback-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="feedback-text">
                  <h3>Email</h3>
                  <p>testproject2629@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="feedback-contactform">
              <Formik
                initialValues={FeedbackForm}
                onSubmit={TestimonialSubmit}
          
              >
                {({ values, handleChange, handleSubmit,  }) => (
                  <form onSubmit={handleSubmit}>
                    <h2>Send Review</h2>

                    <div className="feedback-inputbox">
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        required="required"
                      />
                      <span>Name</span>
                    </div>

                    <div className="feedback-inputbox">
                      <input
                        type="text"
                        name="designation"
                        onChange={handleChange}
                        value={values.designation}
                        required="required"
                      />
                      <span>Designation</span>
                    </div>
                    <div className="feedback-inputbox">
                      <textarea
                        name="review"
                        onChange={handleChange}
                        value={values.review}
                        required="required"
                      ></textarea>
                      <span>Review...</span>
                    </div>

                    <div className="feedback-inputbox">
                      <input type="submit" />
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
