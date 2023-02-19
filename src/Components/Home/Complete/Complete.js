import React from "react";
import UserNav from "../../GlobalComp/userLogin/UserNav";
import Steppers from "./Steppers";
import NavButon from "../../Login/Navbar/NavButon";

import Styles from "../../../Styles/userLogin/Complete.module.css";
import FooterGlob from "../../Login/FooterGlob";

const Complete = () => {
  return (
    <>
      <UserNav />

      <div className={Styles.Side}>
        <div className={Styles.sideBar}>
          <NavButon />
        </div>
        <div className={Styles.holder}>
          <Steppers />
        </div>
      </div>
      <FooterGlob />
    </>
  );
};

export default Complete;
