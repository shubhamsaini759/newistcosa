import { createSlice } from "@reduxjs/toolkit";

export const AddCompanySlice = createSlice({
  name: "addCompanySlice",
  initialState: {
    CompanyName: "",
    CompanyAddress: "",
    EmailAddress: "",
    ContactNumber: "",
    CityID: "1",
    StateID: "13",
    CountryID: "1",
  },
  reducers: {
    Name(state, { payload }) {
      state.CompanyName = payload.name;
    },
    Number(state, { payload }) {
      state.ContactNumber = payload.number;
    },
    Email(state, { payload }) {
      state.EmailAddress = payload.email;
    },
    Address(state, { payload }) {
      state.CompanyAddress = payload.address;
    },
    countryCityState(state, { payload }) {
      state.CountryID = payload.countryId;
      state.StateID = payload.stateId;
      state.CityID = payload.cityId;
    },
  },
});
