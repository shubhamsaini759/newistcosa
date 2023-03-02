import { AutoComplete, Form } from "antd";
import React from "react";

const AutoInputs = (props) => {
  console.log(props)
  return (
    <>
      <Form.Item
        label={props.label}
        name={props.name}
        rules={[
          {
            required: true,
            message: "Please Select a Value",
          },
        ]}
        style={{ width: "100%" }}
      >
        <AutoComplete
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
