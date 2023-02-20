import { createSlice } from "@reduxjs/toolkit";

export const UserEditSlice = createSlice({
  name: "userEditMore",
  initialState: {
    CountryID: "1",
    StateID: "13",
    CityID: "1",
    PinCode: "123543",
    Profession: "Student",
    University: "CGC",
    Degree: "MCA",
    Skills: "html",
    JoiningYear: "02-04-2017",
    ExpectedCompletionYear: "03-05-2018",
    Designation: "",
    CompanyName: "",
    FromDate: "",
    ToDate: "",
    Responsibility: "",
    Gender: "Male",
    DateOfBirth: "12-07-2002",
    WhatsappNumber: "9898989898",
    Address: "xyz,chandigarh,india",
    MaritalStatus: "Single",
    AboutYourSelf: "i am a developer",

    ISTCNickName: "",
    ISTCFriendRoommate: "",
    ISTCAbout: "",
    Commnets: "",
    SearchKeyword: "",
  },
  reducers: {
    countryCityState(state, { payload }) {
      state.CountryID = payload.countryId;
      state.StateID = payload.stateId;
      state.CityID = payload.cityId;
    },
  },
});
