import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";
import { TempIdSlice } from "./TempIdSlice";

export const loginActions = LoginSlice.actions;
export const tempIdActions = TempIdSlice.actions;

const Store = configureStore({
    reducer : {
        loginReducer : LoginSlice.reducer,
        tempIdReducer : TempIdSlice.reducer,
    }
})

export default Store;