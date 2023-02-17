import React from 'react'
import {EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Input, Select, Switch } from 'antd';


const VisibleInputs = (props) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Input.Group compact>
    <Input.Password
        disabled={props.disabled}
        addonBefore= {props.label}
        placeholder="input password"
        visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
        }}
        style={{
            width: '84%',
          }}

    />

    <Switch size="small" style={{ marginTop : '2%', marginLeft : 5 }} defaultChecked  onChange={() => setPasswordVisible((prevState) => !prevState)} />
    
 
        
  </Input.Group>
  )
}

export default VisibleInputs