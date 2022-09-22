import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AccountCircle } from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import MonitorIcon from '@mui/icons-material/Monitor';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const User = () => {
  const options = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/user/userrprofile",
    },
    {
      name: "Preview",
      icon: <PreviewIcon/>,
      link: "/user/preview",
    },
    {
      name: "Edit Site",
      icon: <EditIcon />,
      link: "/user/editsite",
    },
    {
      name: "Monitor",
      icon: <MonitorIcon/>,
      link: "/user/monitor",
    },
    {
      name: "Manage Plans",
      icon: <ManageHistoryIcon/>,
      link: "/user/planManager",
    },

  ];


  return (
    <div>
       <Sidebar options={options}>
        <Outlet />
      </Sidebar>
    </div>
  )
}

export default User