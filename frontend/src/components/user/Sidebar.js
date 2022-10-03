import * as React from "react";
import { styled, useTheme,alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useNavigate } from "react-router-dom";
import WebhookIcon from '@mui/icons-material/Webhook';
import { Avatar, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { Home } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { UserContext } from "./UserContext";
import app_config from "../../config";

const url = app_config.backend_url;
const drawerWidth = 240;
const settings = [{name:'Profile',link:'/user/userrprofile'}, {name:'Account',link:'/user/accounts'}, {name:'Logout',link:'/'}];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//Search Bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


// Change Here
export default function Sidebar({ children, options, title }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = React.useContext(UserContext);
  
  const logout = () => {
    //1.destroy session value
    sessionStorage.removeItem("user");
    //2. set the current user to null
    setLoggedIn(false);
    //3.navigate to login page
    navigate("/main/login");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //----- hover effect for MenuItem------
  const boxSX = {
    "&:hover": {
      color: 'black',
      backgroundColor: '#b1b0b9'
    },
  };
  
  const [currentUser, setCurrentUser] =useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#1d1b31" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Home">
              <IconButton
                size="large"
                color="inherit"
                onClick={(e) => navigate("/main/home")}
                sx={{ mr: 2 }}
              >
                <Home />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              size="large"
              sx={{ ml: 1,...boxSX }}
              color="inherit"
              onClick={(e) => navigate("/main/preview")}
            >
              Preview
            </Button>
          </Box>
          <Box sx={{ flexGrow: 30}}>
            <Button
              size="large"
              sx={{ ml: 1,...boxSX }}
              color="inherit"
              onClick={(e) => navigate("/main/pricing1")}
            >
              Plans
            </Button>
          </Box> 

 {/*------ SearchBar-------- */}
 <Search sx={{ mr: '5px' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/*--------- Login&Logout-------- */}

          {!loggedIn ?
            (
              <li className="nav">
                <NavLink className="btn btn-primary m-3" to="/main/signin">
                  Login Now
                </NavLink>
              </li>
          )
           :
            (
              <NavLink onClick={logout} className="btn btn-danger m-3"to="/">
                Logout
              </NavLink>
          )}
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={currentUser.avatar ? url+'/'+currentUser.avatar : "" }
                                 />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({name,link}) => (
                <MenuItem key={name} onClick={(e)=>navigate(link)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          {/* logo and name of website */}
          <WebhookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Web-X
          </Typography>
          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ background: '#1d1b31', color: 'white', height: '100%' }}>
          {options.map(({ name, icon, link }) => (
            <ListItemButton
              onClick={(e) => navigate(link)}
              key={name}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5, ...boxSX
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center", color: 'inherit'
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Change Here */}
        {children}
      </Box>
    </Box>
  );
}