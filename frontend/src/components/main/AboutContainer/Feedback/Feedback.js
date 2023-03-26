import React, { useState } from "react";
import "./Feedback.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Feedback() {
  const notify = () => {
    toast.success("Thanks for giving feedback !!", {
      position: "top-right",
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
              <form action="">
                <h2>Send Review</h2>

                <div className="feedback-inputbox">
                  <input type="text" name="from_name" required="required" />
                  <span>Name</span>
                </div>

                <div className="feedback-inputbox">
                  <input type="text" name="email" required="required" />
                  <span>Designation</span>
                </div>
                <div className="feedback-inputbox">
                  <textarea name="message" required="required"></textarea>
                  <span>Review...</span>
                </div>

                <div className="feedback-inputbox">
                  <input type="submit" onClick={notify} name="" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
