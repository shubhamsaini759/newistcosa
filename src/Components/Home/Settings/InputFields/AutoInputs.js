import { AutoComplete, Form } from 'antd'
import React from 'react'


const list = [
  {
    id : 'one',
    value : 'oneone'
  },
  {
    id : 'two',
    value : 'twotwo'
  }
]


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
        <AutoComplete 
          options={list} 
          filterOption={true}
          onSelect={(value,id)=> console.log(value,id) }
          size={props.size}
        />
    </Form.Item>


    </>
  )
}

export default AutoInputs