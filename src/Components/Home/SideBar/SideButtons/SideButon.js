import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import Styles from '../../../../Styles/userLogin/Sidebar.module.css'
import AboutDrop from "./SideClicks/AboutDrop";
import EventsDrop from "./SideClicks/EventsDrop";
import MemberDrop from "./SideClicks/MemberDrop";
import OpportunityDrop from "./SideClicks/OpportunityDrop";
import TeamDrop from "./SideClicks/TeamDrop";

const Sidebuton = () => {
  return (
    <>
      <Button variant="text" className={Styles.button}>
        <NavLink
          to=""
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

export default Sidebuton;
