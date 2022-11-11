import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import ShowUserDetail from "./ShowUserDetail";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Avatar, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import app_config from "../../config";
import Pagination from "./Pagination";
const url = app_config.backend_url;
const UserManager = () => {
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({ start: 0, end: showPerPage });
  const [selUser, setSelUser] = useState(null);

  //   const [updateFormData, setUpdateFormData] = useState(null);
  const updateUser = (user) => {
    console.log(user.curr);
    setSelUser(user.curr);
    setShowUpdateForm(true);
  };
  const onPaginationChange = (start, end) => {
    console.log(start, end);
    setPagination({ start: start, end: end });
  };

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log(data);
    // console.log(userArray);
    setUserArray(data);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User deleted successfully",
      });
      getDataFromBackend();
    }
  };
  const handleFilter = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();

    setUserArray(
      data.filter((value) => {
        return value.username.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);
  // console.log(userArray.length)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <Paper
              component="form"
              className="float-end mb-2"
              sx={{
                p: "2px 4px",
                display: "flex",
                width: "30%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter Username to Search"
                onChange={(e) => setFilter(e.target.value)}
                inputProps={{ "aria-label": "Enter Username to Search" }}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={handleFilter}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>

        <div class="card mb-3">
          <div className="row">
            <div className="col-md-4">
              <div className="m-3">
                <h1>Users List</h1>
                <Pagination
                  showPerPage={showPerPage}
                  onPaginationChange={onPaginationChange}
                  total={userArray.length}
                />
              </div>
              <table>
                <thead>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;Avatar</th>
                  <th>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    UserName
                  </th>
                  <th>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserDetails
                  </th>
                  <tr></tr>
                </thead>
              </table>
              {userArray.slice(pagination.start, pagination.end).map((curr) => {
                if (loading) {
                  <div class="text-center">
                    <div class="spinner-border text-primary " role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>;
                } else {
                  return (
                    <div className="container" key={curr._id}>
                      <div className="row">
                        <div className="col-md">
                          <table className="table">
                            <thead></thead>

                            <tbody className="">
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                className="rounded-circle img-fluid mt-2"
                                style={{ height: "50px", width: "60px" }}
                              />
                              <span className="m-5">{curr.username}</span>
                              <button
                                className="btn btn-primary mt-3"
                                style={{ float: "right" }}
                                onClick={(e) => updateUser({ curr })}
                              >
                                View Details
                                <h1></h1>
                              </button>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    //   </div>
                  );
                }
              })}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                {showUpdateForm ? (
                  <div className="col-md">
                    <ShowUserDetail
                      selUser={selUser}
                      setShowUpdateForm={setShowUpdateForm}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
