import {  Layout,  theme } from 'antd';
import { Outlet } from 'react-router-dom';
import LeftNav from '../LeftNav';
import IstcNav from './IstcNav';
const { Header, Content, Footer } = Layout;

const Istcosa = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout >
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
        <div >
          <IstcNav />
        </div>

      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 24px", minHeight: "100vh" }}
      >
        <Layout style={{ padding: "24px 5rem", background: colorBgContainer }}>
            <Outlet />
        </Layout>

      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Istcosa;