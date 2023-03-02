import { createSlice } from "@reduxjs/toolkit";

export const AddCompanySlice = createSlice({
  name: "addCompanySlice",
  initialState: {
    Profession : '',
    Designation : '',
    CompanyName: "",
    CompanyAddress: "",
    EmailAddress: "",
    ContactNumber: "",
    FromDate : '',
    ToDate : '',
    Responsibility :'',
   
  },
  reducers: {
    profession(state, {payload}){
      state.Profession = payload.profession
    },
    designation(state, {payload}){
      state.Designation = payload.designation
    },
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
    fromD(state, {payload}){
      state.FromDate = payload.fromD
    },
    toD(state,{payload}){
      state.ToDate = payload.toD
    },
    res(state, {payload}){
      state.Responsibility = payload.res
    }

  },
});
