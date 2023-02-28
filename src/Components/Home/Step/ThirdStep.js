import { Button, Form } from 'antd'
import React from 'react'
import Styles from '../../../Styles/Step/ThirdStep.module.css'

import Dates from '../../GlobalComp/InputFields/Dates'
import Gender from '../../GlobalComp/InputFields/Gender'
import Marital from '../../GlobalComp/InputFields/Marital'
import NumberInputs from '../../GlobalComp/InputFields/NumberInputs'
import TextAreaInputs from '../../GlobalComp/InputFields/TextAreaInputs'

const ThirdStep = () => {
  return (
    <Form layout="vertical" style={{ width: "100%" }}>
        <div className={Styles.firstRow} >
            <Gender />
            <Dates label='Date of Birth' />
            <NumberInputs label='Whatsapp Number' />
        </div>
        <div className={Styles.secondRow} >
            <TextAreaInputs label='Residential Address' length='200' />
            <TextAreaInputs label='About Myself' length='200' />
        </div>
        <div className={Styles.thirdRow} >
            <Marital />
        </div>
        <div className={Styles.fourthRow}>
            <Button  htmlType="submit" >Previous</Button>
            <Button type='primary'  htmlType="submit" >Next</Button>
        </div>
    </Form>
  )
}

export default ThirdStep