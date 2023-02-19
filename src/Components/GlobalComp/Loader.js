import React from "react";
import { Spin } from "antd";
import Styles from "../../Styles/Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.spinner}>
      <Spin />
    </div>
  );
};

export default Loader;
