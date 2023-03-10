import { Form, Input } from "antd";
import React from "react";

const PasswordInputs = (props) => {
  return (
    <Form.Item
      label={props.label}
      name={props.name}
      rules={props.rule}
      style={{ width: "100%" }}
    >
      <Input.Password prefix={props.prefix} placeholder={props.label} onChange={(e) => props.handler(e.target.value)} />
    </Form.Item>
  );
};

export default PasswordInputs;
