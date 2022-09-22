import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import { Avatar, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { UserContext } from "../user/UserContext";
import { Link } from "react-router-dom";
const url = app_config.backend_url;

const ManageUser = () => {
  // const user = sessionStorage.getItem("user");
  const { avatar } = React.useContext(UserContext);
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url+"/user/getall");
    const data = await response.json();
    console.log(data);
    setUserArray(data);
    setLoading(false);
  }; 
  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch(url+"/user/delete/" + id, {
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
    const response = await fetch(url+"/user/getall");
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
  const displayUsers = () => {
    if (loading) {
  return (
    <div class="text-center">
          <div class="spinner-border text-primary " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      return userArray.map(({ _id, email, password, username,avatar }) => (
        <tr key={_id}>
         <td><Avatar alt="" src={avatar} /></td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
          <Link to={"/admin/" + _id} className="btn btn-primary">
                    View
                    
                  </Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div>
      <h1>User Manager</h1>
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
            </IconButton></Paper>
          <table className="table table-dark">
            <thead>
            
              <tr>
                <th>Avatar</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>View Profile</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{displayUsers()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageUser