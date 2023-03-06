import { Form, Input } from "antd";
import React from "react";

const Inputs = (props) => {
  return (
    <>
      <Form.Item
        label={props.label}
        name={props.name}
        style={{ width: "100%" }}
        rules={props.rule}
      >
        <Input
          disabled = {props.disabled}
          value={props.value}
          size={props.size}
          onChange={(e) => props.handler(e.target.value)}
        />
      </Form.Item>
    </>
  );
};

export default Inputs;
