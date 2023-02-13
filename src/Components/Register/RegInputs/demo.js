import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Styles from "../../../Styles/Register/Demo.module.css";
import { Inputs } from "../../GlobalComp/Inputs";
import SelectAuto from "../../GlobalComp/SelectAuto";
import axios from "axios";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CountryCode from "../../GlobalComp/CountryCode";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import * as Yup from "yup";

const Demo = () => {
  const tempId = useSelector((state) => state.tempIdReducer);
  const navigate = useNavigate();
  const [batchList, setBatchList] = useState([]);
  const [rollnumList, setRollNumList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [show, setShow] = useState(false);
  const [ emailExist, setEmailExist ] = useState('');

  const handleCheck = () => {
    setShow((x) => !x);
  };

  useEffect(() => {
    axios
      .get("http://13.233.130.119/Batch")
      .then((result) => {
        const data = Array.from(result.data);
        setBatchList(data);
      })
      .catch((err) => {
        console.log(err, "batchListError");
      });

    axios
      .get("http://13.233.130.119/CommonType/GetByCountry")
      .then((result) => {
        const data = Array.from(result.data);
        setCountryList(data);
      })
      .catch((err) => {
        console.log(err, "countryListerr");
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://13.233.130.119/Batch/GetRollNumberByBatch?batch=" +
          tempId.BatchID
      )
      .then((result) => {
        const data = Array.from(result.data);
        setRollNumList(data);
        console.log(data);
      });

    axios
      .get(
        "http://13.233.130.119/CommonType/GetByState?CountryId=" +
          tempId.CountryID
      )
      .then((result) => {
        const data = Array.from(result.data);
        setStateList(data);
        console.log(result);
      });

    axios
      .get(
        "http://13.233.130.119/CommonType/GetByCity?StateId=" + tempId.StateID
      )
      .then((result) => {
        const data = Array.from(result.data);
        setCityList(data);
      });
  }, [tempId]);


  const formik = useFormik({
    initialValues: {
      FullName: "",
      Gender: "",
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
        .max(15,'max 15 char allowed')
        .required("required"),
      Gender: Yup.string("string").required("required"),
      DateOfBirth: Yup.string("string").required("required"),
      CountryCode: Yup.string("string").optional("required"),
      PhoneNumber: Yup.number("only number allowes")
        .min(1000000000, "please enter a valid num")
        .max(9999999999, "please enter a valid num")
        .required("required"),
      Email: Yup.string()
        .max(50,'enter min 50 char')
        .email("please enter valid email")
        .required("required"),
      Password: Yup.string("string")
        .min(6, "max 6 char required")
        .max(16,'max 16 char allowed')
        .required("required"),
      ConfirmPassword: Yup.string("string")
        .min(6, "max 6 char required")
        .max(16,'max 16 char allowed')
        .required("required")
        .oneOf([Yup.ref('Password'), null], 'Must match "password" field value'),
      Pincode: Yup.string(),
    }),
    onSubmit: value => {
      const detail = {...tempId,...value}
      console.log(detail,'values')

      axios 
        .put('http://13.233.130.119/Account/PutRegister',detail)
        .then((result)=>{console.log(result,'result')})
        .catch((err)=>{
          console.log(err.response.data.Message,'error')
          setEmailExist(err.response.data.Message)
        })
    },
  });
  console.log(formik.errors)
 
  
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <div className={Styles.firstRow}>
          <SelectAuto name="BatchID" label="batchId" Data={batchList}  />
          <SelectAuto name="RollNumberID" label="rollno" Data={rollnumList} />
          <Inputs
            label="fullName"
            name="FullName"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.FullName}
            helperText={formik.touched.FullName && formik.errors.FullName}
          />
        </div>

        <div className={Styles.secondRow}>
        <FormControl className={Styles.gend} required>
            <FormLabel className={Styles.gen}>Gender</FormLabel>
            <RadioGroup
              name="Gender"
              value={formik.values.Gender}
              className={Styles.GenLabel}
              row
              onChange={formik.handleChange}
              // helperText={formik.touched.Gender && formik.errors.Gender}
            >
              <FormControlLabel
                control={<Radio size="small" />}
                label="Male"
                value="Male"
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Female"
                value="Female"
              />
            </RadioGroup>
          </FormControl>
         

          <TextField
            type="date"
            className={Styles.fields}
            size="small"
            label="Date Of Birth"
            placeholder=""
            InputLabelProps={{
              shrink: true,
            }}
            name="DateOfBirth"
            onChange={formik.handleChange}
            value={formik.values.DateOfBirth}
            helperText={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
          />

          
        </div>

        <div className={Styles.thirdRow}>
          <Inputs
            label="email"
            name="Email"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.Email}
            helperText={formik.touched.Email && formik.errors.Email || emailExist}
          />
          <div className={Styles.phn}>
            <CountryCode />
            <Inputs
              label="phone-number"
              name="PhoneNumber"
              type='text'
              onChange={formik.handleChange}
              value={formik.values.PhoneNumber}
              helperText={
                formik.touched.PhoneNumber && formik.errors.PhoneNumber
              }
            />
          </div>
        </div>

        <div className={Styles.fourthRow}>
          <SelectAuto label="country" Data={countryList} />
          <SelectAuto label="state" Data={stateList} />
          <SelectAuto label="city" Data={cityList} />
        </div>

        <div className={Styles.fifthRow}>
          <Inputs
            label="pincode"
            name="Pincode"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.Pincode}
          />
          <Inputs
            label="password"
            name="Password"
            type={show?'text':'password'}
            onChange={formik.handleChange}
            value={formik.values.Password}
            helperText={formik.touched.Password && formik.errors.Password}
          />
          <Inputs
            label="confirmPassword"
            name="ConfirmPassword"
            type={show?'text':'password'}
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
            helperText={
              formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
            }
          />
        </div>

        <div className={Styles.sixthRow}>
            <IconButton
              className={Styles.upload}
              color="primary"
              aria-label="upload picture"
              component="label"
              onChange={(e) => console.log(e.target.files, "done")}
            >
            <Input hidden accept="image/*" type="file" />
            <PhotoCamera sx={{ color: "#700606" }} />
            <span className={Styles.texts}>upload image</span>
            </IconButton>
          </div>

        <div className={Styles.show}>
          <Checkbox
            checked={show}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
          Show Password
        </div>

        <div className={Styles.submit}>
          <Button
            className={Styles.submitBtn}
            type='submit'
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
        <div>
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
    </Container>
  );
};

export default Demo;
