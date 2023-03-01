import { Form, Input } from 'antd'
import React from 'react'

const EmailInputs = (props) => {
  return (
    <>
        <Form.Item
          
            name={props.name}
            label={props.label}
            style={{ width : '100%'}}
            rules={[
            {
                type: 'email',
            },
            {
              required: true,
              message: 'Please input your Email!',
            }
            ]}
        >
            <Input disabled={props.disabled} value={props.value} size={props.size}  />
        </Form.Item>
    </>
  )
}

export default EmailInputs