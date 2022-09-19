import React from 'react';
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { Formik } from "formik";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
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
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function profile() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">Admin</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Admin Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
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
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
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
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
      
            <Formik
              // initialValues={currentUser}
              initialValues={{
                username: "Raju",
                email: "raju@mail.com",
                password: "1234",
              }}
              // onSubmit={onFormSubmit}
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
                        <div className="col-md-6">
                          <div
                            className="fileupload fileupload-new"
                            data-provides="fileupload"
                          >
                            <div className="photo-container d-flex align-items-center">
                              
                            <Avatar src="/broken-image.jpg"sx={{ width: 60, height: 60 }} />
                              <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
                              <Button variant="contained" color="error" startIcon={<DeleteIcon />} >
  Remove
</Button>
                             
                            </div>
                          </div>
                        </div>

                      </div>

                      <TextField
                        className="mt-4 w-100"
                        label="Full Name"
                        variant="filled"
                        name="name"
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
                      />
                      <TextField
                        className="mt-4 w-100"
                        type="password"
                        label="Password"
                        name="password"
                        variant="filled"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <Button type="submit" variant="contained">Update</Button>
                  </div>
                </form>
              )}
            </Formik>
          
          <form className="form-horizontal mt-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Social Profiles</h4>
                  <p className="text-sm mb-0">
                    Here you can set your social profiles
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-twitter fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Twitter Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://twitter.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[twitter_username]"
                        id="user_twitter_username"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-facebook-f fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Facebook Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://www.facebook.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[facebook_username]"
                        id="user_facebook_username"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-github fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Github Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://github.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[github_username]"
                        id="user_github_username"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end pt-2">
                  <input
                    type="submit"
                    name="commit"
                    value="Save"
                    className="btn bg-gradient-dark  mb-0"
                    data-disable-with="Save"
                  />
                </div>
              </div>
            </form>
            <div class="card mt-4 mb-4">
              <div className="card-body d-flex justify-content-between align-items-center flex-column flex-md-row">
                <div>
                  <h6 className="mb-0">Do you want to leave us? 😔</h6>
                </div>
                <a
                  data-bs-target="#deactivation-modal"
                  type="button"
                  data-bs-toggle="modal"
                  className="btn btn-outline-danger mb-0 mt-3 mt-md-0"
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
                          You will no longer have access to your dashboard and
                          you won't receive any more emails from us.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <form className="button_to" method="post">
                          <input
                            className="btn btn-outline-danger mb-0"
                            type="submit"
                            value="Yes, I'm sure"
                          />
                        </form>
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
              </div> </div>
     
      

      

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}