import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AboutDrop from "./NavButtons/AboutDrop";
import EventsDrop from "./NavButtons/EventsDrop";
import MemberDrop from "./NavButtons/MemberDrop";
import OpportunityDrop from "./NavButtons/OpportunityDrop";
import TeamDrop from "./NavButtons/TeamDrop";

import Styles from "../../../Styles/userLogin/Complete.module.css";

const NavButon = () => {
  return (
    <>
      <Button variant="text" className={Styles.button}>
        {" "}
        <NavLink
          to="/information"
          className={({ isActive }) => (isActive ? Styles.active : undefined)}
        >
          Home
        </NavLink>
      </Button>
      <AboutDrop />
      <TeamDrop />
      <EventsDrop />
      <OpportunityDrop />
      <MemberDrop />
      <Button variant="text" sx={{ color: "black" }}>
        <NavLink to="">Contact</NavLink>
      </Button>
    </>
  );
};

export default NavButon;
