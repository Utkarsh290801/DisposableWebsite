import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "./animation";
import app_config from "../../../config";
import Swal from "sweetalert2";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
function Contact() {
  const [element, controls] = useScroll();
  const url = app_config.backend_url;
  const userForm = {
    name: "",
    email: "",
    message: "",
  };
  // const sendOTP = (from, text) => {
  //   fetch("http://localhost:5000/util/sendmail", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       to: formdata.email,
  //       subject: "Password Reset",
  //       text:"hhj",
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     console.log(res.status);
  //     // console.log(otp);
  //     if (res.status === 200) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "success",
  //         text: "OTP Sent Successfully",
  //       });
  //     }
  //     return res.json();
  //   });
  // };
  const feedbackSubmit = async (formdata, { setSubmitting,resetForm }) => {

    
    console.log(formdata);
    setSubmitting(true);

    // asynchronous function returns promise
    const response = await fetch(url + "/contact/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("data saved");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "send successfully!!",
      });
       resetForm({values:''});   
      // sendOTP();
      // toast.success("Success Notification !", {
      //   position: toast.POSITION.TOP_RIGHT,
      //   className: 'toast-message'
      // });
    } else if (response.status === 500) {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }

    setSubmitting(false);
  };
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(22, "Too Long!")
      .required("*Name is Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("*Email is required"),
      message: Yup.string()
      .min(2, "Too Short!")
      .max(222, "Too Long!")
      .required("*Message is Required"),
  });
  const formBody = ({ values, handleSubmit, handleChange, isSubmitting,   errors,
    touched, }) => {
    return (
      <Section id="contact" ref={element}>
        <Title value="contact" />
        <motion.div
          className="contact"
          variants={contactAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <div className="row">
            <div className="col-md-6">
            <div className="contact__title">
            {/* <p>Stay in touch with me </p> */}
            <h2>Quick Contact</h2>
            <div className="contact__data__description">
              <h4>Send us a message</h4>
              <p>
                If you have any work from me or any type of queries related to
                my website, you can send me message from here. It's my pleasure
                to help you.
              </p>
              <p>
                We'love to hear from you. Our friendly team is always here to
                chat.
                {/* If you have any questions simply use the following contact
              details. */}
              </p>
              <div>
                {/* <p>
                  <strong>Phone:</strong> +91 6386406135 , +91 9336479475
                </p> */}
                <p>
                  <strong>Email:</strong> testproject2629@gmail.com
                </p>
                <p>
                  <strong>Website:</strong> webx.com
                </p>
              </div>
              </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="contact__title">
            <div className="contact__data">
          
          <form onSubmit={handleSubmit}>
            <div className="contact__data__form">
              {/* <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <textarea placeholder="message"></textarea>
              <button>Send Message</button> */}
              <TextField
                className="w-100"
                type="text"
                id="name"
                label="Name"
                style={{ backgroundColor: "white" }}
                varient="standard"
                onChange={handleChange}
                value={values.name}
                helperText={touched.name ? errors.name : ""}
                error={Boolean(errors.name && touched.name)}
              />
              <TextField
                className="w-100 "
                type="email"
                id="email"
                label="E-mail"
                varient="standard"
                style={{ backgroundColor: "white" }}
                onChange={handleChange}
                value={values.email}
                helperText={touched.email ? errors.email : ""}
                error={Boolean(errors.email && touched.email)}
              />
              <TextField
                className="w-100 "
                type="text"
                id="message"
                label="Message"
                multiline
                rows={5}
                style={{ backgroundColor: "white" }}
                varient="standard"
                onChange={handleChange}
                value={values.message}
                helperText={touched.message ? errors.message : ""}
                error={Boolean(errors.message && touched.message)}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon/>}
              >
                Contact Us
              </Button>
            </div>
          </form>
          <ToastContainer />
        </div>
        </div>
            </div>
          </div>
         
         
          
        </motion.div>
      </Section>
    );
  };
  return (
    <Formik initialValues={userForm} onSubmit={feedbackSubmit} validationSchema={SignupSchema}>
      {formBody}
    </Formik>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .toast-message {
    background: darkblue;
    color: #fff;
    font-size: 20px;
    width: 37vw;
    padding: 30px 20px;
  }

  .contact {
    color: var(--primary-color);
    margin: 0 16rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {

        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--secondary-color);
      }
    }
    &__data {
      display: grid;
      // grid-template-columns: 59fr 1.2fr;
      padding-left:4rem;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: justify;
          margin-top: 15px;
        }
        div {
          p {
            strong {
              // text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          // text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--secondary-color);
          }
        }
        textarea {
          width: 100%;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          // text-transform: uppercase;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
