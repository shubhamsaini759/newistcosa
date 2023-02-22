import { MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import {  Avatar, Badge, Input,Drawer  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Styles from '../../../Styles/Dashboard/RightNav.module.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NotificationsIcon from '@mui/icons-material/Notifications';
const { Search } = Input;



const SideButtonIcon = () => {

    const onSearch = (value) => console.log(value);

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
            placement='right'
            closable={true}
            onClose={onClose}
            open={open}
            width='200px'
        >
            <>
                <div className={Styles.av} >
                    <Avatar size='20' icon={<UserOutlined />} />
                    <p>Profile</p>
                </div>
                <div className={Styles.pre} >
                    <CurrencyRupeeIcon />
                    <p>Premium</p>
                </div>
                <div className={Styles.noti} >
                    <Badge count={5}>
                        <NotificationsIcon shape="square" size="large"/>
                    </Badge>
                    <p>Notifications</p>
                </div>
                
                <div className={Styles.find} >
                    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 160 }} />
                </div>
            </>
        </Drawer>
    </>
    )
}
export default SideButtonIcon
