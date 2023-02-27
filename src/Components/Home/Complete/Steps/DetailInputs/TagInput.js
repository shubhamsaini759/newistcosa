import { Form, Select, Space } from "antd";

const TagInput = (props) => (
  // <Space.Compact block>
  //   <Select
  //     showArrow={false}
  //     value={props.label}
  //     style={{
  //       width: props.sw,
  //     }}
  //   />
  //   <Select
  //     mode="tags"
  //     style={{
  //       width: props.nsw,
  //     }}
  //     placeholder={props.label}
  //     value={props.value}
  //     onChange={(e) => props.changeHandler(e)}
  //   />
  // </Space.Compact>

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
      <Select
        mode="tags"
        style={{
          width: props.nsw,
        }}
        placeholder={props.label}
        value={props.value}
        onChange={(e) => props.changeHandler(e)}
      />
    </Form.Item>
  </Form>
);
export default TagInput;
