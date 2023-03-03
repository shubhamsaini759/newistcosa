import { createSlice } from "@reduxjs/toolkit";


export const ProfessionalInfoSlice = createSlice({
    name : 'professionalInfo',
    initialState : {
        Profession: "",
        Designation: "",
        CompanyName: "",
        CompanyID : "",
        Responsibility: "",
        UserID: "",
        Active: "",
        FromDate: "",
        ToDate: ""
    },
    reducers : {
        profess(state,{payload}){
            state.Profession = payload.profess
        },
        userId(state,{payload}){
            state.UserID = payload.userId
        },
        desig(state,{payload}){
            state.Designation = payload.desig
        },
        name(state,{payload}){
            state.CompanyName = payload.name
        },
        compId(state,{payload}){
            state.CompanyID = payload.compId
        },
        fromDate(state,{payload}){
            state.FromDate = payload.fromDate
        },
        toDate(state,{payload}){
            state.ToDate = payload.toDate
        },
        res(state,{payload}){
            state.Responsibility = payload.res
        },
        active(state,{payload}){
            state.Active = payload.active
        }
    }
})