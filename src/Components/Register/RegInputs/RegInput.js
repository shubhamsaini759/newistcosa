// import { PhotoCamera } from "@mui/icons-material";
// import {
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   IconButton,
//   Input,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   TextField,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerActions } from "../../../Store";
// import Styles from "../../../Styles/Register/Reginput.module.css";
// import api from "../../../Utils/api";
// import CountryPhone from "./counrtryPhone";

// const RegInput = () => {

//   const [batchErr ,setBatchErr ] = useState('');
//   const [rollErr ,setRollErr ] = useState('');
//   const [fullNameErr ,setFullNameErr ] = useState('');
//   const [dobErr ,setDobErr ] = useState('');
//   const [phoneNumberErr ,setPhoneNumberErr ] = useState('');
//   const [emailErr ,setEmailErr ] = useState('');
//   const [countryErr ,setCountryErr ] = useState('');
//   const [stateErr ,setStateErr ] = useState('');
//   const [cityErr ,setCityErr ] = useState('');
//   const [passwordErr ,setPasswordErr ] = useState('');
//   const [confirmPasswordErr ,setConfirmPasswordErr ] = useState('');

//   const [isError ,setIsError] = useState(false);
//   const [ show, setShow ] = useState(false)

//   const data = useSelector(state => state.registerReducer )
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const [batch, setBatch] = useState("");
//   const [rollnum, setRollNum] = useState("");
//   const [gender, setGender] = useState("");
//   const [countryId, setCountryId] = useState('');
//   const [stateId,setStateId] = useState('');

//   const [ batchList, setBatchList ] = useState([]);
//   const [ rollNumList, setRollNumList ] = useState([]);
//   const [ countryList, setCountryList ] = useState([]);
//   const [ stateList, setStateList ] = useState([]);
//   const [ cityList, setCityList ] = useState([]);

//   useEffect(()=>{
//     api
//       .get('http://192.168.29.113/ISTCOSA.API/Batch')
//       .then((result)=>{
//           const data = Array.from(result.data,(val)=> val.BatchID)
//           setBatchList(data)
//          })

//     api
//       .get('/CommonType/GetByCountry')
//       .then((result)=>{
//           const data = Array.from(result.data)
//           setCountryList(data)

//         })
//   },[])

//   useEffect((x)=>{
//     axios
//       .get('http://192.168.29.113/ISTCOSA.API/Batch/GetRollNumberByBatch?batch='+batch)
//       .then((result)=>{
//         const data = Array.from(result.data ,(val)=>val.RollNumberID)
//         setRollNumList(data)
//       })
//       .catch((err)=>console.log(err,'rollNumber'))

//     api
//     .get('/CommonType/GetByState?CountryId='+countryId)
//     .then((result)=>{
//       const data = Array.from(result.data)
//       setStateList(data)
//     })
//     .catch((err)=>console.log(err,'countryId'))

//     api
//     .get('/CommonType/GetByCity?StateId='+stateId)
//     .then((result)=>{
//       const data = Array.from(result.data)
//       setCityList(data)
//     })
//     .catch((err)=>console.log(err,'stateId'))

//   },[batch,countryId,stateId])

// // validations

// const clearError = () =>{
//   if(isError){
//     setIsError(false);

//     setBatchErr('')
//     setRollErr('')
//     setFullNameErr('')
//     setDobErr('')
//     setPhoneNumberErr('')
//     setEmailErr('')
//     setCountryErr('')
//     setStateErr('')
//     setCityErr('')
//     setPasswordErr('')
//     setConfirmPasswordErr('')
//   }
// }

// const BatchErrors = () =>{

//   if(!data.BatchID){
//     setIsError(true)
//     setBatchErr('required')
//   }
// }

// const RollErrors = () =>{
//   if(!data.RollNumberID){
//     setIsError(true)
//     setRollErr('required')
//   }
// }

// const FullNameErrors = () =>{
//   if(!data.FullName ){
//     setIsError(true)
//     setFullNameErr('required')
//   }else if(data.FullName.length < 3){
//     setIsError(true)
//     setFullNameErr('minimum 3 char required')
//   }
// }

// const DobErrors = () =>{
//   if(!data.DateOfBirth){
//     setIsError(true)
//     setDobErr('required')
//   }
// }

// const PhoneNumberErrors = () =>{
//   if(!data.PhoneNumber ){
//     setIsError(true)
//     setPhoneNumberErr('required')
//   }else if(data.PhoneNumber.length < 10){
//     setIsError(true)
//     setPhoneNumberErr('enter valid phone number')
//   }

// }

// const EmailErrors = () =>{
//   if(!data.Email  ){
//     setIsError(true)
//     setEmailErr('required')
//   }else if(data.Email.length < 7){
//     setIsError(true)
//     setEmailErr('enter valid email')
//   }
//   else{
//     setIsError(false)
//     setEmailErr('')
//   }

// }

// const CountryErrors = () =>{

//   if(!data.CountryID){
//     setIsError(true)
//     setCountryErr('required')
//   }

// }

// const StateErrors = () =>{
//   if(!data.StateID){
//     setIsError(true)
//     setStateErr('required')
//   }

// }

// const CityErrors = () =>{
//   if(!data.CityID){
//     setIsError(true)
//     setCityErr('required')
//   }
// }

// const PasswordErrors = () =>{
//   if(!data.Password ){
//     setIsError(true)
//     setPasswordErr('reuired')
//   }else if(data.Password.length < 8){
//     setIsError(true)
//     setPasswordErr('minimum 8 character')
//   }
//   else{
//     setIsError(false)
//     setPasswordErr('')
//   }
// }

// const ConfirmErrors = () =>{
//   if(!data.ConfirmPassword ){
//     setIsError(true)
//     setConfirmPasswordErr('not match')
//   }else if(data.ConfirmPassword !== data.Password ){
//     setIsError(true)
//     setConfirmPasswordErr('not match')
//   }

// }

// // store or dispatch

//   const batchHandler = (e) => {
//     setBatch(e.target.value);
//     dispatch(registerActions.enteredBatch({ batch: e.target.value }));
//   };
//   const rollHandler = (e) => {
//     setRollNum(e.target.value);
//     dispatch(registerActions.enteredRoll({ roll: e.target.value }));
//   };
//   const fullNameHandler = (e) => {
//     dispatch(registerActions.enteredName({ fullName: e.target.value }));
//   };
//   const genderHandler = (e) => {
//     setGender(e.target.value);
//     dispatch(registerActions.enteredGender({ gender: e.target.value }));
//   };
//   const dobHandler = (e) => {
//     dispatch(registerActions.enteredDob({ dob: e.target.value }));
//   };
//   const phoneNumHandler = (e) => {
//     dispatch(registerActions.enteredPhone({ phoneNumber: e.target.value }));
//   };
//   const emailHandler = (e) => {
//     dispatch(registerActions.enteredEmail({ email: e.target.value }));
//   };
//   const countryHandler = (e) => {
//     setCountryId(e.target.value.countryId)
//     dispatch(registerActions.enteredCountry({ country: e.target.value }));
//   };
//   const stateHandler = (e) => {
//     setStateId(e.target.value.StateId)
//     dispatch(registerActions.enteredState({ state: e.target.value }));
//   };
//   const cityHandler = (e) => {
//     console.log(e.target.value,'city')
//     dispatch(registerActions.enteredCity({ city: e.target.value }));
//   };
//   const pincodeHandler = (e) => {
//     dispatch(registerActions.enteredPincode({ pincode: e.target.value }));
//   };
//   const passwordHandler = (e) => {
//     dispatch(registerActions.enteredPassword({ password: e.target.value }));
//   };
//   const confirmPassHandler = (e) => {
//     dispatch(registerActions.enteredConfirmPassword({confirmPassword: e.target.value,}));
//   };
//   const ImageHandler = (e) =>{
//     dispatch(registerActions.enteredImage({ photo : e.target.value}))
//   }

//   const allDetail = {

//     UserProfileID:  data.UserProfileID,
//     CountryCode: data.CountryCode,
//     BatchID : data.BatchID ,
//     RollNumberID :  data.RollNumberID,
//     FullName : data.FullName ,
//     Gender : data.Gender,
//     DateOfBirth : data.DateOfBirth,
//     PhoneNumber : data.PhoneNumber,
//     CityID : data.CityID.CityId,
//     UserID :  data.UserID,
//     ImagePath : data.ImagePath,
//     PinCode : data.Pincode,
//     OldImage : data.OldImage,
//     Email : data.Email,
//     Password : data.Password,
//     ConfirmPassword : data.ConfirmPassword,
//     UploadImage : data.UploadImage,
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if(!isError){
//       axios
//         .put('http://192.168.29.113/ISTCOSA.API/Account/PutRegister',allDetail)
//         .then((result)=>{
//           console.log(result,'resultOfSubmit')
//         })
//         .catch((err)=>{
//           console.log(err)
//         })
//     }else{
//       isError()
//     }
//   };

//   const handleCheck = () =>{
//     setShow(x => !x)
//   }

//   return (
//     <div className={Styles.regInput}>
//       <form className={Styles.forms} onSubmit={submitHandler}>
//         <TextField
//           select
//           label="batch year"
//           className={Styles.fields}
//           onChange={batchHandler}
//           size="small"
//           displayEmpty
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 },
//               width: '-webkit-fill-available',
//           }}

//           value={data.BatchID}
//           helperText={batchErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={BatchErrors}
//         >
//         <MenuItem disabled value=""  >Batch Year</MenuItem>
//           {
//             batchList.map((x,ind)=>{
//               return(
//                 <MenuItem key={ind} value={x}>{x}</MenuItem>
//               )
//             })
//           }
//         </TextField>

//         <TextField
//           select
//           label="Roll number"
//           className={Styles.fields}
//           onChange={rollHandler}
//           size="small"
//           displayEmpty
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38}, width: '-webkit-fill-available' }}

//           value={data.RollNumberID}
//           helperText={rollErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={RollErrors}
//         >
//         <MenuItem disabled value="">Roll Number</MenuItem>
//           {
//             rollNumList.map((x,ind)=>{
//               return(
//                 <MenuItem key={ind} value={x}>{x}</MenuItem>
//               )
//             })
//           }
//         </TextField>

//         <TextField
//           className={Styles.fields}
//           onChange={fullNameHandler}
//           sx={{ marginTop: "1.5rem" , "& .MuiInputBase-root": { height: 38,  }, width: '-webkit-fill-available' }}
//           size='small'
//           name="fullName"
//           id="outlined-basic"
//           label="Full Name"
//           variant="outlined"

//           value={data.FullName}
//           helperText={fullNameErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={FullNameErrors}

//         />

//         <FormControl className={Styles.gend} >
//           <FormLabel className={Styles.gen} >Gender</FormLabel>
//             <RadioGroup value={data.Gender} row onChange={ genderHandler } >
//               <FormControlLabel  control={ <Radio size='small' /> } label='Male' value='male' />
//               <FormControlLabel control={ <Radio size='small' /> } label='Female' value='female' />
//             </RadioGroup>
//         </FormControl>

//         <TextField
//           type="date"
//           className={Styles.fields}
//           size='small'
//           onChange={dobHandler}
//           sx={{
//             marginTop: "1.5rem",
//             "& .MuiInputBase-root": { height: 38 },
//             color: "transparent",
//           }}
//           name="dob"
//           value={data.DateOfBirth}
//           helperText={dobErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={DobErrors}

//         />
//         <>
//            <TextField
//             className={Styles.fields}
//             onChange={phoneNumHandler}
//             sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 } }}
//             size='small'
//             name="phoneNumber"
//             id="outlined-basic"
//             label="Phone Number"
//             variant="outlined"

//             value={data.PhoneNumber}
//             helperText={phoneNumberErr}
//             error={isError}
//             onFocus={clearError}
//             onBlur={PhoneNumberErrors}
//             />
//         </>

//         <TextField
//           className={Styles.fields}
//           onChange={emailHandler}
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 }}}
//           size='small'
//           name="email"
//           id="outlined-basic"
//           label="Email Address"
//           variant="outlined"

//           value={data.Email}
//           helperText={emailErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={EmailErrors}
//         />

//         <TextField
//           select
//           className={Styles.fields}
//           onChange={countryHandler}
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 }, width: '-webkit-fill-available' }}
//           size='small'
//           name="country"
//           id="outlined-basic"
//           label="Country"
//           variant="outlined"

//           value={data.Country}
//           helperText={countryErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={CountryErrors}
//         >
//         <MenuItem disabled value="">Country</MenuItem>

//         {
//           countryList.map((x,ind)=>{
//             return(
//                 <MenuItem key={ind} value={x}>{x.countryName}</MenuItem>
//             )
//           })
//         }
//         </TextField>

//         <TextField
//           select
//           className={Styles.fields}
//           onChange={stateHandler}
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 }, width: '-webkit-fill-available' }}
//           size='small'
//           name="state"
//           id="outlined-basic"
//           label="State"
//           variant="outlined"

//           value={data.State}
//           helperText={stateErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={StateErrors}
//         >
//         <MenuItem disabled value="">State</MenuItem>

//           {
//             stateList.map((x,ind)=>{
//               return(
//                 <MenuItem key={ind} value={x}>{x.StateName}</MenuItem>
//               )
//             })
//           }

//         </TextField>

//         <TextField
//           select
//           className={Styles.fields}
//           onChange={cityHandler}
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 }, width: '-webkit-fill-available' }}
//           size='small'
//           name="city"
//           id="outlined-basic"
//           label="City"
//           variant="outlined"

//           value={data.City}
//           helperText={cityErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={CityErrors}
//         >
//         <MenuItem disabled value="">City</MenuItem>

//           {
//             cityList.map((x,ind)=>{
//               return(
//                 <MenuItem key={ind} value={x}>{x.CityName}</MenuItem>
//               )
//             })
//           }
//         </TextField>

//         <TextField
//           className={Styles.fields}
//           onChange={pincodeHandler}
//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 } }}
//           size='small'
//           name="pincode"
//           id="outlined-basic"
//           label="Pincode"
//           variant="outlined"
//         />
//         <TextField
//           className={Styles.fields}
//           onChange={passwordHandler}
//           type={show?'text' : 'password'}

//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 } }}
//           size='small'
//           name="password"
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"

//           value={data.Password}
//           helperText={passwordErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={PasswordErrors}
//         />
//         <TextField
//           className={Styles.fields}
//           onChange={confirmPassHandler}
//           type={show?'text' : 'password'}

//           sx={{ marginTop: "1.5rem", "& .MuiInputBase-root": { height: 38 } }}
//           size='small'
//           name="confirmPassword"
//           id="outlined-basic"
//           label="Confirm Password"
//           variant="outlined"

//           value={data.ConfirmPassword}
//           helperText={confirmPasswordErr}
//           error={isError}
//           onFocus={clearError}
//           onBlur={ConfirmErrors}
//         />
//           <span className={Styles.show} >
//             <Checkbox
//             checked={show}
//             onChange={handleCheck}
//             inputProps={{ 'aria-label': 'controlled' }}
//             /> Show Password
//           </span>

//         <IconButton
//           className={Styles.upload}
//           sx={{ marginTop: "1.5rem" }}
//           color="primary"
//           aria-label="upload picture"
//           component="label"
//           onChange={ImageHandler}

//         >
//           <Input hidden accept="image/*" type="file" />
//           <PhotoCamera sx={{ color: "#700606" }} />
//           <span>upload image</span>
//         </IconButton>
//         <br></br>

//         <Button
//           variant="contained"
//           type="submit"
//           size="small"
//           className={Styles.submit}

//           sx={{ marginTop: "2rem", width: "5rem", backgroundColor: "#700606" }}

//         >
//           Submit
//         </Button>
//       </form>
//       <p>
//         Have already an account?{" "}
//         <span onClick={() => navigate("/")}>Login Here</span>
//       </p>

//     </div>
//   );
// };

// export default RegInput;
