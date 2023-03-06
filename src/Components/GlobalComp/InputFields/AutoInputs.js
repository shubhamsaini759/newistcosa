import { AutoComplete, Form } from "antd";
import React from "react";

const AutoInputs = (props) => {
  return (
    <>
      <Form.Item
        label={props.label}
        name={props.name}
        rules={props.rule}
        style={{ width: "100%" }}
      >
        <AutoComplete
          disabled={props.disabled}
          options={props.list}
          filterOption={true}
          onSelect={(_, id) => props.handler(props.uid, id)}
          size={props.size}
        />
      </Form.Item>
    </>
  );
};

export default AutoInputs;
