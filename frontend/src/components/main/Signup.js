import { AccountCircle, EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Signup = () => {
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
    const response = await fetch("http://localhost:5000/user/add", {
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
        text: "Registered successfully!!",
      });
      navigate("/main/login");
    } else {
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

    email: Yup.string().email("Invalid email").required("Email is Required"),
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
    <div className="signup">
      <div
        className="container col-md-4 col-sm-6"
        style={{ minHeight: "100vh", paddingTop: "3%" }}>
        <div className="row">
          <div className="card">
            <div className="card-body">
            <h1 style={{ textAlign: "center"}}>
                    Signup Here
                  </h1>
              <hr className="mb-3" />
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
                        <TextField
                          label="Username"
                          variant="outlined"
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
                          helperText={errors.username}
                          error={Boolean(errors.username && touched.username)}
                        />

                        <TextField
                          label="Email"
                          variant="outlined"
                          className="w-100 mb-3"
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
                        <TextField
                          label="Password"
                          variant="outlined"
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
                          helperText={touched.password ? errors.password : ""}
                          error={Boolean(errors.password && touched.password)}
                        />
                        <TextField
                          className="w-100 mb-3"
                          placeholder="Re-enterPassword"
                          label="Confirm Password"
                          type="password"
                          variant="outlined"
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
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                        >
                          Sign Up
                        </Button>
                        <center>
                          <h6 className="m-3">
                            Already have an account.{" "}
                            <a href="/main/login">Sign In</a>
                          </h6>
                        </center>
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
  );
};

export default Signup;