import React from 'react'
import { DatePicker, Select, Space } from 'antd';
const { RangePicker } = DatePicker;


const DateInput = (props) => {
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

        <RangePicker
        onChange={(e)=>console.log(e)}
        
        style={{
            width: props.rw,
            }} />
    </Space.Compact>
  )
}

export default DateInput