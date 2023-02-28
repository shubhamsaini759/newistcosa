import { Button, Form } from 'antd'
import React, { useState } from 'react'
import Styles from '../../../Styles/Step/ThirdStep.module.css'

import Dates from '../../GlobalComp/InputFields/Dates'
import Gender from '../../GlobalComp/InputFields/Gender'
import Inputs from '../../GlobalComp/InputFields/Inputs'
import Marital from '../../GlobalComp/InputFields/Marital'
import NumberInputs from '../../GlobalComp/InputFields/NumberInputs'
import TextAreaInputs from '../../GlobalComp/InputFields/TextAreaInputs'

const ThirdStep = () => {

    const [ marital, setMarital ] = useState('');

  return (
    <Form layout="vertical" style={{ width: "100%",padding: '1rem' }}>
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

        {
            marital ?
            <>
                <Inputs label='Spouse Name' />
                <Dates label='Aniversary Date' />
            </>
            :
            ''
        }
        </div>
        <div>
            {
                marital ?
                <>
                    <TextAreaInputs label='Family Details' length='400' />
                </>
                :
                ''
            }
        </div>

        <div className={Styles.fourthRow}>
            <Button  htmlType="submit" >Previous</Button>
            <Button type='primary'  htmlType="submit" >Next</Button>
        </div>
    </Form>
  )
}

export default ThirdStep