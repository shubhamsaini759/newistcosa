import { Form, Input } from 'antd'
import React from 'react'

const EmailInputs = (props) => {
  return (
    <>
        <Form.Item
            name={props.name}
            label={props.label}
            style={{ width : '100%'}}
            rules={props.rule}
        >
            <Input placeholder='Email Address' disabled={props.disabled} onChange={(e)=>props.handler(e.target.value)} size={props.size}  />
        </Form.Item>
    </>
  )
}

export default EmailInputs