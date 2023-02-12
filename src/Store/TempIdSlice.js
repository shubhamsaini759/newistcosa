import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const TempIdSlice = createSlice({
  name: "tempId",
  initialState: {
    UserProfileID: "0",
    CountryCode: "",
    BatchID: "",
    RollNumberID: "",
    FullName: "",
    Gender: "",
    DateOfBirth: "",
    PhoneNumber: "",
    CountryID: "",
    StateID: "",
    CityID: "",
    UserID: "",
    ImagePath: "",
    Pincode: "",
    OldImage: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    UploadImage: "",
  },
  reducers: {
    BatchId(state, action) {
      state.BatchID = action.payload.batchID;
    },
    RollId(state, action) {
      state.RollNumberID = action.payload.rollID;
    },
    EnteredName(state, action) {
      state.FullName = action.payload.name;
    },
    EnteredEmail(state, action) {
      state.Email = action.payload.email;
    },
    EnteredPhone(state, action) {
      state.PhoneNumber = action.payload.Phone;
    },
    EnteredPass(state, action) {
      state.Password = action.payload.password;
    },
    EnteredConfirmPass(state, action) {
      state.ConfirmPassword = action.payload.ConfirmPass;
    },
    EnteredPincode(state, action) {
      state.Pincode = action.payload.Pincode;
    },
    CountryId(state, action) {
      state.CountryID = action.payload.countryID;
    },
    StateId(state, action) {
      state.StateID = action.payload.stateID;
    },
    CityId(state, action) {
      state.CityID = action.payload.cityID;
    },
    Dob(state, action) {
      state.DateOfBirth = action.payload.dob;
    },
    Gender(state, action) {
      state.Gender = action.payload.gen;
    },
    CountryCode(state, action) {
      state.CountryCode = action.payload.countryCode;
    },
  },
});
