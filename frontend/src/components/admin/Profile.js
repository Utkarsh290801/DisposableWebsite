import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { Formik } from "formik";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import toast from "react-hot-toast";
import { UserContext } from "./../user/UserContext";
import { NavLink } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");
  const [userArray, setUserArray] = useState([]);
  const { loggedIn, setLoggedIn } = React.useContext(UserContext);
  const getDataFromBackend = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  };

  const logout = () => {
    //1.destroy session value
    sessionStorage.removeItem("admin");
    //2. set the current user to null
    setLoggedIn(false);
    //3.navigate to login page
    navigate("/main/signin");
  };

  const deleteUser = async () => {
    const res = await fetch(url + "/user/delete/" + currentUser._id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("Successfully deleted");
      getDataFromBackend();
      sessionStorage.removeItem("admin");
      setLoggedIn(false);
      navigate("/");
    }
  };

  const { setAvatar } = useContext(UserContext);
  const [updateForm, setUpdateForm] = useState({});
  const [newPass, setNewPass] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );
  const [selImage, setSelImage] = useState("");
  const url = app_config.backend_url;
  useEffect(() => {
    fetch(url + "/user/getbyid/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateForm(data);
      });
    console.log(currentUser);
  }, []);
  const onFormSubmit = (value, { setSubmitting }) => {
    value.avatar = selImage;
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      // body : JSON.stringify({
      //   password : newPass
      // })
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("admin", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "You have successfully Updated",
      });
    });
  };
  const onChangePassword = () => {
    if (!newPass) {
      Swal.fire({
        icon: "error",
        title: "error",
      });
      return;
    }
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify({
        password: newPass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("admin", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "Password Changed",
      });
    });
  };
  const passwordValidator = (password) => {
    if (!password) return "password required";
    return "";
  };
  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    setAvatar(url + "/" + file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    const reader = new FileReader();
    // reader.addEventListener("load", () => {
    //   setImgData(reader.result);
    // });
    reader.onload = (data) => {
      console.log(data.target.result);
      setPreviewUrl(data.target.result);
    };
    reader.readAsDataURL(file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        fetch(url + "/user/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ avatar: file.name }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            res.json().then((data) => {
              console.log(data);
              setCurrentUser(data);
              sessionStorage.setItem("admin", JSON.stringify(data));
            });
          }
          Swal.fire({
            icon: "success",
            title: "Welldone!",
            text: "You have successfully Updated",
          });
        });
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <NavLink to="/home">Home</NavLink>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <NavLink to="/admin/admindashboard">Admin</NavLink>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Admin Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
          <MDBCol>
            <div className="bg-light rounded-3 d-flex justify-content-between p-2">
              <div>
                <NavLink
                  to="/main/signup"
                  className="btn btn-outline-primary"
                  // style={{marginTop:"-12px"}}
                >
                  Add User
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/admin/manageuser"
                  className="btn btn-outline-secondary"
                  // style={{marginTop:"-15px"}}
                >
                  Block Users
                </NavLink>
              </div>
              <a
                data-bs-target="#deactivation-modal"
                type="button"
                data-bs-toggle="modal"
                className="btn btn-outline-danger float-end"
                // style={{marginTop:"-15px"}}
              >
                Delete account
              </a>
              <div
                className="modal fade"
                id="deactivation-modal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-account">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h5 className="text-center">
                        Are you sure you want to delete?
                      </h5>
                      <br />
                      <p className="text-sm">
                        You will no longer have access to your dashboard and you
                        won't receive any more emails from us.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-outline-danger mb-0"
                        type="submit"
                        onClick={() => deleteUser(currentUser._id)}
                      >
                        Yes, I'm sure
                      </button>

                      <button
                        type="button"
                        className="btn bg-gradient-dark mb-0"
                        data-bs-dismiss="modal"
                      >
                        Nevermind
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">BNCET Student</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn
                    outline
                    className="ms-1 btn btn-outline-danger"
                    onClick={logout}
                  >
                    Log Out
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {currentUser.username}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {currentUser.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      ************
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Created At</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {currentUser.createdAt}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <Formik
              // initialValues={currentUser}
              enableReinitialize={true}
              initialValues={currentUser}
              onSubmit={onFormSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="mb-0">Account Settings</h4>
                      <p className="text-sm mb-0">
                        Here you can change your account information
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row mb-5">
                        <div className="col-md-12">
                          <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                              <MDBListGroup flush className="rounded-3">
                                {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem> */}
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                  <MDBIcon
                                    fab
                                    icon="github fa-lg"
                                    style={{ color: "#333333" }}
                                  />
                                  <MDBCardText>
                                    Disposable Website
                                    <a
                                      href="https://github.com/Utkarsh290801/DisposableWebsite"
                                      style={{ textDecoration: "none" }}
                                    >
                                      {" "}
                                      Project Link
                                    </a>
                                  </MDBCardText>
                                </MDBListGroupItem>
                              </MDBListGroup>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </div>

                      <TextField
                        className="mt-2 w-100"
                        label="Full Name"
                        // variant="filled"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                      />

                      <TextField
                        className="mt-4 w-100"
                        label="Email"
                        variant="filled"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        disabled={true}
                      />
                      {/* <TextField
                        className="mt-4 w-100"
                        type="password"
                        label="Password"
                        name="password"
                        variant="filled"
                        onChange={handleChange}
                        value={values.password}
                      /> */}
                    </div>
                    <Button type="submit" variant="contained">
                      Update
                    </Button>
                  </div>
                </form>
              )}
            </Formik>

            <form className="form-horizontal mt-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Change Password</h4>
                  <p className="text-sm mb-0">
                    Here you can change the password
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div>
                      <TextField
                        label="New Password"
                        className="mt-4 w-100"
                        name="password"
                        validate={passwordValidator}
                        onChange={(e) => setNewPass(e.target.value)}
                        value={newPass}
                      />
                      {/* <button onClick={onChangePassword}>UPdate Password</button> */}
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end pt-2">
                  <button
                    onClick={onChangePassword}
                    className="btn bg-gradient-dark  mb-0"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </form>
        
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default Profile;
