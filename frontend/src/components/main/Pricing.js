import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import "./Pricing.css";
import app_config from "../../config";
import Swal from "sweetalert2";
const Pricing = () => {
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const priceSubmit = async (planData) => {
    console.log(planData);
    if (currentUser) {
      const res = await fetch(url + "/plan/checkuser/" + currentUser._id);
      const planData = await res.json();
      console.log(planData);
      if (planData) {
        Swal.fire({
          icon: "error",
          title: "Error!!",
          text: "Something Went Wrong!",
        });
        return;
      }
    }
    const response = await fetch(url + "/plan/add", {
      method: "POST",
      body: JSON.stringify({
        plan: planData,
        user: currentUser._id,
        createdAt: new Date(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("data saved");
    } else if (response.status) {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };
  return (
    // <div className="pricing-body">
    //   <main className="pricing-container">
    //     <h1 className="pricing-title">Web-X Pricing Plan</h1>
    //     <p className="pricing-subtitle">One tool for your complete workspace</p>
    //     <div className="pricing-selector">
    //       <p>Bill Monthly</p>
    //       <div className="pricing-selector_btn">
    //         <div className="pricing-switch_button" />
    //       </div>
    //       <p>Bill Annually</p>
    //     </div>
    //     <div className="pricing-cards">
    //       <div className="pricing-card">
    //         <div className="pricing-top_text">
    //           <h2>Free</h2>
    //           <p>$0</p>
    //         </div>
    //         <ul>
    //           <li>Unlimited pages &amp; blocks</li>
    //           <li>Share with 5 guests</li>
    //           <li>Sync across devices</li>
    //           <li>API</li>
    //         </ul>
    //         <div className="pricing-card_btn">
    //           <p>Get Started</p>
    //         </div>
    //       </div>
    //       <div className="pricing-card">
    //         <div className="pricing-top_text">
    //           <h2>Pro</h2>
    //           <p>$20</p>
    //         </div>
    //         <ul>
    //           <li className="pricing-bold">Everything from Free +</li>
    //           <li>Unlimited file uploads</li>
    //           <li>Unlimited guests</li>
    //           <li>30 day version history</li>
    //         </ul>
    //         <div className="pricing-card_btn1">
    //           <p>Try 1 month</p>
    //         </div>
    //       </div>
    //       <div className="pricing-card">
    //         <div className="pricing-top_text">
    //           <h2>Enterprise</h2>
    //           <p>$40</p>
    //         </div>
    //         <ul>
    //           <li className="pricing-bold">Everything from Pro +</li>
    //           <li>Unlimited team members</li>
    //           <li>Collaborative workspace</li>
    //           <li>Sharing permissions</li>
    //           <li>Admin tools</li>
    //           <li>Advanced security &amp; controls</li>
    //           <li>Unlimited version history</li>
    //         </ul>
    //         <div className="pricing-card_btn2">
    //           <p>Choose</p>
    //         </div>
    //       </div>
    //     </div>
    //     <img
    //       className="pricing-img"
    //       src="https://cdn-icons-png.flaticon.com/512/588/588395.png"
    //       alt=""
    //     />
    //   </main>
    // </div>
    <section
      id="pricing"
      class="pricing-area bg-gray"
      style={{ padding: "60px 0", minHeight: "100vh" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="site-heading text-center">
              <h2>
                Pricing <span>Plan</span>
              </h2>
              <h4>List of our pricing packages</h4>
            </div>
          </div>
        </div>
        <div class="row pricing pricing-simple text-center">
          <div class="col-md-4">
            <div class="pricing-item">
              <ul className="pricing-ul">
                <li class="icon">
                  <i class="fas fa-rocket"></i>
                </li>
                <li class="pricing-header">
                  <h4>Basic Trial Version</h4>
                  <h2>Free</h2>
                </li>
                <li>
                  Custom Domain{" "}
                  {/* <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Available on pro version"
                  >
                    <i class="fas fa-info-circle"></i>
                  </span> */}
                </li>
                <li>1GB Storage Space</li>
                <li>20 Pre-Build Templates</li>
                <li>30 Email Sends</li>
                <li>Chat & Email Support</li>
                <li>
                  Customer Support{" "}
                  {/* <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Available on pro version"
                  >
                    <i class="fas fa-info-circle"></i>
                  </span> */}
                </li>
                <strike>Mobile Responsive Designs</strike>
                <li>
                  <strike>Phone Support</strike>
                </li>
                <li>
                  <strike>Webpages Unlimited Design</strike>
                </li>
                <li>
                  <strike>24x7 Expert Support </strike>
                </li>
                {/* <li>
                  Documetation{" "}
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Available on pro version"
                  >
                    <i class="fas fa-info-circle"></i>
                  </span>
                </li> */}
                <li class="footer1">
                  <a
                    // onClick={() => {
                    //   priceSubmit();
                    // }}
                    class="pricing-btn btn btn-dark border btn-sm"
                    href="/home"
                  >
                    Try for free
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-item active">
              <ul className="pricing-ul">
                <li class="icon">
                  <i class="fas fa-ribbon"></i>
                </li>
                <li class="pricing-header">
                  <h4>Pro</h4>
                  <h2>
                    <sup>$</sup>35 <sub>/ Month</sub>
                  </h2>
                </li>
                <li>Custom Domain</li>
                <li>
                  10GB Storage Space{" "}
                  {/* <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Only for extended licence"
                  >
                    <i class="fas fa-info-circle"></i>
                  </span> */}
                </li>
                <li>60 Pre-Build Templates</li>
                <li>50 Email Sends</li>
                <li>Chat & Email Support</li>
                <li>
                  Customer Support{" "}
                  {/* <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Only for extended licence"
                  >
                    <i class="fas fa-info-circle"></i>
                  </span> */}
                </li>
                <li>Mobile Responsive Designs</li>
                <strike>Phone Support</strike>
                <li>
                  <strike>Webpages Unlimited Design</strike>
                </li>
                <li>
                  <strike>24x7 Expert Support </strike>
                </li>
                <li class="footer1">
                  <a
                    class="pricing-btn btn-theme effect btn-sm"
                    href="https://buy.stripe.com/test_14k5mm6up37K1EYaEF"
                    target="_blank"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-item">
              <ul className="pricing-ul">
                <li class="icon">
                  <i class="far fa-gem"></i>
                </li>
                <li class="pricing-header">
                  <h4>Expert</h4>
                  <h2>
                    <sup>$</sup>77 <sub>/ Month</sub>
                  </h2>
                </li>
                <li>Custom Domain</li>
                <li>30GB Storage Space</li>
                <li>100+ Pre-Build Templates</li>
                <li>70 Email Sends</li>
                <li>Chat & Email Support</li>
                <li>Customer Support</li>
                <li>Mobile Responsive Designs</li>
                <li>Phone Support</li>
                <li>Webpages Unlimited Design</li>
                <li>24x7 Expert Support </li>
                <li class="footer1">
                  <a
                    class="pricing-btn btn btn-dark border btn-sm"
                    href="https://buy.stripe.com/test_dR63ee2e9fUwgzSfYY"
                    target="_blank"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a class="footer1" style={{ textDecoration: "none" }}>
            <a class="pricing-btn btn-theme effect btn-sm" href="/home">
              Back To Home Page
            </a>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
