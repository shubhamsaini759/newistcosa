import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
    name : 'register',
    initialState : {
        UserProfileID: '0',
        CountryCode: "",
        BatchID : '',
        RollNumberID : '',
        FullName : '',
        Gender : '',
        DateOfBirth : '',
        PhoneNumber : '',
        CountryID : '',
        StateID : '',
        CityID : '',
        UserID : '',
        ImagePath : '',
        PinCode : '',
        OldImage : '',
        Email : '',
        Password : '',
        ConfirmPassword : '',
        UploadImage : '',
    },
    reducers : {

        













        // enteredBatch(state,action){
        //     state.BatchID = action.payload.batch
        // },
        // enteredRoll(state,action){
        //     state.RollNumberID = action.payload.roll
        //     state.UserID = action.payload.roll
        // },
        // enteredName(state,action){
        //     state.FullName = action.payload.fullName
        // },
        // enteredGender(state,action){
        //     state.Gender = action.payload.gender
        // },
        // enteredDob(state,action){
        //     state.DateOfBirth = action.payload.dob
        // },
        // enteredPhone(state,action){
        //     state.PhoneNumber = action.payload.phoneNumber
        // },
        // enteredEmail(state,action){
        //     state.Email = action.payload.email
        // },
        // enteredCountry(state,action){
        //     state.CountryID = action.payload.country
        // },
        // enteredState(state,action){
        //     state.StateID = action.payload.state
        // },
        // enteredCity(state,action){
        //     state.CityID = action.payload.city
        // },
        // enteredPincode(state,action){
        //     state.PinCode = action.payload.pincode
        // },
        // enteredPassword(state,action){
        //     state.Password = action.payload.password
        // },
        // enteredConfirmPassword(state,action){
        //     state.ConfirmPassword = action.payload.confirmPassword
        // },
        // enteredImage(state,action){
        //     state.UploadImage = action.payload.photo
        // },
        // enteredCode(state,action){
        //     state.CountryCode = action.payload.code
        // }
    }
})