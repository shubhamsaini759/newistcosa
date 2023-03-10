import { Form, Radio, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const Marital = (props) => {


//     <Form.Item
//     label={props.label}
//     name={props.name}
//     style={{ width : '100%'}}

//     rules={[
//     {
//         required: true,
//         message: 'Please input your username!',
//     },
//     ]}
//     >
//     <Radio.Group onChange={props.onChange} value={props.value} size='small' >
//         <Radio size='small' value='Single'>Single</Radio>
//         <Radio value='Married'>Married</Radio>
//         <Radio value='Divorced'>Divorced</Radio>
//     </Radio.Group>
// </Form.Item>

  return (
  <>
   


    
    <Form.Item
        name={props.label}
        label='Marital Status'
        style={{width : '100%'}}
        rules={[
        {
            required: true,
            message: 'Please select!',
        },
        ]}
    >
        <Select placeholder="Marital Status" defaultValue={props.value} onChange={(e)=>props.onChange(e)} >
            <Option value="Single">Single</Option>
            <Option value="Married">Married</Option>
            <Option value="Divorced">Divorced</Option>
        </Select>
    </Form.Item>
  
  </>
  )
}

export default Marital