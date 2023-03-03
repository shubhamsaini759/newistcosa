import { createSlice } from "@reduxjs/toolkit";

export const AddCompanySlice = createSlice({
  name: "addCompanySlice",
  initialState: {
    CompanyName: "",
        CompanyAddress: "",
        EmailAddress: "",
        ContactNumber: "",
        Country : '',
        State : '',
        City : '',
   
  },
  reducers: {
   
    company(state, {payload}){
      state.CompanyName = payload.company
    },
    contact(state,{payload}){
      state.ContactNumber = payload.contact
    },
    email(state, {payload}){
      state.EmailAddress = payload.email
    },
    address(state, {payload}){
      state.CompanyAddress = payload.address
    },
    country(state, {payload}){
      state.Country = payload.country
    },
    state(state,{payload}){
      state.State = payload.state
    },
    city(state,{payload}){
      state.City = payload.city
    }

  },
});
