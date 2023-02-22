
import React, { useState } from 'react'
import SideButtons from '../SideButtons';
import {  MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";





const SideMenuIcon = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
    setOpen(true);
    };
    const onClose = () => {
    setOpen(false);
    };
  return (
    <>
        <MenuUnfoldOutlined  onClick={showDrawer} style={{  paddingRight : '1rem'}} />
        <Drawer
            placement='left'
            closable={true}
            onClose={onClose}
            open={open}
            width='200px'
        >
            <SideButtons />
        </Drawer>
    </>
  )
}

export default SideMenuIcon