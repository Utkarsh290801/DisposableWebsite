import React, { useState, useEffect } from "react";
import app_config from "../../config";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../utils/Loader";

const AllUserList = () => {
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const url = app_config.backend_url;
  const fetchUsers = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    // setUsers(data);
    const usersList = data.filter((user) => !user.isBlocked);
    setUsers(usersList);
    setIsloading(false);
  };
  const fetchUserList = async () => {
    const response = await fetch(url + "/user/getall");
    const data = await response.json();
    setUserList(data);
  };
  useEffect(() => {
    // Fetch user data from API or database

    fetchUsers();
    fetchUserList();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUser = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  // const toggleUserStatus = (userId) => {
  //   setUsers(prevUsers => {
  //     return prevUsers.map(user => {
  //       if (user._id === userId) {
  //         return {
  //           ...user,
  //           isBlocked: !user.isBlocked
  //         };
  //       }
  //       return user;
  //     });
  //   });
  // };
  const toggleUserStatus = async (userId) => {
    try {
      const response = await fetch(`${url}/user/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isBlocked: getUserStatus(userId) }),
      });

      //       if (response.ok) {
      //         const updatedUser = await response.json();
      //         fetchUsers();
      //         setUsers((prevUsers) =>
      //           prevUsers.map((user) =>
      //             user._id === updatedUser._id ? updatedUser : user
      //           )
      //         );
      //       } else {
      //         // Handle error response
      //         console.error("Failed to update user status");
      //       }
      //     } catch (error) {
      //       // Handle fetch error
      //       console.error("Failed to update user status", error);
      //     }
      //   };

      //   const getUserStatus = (userId) => {
      //     const user = users.find((user) => user._id === userId);
      //     return user ? user.isBlocked : false;
      // };
      // useEffect(() => {
      //   fetchUsers();
      // }, []);
      if (response.ok) {
        const updatedUser = await response.json();
        const updatedActiveUsers = [...users];
        const userIndex = updatedActiveUsers.findIndex(
          (user) => user._id === updatedUser._id
        );
        if (userIndex !== -1) {
          // User is already in active user list, so remove them
          updatedActiveUsers.splice(userIndex, 1);
        } else {
          // User is not in active user list, so add them
          updatedActiveUsers.push(updatedUser);
        }

        setUsers(updatedActiveUsers);
      } else {
        console.error("Failed to update user status");
      }
    } catch (error) {
      console.error("Failed to update user status", error);
    }
  };

  const getUserStatus = (userId) => {
    const user = userList.find((user) => user._id === userId);
    return user ? !user.isBlocked : false;
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
      {/* <h2>All Users</h2> */}
      {/* Show the Loader component if data is still loading */}
      {isloading ? (
        <Loader />
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUserList;
