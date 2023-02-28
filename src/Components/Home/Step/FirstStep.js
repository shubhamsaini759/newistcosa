import { Button, Form } from 'antd'
import React from 'react'
import Inputs from '../../GlobalComp/InputFields/Inputs'
import AutoInputs from '../../GlobalComp/InputFields/AutoInputs'

import Styles from '../../../Styles/Step/FirstStep.module.css' 

const FirstStep = () => {
  return (
    <Form layout="vertical" style={{ width: "100%",padding: '1rem' }}>
        <div className={Styles.firtsRow}>
            <Inputs label='Batch No.' />
            <Inputs label='Roll No.' />
            <Inputs label='Full name' />
        </div>
        <div className={Styles.secondRow}>
            <Inputs label='Email' />
            <Inputs label='Phone Number' />
            <Inputs label='Pincode' />
        </div>
        <div className={Styles.thirdRow}>
            <AutoInputs label='Country' />
            <AutoInputs label='State' />
            <AutoInputs label='City' />
        </div>
        <div className={Styles.fourthRow} >
          <Button type="primary" htmlType="submit" >Next</Button>
        </div>
    
    </Form>
  )
}

export default FirstStep