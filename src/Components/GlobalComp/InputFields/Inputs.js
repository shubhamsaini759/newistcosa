import { Form, Input } from 'antd'
import React from 'react'

const Inputs = (props) => {
  return (
    <>
        <Form.Item
            label={props.label}
            name={props.name}
            style={{ width :'100%' }}
            rules={[
            {
                required: true,
                message: 'Please input your details!',
            },
            ]}
        >
            <Input value={props.value} size={props.size}  />
        </Form.Item>
    </>
  )
}

export default Inputs