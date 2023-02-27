import { Form, Radio, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

const Gender = (props) => {



    //    <Form.Item
    //             label={props.label}
    //             name={props.name}
    //         style={{ width : '100%'}}

    //             rules={[
    //             {
    //                 required: true,
    //                 message: 'Please input your username!',
    //             },
    //         ]}
    //         >
    //             <Radio.Group onChange={props.onChange} value={props.value} size='small' >
    //                 <Radio size='small' value='Male'>Male</Radio>
    //                 <Radio value='Female'>Female</Radio>
    //                 <Radio value='Other'>Other</Radio>
    //             </Radio.Group>
    //     </Form.Item>
  return (
    <>
     


        <Form.Item
            name={props.label}
            label={props.label}
            style={{width : '100%'}}
            rules={[
            {
                required: true,
                message: 'Please select gender!',
            },
            ]}
        >
        <Select placeholder="select your gender" value={props.value} onChange={(e)=>props.onChange(e)} >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
    </>
  )
}

export default Gender