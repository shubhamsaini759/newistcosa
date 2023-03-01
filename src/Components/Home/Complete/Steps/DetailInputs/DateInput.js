import React from "react";
import { DatePicker, Form, Select, Space } from "antd";
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
    // <Form name="form_item_path" layout="vertical" style={{ width: "100%" }}>
    //   <Form.Item
    //     name={props.label}
    //     label={props.label}
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input Intro",
    //       },
    //     ]}
    //   >
    //     <RangePicker onChange={(e) => console.log(e)} />
    //   </Form.Item>
    // </Form>
  );
};

export default DateInput;
