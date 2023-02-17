import React from 'react'
import Login from '../../Components/Login/Login'
import FooterTwo from '../../Components/Login/FooterTwo';

import Styles from '../../Styles/Login/LoginPage.module.css'
import Navbar from '../../Components/Login/Navbar';
import FooterGlob from '../../Components/Login/FooterGlob';

const LoginPage = () => {
  return (
    <div className={Styles.loginPage} >
        <Navbar />
        <Login />
        <FooterGlob />
        <FooterTwo />
    </div>
  )
}

export default LoginPage