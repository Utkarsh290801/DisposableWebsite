// import React, { useRef, useState } from "react";
// import { useEffect } from "react";
// import Swal from "sweetalert2";
// import app_config from "../../config";
// import { Accordion, AccordionDetails, AccordionSummary, Avatar, IconButton, InputBase, Paper, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { UserContext } from "../user/UserContext";
// import { Link } from "react-router-dom";
// import { DataGrid, GridExpandMoreIcon } from "@mui/x-data-grid";
// const url = app_config.backend_url;

// const ManageUser = () => {
//   // const user = sessionStorage.getItem("user");
//   const { avatar } = React.useContext(UserContext);
//   const [userArray, setUserArray] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState("");
//   const [pageSize, setPageSize] = React.useState(5);
//   const getDataFromBackend = async () => {
//     setLoading(true);
//     const response = await fetch(url + "/user/getall");
//     const data = await response.json();
//     console.log(data);
//     setUserArray(data);
//     setLoading(false);
//   };
//   const deleteUser = async (id) => {
//     console.log(id);
//     const response = await fetch(url + "/user/delete/" + id, {
//       method: "DELETE",
//     });
//     if (response.status === 200) {
//       Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "User deleted successfully",
//       });
//       getDataFromBackend();
//     }
//   };

//   const handleFilter = async () => {
//     const response = await fetch(url + "/user/getall");
//     const data = await response.json();

//     setUserArray(
//       data.filter((value) => {
//         return value.username.toLowerCase().includes(filter.toLowerCase());
//       })
//     );
//   };

//   const columns = [
//     { field: "_id", headerName: "ID", width: 70 },
//     { field: "avatar", headerName: "Avatar", width: 130 },
//     { field: "username", headerName: "Username", width: 180 },
//     {
//       field: "email",
//       headerName: "Email",
//       width: 250,
//     },
//     {
//       field: "password",
//       headerName: "Password",
//       width: 150,
//     },
//     {
//       field: "profile",
//       headerName: "View Profile",
//       width: 130,
//     },
//   ];

//   useEffect(() => {
//     getDataFromBackend();
//   }, []);

//   const displayUsers = () => {
//     if (loading) {
//       return (
//         <div class="text-center">
//           <div class="spinner-border text-primary " role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <DataGrid
//           rows={userArray}
//           columns={columns}
//           pageSize={pageSize}
//           onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//           rowsPerPageOptions={[5, 10, 20]}
//           pagination
//           getRowId={(obj) => {
//             return obj._id;
//           }}
          
//           checkboxSelection
//           getSelectedRows={(d) => {
//             console.log(d);
//           }}
          
//         />
//       );
//     }
//   };

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <h1>User Manager</h1>
//       <div className="row">
//         <div className="col-md">
//           <button className="btn btn-danger" onClick={(e) => deleteUser(user._id)}>
//             <i class="fas fa-trash"></i>
//           </button>
//           <Paper
//             component="form"
//             className="float-end mb-2"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               width: "30%",
//             }}
//           >
//             {/* <Accordion>
//         <AccordionSummary
//           expandIcon={<GridExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
          
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion> */}
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Enter Username to Search"
//               onChange={(e) => setFilter(e.target.value)}
//               inputProps={{ "aria-label": "Enter Username to Search" }}
//             />
//             <IconButton
//               type="button"
//               sx={{ p: "10px" }}
//               aria-label="search"
//               onClick={handleFilter}
//             >
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//       </div>

//       {displayUsers()}
//     </div>
//   );
// };
// export default ManageUser;

import React, { useEffect, useState } from "react";
import app_config from "../../config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import Switch from '@mui/material/Switch';
import { Link } from "react-router-dom";

const ManageUser = () => {
  const [userArray, setUserArray] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const url = app_config.backend_url;

  const getUserfromBackend = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log(data);
    setUserArray(data);
    setIsloading(false);
  };

  const deleteUser = (id) => {
    fetch(url + "/user/delete/" + id, { method: "Delete" })
      .then((res) => {
        if (res.status === 200) {
          console.log("User Deleted");
          Swal.fire({
            icon: "success",
            title: "User Deleted !!",
          });
          getUserfromBackend();
          return res.json();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUserfromBackend();
  }, []);

  const displayUser = () => {
    return userArray.map((user) => (
      <>
        <TableRow
          key={user.username}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell>{user._id}</TableCell>
          <TableCell component="th" scope="row">
            <img
              style={{ width: "45px", height: "45px" }}
              src={user.avatar}
              className="rounded-circle mr-4"
            />
          </TableCell>
          <TableCell>
            {user.username}
          </TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell><button className="btn btn-primary">View</button></TableCell>
          <TableCell>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteUser(user._id);
              }}
            >
              <i class="fa-solid fa-trash fa-lg"></i>
            </button>
          </TableCell>
          <TableCell><Switch/></TableCell>
        </TableRow>
      </>
    ));
  };

  return (
    <div sty>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#80808054" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>ViewProfile</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{isloading ? <p>Loading...</p> : displayUser()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageUser;
