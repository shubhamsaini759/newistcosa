import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import React from "react";

const Dates = (props) => {
  const dateFormat = "MM-DD-YYYY";

  return (
    <>
      <Form.Item
        label={props.label}
        rules={props.rules}
        style={{ width: "100%" }}
      >
        <DatePicker
          size={props.size}
          style={{ width: "100%" }}
          value={!!props.value ? dayjs(props.value, dateFormat) : ""}
        />
      </Form.Item>
    </>
  );
};

export default Dates;
