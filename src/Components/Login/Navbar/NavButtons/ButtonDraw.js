import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import NavButon from "../NavButon";
import RegSearch from "./RegSearch";
import Styles from "../../../../Styles/Login/ButtonDraw.module.css";

const Buttondraw = (props) => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        aria-label="logo"
        onClick={() => setFlag(true)}
      >
        <MenuIcon sx={{ color: "brown" }} />
      </IconButton>

      <Drawer anchor={props.anchor} open={flag} onClose={() => setFlag(false)}>
        <Box p={2} width="auto" textAlign="start" role="presentation">
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div className={Styles.dropdownHolder}>
              <NavButon />
            </div>
            <div className={Styles.searchButtons}>
              <RegSearch />
            </div>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Buttondraw;
