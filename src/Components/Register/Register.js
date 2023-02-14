import React from 'react'
import Styles from '../../Styles/Register/Register.module.css'
import UserRegister from './RegInputs/UserRegister'

const Register = () => {
  return (
    <div className={Styles.register} >
    
      <div className={Styles.heading}>
        <h2>Alumni <span>Registration</span></h2>
        <hr></hr>
      </div>

      <div className={Styles.alumniData} >
        <UserRegister />
      </div>
    

    </div>
  )
}

export default Register