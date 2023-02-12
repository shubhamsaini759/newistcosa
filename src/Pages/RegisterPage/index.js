import React from 'react'
import Footer from '../../Components/Login/Footer'
import FooterTwo from '../../Components/Login/FooterTwo'
import Navbar from '../../Components/Login/Navbar'
import Register from '../../Components/Register/Register'

const RegisterPage = () => {
  return (
    <div>
        <Navbar />
        <Register />
        <Footer />
        <FooterTwo />
    </div>
  )
}

export default RegisterPage