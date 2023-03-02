import { Form } from 'antd'
import React from 'react'
import Styles from '../../../../Styles/EditProfile/ChangePassword.module.css'
import PasswordInputs from '../../../GlobalComp/InputFields/PasswordInputs'

const ChangePassword = () => {
    const [form] = Form.useForm();
    const val = {
        OldPassword : '',
        NewPassword : '',
        ConfirmPassword : '',
    }

    const oldHandler = (data) =>{
        console.log(data)
    }
    const newHandler = (data) =>{
        console.log(data)
    }
    const confirmHandler = (data) =>{
        console.log(data)
    }

  return (
    <div className={Styles.password}>
        <div className={Styles.defination} >
            <p>Change Password</p>
        </div>
        <div className={Styles.changeBox} >
            <Form form={form} initialValues={val} layout='vertical'>
                <PasswordInputs name='OldPassword' label='Old Password' handler={oldHandler} />
                <PasswordInputs name='NewPassword' label='New Password' handler={newHandler} />
                <PasswordInputs name='ConfirmPassword' label='Confirm Password' handler={confirmHandler} />
            </Form>
        </div>
    </div>
  )
}

export default ChangePassword