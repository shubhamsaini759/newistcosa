import React from "react";
import { Route, Routes } from "react-router-dom";
import Istcosa from "../Components/Dashboard/Istcosa";
import UserSearch from "../Components/Home/Search/UserSearch";
import ChangeImage from "../Components/Home/Settings/ChangeImage";
import ChangePassword from "../Components/Home/Settings/ChangePassword";

import EditProfile from "../Components/Home/Settings/EditProfile";
import UserProfile from "../Components/Home/Settings/UserProfile";
import Step from "../Components/Home/Step";
import UserRegister from "../Components/Register/RegInputs/UserRegister";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

// import Protected from "./Protected";

const Routing = () => {
  return (
    <>
      <Routes>



      {/* <Route path='/' element={<Istcosa /> } >
          <Route path="/" element={<UserRegister /> } />
      </Route> */}
            {/* <Route path='/home' element={<Protected Component = {Dashboard} /> } />
              <Route path='/Information' element={<Protected Component = {Complete} /> } />  */}


        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      


        <Route path="/home" element={<Dashboard />}>
          <Route path="complete" element={<Step />} />

          <Route path="search/usersearch" element={ <UserSearch /> } />

          <Route path="settings/editprofile" element={<EditProfile />} />
          <Route path="settings/userprofile" element={<UserProfile />} />
          <Route path="settings/changeimage" element={<ChangeImage />} />
          <Route path="settings/changepassword" element={<ChangePassword />} />

        </Route>
      </Routes>
    </>
  );
};

export default Routing;
