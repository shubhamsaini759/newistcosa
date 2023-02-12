import React from 'react'
import Styles from '../../Styles/Login/FooterTwo.module.css'



const FooterTwo = () => {
  return (
    <div className={Styles.FooterTwo} >
        <div className={Styles.copyRight} >
            <h6>© Copyright 2022 ISTCOSA. All Right Reserved</h6>
            <p>Privacy Policy | Terms & Condition</p>
        </div>
        <div className={Styles.buttons} >
            <p>Home</p>
            <p>About</p>
            <p>Membership</p>
            <p>Life Member</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default FooterTwo