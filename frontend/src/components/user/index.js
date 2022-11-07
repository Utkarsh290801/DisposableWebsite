import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AccountCircle } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import MonitorIcon from "@mui/icons-material/Monitor";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { Toaster } from "react-hot-toast";

const User = () => {
  const options = [
    {
      name: "Profile",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/hbvyhtse.json"
          trigger="hover"
          colors="primary:#e4e4e4"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      ),
      // <lord-icon
      //     src="https://cdn.lordicon.com/dqxvvqzi.json"
      //     trigger="hover"
      //     style={{width:"40px", height: "40px"}}>
      // </lord-icon>,
      link: "/user/userrprofile",
    },
    {
      name: "Preview",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/mrjuyheh.json"
          trigger="hover"
          colors="outline:#121331,primary:#231e2d,secondary:#4bb3fd,tertiary:#ebe6ef"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      ),
      link: "/user/preview",
    },
    {
      name: "Edit Site",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/alzqexpi.json"
          trigger="hover"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      ),
      link: "/user/editsite",
    },
    {
      name: "Monitor",
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/myroguwc.json"
          trigger="hover"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      ),
      link: "/user/monitor",
    },
    {
      name: "Manage Plans",
      icon: <ManageHistoryIcon />,
      link: "/user/planManager",
    },
  ];

  return (
    <div>
      <Sidebar options={options}>
        <Toaster />
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default User;
