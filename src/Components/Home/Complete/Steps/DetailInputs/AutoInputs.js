import { AutoComplete, Form, Input, Select } from "antd";
import React from "react";

// const mockVal = (str, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

const AutoInputs = (props) => {
  const renderTitle = (title) => <span>{title}</span>;
  const renderItem = (title, id) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => props.changeHandler({ id, value: title })}
      >
        {title}
        {/* <span>{id}</span> */}
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle(props.label),
      options: props.data?.map((item) => renderItem(item?.name, item?.id)),
    },
  ];

  // const onSearch = (searchText) => {
  //   renderItem(
  //     !searchText
  //       ? []
  //       : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
  //   );
  // };
  console.log(options, props.label);

  return (
    // <Input.Group compact>
    //   <Select
    //     showArrow={false}
    //     defaultValue={props.label}
    //     style={{
    //       width: props.sw,
    //     }}
    //   ></Select>

    //   <AutoComplete
    //     style={{
    //       width: props.aw,
    //     }}
    //     placeholder={props.label}
    //     options={options}
    //     value={props.value}
    //     className="select"
    //     // onSearch={onSearch}
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
          placeholder={props.label}
          options={options}
          value={props.value}
          className="select"
          // onSearch={onSearch}
        ></AutoComplete>
      </Form.Item>
    </Form>
  );
};

export default AutoInputs;
