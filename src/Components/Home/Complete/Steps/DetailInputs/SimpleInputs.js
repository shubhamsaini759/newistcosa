import { AutoComplete, Input, Select } from "antd";
import React from "react";

const SimpleInputs = (props) => {
  return (
    <Input.Group compact>
      <Select
        disabled
        showArrow={false}
        value={props.label}
        style={{
          width: props.sw,
        }}
      ></Select>
      <AutoComplete
        style={{
          width: props.aw,
        }}
        placeholder={props.label}
        value={props.value}
        onChange={(e)=>props.changeHandler(e)}
      ></AutoComplete>
    </Input.Group>
  );
};

export default SimpleInputs;
