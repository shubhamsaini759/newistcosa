import {
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "../../../Styles/Register/Demo.module.css";
import { Inputs } from "../../GlobalComp/Inputs";
import SelectAuto from "../../GlobalComp/SelectAuto";
import { useNavigate } from "react-router-dom";
import CountryCode from "../../GlobalComp/CountryCode";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Path } from "../../../Utils/api/endPoints";
import api from "../../../Utils/api";

import Test from "../../GlobalComp/test";

const UserRegister = () => {
  const tempId = useSelector((state) => state.tempIdReducer);
  const navigate = useNavigate();
  const [batchList, setBatchList] = useState([]);
  const [rollnumList, setRollNumList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [ genOption, setGenOption ] = useState(['Male','Female']);

  const [show, setShow] = useState(false);
  const [emailExist, setEmailExist] = useState("");

  const handleCheck = () => {
    setShow((x) => !x);
  };

  useEffect(() => {
    api
      .get(Path.BatchList)
      .then((result) => {
        const data = Array.from(result.data);
        setBatchList(data);
      })
      .catch((err) => {
        console.log(err, "batchListError");
      });

    api
      .get(Path.Country)
      .then((result) => {
        const data = Array.from(result.data);
        setCountryList(data);
      })
      .catch((err) => {
        console.log(err, "countryListerr");
      });
  }, []);

  useEffect(() => {
    api.get(Path.RollNumber + tempId.BatchID).then((result) => {
      const data = Array.from(result.data);
      setRollNumList(data);
      console.log(data);
    });

    api.get(Path.State + tempId.CountryID).then((result) => {
      const data = Array.from(result.data);
      setStateList(data);
      console.log(result);
    });

    api.get(Path.City + tempId.StateID).then((result) => {
      const data = Array.from(result.data);
      setCityList(data);
    });
  }, [tempId]);

  const formik = useFormik({
    initialValues: {
      FullName: "",
      DateOfBirth: "",
      PhoneNumber: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      Pincode: "",
    },
    validationSchema: Yup.object({
      FullName: Yup.string("string")
        .min(3, "minimum 3 char required")
        .max(15, "max 15 char allowed")
        .required("required"),
      DateOfBirth: Yup.string("string").required("required"),
      CountryCode: Yup.string("string").optional("required"),
      PhoneNumber: Yup.number("only number allowes")
        .required("required"),
      Email: Yup.string()
        .max(50, "enter min 50 char")
        .email("please enter valid email")
        .required("required"),
      Password: Yup.string("string")
        .min(6, "max 6 char required")
        .max(16, "max 16 char allowed")
        .required("required"),
      ConfirmPassword: Yup.string("string")
        .min(6, "max 6 char required")
        .max(16, "max 16 char allowed")
        .required("required")
        .oneOf(
          [Yup.ref("Password"), null],
          'Must match "password" field value'
        ),
      Pincode: Yup.string(),
    }),
    onSubmit: (value) => {
      const detail = { ...tempId, ...value };
      console.log(detail, "values");

      api
        .put(Path.Register, detail)
        .then((result) => {
          console.log(result, "result");
          // navigate('/')
        })
        .catch((err) => {
          console.log(err.response.data.Message, "error");
          setEmailExist(err.response.data.Message);
        });
    },
  });
  console.log(formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={Styles.firstRow}>
          <SelectAuto name="BatchID" label="Batch Id" Data={batchList} />
          <SelectAuto name="RollNumberID" label="Roll No" Data={rollnumList} />
          <Inputs
            required="required"
            label="Full Name"
            name="FullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.FullName}
            helperText={formik.touched.FullName && formik.errors.FullName}
          />
        </div>

        <div className={Styles.secondRow}>
          <SelectAuto  name="Gender" label = 'Gender' Data={genOption} />
          
          <TextField
            required
           
            type="date"
            className={Styles.dob}
            size="small"
            label="Date Of Birth"
            placeholder=""
            InputLabelProps={{
              shrink: true,
            }}
            name="DateOfBirth"
            sx={{ "& .MuiInputBase-root": { width: 250 } }}
            onChange={formik.handleChange}
            value={formik.values.DateOfBirth}
            helperText={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
          />
        </div>

        <div className={Styles.thirdRow}>
          <Inputs
            required="required"
            label="E-mail"
            name="Email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Email}
            helperText={
              (formik.touched.Email && formik.errors.Email) || emailExist
            }
          />
          <div className={Styles.phn}>
            <CountryCode />
            <Inputs
              required="required"
              label="Phone Number"
              name="PhoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.PhoneNumber}
              helperText={
                formik.touched.PhoneNumber && formik.errors.PhoneNumber
              }
            />
          </div>
        </div>

        <div className={Styles.fourthRow}>
          <SelectAuto label="Country" Data={countryList} />
          <SelectAuto label="State" Data={stateList} />
          <SelectAuto label="City" Data={cityList} />
        </div>

        <div className={Styles.fifthRow}>
          <Inputs
            label="Pincode"
            name="Pincode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Pincode}
          />
          <Inputs
            required="required"
            label="Password"
            name="Password"
            type={show ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.Password}
            helperText={formik.touched.Password && formik.errors.Password}
          />
          <Inputs
            required="required"
            label="Confirm Password"
            name="ConfirmPassword"
            type={show ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
            helperText={
              formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
            }
          />
        </div>

        <div className={Styles.sixthRow}>
          <div>
            <Test />
          </div>
          <div>
            <Checkbox
              checked={show}
              onChange={handleCheck}
              inputProps={{ "aria-label": "controlled" }}
            />
            Show Password
          </div>
        </div>

        <div className={Styles.submit}>
          <Button
            className={Styles.submitBtn}
            type="submit"
            variant="contained"
            sx={{
              marginTop: "2rem",
              width: "5rem",
              backgroundColor: "#700606",
            }}
          >
            Submit
          </Button>
        </div>
     

        <div className={Styles.loginP}>
          <p>
            Have already an account?{" "}
            <span
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", color: "#700606", fontWeight: 500 }}
            >
              Login Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;


// import { Button, Form } from 'antd'
// import React from 'react'
// import Styles from '../../../Styles/Register/RegFields.module.css'

// import AutoInputs from '../../GlobalComp/InputFields/AutoInputs';
// import Dates from '../../GlobalComp/InputFields/Dates';
// import EmailInputs from '../../GlobalComp/InputFields/EmailInputs';
// import Gender from '../../GlobalComp/InputFields/Gender';
// import Inputs from '../../GlobalComp/InputFields/Inputs';
// import NumberInputs from '../../GlobalComp/InputFields/NumberInputs';
// import PasswordInputs from '../../GlobalComp/InputFields/PasswordInputs';

// const UserRegister = () => {
//     const [form] = Form.useForm();
//     const val={
//       CountryCode: "",
//       Email : '',
//       BatchID: "",
//       RollNumberID: "",
//       FullName: "",
//       Gender: "",
//       DateOfBirth: "",
//       PhoneNumber: "",
//       CountryID: "",
//       StateID: "",
//       CityID: "",
//       UserID: "",
//       ImagePath: "",
//       Pincode: "",
//       OldImage: "",
//       Email: "",
//       Password: "",
//       ConfirmPassword: "",
//       UploadImage: "",
//     }

//   return (
//     <Form form={form} layout='vertical' initialValues={val} >
//       <div className={Styles.firstRow} >
//         <AutoInputs label='Batch ID' name='BatchID' />
//         <AutoInputs label='Roll Number' name='RollNumberID' />
//         <Inputs label='full Name' name='FullName' />
//       </div>
//       <div className={Styles.secondRow}>
//         <Gender name='Gender' />
//         <Dates label='Date of Birth' name='DateOfBirth' />
//       </div>
//       <div className={Styles.thirdRow} >
//         <NumberInputs label='Phone Number' name='PhoneNumber' />
//         <EmailInputs label='Email' name='Email' />
//       </div>
//       <div className={Styles.fourthRow} >
//           <AutoInputs label='Country' name='CountryID' />
//           <AutoInputs label='State' name='StateID' />
//           <AutoInputs label='City' name='CityID' />
//       </div>
//       <div className={Styles.fifthRow}>
//           <Inputs label='Pincode' name='Pincode' />
//           <PasswordInputs label='Password' name="Password" />
//           <PasswordInputs label='Confirm-Password' name="ConfirmPassword" />
//       </div>
//       <div className={Styles.sixthRow} >
//         <Button type="primary">Submit</Button>
//       </div>
//     </Form>
//   )
// }

// export default UserRegister