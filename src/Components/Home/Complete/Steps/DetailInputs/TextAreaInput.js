import React from 'react'
import { Input, Select, Space } from 'antd';

const { TextArea } = Input;


const TextAreaInput = (props) => {
  return (
    <Space.Compact  block direction="vertical">
        <Select
        showArrow = {false}
            value= {props.label}
            style={{
                width: props.sw,
                paddingLeft : props.padd
                }}
        ></Select>

    <TextArea style={{
        width: props.tw,
     }} 
     />
    </Space.Compact>
  )
}

export default TextAreaInput