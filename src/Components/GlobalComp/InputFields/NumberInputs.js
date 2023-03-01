import { Form, InputNumber } from 'antd'
import React from 'react'

const NumberInputs = (props) => {
  return (
    <>
        <Form.Item
            name={props.name}
            label={props.label}
            rules={props.rules}
            style={{ width : '100%'}}

        >
            <InputNumber
            size={props.size} 
            style={{ width :'100%' }}
            value={props.value} 
            onChange={(e)=>props.handler(e.target.value)}
            
            />
        </Form.Item>
    </>
  )
}

export default NumberInputs