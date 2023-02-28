import { Button, Form } from 'antd'
import React from 'react'
import Styles from '../../../Styles/Step/FourthStep.module.css'
import Inputs from '../../GlobalComp/InputFields/Inputs'
import TextAreaInputs from '../../GlobalComp/InputFields/TextAreaInputs'

const FourthStep = () => {
  return (
    <Form layout="vertical" className={Styles.SecondStep} style={{ width: "100%" }}>
        <div className={Styles.firstRow} >
            <Inputs label='Your ISTC Nick Name' />
            <Inputs label='ISTC Friends / Hostel Room Mates' />
        </div>
        <div className={Styles.secondRow} >
            <TextAreaInputs label='Your Memories About ISTC' length='400' />
            <TextAreaInputs label='Your Comments About ISTCOSA' length='400' />
        
        </div>
        <div className={Styles.thirdRow} >
        <TextAreaInputs label='Search Keywords(keywords which aloow others to search you)' length='400' />

        </div>
        <div className={Styles.fourthRow} >
            <Button  htmlType="submit" >Previous</Button>
            <Button type='primary'  htmlType="submit" >Done</Button>
        </div>
    
    </Form>
  )
}

export default FourthStep