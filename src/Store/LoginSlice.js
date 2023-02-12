import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
        name : 'login',
        initialState : {
            rollNumber : '',
            password : '',
            isLoggedIn : false
        },
        reducers : {

            EnteredRoll(state,action){
                state.rollNumber = action.payload.rollNumber
            },
            EnteredPass(state,action){
                state.password = action.payload.password
            },
            loginHandler(state){
                state.isLoggedIn = true
            }
        }


})