import { configureStore } from "@reduxjs/toolkit";

import { LoginSlice } from "./LoginSlice";
import { TempIdSlice } from "./TempIdSlice";
import { UserEditSlice } from "./UserEditSlice";
import { AddCompanySlice } from "./AddCompanySlice";
import { EditToastSlice } from "./EditToastSlice";
import { ProfessionalInfoSlice } from "./ProfessionalInfoSlice";
import { ImageChangeSlice } from "./ImageChangeSlice";

export const loginActions = LoginSlice.actions;
export const tempIdActions = TempIdSlice.actions;
export const userEditActions = UserEditSlice.actions;
export const addCompanyActions = AddCompanySlice.actions;
export const editToastActions = EditToastSlice.actions;
export const professionalInfoActions = ProfessionalInfoSlice.actions;
export const ImageChangeActions = ImageChangeSlice.actions; 

const Store = configureStore({
  reducer: {
    loginReducer: LoginSlice.reducer,
    tempIdReducer: TempIdSlice.reducer,
    UserEditReducer: UserEditSlice.reducer,
    addCompanyReducer: AddCompanySlice.reducer,
    editToastReducer: EditToastSlice.reducer,
    professionalInfoReducer : ProfessionalInfoSlice.reducer,
    ImageChangeReducer : ImageChangeSlice.reducer,
  },
});

export default Store;
