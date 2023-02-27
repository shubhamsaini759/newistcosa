import { Form, Input } from 'antd'
import React from 'react'

const TextAreaInputs = (props) => {
  return (
   <>
    <Form.Item
        name={props.label}
        label={props.label}
        style={{width : '100%'}}
    >
        <Input.TextArea showCount maxLength={props.length} size={props.size}  />
    </Form.Item>
   </>
  )
}

export default TextAreaInputs