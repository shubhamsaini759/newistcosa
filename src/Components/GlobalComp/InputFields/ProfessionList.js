import { Form, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const ProfessionList = (props) => {
  return (
    <Form.Item
        name={props.label}
        label={props.label}
        style={{width : '100%'}}
        
        rules={[
        {
            required: true,
            message: 'Please select!',
        },
        ]}
    >
        <Select placeholder="Profession" value={props.value} onChange={(e)=>props.onChange(e)} size={props.size} >
            <Option value="student">Student</Option>
            <Option value="Government Sector">Government Sector</Option>
            <Option value="Private Sector">Private Sector</Option>
            <Option value="Entrepreneur/Own Business">Entrepreneur / Own Business</Option>
            <Option value="Retired">Retired</Option>
            <Option value="Others">Others</Option>
        </Select>
    </Form.Item>
  )
}

export default ProfessionList