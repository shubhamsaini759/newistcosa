import React from 'react'
import AutoInputs from './DetailInputs/AutoInputs'
import Styles from '../../../../Styles/userLogin/Steps/StepOne.module.css'
import VisibleInputs from './DetailInputs/VisibleInputs'
import DisableInputs from './DetailInputs/DisableInputs'


const StepOne = () => {
  return (
   <div className={Styles.StepOne} >
    <div className={Styles.firstRow} >
      <DisableInputs sw='24%' aw='66%'  label='Batch Year' />
      <DisableInputs sw='24%' aw='66%'  label='Roll Number' />
      <DisableInputs sw='24%' aw='66%'  label='Full Name' />
    </div>
    <div className={Styles.secondRow}>
      <VisibleInputs sw='30%' aw='60%' disabled='true' label='Email Address'  />
      <VisibleInputs sw='30%' aw='60%' disabled='true' label='Phone Number'  />
      <AutoInputs sw='24%' aw='66%'  label='Pincode' />

    </div>
    <div className={Styles.thirdRow}>
      <AutoInputs sw='24%' aw='66%'  label='Country' />
      <AutoInputs sw='24%' aw='66%'  label='State' />
      <AutoInputs sw='24%' aw='66%'  label='City' />
    </div>
   
    <div>
  
    </div>
   </div>
  )
}

export default StepOne