import React, { useEffect, useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import Styles from "../../Styles/Login/Login.module.css";

import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../Store";
import api from "../../Utils/api";
import { useNavigate } from "react-router-dom";
import { Path } from "../../Utils/api/endPoints";
import { Form } from "antd";
import Inputs from "../GlobalComp/InputFields/Inputs";
import PasswordInputs from "../GlobalComp/InputFields/PasswordInputs";
import { useMutation } from "react-query";
import { Logins } from "../../Utils/api/Login";
import { LockOutlined } from "@mui/icons-material";
import { UserOutlined } from "@ant-design/icons";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginDetail = useSelector((state) => state.loginReducer);
  const { mutateAsync: details } = useMutation("Login", Logins);

  const [err, setErr] = useState("");

  const val = {
    BatchID: "",
    Password: "",
  };

  // const data = {
  //   UserName: loginDetail?.rollNumber,
  //   Password: loginDetail?.password,
  // };

  const rollHandler = (data) => {
    if (!!err) {
      setErr("");
    }
    dispatch(loginActions.EnteredRoll({ rollNumber: data }));
    form.setFieldsValue({
      BatchID: data,
    });
  };
  const passHandler = (data) => {
    if (!!err) {
      setErr("");
    }
    dispatch(loginActions.EnteredPass({ password: data }));
    form.setFieldsValue({
      Password: data,
    });
  };

  const userLogin = async () => {
    await details(loginDetail)
      .then((resp) => {
        if (resp?.statusText === "OK") {
          navigate("/home");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.Message) {
          setErr(err?.response?.data?.Message);
        }
      });
    // if(loginData.statusText === 'OK'){
    //   navigate('/home')
    // }
    // console.log(loginDetail, "detail ");

    // e.preventDefault();
    // dispatch(loginActions.loginHandler());

    // api
    //   .post(Path.UserLogin, data)
    //   .then((result) => {
    //     localStorage.setItem("accessToken", result.data[0].Token);
    //     console.log(result, "output");

    //     if (result.data[0].Role === "Admin") {
    //       navigate("/home");
    //       console.log("admin");
    //     } else if (result.data[0].Role === "Student") {
    //       console.log("student");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // setErr(err.response.data.Message);
    //   });
  };

  return (
    <div className={Styles.login}>
      <div className={Styles.loginBox}>
        <div className={Styles.loginBoxInfo}>
          <h1>Login Here</h1>
          <p style={{ color: "#FF0000" }}>{err}</p>
          <Form
            layout="vertical"
            form={form}
            initialValues={val}
            className={Styles.loginData}
          >
            {/* <TextField
              className={Styles.rollnum}
              size="small"
              onChange={rollHandler}
              sx={{ "& .MuiInputBase-root": { height: 38 } }}
              helperText={err}
              name="rollNum"
              id="outlined-basic"
              label="Enter Roll Number"
              variant="outlined"
            />
            <TextField
              className={Styles.pass}
              size="small"
              onChange={passHandler}
              sx={{ "& .MuiInputBase-root": { height: 38 } }}
              helperText={err}
              type={show ? "text" : "password"}
              id="outlined-basic"
              name="password"
              label="Enter Password"
              variant="outlined"
            /> */}
            <Inputs label="Batch ID" name="Batch ID" prefix={<UserOutlined size='small' className="site-form-item-icon"  />} handler={rollHandler} />
            <PasswordInputs
              prefix={<LockOutlined fontSize="small" className="site-form-item-icon" />}
              label="Password"
              name="Password"
              handler={passHandler}
            />
            {/* <div>
              <Checkbox
                checked={show}
                onChange={handleCheck}
                inputProps={{ "aria-label": "controlled" }}
              />{" "}
              Show Password
            </div> */}
            <div className={Styles.forgot}>
              Forgot your Password ?
              <Button
                variant="outlined"
                type="submit"
                size="small"
                className={Styles.logb}
                onClick={userLogin}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
