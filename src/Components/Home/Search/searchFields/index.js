import { Button, Form } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'
import Styles from '../../../../Styles/Search/userSearch.module.css'
import AutoInputs from '../../../GlobalComp/InputFields/AutoInputs'
import EmailInputs from '../../../GlobalComp/InputFields/EmailInputs'
import Inputs from '../../../GlobalComp/InputFields/Inputs'
import NumberInputs from '../../../GlobalComp/InputFields/NumberInputs'

const SearchFields = () => {
  const [form] = Form.useForm();
  const val = {
    FullName : '',
    BatchYear : '',
    RollNumber : '',
    Email : '',
    PhoneNumber : '',
    CompanyName : '',
    Country : '',
    State : '',
    City : '',
    NickName : '',
    Badges : '',
    Members : ''
  }

  return (
    <Form form={form} initialValues={val} layout='vertical'  className={Styles.searchFields} >
        <div className={Styles.firstRow} >
          <Inputs label='Full Name' name='FullName' />
          <AutoInputs label='Batch Year' name='BatchYear' />
          <AutoInputs label='Roll Number' name='RollNumber' />
        </div>
        <div className={Styles.secondRow} >
          <EmailInputs label='Email ID' name='Email' />
          <NumberInputs label='Mobile Number' name='PhoneNumber' />
          <Inputs label='Company Name' name='CompanyName' />
        </div>
          <div className={Styles.thirdRow} >
          <AutoInputs label='Country' name='Country'  />
          <AutoInputs label='State' name='State' />
          <AutoInputs label='City' name='City' />
        </div>
        <div className={Styles.fourthRow} >
            <Inputs label='ISTC Nick Name' name='NickName' />
            <Inputs label='Badges' name='Badges' />
            <Inputs label='Members' name='Members' />
        </div>
        <div className={Styles.fifthRow}>
          <Button>Reset</Button>
          <Button type="primary">Search</Button>
        </div>
    </Form>
  )
}

export default SearchFields