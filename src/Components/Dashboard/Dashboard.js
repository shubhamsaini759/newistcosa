import { Layout, Menu, theme } from "antd";
import React from "react";
import Complete from "../Home/Complete/Complete";
import Steppers from "../Home/Complete/Steppers";
import SideButtons from "./SideButtons";
const { Header, Content, Footer, Sider } = Layout;

const items1 = [
  {
    label: `LOGO`,
  },
];

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" items={items1} />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <SideButtons />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: "100vh",
            }}
          >
            {/* Content */}
            <Steppers />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ISTCOSA CopyRight ©2023
      </Footer>
    </Layout>
  );
};
export default Dashboard;
