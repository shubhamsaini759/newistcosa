import React from "react";
import { Route, Routes } from "react-router-dom";
import Complete from "../Components/Home/Complete/Complete";
import Steppers from "../Components/Home/Complete/Steppers";
import EditProfile from "../Components/Home/Settings/EditProfile";
import UserProfile from "../Components/Home/Settings/UserProfile";
import Step from "../Components/Home/Step";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
// import Protected from "./Protected";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path='/home' element={<Protected Component = {Dashboard} /> } />
              <Route path='/Information' element={<Protected Component = {Complete} /> } />  */}

            <Route path="/home" element={<Dashboard />} >
            <Route path="edit" element={<Steppers />} />
            <Route path='complete' element={<Step/> } />
            <Route path='settings/editprofile' element={<EditProfile /> } />
            <Route path='settings/userprofile' element={<UserProfile /> } />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
