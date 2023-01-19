import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import { Avatar, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../user/UserContext";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
const url = app_config.backend_url;

const ManageUser = () => {
  // const user = sessionStorage.getItem("user");
  const { avatar } = React.useContext(UserContext);
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [pageSize, setPageSize] = React.useState(5);
  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log(data);
    setUserArray(data);
    setLoading(false);
  };
  const deleteUser = async (id) => {
    console.log(id);
    const response = await fetch(url + "/user/delete/" + id, {
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

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "avatar", headerName: "Avatar", width: 130 },
    { field: "username", headerName: "Username", width: 180 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "password",
      headerName: "Password",
      width: 150,
    },
    {
      field: "profile",
      headerName: "View Profile",
      width: 130,
    },
    // {
    //   field: "delete",
    //   headerName: "Delete",
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

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
      return (
        <DataGrid
       
          rows={userArray}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          getRowId={(obj) => {
            return obj._id;
          }}
          checkboxSelection
          getSelectedRows={(d) => {
            console.log(d);
          }}
        />
      );
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1>User Manager</h1>
      <div className="row">
        <div className="col-md">
          <button className="btn btn-danger" onClick={(e) => deleteUser()}>
            <i class="fas fa-trash"></i>
          </button>
          <Paper
            component="form"
            className="float-end mb-2"
            sx={{
              p: "2px 4px",
              display: "flex",
              width: "30%",
            }}
          >
            {/* <IconButton
              type="button"
              sx={{ p: "10px" }}
              onClick={deleteUser}
            >
              <DeleteIcon />
            </IconButton> */}
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

      {displayUsers()}
    </div>
  );
};
export default ManageUser;
