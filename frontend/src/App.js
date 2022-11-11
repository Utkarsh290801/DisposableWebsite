import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import ContactUs from "./components/main/ContactUs";
import Reset from "./components/main/Reset";
import ResetPassword from "./components/main/ResetPassword";
import Home from "./components/main/Home";
import Admin from "./components/admin";
import ManageUser from "./components/admin/ManageUser";
import Profile from "./components/admin/Profile";
import User from "./components/user";
import NotFound from "./components/main/NotFound";
// import AddWebpage from "./components/user/AddWebpage";
import Authorisor from "./components/user/AuthUser";
import { UserProvider } from "./components/user/UserContext";
import { useState } from "react";
import UserrProfile from "./components/user/UserrProfile";
import SignIn from "./components/main/SignIn";
import SignUp from "./components/main/SignUp";
import WebBuilder from "./components/user/WebBuilder";
import Accounts from "./components/user/Accounts";
import ManageSites from "./components/admin/ManageSites";
import Sidebar from "./components/user/Sidebar";
import UpdatePassword from "./components/main/UpdatePassword";
import ChangePassword from "./components/main/ChangePassword";
import AdminAuthorisor from "./components/admin/Auth";
import WebpageManager from "./components/user/WebpageManager";
import Pricing from "./components/main/Pricing";
import Pricing1 from "./components/main/Pricing1";
import PlanManager from "./components/user/PlanManager";
import LivePage from "./components/main/LivePage";
import UserManager from "./components/admin/UserManager";
function App() {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
      <UserProvider currentUser={currentUser}>
        <BrowserRouter>
          <Routes>
            <Route path="live/:pageid" element={<LivePage />} />
            <Route element={<Main />} path="main">
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="resetpswd" element={<Reset />} />
              <Route path="reset" element={<ResetPassword />} />
              <Route path="home" element={<Home />} />
              <Route path="updatepswd" element={<UpdatePassword />} />
              <Route path="changepswd" element={<ChangePassword />} />
              {/* <Route path="pricing" element={<Pricing />} /> */}
              <Route path="pricing1" element={<Pricing1 />} />

              <Route element={<NotFound></NotFound>} path="notfound" />
            </Route>
            <Route
              element={
                <AdminAuthorisor>
                  <Admin />
                </AdminAuthorisor>
              }
              path="admin"
            >
              <Route path="manageuser" element={<ManageUser />} />
              <Route path="usermanager" element={<UserManager />} />
              <Route path="profile" element={<Profile />} />
              <Route path="managesites" element={<ManageSites />} />
            </Route>

            <Route
              element={
                <Authorisor>
                  <User />
                </Authorisor>
              }
              path="user"
            >
              <Route path="userrprofile" element={<UserrProfile />} />
              <Route path="webbuild" element={<WebBuilder />} />

              <Route path="planmanager" element={<PlanManager />} />

              <Route path="sidebar" element={<Sidebar />} />
              <Route path="accounts" element={<Accounts />} />
              {/* <Route path='addwebpage' element={<AddWebpage/>}/> */}
              <Route
                element={
                  <Authorisor>
                    <WebpageManager />
                  </Authorisor>
                }
                path="webpagemanager"
              />
              <Route element={<WebBuilder />} path="webbuild" />
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
