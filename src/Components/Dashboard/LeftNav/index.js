import React from 'react'
import Styles from '../../../Styles/Dashboard/Dashboards.module.css'
import logo from '../../../Assets/Login/Logo.png'
import SideMenuIcon from '../SideMenuIcon'
const LeftNav = () => {
  return (
    <>
        <div className={Styles.sideMenu} >
            <SideMenuIcon />
        </div>
        <div className={Styles.logo} >
            <img src={logo} alt='' style={{ width : '150px'}} />
        </div>
    
    </>
  )
}

export default LeftNav