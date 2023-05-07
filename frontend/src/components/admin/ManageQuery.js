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
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
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
  const [rpg, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [responseText, setResponseText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleResponseChange = (event) => {
    event.persist();
    setResponseText(event.target.value);
  };

  const sendEmailResponse = (recipientEmail, response) => {
    fetch("http://localhost:5000/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        to: recipientEmail,
        subject: "Response to your query",
        text:
          " Thank you for reaching out to us. We have received your query and would like to provide you with the following response" +
          response,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
        console.log(response);
        if (res.status === 200) {
          toast.success("Response Send Successful");
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleReply = () => {
    if (responseText.trim() === "") {
      toast.warning("Response message cannot be empty!");
      return;
    }

    if (selectedUser) {
      sendEmailResponse(selectedUser.email, responseText);
      setResponseText("");
    }
  };

  useEffect(() => {
    // Fetch query data from API
    fetch(`${app_config.backend_url}/contact/getall`)
      .then((response) => response.json())
      .then((data) => {
        setQuery(data);
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsloading(false);
      });
  }, []);

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <SearchIcon />
        <InputBase
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Stack>

      {isloading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    direction={order}
                    onClick={() => sorting("name")}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Response</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {query
                .filter((item) =>
                  item.name.toLowerCase().includes(filter.toLowerCase())
                )
                .slice(pg * rpg, pg * rpg + rpg)
                .map((item, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>{item._id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.createdAt}</TableCell>
                    <TableCell>
                      {item.response ? (
                        <Typography>{item.response}</Typography>
                      ) : (
                        <Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <MDBBtn onClick={() => handleUserSelection(item)}>
                              Reply
                            </MDBBtn>
                          </Box>
                        </Box>
                      )}
                    </TableCell>
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
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={query.length}
            rowsPerPage={rpg}
            page={pg}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
      {selectedUser && (
        <Modal open={true} onClose={() => setSelectedUser(null)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 700,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="div">
              Respond to Query
            </Typography>
            <Box sx={{ mt: 2 }}>
              <div class="row pt-1">
                <div class="col-6 mb-3">
                  <h6>Email</h6>
                  <p class="text-muted">{selectedUser.email}</p>
                </div>
                <div class="col-6 mb-3">
                  <h6>UserID</h6>
                  <p class="text-muted">{selectedUser._id}</p>
                </div>
              </div>
              <div className="col-6 mb-3 d-flex justify-content-between">
                <h6>Subject</h6>{" "}
                <p class=" font-weight-bold">{selectedUser.subject}</p>
              </div>
              <hr class="mt-0 mb-4" />
              <div class="row pt-1">
                <div class="col-6 mb-3 d-flex justify-content-between">
                  <h6>Message</h6>
                  <p class="text-muted">{selectedUser.message}</p>
                </div>
              </div>
              {/* <Typography variant="body1">
              <h6>Email</h6>
                              <p class="text-muted">{selectedUser.email}</p>
                Email: {selectedUser.email}
              </Typography> */}
              {/* <Typography variant="body1">
                Message: {selectedUser.message}
              </Typography> */}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Avatar sx={{ marginRight: 1 }} />
              <InputBase
                placeholder="Write a response"
                multiline
                rows={4}
                value={responseText}
                onChange={handleResponseChange}
                sx={{
                  minWidth: 400,
                  marginRight: 1,
                }}
              />
              <MDBBtn onClick={handleReply}>Send</MDBBtn>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ManageQuery;
