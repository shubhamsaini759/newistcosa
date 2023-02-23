import React, { useState } from "react";
import { DatePicker, Select, Space } from "antd";
import dayjs from "dayjs";

const dateFormat = "MM-DD-YYYY";

const StartDateInput = (props) => {
  const onChange = (date, dateString) => {
    console.log(dateString);
    props.changeHandler(dateString);
  };

  return (
    <Space.Compact block>
      <Select
        showArrow={false}
        value={props.label}
        style={{
          width: props.sw,
        }}
      ></Select>

      <DatePicker
        style={{
          width: props.aw,
        }}
        value={!!props.value ? dayjs(props.value, dateFormat) : ""}
        onChange={onChange}
        format="MM-DD-YYYY"
      />
    </Space.Compact>
  );
};

export default StartDateInput;
