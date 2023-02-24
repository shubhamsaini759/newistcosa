import React from 'react'
import { Form, Input, Select, Space } from 'antd';

const { TextArea } = Input;


const TextAreaInput = (props) => {
  return (
    // <Space.Compact  block direction="vertical">
    //     <Select
    //     showArrow = {false}
    //         value= {props.label}
    //         style={{
    //             width: props.sw,
    //             paddingLeft : props.padd
    //             }}
    //     ></Select>

    // <TextArea style={{
    //     width: props.tw,
    //  }} 
    //  maxLength={props.length}
     
    //  value={props.value}
    //  onChange={(e)=>props.changeHandler(e.target.value)}
    //  />
    // </Space.Compact>
    <>
    <Form name="form_item_path" layout="vertical" style={{ width : props.tw }} >
        <Form.Item
        name={props.label}
        label={props.label}
        rules={[
          {
            required: true,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={2000} value={props.value}  onChange={(e)=>props.changeHandler(e.target.value)}  />
      </Form.Item>
      </Form>
    </>
  )
}

export default TextAreaInput