import React from 'react'
import FooterGlob from '../../Components/Login/FooterGlob'
import FooterTwo from '../../Components/Login/FooterTwo'
import Navbar from '../../Components/Login/Navbar'
import Register from '../../Components/Register/Register'

const RegisterPage = () => {
  return (
    <div>
        <Navbar />
        <Register />
        <FooterGlob />
        <FooterTwo />
    </div>
  )
}

export default RegisterPage