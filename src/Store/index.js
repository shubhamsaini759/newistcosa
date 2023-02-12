import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";
import { RegisterSlice } from "./RegisterSlice";
import { TempIdSlice } from "./TempIdSlice";

export const loginActions = LoginSlice.actions;
export const registerActions = RegisterSlice.actions;
export const tempIdActions = TempIdSlice.actions;

const Store = configureStore({
    reducer : {
        loginReducer : LoginSlice.reducer,
        registerReducer : RegisterSlice.reducer,
        tempIdReducer : TempIdSlice.reducer,
    }
})

export default Store;