import { AutoComplete, Input, Select } from "antd";
import React from "react";

const SimpleInputs = (props) => {
  return (
    <Input.Group compact>
      <Select
        disabled
        showArrow={false}
        defaultValue={props.label}
        style={{
          width: props.sw,
        }}
      ></Select>
      <AutoComplete
        style={{
          width: props.aw,
        }}
        placeholder={props.label}
      ></AutoComplete>
    </Input.Group>
  );
};

export default SimpleInputs;
