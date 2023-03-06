import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SideButtons = () => {

    const navigate = useNavigate();


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
        <Menu.Item onClick={()=>navigate('/home')} >
          {/* <LaptopOutlined /> */}
          Dashboard 
        </Menu.Item>
        <Menu.Item >
          {/* <LaptopOutlined /> */}
          Home 
        </Menu.Item>
        <Menu.SubMenu title="Search">
          <Menu.Item onClick={()=>navigate('/home/search/usersearch')} >User</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Lists">
          <Menu.Item>Exicutive Commttiee</Menu.Item>
          <Menu.Item>Coordinators</Menu.Item>
          <Menu.Item>Life Members</Menu.Item>
          <Menu.Item>Members</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Jobs">
          <Menu.Item>Upcoming Events</Menu.Item>
          <Menu.Item>Videos</Menu.Item>
          <Menu.Item>Images</Menu.Item>
        </Menu.SubMenu>
      
        <Menu.SubMenu title="Settings">
          <Menu.Item onClick={()=>navigate('settings/userprofile')}>User Profile</Menu.Item>
          <Menu.Item onClick={()=>navigate('settings/editprofile')}>Edit Profile</Menu.Item>
          <Menu.Item onClick={()=>navigate('settings/changeimage')}>Change Image</Menu.Item>
          <Menu.Item onClick={()=>navigate('settings/changepassword')}>Change Password</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default SideButtons;
