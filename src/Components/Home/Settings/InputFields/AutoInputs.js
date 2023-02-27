import { AutoComplete, Form } from 'antd'
import React from 'react'

const AutoInputs = (props) => {
  return (
    <>
    <Form.Item label={props.label} name={props.label} rules={[
        {
            required : true,
            message : 'Please Select a Value'
        }
    ]}
    style={{width : '100%'}}
    >
        <AutoComplete options='' size={props.size}  />
    </Form.Item>


    </>
  )
}

export default AutoInputs