import React from 'react'
import Login from '../../Components/Login/Login'
import Footer from '../../Components/Login/Footer';
import FooterTwo from '../../Components/Login/FooterTwo';

import Styles from '../../Styles/Login/LoginPage.module.css'
import Navbar from '../../Components/Login/Navbar';

const LoginPage = () => {
  return (
    <div className={Styles.loginPage} >
        <Navbar />
        <Login />
        <Footer />
        <FooterTwo />
    </div>
  )
}

export default LoginPage