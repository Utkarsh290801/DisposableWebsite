import React, { useContext, useState } from 'react'
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";

import app_config from '../../config';

const Login = () => {
 const url= app_config.backend_url
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const loginForm = {
    email: "",
    password: "",
  };
  const loginSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch(url+"/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.status);

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login success!!👍",
      });
      response.json().then(data => {
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/user/addwebpage');
      })
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Invalid Credentials",
      });
    }
  };

  return (
    <div className="login">
      <div
        className="container col-md-4 col-sm-6"
        style={{ minHeight: "100vh", paddingTop: "5%" }}
      >
        <Card>
          <CardContent
            style={{borderRadius:"8px solid black" }}
          >
            <h1 style={{ textAlign: "center"}}>Sign In</h1>
            <hr className="mb-4" />

            <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Email*"
                    variant="outlined"
                    
                    className="w-100 mb-4"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlined/>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    label="Password*"
                    
                    variant="outlined"
                    className="w-100 mb-3"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={(e) => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <FormControlLabel
                      value="end"
                      control={<Checkbox/>}
                      label="Remember me"
                      labelPlacement="end"
                    />
                    <a href ="">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    
                  >
                    Sign In
                  </Button>
                  <center>
                    <p style={{ paddingTop: "5%" }}>
                      Don't have an account? <a href="/main/signup">SIGN UP</a>
                    </p>
                  </center>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Login