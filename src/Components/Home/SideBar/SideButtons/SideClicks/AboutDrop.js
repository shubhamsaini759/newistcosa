import React from "react";
import { MenuItem, Select } from "@mui/material";
import Styles from '../../../../../Styles/userLogin/Sidebar.module.css';
import { NavLink } from "react-router-dom";

const AboutDrop = () => {
  return (
    <>
      <Select className={Styles.ab} value="" size="small" displayEmpty>
        <MenuItem value="">
          <NavLink to="">About</NavLink>
        </MenuItem>
        <MenuItem value={1}>Memorandum</MenuItem>
        <MenuItem value={2}>History</MenuItem>
        <MenuItem value={3}>Principals</MenuItem>
        <MenuItem value={4}>Presidents</MenuItem>
        <MenuItem value={5}>Patrons</MenuItem>
      </Select>
    </>
  );
};

export default AboutDrop;
