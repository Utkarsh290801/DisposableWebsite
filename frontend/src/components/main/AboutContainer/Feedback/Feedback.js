import React, { useState } from "react";
import "./Feedback.css";
import app_config from "../../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import Swal from 'sweetalert2';

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
    getToxicity(formdata.review, async (result) => {
      console.log(result);
      const isToxic = result.filter((obj) => obj.results[0].match);
      // console.log(isToxic);
      let status = "Not Toxic";
      if (isToxic.length > 0) {
        Swal.fire({
          title: "Oops",
          icon: "error",
          text: "Your comment is toxic",
        });
        status = "Toxic";
      } else {
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
      }
        
    });
    
  };

  const getToxicity = (text, cb) => {
    const threshold = 0.9;
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    window.toxicity.load(threshold).then((model) => {
      const sentences = [text];

      model
        .classify(sentences)
        .then(async (result) => {
          // console.log(result);
          await cb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
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
