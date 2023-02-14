import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { tempIdActions } from "../../Store";
import Styles from "../../Styles/Register/Demo.module.css";

export const Inputs = (props) => {
  const dispatch = useDispatch();

  // const changeHandler = (e) => {
  //   if (props.label === "fullName") {
  //     dispatch(tempIdActions.EnteredName({ name: e.target.value }));
  //   } else if (props.label === "email") {
  //     dispatch(tempIdActions.EnteredEmail({ email: e.target.value }));
  //   } else if (props.label === "phone-number") {
  //     dispatch(tempIdActions.EnteredPhone({ Phone: e.target.value }));
  //   } else if (props.label === "password") {
  //     dispatch(tempIdActions.EnteredPass({ password: e.target.value }));
  //   } else if (props.label === "confirmPassword") {
  //     dispatch(
  //       tempIdActions.EnteredConfirmPass({ ConfirmPass: e.target.value })
  //     );
  //   } else if (props.label === "pincode") {
  //     dispatch(tempIdActions.EnteredPincode({ Pincode: e.target.value }));
  //   }
  // };
  return (
    <>
      <TextField
        required={props.required}
        name={props.name}
        type={props.type}
        id={props.label}
        className={Styles.fields}
        variant="outlined"
        label={props.label}
        size="small"
        sx={{ "& .MuiInputBase-root": { width: 250, maxWidth: 250 } }}
        helperText={props.helperText}
        value={
          props.label === "FullName"
            ? props.value
            : props.label === "Email"
            ? props.value
            : props.label === "Phone Number"
            ? props.value
            : props.label === "Password"
            ? props.value
            : props.label === "Confirm Password"
            ? props.value
            : props.label === "Pincode"
            ? props.value
            : ""
        }
        onChange={props.onChange}
      />
    </>
  );
};
