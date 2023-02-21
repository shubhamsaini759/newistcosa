import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AboutDrop from "./NavButtons/AboutDrop";
import EventsDrop from "./NavButtons/EventsDrop";
import MemberDrop from "./NavButtons/MemberDrop";
import OpportunityDrop from "./NavButtons/OpportunityDrop";
import TeamDrop from "./NavButtons/TeamDrop";


const NavButon = () => {
  return (
    <>
      <Button variant="text" sx={{ color: "black" }} >Home</Button>
      <AboutDrop />
      <TeamDrop />
      <EventsDrop />
      <OpportunityDrop />
      <MemberDrop />
      <Button variant="text" sx={{ color: "black" }}>Contacts</Button>
    </>
  );
};

export default NavButon;
