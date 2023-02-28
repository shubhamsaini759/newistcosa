import { AutoComplete, Form } from "antd";
import React from "react";

const AutoInputs = (props) => {
  return (
    <>
      <Form.Item
        label={props.label}
        name={props.label}
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
          defaultValue={props.value}
        />
      </Form.Item>
    </>
  );
};

export default AutoInputs;
