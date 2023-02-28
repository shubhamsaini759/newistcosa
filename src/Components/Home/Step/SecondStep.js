import { Button, Form } from 'antd'
import React, { useState } from 'react'
import Styles from '../../../Styles/Step/SecondStep.module.css'
import Dates from '../../GlobalComp/InputFields/Dates'
import Inputs from '../../GlobalComp/InputFields/Inputs'
import ProfessionList from '../../GlobalComp/InputFields/ProfessionList'
import TextAreaInputs from '../../GlobalComp/InputFields/TextAreaInputs'

const SecondStep = () => {
    const [ profession, setProfession ] = useState('student')
  return (
    <Form layout="vertical" className={Styles.SecondStep} style={{ width: "100%",padding: '1rem' }}>

        <div className={Styles.firstRow}>
            <ProfessionList label='Profession' />
        </div>
        { 
            profession === '' ?
             "" 
            :
            profession === 'student'? 
            <>
            <div className={Styles.ofirstRow}>
                <Inputs label='College / University' />
                <Inputs label='Degree ' />
            </div>
            <div className={Styles.osecondRow}>
                <Inputs label='Skills' />
                <Dates label='Joining Year' />
                <Dates label='Expected Complition Year' />
            </div>
        
        </>
        :
        <>
            <div className={Styles.secondRow}>
                <Inputs label='Job Designation' />
                <Inputs label='Recent company' />
                <Button >Add</Button>
            </div>
            <div className={Styles.thirdRow}>
                <Dates label='From Date' />
                <Dates label='To Date' />
            </div>
            <div className={Styles.fourthRow}>
                <TextAreaInputs label='Describe Your work profile' length='200' />
            </div>
            
        </>
    }

            <div className={Styles.fifthRow}>
                <Button  htmlType="submit" >Previous</Button>
                <Button type='primary'  htmlType="submit" >Next</Button>
            </div>
    </Form>
  )
}

export default SecondStep