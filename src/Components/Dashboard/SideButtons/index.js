import { Menu } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserMoreDetail } from "../../../Utils/api/UserMoreDetail";

const SideButtons = () => {

    const navigate = useNavigate();



    const homeHandler = () =>{
      navigate('/home')
    }


  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
        }}
      >
        <Menu.Item onClick={homeHandler}>
          {/* <LaptopOutlined /> */}
          Home
        </Menu.Item>
        <Menu.SubMenu title="About">
          <Menu.Item>Memorandum</Menu.Item>
          <Menu.Item>History</Menu.Item>
          <Menu.Item>Principals</Menu.Item>
          <Menu.Item>president</Menu.Item>
          <Menu.Item>Patrons</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Team">
          <Menu.Item>Exicutive Commttiee</Menu.Item>
          <Menu.Item>Coordinators</Menu.Item>
          <Menu.Item>Life Members</Menu.Item>
          <Menu.Item>Members</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Events">
          <Menu.Item>Upcoming Events</Menu.Item>
          <Menu.Item>Videos</Menu.Item>
          <Menu.Item>Images</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Opportunity">
          <Menu.Item>career</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Membership">
          <Menu.Item>Lifetime Membership</Menu.Item>
          <Menu.Item>Contributions</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>Contacts</Menu.Item>
      </Menu>
    </>
  );
};

export default SideButtons;
