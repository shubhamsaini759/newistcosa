import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";
import { TempIdSlice } from "./TempIdSlice";
import { UserEditSlice } from "./UserEditSlice";
import { AddCompanySlice } from "./AddCompanySlice";
import { EditToastSlice } from "./EditToastSlice";

export const loginActions = LoginSlice.actions;
export const tempIdActions = TempIdSlice.actions;
export const userEditActions = UserEditSlice.actions;
export const addCompanyActions = AddCompanySlice.actions;
export const editToastActions = EditToastSlice.actions;

const Store = configureStore({
  reducer: {
    loginReducer: LoginSlice.reducer,
    tempIdReducer: TempIdSlice.reducer,
    UserEditReducer: UserEditSlice.reducer,
    addCompanyReducer: AddCompanySlice.reducer,
    editToastReducer: EditToastSlice.reducer,
  },
});

export default Store;
