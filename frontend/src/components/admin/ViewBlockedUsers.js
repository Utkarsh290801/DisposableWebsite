import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../utils/Loader";

const ViewBlockedUsers = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const url = app_config.backend_url;
  const fetchBlockedUsers = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    const blockedUsersList = data.filter((user) => user.isBlocked);
    setBlockedUsers(blockedUsersList);
    setIsloading(false);
  };
  useEffect(() => {
    // Fetch user data from API or database

    fetchBlockedUsers();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUser = blockedUsers.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const toggleUserStatus = async (userId) => {
    try {
      const response = await fetch(`${url}/user/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isBlocked: !getUserStatus(userId) }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setBlockedUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
      } else {
        // Handle error response
        console.error("Failed to update user status");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Failed to update user status", error);
    }
  };

  const getUserStatus = (userId) => {
    const user = blockedUsers.find((user) => user._id === userId);
    return user ? user.isBlocked : false;
  };

  return (
    <div>
      <InputBase
        sx={{ flex: 1, width: 300, border: 1 }}
        placeholder="Enter Name/Email to Search"
        inputProps={{ "aria-label": "Enter Name to Search" }}
        value={searchTerm}
        onChange={handleSearch}
      ></InputBase>
      <SearchIcon color="primary" />
      {/* <h2>Blocked Users</h2> */}
      {isloading ? (
        <Loader />
      ) : blockedUsers.length === 0 ? (
        <p>No blocked users found.</p>
      ) : (
        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {filteredUser.length === 0 ? (
              <p>No user found.</p>
            ) : (
              filteredUser.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "6px 10px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        backgroundColor: user.isBlocked ? "#dc3545" : "#007bff",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleUserStatus(user._id)}
                      className={`status ${
                        user.isBlocked ? "blocked" : "active"
                      }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </td>
                  </td>
                  {/* Render additional user data as needed */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBlockedUsers;
