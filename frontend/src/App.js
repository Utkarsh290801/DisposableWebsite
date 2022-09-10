import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import ContactUs from "./components/main/ContactUs";
import ResetPassword from "./components/main/ResetPassword";
import Home from "./components/main/Home";
import Admin from "./components/admin";
import ManageUser from "./components/admin/ManageUser";
import Profile from "./components/admin/Profile";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import Plans from "./components/main/Plans";
import NotFound from "./components/main/NotFound";
// import AddWebpage from "./components/user/AddWebpage";
import Authorisor from "./components/user/AuthUser";
import { UserProvider } from "./components/user/UserContext";
import { useState } from "react";
import UserrProfile from "./components/user/UserrProfile";
import SignIn from "./components/main/SignIn";
import Sign from "./components/main/Sign";
import Accounts from "./components/user/Accounts";
import ManageSites from "./components/admin/ManageSites";
import Sidebar from "./components/user/Sidebar";
import UpdatePassword from "./components/main/UpdatePassword";
import ChangePassword from "./components/main/ChangePassword";
import AdminAuthorisor from "./components/admin/Auth";
import WebpageManager from "./components/user/WebpageManager";
function App() {
  
    const [currentUser, setcurrentUser] = useState(
      JSON.parse(sessionStorage.getItem("user"))
    );
  return (
    <div>
      <UserProvider currentUser={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="sign" element={<Sign />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="resetpswd" element={<ResetPassword />} />
              <Route path="home" element={<Home />} />
              <Route path="updatepswd" element={<UpdatePassword />} />
            <Route path="changepswd" element={<ChangePassword/>} />
            <Route path="plan" element={<Plans />} />
              <Route element={<NotFound></NotFound>} path="notfound" />
              
          </Route>
            <Route path="manageuser" element={<ManageUser />} />
          <Route element={<AdminAuthorisor><Admin /></AdminAuthorisor>} path="admin">
              <Route path="profile" element={<Profile />} />
              <Route path="managesites" element={<ManageSites/>}/>
          </Route>
          <Route element={<User/>} path="user">
            <Route path="userprofile" element={<UserProfile />} />
              <Route path="userrprofile" element={<UserrProfile />} />
              
              <Route path="sidebar" element={<Sidebar />} />
              <Route path="accounts" element={<Accounts/>}/>
            {/* <Route path='addwebpage' element={<AddWebpage/>}/> */}
            <Route
              element={
                <Authorisor>
                  <WebpageManager />
                </Authorisor>
              }
              path="webpagemanager"
            />
          </Route>
          <Route element={<Navigate to="/main/notfound" />} path="*" />
          <Route element={<Navigate to="/main/home" />} path="/" />
        </Routes>
        </BrowserRouter>
        </UserProvider>
    </div>
  );
}

export default App;
