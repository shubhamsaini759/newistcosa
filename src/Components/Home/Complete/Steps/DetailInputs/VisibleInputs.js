import React from "react";
import { Form, Input, Switch } from "antd";
import Styles from "../../../../../Styles/userLogin/Steps/InputCol.module.css";

const VisibleInputs = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    // <Input.Group className={Styles.inputcol} compact>
    //   <Input.Password
    //     disabled={!!props.disabled}
    //     addonBefore={props.label}
    //     placeholder={props.label}
    //     visibilityToggle={{
    //       visible: passwordVisible,
    //       onVisibleChange: setPasswordVisible,
    //     }}
    //     style={{
    //       width: "84%",
    //     }}
    //     value={props.value}
    //   />

    //   <Switch
    //     size="small"
    //     style={{ marginTop: "2%", marginLeft: 5, borderRadius: "1rem" }}
    //     defaultChecked
    //     onChange={() => setPasswordVisible((prevState) => !prevState)}
    //   />
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
        <Input.Password
          disabled={!!props.disabled}
          placeholder={props.label}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          style={{
            width: "84%",
          }}
          value={props.value}
        />
        <Switch
          size="small"
          style={{ marginTop: "2%", marginLeft: 5, borderRadius: "1rem" }}
          defaultChecked
          onChange={() => setPasswordVisible((prevState) => !prevState)}
        />
      </Form.Item>
    </Form>
  );
};

export default VisibleInputs;
