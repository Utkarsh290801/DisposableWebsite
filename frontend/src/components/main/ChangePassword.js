import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="signin-bg">
      <section className="vh-100">
        <div className="container col-md-6 col-lg-6 col-xs-12 col-sm-6 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="card">
              <div className="card-body">
                <h1
                  className="font-weight-bold "
                  style={{ textAlign: "center" }}
                >
                  Request sent successfully!
                </h1>
                <p
                  className="mt-4"
                  style={{ textAlign: "center", fontSize: "1em" }}
                >
                  We've sent a 6-digit confirmation email to your email. Please
                  enter the code in below box to verify your email.
                </p>

                <Formik
                //   initialValues={updatePassword} onSubmit={passwordSubmit}
                >
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="mt-4"
                        fullWidth
                        label="Enter Your Email"
                        /*id="email" onChange={handleChange} value={values.email}*/
                      />
                      <TextField
                        className="mt-4"
                        fullWidth
                        label="Enter 6-digit code"
                        /* id="password" onChange={handleChange} type="password" value={values.password}*/
                      />
                      <TextField
                        className="mt-4"
                        fullWidth
                        type="password"
                        label="Password" /*id="password" onChange={handleChange} value={values.password}*/
                      />
                      <TextField
                        className="mt-4"
                        fullWidth
                        type="password"
                        label="Confirm New Password" /*id="confirmPassword" onChange={handleChange} value={values.password}*/
                      />

                      <Button
                        variant="contained"
                        type="submit"
                        className="mt-4 mx-auto d-flex"
                        fullWidth
                      >
                        Change Password
                      </Button>
                      <Button
                        /*variant="contained" color='error'*/ className="mt-2 mx-auto d-flex"
                      >
                        Resend code
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
