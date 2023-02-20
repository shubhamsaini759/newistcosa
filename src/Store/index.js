import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";
import { TempIdSlice } from "./TempIdSlice";
import { UserEditSlice } from "./UserEditSlice";


export const loginActions = LoginSlice.actions;
export const tempIdActions = TempIdSlice.actions;

const Store = configureStore({
    reducer : {
        loginReducer : LoginSlice.reducer,
        tempIdReducer : TempIdSlice.reducer,
        UserEditReducer : UserEditSlice.reducer,
    }
})

export default Store;