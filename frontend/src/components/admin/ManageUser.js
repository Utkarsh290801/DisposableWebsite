import React, { useEffect, useState } from "react";
import app_config from "../../config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Modal,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
 import { TableSortLabel } from '@mui/material';
import Loader from "../utils/Loader";

const ManageUser = () => {
  const [userArray, setUserArray] = useState([]);
  const [planArray, setPlanArray] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState('ASC');
  // const [data, setdata] = useState(userArray);

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  //------------------ sorting----------------------
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...userArray].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setUserArray(sorted);
      setOrder("DSC");
    }if (order === "DSC") {
      const sorted = [...userArray].sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
      setUserArray(sorted);
      setOrder("ASC");
    }
  }
  // function descendingComparator(a, b, orderBy) {
  //   if (b[orderBy] < a[orderBy]) {
  //     return -1;
  //   }
  //   if (b[orderBy] > a[orderBy]) {
  //     return 1;
  //   }
  //   return 0;
  // }
  
  // function getComparator(order, orderBy) {
  //   return order === 'desc'
  //     ? (a, b) => descendingComparator(a, b, orderBy)
  //     : (a, b) => -descendingComparator(a, b, orderBy);
  // }
  
  // function applySortFilter(array, comparator, query) {
  //   const stabilizedThis = array.map((el, index) => [el, index]);
  //   stabilizedThis.sort((a, b) => {
  //     const order = comparator(a[0], b[0]);
  //     if (order !== 0) return order;
  //     return a[1] - b[1];
  //   });
  //   if (query) {
  //     return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  //   }
  //   return stabilizedThis.map((el) => el[0]);
  // }
// -------------------pagination-------------------
  const [pg, setPage] = React.useState(0);
  const [rpg, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const url = app_config.backend_url;

  const getUserfromBackend = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    console.log(data);
    setUserArray(data);
    setIsloading(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "white",
    // border: "2px solid #000",
    boxShadow: 2,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [selUser, setSelUser] = useState(null);
  const handleOpen = (curr) => {
    setOpen(true);
    console.log(curr.user);
    setSelUser(curr.user);
    
  };
  const handleClose = () => {setOpen(false);}

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
  const getPlanfromBackend = async () => {
    const response = await fetch(url + "/plan/getall");
    const data = await response.json();
    console.log(data);
    setPlanArray(data);
    
  };
  useEffect(() => {
    getPlanfromBackend();
  }, []);

  const changeStatusOfUser = async (id, v) => {
    console.log(v);
    const response = await fetch(url + "/user/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ isBlocked: v }),
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    if (response.status === 200) {
      console.log(jsonData.isBlocked);
      getUserfromBackend();
    } else {
      throw new Error(jsonData.message);
    }
  };
  useEffect(() => {
    getUserfromBackend();
  }, []);

  const handleFilter = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();

    setUserArray(
      data.filter((value) => {
        return value.username.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };
  const displayUser = () => {
    return userArray.slice(pg * rpg, pg * rpg + rpg).map((user,plan) => (
      <>
        <StyledTableRow key={user._id}>
          <TableCell>{user._id}</TableCell>
          <TableCell component="th" scope="row">
            <Avatar
              src={url+'/'+user?.avatar}
              sx={{ width: 45, height: 45 }}
            />
          </TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>
            <button onClick={(e)=>handleOpen({user})} className="btn btn-primary">
              View
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              // sx={{ 
              //   "& > .MuiBackdrop-root" : {
              //           backdropFilter: "blur(2px)"
              //         }
              //   }}
              BackdropProps={{style: {backgroundColor:'rgba(251,251,251,0.1)',backdropFilter: "blur(1px)"}}}
            >
              <Box sx={style}>
        <div class="mb-3" style={{borderRadius: "5px"}}>
          <div class="row g-0">
            <div class="col-md-4 text-center">
              {/* // style={{border-top-left-radius: ".5rem", border-bottom-left-radius: ".5rem"}}> */}
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} />
                      <h3>{user.username}</h3>
                      <h5>Created at:</h5>
                      <p>{user.createdAt}</p>
              
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h3>Information</h3>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{user.email}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>UserID</h6>
                            <p class="text-muted">{user._id}</p>
                  </div>
                </div>
                <h6>Payment Details</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Recent Plan Price</h6>
                            <p class="text-muted">{plan.price}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Expired On:</h6>
                            <p class="text-muted">{plan.expired}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
              </Box>
            </Modal>
          </TableCell>
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
          <TableCell>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Unblock</Typography>
              <Switch
                checked={user.isBlocked}
                onChange={(e, v) => {
                  changeStatusOfUser(user._id, v);
                }}
              />
              <Typography>Block</Typography>
            </Stack>
          </TableCell>
        </StyledTableRow>
      </>
    ));
  };

  return (
    <div>
      {isloading ? (<Loader />) : (
        <Paper className="container">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Name to Search"
            onChange={(e) => setFilter(e.target.value)}
            inputProps={{ "aria-label": "Enter Name to Search" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleFilter}
          >
            <SearchIcon color="primary" />
          </IconButton>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" >
              <TableHead style={{ backgroundColor: "#80808054" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell><TableSortLabel onClick={() => sorting("username")}>Name</TableSortLabel></TableCell>
                  <TableCell onClick={() => sorting("email")}>Email</TableCell>
                  <TableCell>ViewProfile</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {isloading ? <Loader/> : displayUser()} */}
                {displayUser()}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userArray.length}
            rowsPerPage={rpg}
            page={pg}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </div>
  );
};

export default ManageUser;