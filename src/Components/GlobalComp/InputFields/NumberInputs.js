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
            disabled={props.disabled}
            placeholder={props.label}
            size={props.size} 
            style={{ width :'100%' }}
            onChange={(e)=>props.handler(e)}
            
            />
        </Form.Item>
    </>
  )
}

export default NumberInputs