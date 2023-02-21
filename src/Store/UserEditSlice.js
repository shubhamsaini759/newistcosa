import { createSlice } from "@reduxjs/toolkit";

export const UserEditSlice = createSlice({
  name: "userEditMore",
  initialState: {
    RollNumberID : '',
    BatchID : '',
    CountryID: "",
    StateID: "",
    CityID: "",
    PinCode: "",
    Profession: "",
    University: "",
    Degree: "",
    Skills: "",
    JoiningYear: "",
    ExpectedCompletionYear: "",
    Designation: "",
    CompanyName: "",
    FromDate: "",
    ToDate: "",
    Responsibility: "",
    Gender: "",
    DateOfBirth: "",
    WhatsappNumber: "",
    Address: "",
    MaritalStatus: "",
    AboutYourSelf: "",
    SpouseName:'',
    AniversaryDate : '',
    ChildDetails : '',
    ISTCNickName: "",
    ISTCFriendRoommate: "",
    ISTCAbout: "",
    Comments: "",
    SearchKeyword: "",
  },
  reducers: {
    countryCityState(state, { payload }) {
      state.CountryID = payload.countryId;
      state.StateID = payload.stateId;
      state.CityID = payload.cityId;
      
    },
    batch(state,{payload}){
      state.BatchID = payload.batch
    },
    roll(state,{payload}){
      state.RollNumberID = payload.roll
    },
    PinHandel(state, { payload }){
      state.PinCode = payload.pin
    },
    ProfessionHandel(state,{ payload }){
      state.Profession = payload.profession
    },
    collegeHandel(state, { payload }){
      state.University = payload.college
    },
    qualiHandel(state, {payload}){
      state.Degree = payload.quali
    },
    skillHandel(state,{payload}){
      state.Skills = payload.skill
    },
    desigHandel(state,{payload}){
      state.desigHandel = payload.designation
    },
    recentHandel(state, {payload}){
      state.CompanyName = payload.recent
    },
    startHandel(state,{payload}){
      state.FromDate = payload.start
    },
    toHandel(state, {payload}){
      state.ToDate = payload.to
    },
    describeHandel(state, {payload}){
      state.Responsibility = payload.describe
    },
    GendeHandle(state, {payload}){
      state.Gender = payload.gen
    },
    MaritalHandle(state, {payload}){
      state.MaritalStatus = payload.marital
    },
    NumHandle(state, { payload}){
      state.WhatsappNumber = payload.number
    },
    DobHandle(state, {payload}){
      state.DateOfBirth = payload.dob
    },
    addHandle(state, {payload}){
      state.Address = payload.add
    },
    aboutHandle(state, { payload}){
      state.AboutYourSelf = payload.about
    },
    spouseHandle(state, {payload}){
      state.SpouseName = payload.spouse
    },
    aniHandle(state, {payload}){
      state.AniversaryDate = payload.ani
    },
    familyHandle(state,{payload}){
      state.ChildDetails = payload.family
    },
    nickHandle(state,{payload}){
      state.ISTCNickName = payload.nick
    },
    roomHandle(state,{payload}){
      state.ISTCFriendRoommate = payload.room
    },
    memoriesHandle(state,{payload}){
      state.ISTCAbout = payload.memories
    },
    commentHandle(state,{payload}){
      state.Comments = payload.comment
    },
    keywordHandle(state,{payload}){
      state.SearchKeyword = payload.keyword
    }

  },
});
