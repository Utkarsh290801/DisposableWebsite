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
import { MDBBtn } from "mdb-react-ui-kit";
import emailjs from "emailjs-com";

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
import { TableSortLabel } from "@mui/material";
import Loader from "../utils/Loader";

const ManageQuery = () => {
  const [query, setQuery] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("ASC");
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
      const sorted = [...query].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setQuery(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...query].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setQuery(sorted);
      setOrder("ASC");
    }
  };

  // -------------------pagination-------------------
  const [pg, setPage] = React.useState(0);
  const [rpg, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [responseText, setResponseText] = useState("");

  const handleResponseChange = (event) => {
    event.persist();
    setResponseText(event.target.value);
  };
  const sendEmailResponse = (recipientEmail, response) => {
    fetch("http://localhost:5000/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        to: selUser.email,
        subject: "Response to your query",
        // text: "This is your OTP for password reset " + generateOTP(),
        text: "Thank You for your query " + response,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      console.log(response);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: " Sent Successfully",
        });
      }
      return res.json();
    });
  };

  const handleSendResponse = () => {
    if (selUser && selUser.email) {
      sendEmailResponse(selUser.email, responseText);
    }
  };
  const url = app_config.backend_url;

  const getUserfromBackend = async () => {
    const response = await fetch(url + "/contact/getall");
    const data = await response.json();
    console.log(data);
    setQuery(data);
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
    p: 2,
  };
  const [open, setOpen] = React.useState(false);
  const [selUser, setSelUser] = useState(null);
  const handleOpen = (curr) => {
    setOpen(true);
    console.log(curr.contact);
    setSelUser(curr.contact);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUserfromBackend();
  }, []);

  const handleFilter = async () => {
    const response = await fetch(url + "/contact/getall");
    const data = await response.json();

    setQuery(
      data.filter((value) => {
        return value.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };
  const displayQuery = () => {
    return query.slice(pg * rpg, pg * rpg + rpg).map((contact) => (
      <>
        <StyledTableRow key={contact._id}>
          <TableCell>{contact._id}</TableCell>
          {/* <TableCell>{contact.mobile}</TableCell> */}
          <TableCell>{contact.name}</TableCell>
          <TableCell>{contact.email}</TableCell>
          {/* <TableCell>{contact.subject}</TableCell> */}
          {/* <TableCell>{contact.message}</TableCell> */}
          <TableCell>
            <button
              onClick={(e) => handleOpen({ contact })}
              className="btn btn-primary"
            >
              View
            </button>
            {selUser && (
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
                BackdropProps={{
                  style: {
                    backgroundColor: "rgba(251,251,251,0.1)",
                    backdropFilter: "blur(1px)",
                  },
                }}
              >
                <Box sx={style}>
                  <div class="mb-3" style={{ borderRadius: "5px" }}>
                    <div class="row g-0">
                      <div class="col-md-4 text-center">
                        {/* // style={{border-top-left-radius: ".5rem", border-bottom-left-radius: ".5rem"}}> */}
                        <Avatar
                          src={url + "/" + selUser?.avatar}
                          sx={{ width: 96, height: 96, margin: "auto" }}
                        />

                        <h3>{selUser.name}</h3>
                        <div className="d-flex justify-content-between">
                          <h5>Mobile Number</h5>
                          <h5>{selUser.mobile}</h5>
                        </div>

                        <h5>Created at:</h5>
                        <p>{selUser.createdAt}</p>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                          <h3>Contact Information</h3>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">{selUser.email}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>UserID</h6>
                              <p class="text-muted">{selUser._id}</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6>Subject</h6> <p>{selUser.subject}</p>
                          </div>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-6 mb-3 d-flex justify-content-between">
                              <h6>Message</h6>
                              <p class="text-muted">{selUser.message}</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="responseText"
                              className="form-label"
                            >
                              Response:
                            </label>
                            <textarea
                              className="form-control"
                              id="responseText"
                              rows={3}
                              value={responseText}
                              onChange={handleResponseChange}
                            />
                          </div>
                          <div class="d-flex justify-content-start">
                            <button
                              className="btn btn-primary"
                              onClick={handleSendResponse}
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
            )}
          </TableCell>
          <TableCell>{contact.createdAt}</TableCell>
          {/* <TableCell>{contact.comment}</TableCell> */}

          {/* <TableCell>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteUser(user._id);
              }}
            >
              <i class="fa-solid fa-trash fa-lg"></i>
            </button>
          </TableCell> */}
          <TableCell>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Read</Typography>
              <Switch
              // checked={contact.isRead}
              // onChange={(e, v) => {
              //   changeStatusOfContact(contact._id, v);
              // }}
              />
              <Typography>UnRead</Typography>
            </Stack>
          </TableCell>
          <TableCell></TableCell>
        </StyledTableRow>
      </>
    ));
  };

  return (
    <div>
      {isloading ? (
        <Loader />
      ) : (
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
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead style={{ backgroundColor: "#80808054" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  {/* <TableCell>Mobile</TableCell> */}
                  <TableCell>
                    <TableSortLabel onClick={() => sorting("username")}>
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell onClick={() => sorting("email")}>Email</TableCell>
                  {/* <TableCell>Subject</TableCell> */}
                  <TableCell>Message</TableCell>
                  <TableCell>Created At</TableCell>
                  {/* <TableCell>Comment</TableCell> */}
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{displayQuery()}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={query.length}
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

export default ManageQuery;
