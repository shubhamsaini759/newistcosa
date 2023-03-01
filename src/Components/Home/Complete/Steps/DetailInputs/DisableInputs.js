import { AutoComplete, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

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
    //     <AutoComplete
    //       disabled
    //       placeholder={props.label}
    //       value={props.value}
    //     ></AutoComplete>
    //   </Form.Item>
    // </Form>
  );
};

export default DisableInputs;
