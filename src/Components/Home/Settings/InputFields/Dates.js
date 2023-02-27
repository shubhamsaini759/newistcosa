import { DatePicker, Form } from 'antd'
import React from 'react'

const Dates = (props) => {
  return (
    <>
    <Form.Item label={props.label} rules={props.rules} style={{width : '100%'}}  >
        <DatePicker size={props.size}  style={{width : '100%'}} />
    </Form.Item>
    
    </>
  )
}

export default Dates