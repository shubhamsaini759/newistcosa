import React, { useState } from "react";
import { DatePicker, Form, Select, Space } from "antd";
import dayjs from "dayjs";

const dateFormat = "MM-DD-YYYY";

const StartDateInput = (props) => {
  const onChange = (date, dateString) => {
    console.log(dateString);
    props.changeHandler(dateString);
  };

  return (
    // <Space.Compact block>
    //   <Select
    //     showArrow={false}
    //     value={props.label}
    //     style={{
    //       width: props.sw,
    //     }}
    //   ></Select>

    //   <DatePicker
    //     style={{
    //       width: props.aw,
    //     }}
    //     value={!!props.value ? dayjs(props.value, dateFormat) : ""}
    //     onChange={onChange}
    //     format="MM-DD-YYYY"
    //   />
    // </Space.Compact>
    <Form name="form_item_path" layout="vertical" style={{ width: "100%" }}>
      <Form.Item
        name={props.label}
        label={props.label}
        rules={[
          {
            required: true,
            message: "Please input Intro",
          },
        ]}
      >
        <DatePicker
          style={{
            width: props.aw,
          }}
          value={!!props.value ? dayjs(props.value, dateFormat) : ""}
          onChange={onChange}
          format="MM-DD-YYYY"
        />
      </Form.Item>
    </Form>
  );
};

export default StartDateInput;
