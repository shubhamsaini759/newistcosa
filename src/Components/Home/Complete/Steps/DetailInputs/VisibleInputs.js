import React from "react";
import { Input, Switch } from "antd";

const VisibleInputs = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Input.Group compact>
      <Input.Password
        disabled={!!props.disabled}
        addonBefore={props.label}
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
    </Input.Group>
  );
};

export default VisibleInputs;
