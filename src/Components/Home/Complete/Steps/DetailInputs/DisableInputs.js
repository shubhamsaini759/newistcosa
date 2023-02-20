import { AutoComplete, Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const DisableInputs = (props) => {

  return (
    <Input.Group compact>
      <Select
      disabled
      showArrow = {false}
        defaultValue= {props.label}
        style={{
          width: props.sw,
        }}
      >
        
      </Select>
      <AutoComplete
      disabled
        style={{
          width: props.aw,
        }}
        placeholder={props.label}
        value={props.value}
      >
      </AutoComplete>
    </Input.Group>
  )
}

export default DisableInputs