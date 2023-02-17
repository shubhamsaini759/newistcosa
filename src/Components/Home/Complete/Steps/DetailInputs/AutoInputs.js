import { AutoComplete, Input, Select } from 'antd'
import React, { useState } from 'react'


const AutoInputs = (props) => {

  console.log(props)
  return (
    <Input.Group compact>
      <Select
      showArrow = {false}
        defaultValue= {props.label}
        style={{
          width: props.sw,
        }}
      >
        
      </Select>
      <AutoComplete
        style={{
          width: props.aw,
        }}
        placeholder={props.label}
      >
      </AutoComplete>
    </Input.Group>
  )
}

export default AutoInputs