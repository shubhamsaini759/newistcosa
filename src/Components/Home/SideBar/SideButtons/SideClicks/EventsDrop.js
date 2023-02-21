import React from "react";
import { MenuItem, Select } from "@mui/material";

import Styles from '../../../../../Styles/userLogin/Sidebar.module.css';

import { NavLink } from "react-router-dom";

const EventsDrop = () => {
  return (
    <>
      <Select
        value=""
        className={Styles.eve}
        size="small"
        displayEmpty
        sx={{ border: "transparent" }}
      >
        <MenuItem value="" sx={{ border: "transparent" }}>
          <NavLink to="">Events</NavLink>
        </MenuItem>
        <MenuItem value={1}>Upcoming Events</MenuItem>
        <MenuItem value={2}>Images</MenuItem>
        <MenuItem value={3}>Videos</MenuItem>
      </Select>
    </>
  );
};

export default EventsDrop;
