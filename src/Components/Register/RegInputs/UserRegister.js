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
import ImageConvert from "../../GlobalComp/ImageConvert";
import { Path } from "../../../Utils/api/endPoints";
import api from "../../../Utils/api";
import ImageCrop from "../../GlobalComp/ImageCrop";

const UserRegister = () => {
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
    api
      .get(
        Path.RollNumber+tempId.BatchID
      )
      .then((result) => {
        const data = Array.from(result.data);
        setRollNumList(data);
        console.log(data);
      });

    api
      .get(
        Path.State+tempId.CountryID
      )
      .then((result) => {
        const data = Array.from(result.data);
        setStateList(data);
        console.log(result);
      });

    api
      .get(
        Path.City + tempId.StateID
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

      api 
        .put(Path.Register,detail)
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
          <SelectAuto name="BatchID" label="BatchId" Data={batchList}  />
          <SelectAuto name="RollNumberID" label="Rollno" Data={rollnumList} />
          <Inputs
            required='required'
            label="FullName"
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
                checked
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Female"
                value="Female"
              />
            </RadioGroup>
          </FormControl>
         

          <TextField
          required
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
          required='required'
            label="Email"
            name="Email"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.Email}
            helperText={formik.touched.Email && formik.errors.Email || emailExist}
          />
          <div className={Styles.phn}>
            <CountryCode />
            <Inputs
            required='required'
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
          <SelectAuto label="Country" Data={countryList} />
          <SelectAuto label="State" Data={stateList} />
          <SelectAuto label="City" Data={cityList} />
        </div>

        <div className={Styles.fifthRow}>
          <Inputs
            label="Pincode"
            name="Pincode"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.Pincode}
          />
          <Inputs
          required='required'
            label="Password"
            name="Password"
            type={show?'text':'password'}
            onChange={formik.handleChange}
            value={formik.values.Password}
            helperText={formik.touched.Password && formik.errors.Password}
          />
          <Inputs
            required='required'
            label="ConfirmPassword"
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
            <ImageCrop />
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

export default UserRegister;
