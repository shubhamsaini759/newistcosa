import React from 'react'
import Styles from '../../../Styles/Dashboard/RightNav.module.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {  Avatar, Badge, Input,  } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import SideButtonIcon from '../SideButtonIcon/Index';
const { Search } = Input;


const RightNav = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className={Styles.rightSide}>
      <div className={Styles.right}>
        <div className={Styles.search} >
          <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <div className={Styles.Premium}>
          <CurrencyRupeeIcon />
        </div>
        <div className={Styles.notifications}>
          <Badge count={5}>
          <NotificationsIcon shape="square" size="large"/>
          </Badge>
        </div>
        <div className={Styles.avatar} >
          <Avatar size='20' icon={<UserOutlined />} />
        </div>
      </div>
      <div className={Styles.menu} >
          <SideButtonIcon />
      </div>
    </div>
  )
}

export default RightNav