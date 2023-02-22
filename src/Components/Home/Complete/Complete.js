import React, { useState } from "react";
import UserNav from "../../GlobalComp/userLogin/UserNav";
import Steppers from "./Steppers";
import NavButon from "../../Login/Navbar/NavButon";

// import Styles from "../../../Styles/userLogin/Complete.module.css";
import Styles from "../../../Styles/userLogin/Sidebar.module.css";
import FooterGlob from "../../Login/FooterGlob";
import Sidebuton from "../SideBar/SideButtons/SideButon";

import SideButtons from "../../Dashboard/SideButtons";
import Dashboards from "../../Dashboard/Dashboards";
const Complete = () => {

  return (
    <>
      {/* <UserNav />

      <div className={Styles.Side}>
        <div className={Styles.sideBar}>
          <Sidebuton />
        </div>
        <div className={Styles.holder}>
          <Steppers />
        </div>
      </div>
      <FooterGlob /> */}
      <Dashboards />

      
    </>
  );
};

export default Complete;
