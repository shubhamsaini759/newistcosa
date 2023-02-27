import { AutoComplete, Form, Input, Select } from "antd";
import React from "react";

const SimpleInputs = (props) => {
  return (
    // <Input.Group compact>
    //   <Select
    //     disabled
    //     showArrow={false}
    //     value={props.label}
    //     style={{
    //       width: props.sw,
    //     }}
    //   ></Select>
    //   <AutoComplete
    //     style={{
    //       width: props.aw,
    //     }}
    //     placeholder={props.label}
    //     value={props.value}
    //     onChange={(e)=>props.changeHandler(e)}
    //   ></AutoComplete>
    // </Input.Group>

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
        <AutoComplete
          style={{
            width: props.aw,
          }}
          placeholder={props.label}
          value={props.value}
          onChange={(e) => props.changeHandler(e)}
        ></AutoComplete>
      </Form.Item>
    </Form>
  );
};

export default SimpleInputs;
