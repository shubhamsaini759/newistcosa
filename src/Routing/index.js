import React from "react";
import { Route, Routes } from "react-router-dom";
import Complete from "../Components/Home/Complete/Complete";
import Steppers from "../Components/Home/Complete/Steppers";
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
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
