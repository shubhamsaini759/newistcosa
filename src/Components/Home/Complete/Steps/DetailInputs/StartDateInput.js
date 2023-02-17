import React from 'react'
import { DatePicker, Select, Space } from 'antd';


const StartDateInput = (props) => {
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
        }} />
    </Space.Compact>
  )
}

export default StartDateInput