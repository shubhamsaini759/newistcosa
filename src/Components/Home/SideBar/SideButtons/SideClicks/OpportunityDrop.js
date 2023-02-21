import React from "react";
import { MenuItem, Select } from "@mui/material";
import Styles from '../../../../../Styles/userLogin/Sidebar.module.css';

import { NavLink } from "react-router-dom";

const OpportunityDrop = () => {
  return (
    <>
      <Select
        value=""
        className={Styles.opp}
        size="small"
        displayEmpty
        sx={{ border: "transparent" }}
      >
        <MenuItem value="">
          <NavLink to="">Opportunity</NavLink>
        </MenuItem>
        <MenuItem value={1}>Career</MenuItem>
      </Select>
    </>
  );
};

export default OpportunityDrop;
