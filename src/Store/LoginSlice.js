import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
        name : 'login',
        initialState : {
            Username : '',
            Password : '',
        },
        reducers : {

            EnteredRoll(state,action){
                state.Username = action.payload.rollNumber
            },
            EnteredPass(state,action){
                state.Password = action.payload.password
            },
            loginHandler(state){
                state.isLoggedIn = true
            }
        }


})