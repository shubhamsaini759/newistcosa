import React from "react";
import { MenuItem, Select } from "@mui/material";
import Styles from "../../../../Styles/Login/Navbar.module.css";
import { NavLink } from "react-router-dom";

const TeamDrop = () => {
  return (
    <>
      <Select
        value=""
        className={Styles.tea}
        size="small"
        displayEmpty
        sx={{ border: "transparent" }}
      >
        <MenuItem value="">
          <NavLink to="">Teams</NavLink>
        </MenuItem>
        <MenuItem value={1}>Executive Commutiee</MenuItem>
        <MenuItem value={2}>Coordinators</MenuItem>
        <MenuItem value={3}>Life Members</MenuItem>
        <MenuItem value={4}>Mentors</MenuItem>
      </Select>
    </>
  );
};

export default TeamDrop;
