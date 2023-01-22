import {
  AccountCircle,
  CancelPresentation,
  EmailOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import app_config from "../../config";
import * as Yup from "yup";
// import Image1 from '../img/ab1.jpg'
import Image2 from "../img/ab2.jpeg";
import "./sign.css";
const url = app_config.backend_url;
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const userForm = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    avatar: "",
  };
  const userSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      console.log(response.status);
      const data = await response.json();
      console.log("data saved");
      const response2 = await fetch(url + "/webpage/add", {
        method: "POST",
        body: JSON.stringify({
          title: "",
          description: "",
          type: "",
          user: data._id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response2.status === 200) console.log("page created");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registered successfully!!",
      });

      navigate("/main/signin");
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

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(22, "Too Long!")
      .required("UserName is Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("*Email is required")
      .test("email", "Email already exists", async (value, obj) => {
        // console.log(obj);
        // if(obj.path!=='email') return;
        const response = await fetch(
          app_config.backend_url + "/user/checkemail/" + value
          // {
          //   method: "POST",
          //   body: JSON.stringify({ email: value }),
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        if (response.status === 200) {
          // console.log("email found");
          return false;
        } else if (response.status === 404) {
          // console.log("email not found");
          return true;
        } else if (response.status === 402) {
          // console.log("email not found");
          return true;
        }
      }),

    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is Required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });


  return (
    <div
      id="signup"
      className="signin-bg animate__animated animate__backInDown"
    >
      <IconButton
        size="large"
        onClick={(e) => navigate("/home")}
        sx={{ float: "right" }}
      >
        <CancelPresentation sx={{ color: "white", fontSize: 60 }} />
      </IconButton>
      <section class="vh-100 ">
        <div class="container h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem " }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-7 col-xl-6">
                    <img
                      src={Image2}
                      class="img-fluid"
                      alt=""
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-5 col-xl-6">
                    <div class="card-body p-lg-4 text-black">
                      <h1 className="font-weight-bold ">Create Account</h1>
                      <Formik
                        initialValues={userForm}
                        onSubmit={userSubmit}
                        validationSchema={SignupSchema}
                      >
                        {({
                          values,
                          handleChange,
                          handleSubmit,
                          errors,
                          touched,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div class="form-outline">
                              <TextField
                                label="Full Name"
                                variant="standard"
                                className="w-100 mb-3"
                                id="username"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <AccountCircle />
                                    </InputAdornment>
                                  ),
                                }}
                                onChange={handleChange}
                                value={values.username}
                                helperText={
                                  touched.username ? errors.username : ""
                                }
                                error={Boolean(
                                  errors.username && touched.username
                                )}
                              />
                            </div>
                            <div class="form-outline">
                              <TextField
                                label="Email"
                                variant="standard"
                                className="w-100"
                                id="email"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailOutlined />
                                    </InputAdornment>
                                  ),
                                }}
                                onChange={handleChange}
                                value={values.email}
                                helperText={touched.email ? errors.email : ""}
                                error={Boolean(errors.email && touched.email)}
                              />
                            </div>
                            <div class="form-outline ">
                              {/* <TextField
                                label="Password*"
                                variant="standard"
                                className="w-100 mb-3"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={(e) =>
                                          setShowPassword(!showPassword)
                                        }
                                      >
                                        {showPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                onChange={handleChange}
                                value={values.password}
                                helperText={
                                  touched.password ? errors.password : ""
                                }
                                error={Boolean(
                                  errors.password && touched.password
                                )}
                              /> */}
                              <TextField
                                className="w-100 mb-3"
                                placeholder="Enter New Password"
                                label="Password"
                                variant="standard"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                // error={Boolean(errors.password)}
                                // helperText="Enter your Password please"
                                helperText={
                                  touched.password ? errors.password : ""
                                }
                                error={Boolean(
                                  errors.password && touched.password
                                )}
                                onChange={handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility1"
                                        onClick={(e) => {
                                          setShowPassword(!showPassword);
                                        }}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </div>
                            <div class="form-outline ">
                              {/* <TextField
                                label="Confirm Password*"
                                placeholder="Re-enterPassword"
                                variant="standard"
                                type="password"
                                className="w-100 mb-3"
                                id="confirmPassword"
                                onChange={handleChange}
                                value={values.confirmPassword}
                                error={errors.confirmPassword}
                                helperText={Boolean(errors.confirmPassword)}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <LockOpenIcon
                                        sx={{
                                          color: "active.active",
                                          mr: 1,
                                          my: 0.5,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                }}
                              /> */}
                              <TextField
                                className="w-100 mb-3"
                                placeholder="Confirm Password"
                                label="Re-enter Password"
                                variant="standard"
                                id="confirmPassword"
                                type="password"
                                value={values.confirmPassword}
                                error={errors.confirmPassword}
                                helperText={Boolean(errors.confirmPassword)}
                                onChange={handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility1"
                                        onClick={(e) => {
                                          setShowPassword(!showPassword);
                                        }}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </div>
                            <div className="d-flex justify-content-between align-items-center ">
                              <div class="form-check">
                                <FormControlLabel
                                  value="end"
                                  control={<Checkbox />}
                                  label="I agree to the privacy policy"
                                  labelPlacement="end"
                                />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4 ">
                              <Button
                                type="submit"
                                variant="contained"
                                className=" btn btn-primary btn-lg btn-block"
                              >
                                Create Account
                              </Button>

                              <p class="mt-4" style={{ color: "#393f81" }}>
                                I have an account
                              </p>
                              <p
                                class="mt-4"
                                style={{ color: "#393f81", float: "right" }}
                              >
                                <Link to="/main/signin">Sign In</Link>
                              </p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mb-1">
                              <h6>Or Signup with</h6>
                            </div>

                            <div className="d-flex justify-content-center">
                              <a
                                className="btn btn-outline-info btn-floating m-1"
                                href="#!"
                                role="button"
                              >
                                <i
                                  className="fab fa-facebook-f"
                                  style={{ marginLeft: "6px" }}
                                ></i>
                              </a>

                              <a
                                className="btn btn-outline-secondary btn-floating m-1"
                                href="#!"
                                role="button"
                              >
                                <i
                                  className="fab fa-google"
                                  style={{ marginLeft: "6px" }}
                                ></i>
                              </a>

                              <a
                                className="btn btn-outline-primary btn-floating m-1"
                                href="#!"
                                role="button"
                              >
                                <i
                                  className="fab fa-linkedin-in"
                                  style={{ marginLeft: "6px" }}
                                ></i>
                              </a>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
