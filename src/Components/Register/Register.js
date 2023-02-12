import React from 'react'
import RegInput from './RegInputs/RegInput'
import Styles from '../../Styles/Register/Register.module.css'
import Demo from './RegInputs/demo'

const Register = () => {
  return (
    <div className={Styles.register} >
    
      <div className={Styles.heading}>
        <h2>Alumni <span>Registration</span></h2>
        <hr></hr>
      </div>

      <div className={Styles.alumniData} >
        <Demo />
      </div>
    

    </div>
  )
}

export default Register