import { Form, Input } from 'antd'
import React from 'react'

const PasswordInputs = (props) => {
  return (
    <Form.Item
    
      label={props.label}
      name={props.name}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      style={{ width : "100%" }} 
    >
      <Input.Password onChange={(e)=>props.handler(e.target.value)} />
    </Form.Item>
  )
}

export default PasswordInputs