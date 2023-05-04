import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AccountCircle } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  const options = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/admin/admindashboard",
    },
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Manage Users",
      icon: <ManageAccountsIcon />,
      link: "/admin/manageuser",
    },
    {
      name: "Manage Query",
      icon: <QueryStatsIcon />,
      link: "/admin/managequery",
    },
  ];

  return (
    <div>
      <Sidebar title="Admin Dashboard /" options={options}>
        <Outlet />
      </Sidebar>
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default Admin;
