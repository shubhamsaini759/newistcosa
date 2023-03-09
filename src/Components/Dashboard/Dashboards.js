import { Alert, Layout, Menu, theme } from "antd";

import React from "react";
import SideButtons from "./SideButtons";
import Styles from "../../Styles/Dashboard/Dashboards.module.css";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { UserMoreDetail } from "../../Utils/api/UserMoreDetail";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;

const Dashboards = () => {
  const flag = useSelector((state) => state.editToastReducer.flag);
  const { data: userData } = useQuery("UserMOreDetail", UserMoreDetail);

  const navigate = useNavigate();
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const EditMoreDetails = () => {

    navigate("complete",{state : userData});
  };

  return (
    <Layout>
      {flag ? (
        <Alert
          message="Profile is Incomplete, Please Complete Your Profile"
          banner
          closable
          onClick={EditMoreDetails}
          style={{ cursor: "pointer" }}
          className={Styles.alert}
        />
      ) : (
        ""
      )}

      <Header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <LeftNav />
        </div>
        <div className={Styles.right}>
          <RightNav />
        </div>
      </Header>
      <Content className={Styles.details}>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider
            className={Styles.sider}
            style={{ background: colorBgContainer }}
            width={200}
          >
            <SideButtons />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "100vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © CopyRight 2022 ISTCOSA. All Right Reserved
      </Footer>
    </Layout>
  );
};
export default Dashboards;
