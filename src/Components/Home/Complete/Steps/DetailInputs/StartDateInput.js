import React, { useState } from 'react'
import { DatePicker, Select, Space } from 'antd';


const StartDateInput = (props) => {

  const onChange = (date, dateString) => {
    console.log(dateString)  
  // props.changeHandler(dateString)
  };
  return (
    <Space.Compact block>
        <Select
        showArrow = {false}
            value= {props.label}
            style={{
                width: props.sw,
                paddingLeft : props.padd
                }}
        ></Select>

       <DatePicker style={{
        width: props.aw,
        }}
        value={props.value}
        onChange={onChange }
        />
    </Space.Compact>
  )
}

export default StartDateInput