import { createSlice } from "@reduxjs/toolkit";

export const UserEditSlice = createSlice({
  name: "userEditMore",
  initialState: {
    RollNumberID: "",
    BatchID: "",
    CountryID: "",
    FullName: "",
    StateID: "",
    CityID: "",
    PinCode: "",
    Profession: "",
    University: "",
    Degree: "",
    Skills: "",
    PhoneNumber: "",
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
    SpouseName: "",
    AniversaryDate: "",
    ChildDetails: "",
    ISTCNickName: "",
    ISTCFriendRoommate: "",
    ISTCAbout: "",
    Comments: "",
    SearchKeyword: "",
    UserID: "",
    UpdatedDate: null,
    CreatedDate: null,
    DeletedDate: null,
  },
  reducers: {
    batchId(state, { payload }) {
      state.BatchID = payload.batchId;
    },
    rollNumber(state, { payload }) {
      state.RollNumberID = payload.rollNumber;
    },
    FullName(state, { payload }) {
      state.FullName = payload.FullName;
    },
    pincode(state, { payload }) {
      state.PinCode = payload.pin;
    },
    country(state, { payload }) {
      state.CountryID = payload.country;
    },
    state(state, { payload }) {
      state.StateID = payload.state;
    },
    city(state, { payload }) {
      state.CityID = payload.city;
    },
    uni(state, { payload }) {
      state.University = payload.uni;
    },
    profession(state, { payload }) {
      state.Profession = payload.profession;
    },
    degree(state, { payload }) {
      state.Degree = payload.degree;
    },
    skill(state, { payload }) {
      state.Skills = payload.skill;
    },
    phone(state, { payload }) {
      state.PhoneNumber = payload.phone;
    },
    joining(state, { payload }) {
      state.JoiningYear = payload.joining;
    },
    complete(state, { payload }) {
      state.ExpectedCompletionYear = payload.complete;
    },
    job(state, { payload }) {
      state.Designation = payload.job;
    },
    company(state, { payload }) {
      state.CompanyName = payload.company;
    },
    fromD(state, { payload }) {
      state.FromDate = payload.from;
    },
    toD(state, { payload }) {
      state.ToDate = payload.to;
    },
    describe(state, { payload }) {
      state.Responsibility = payload.describe;
    },
    gender(state, { payload }) {
      state.Gender = payload.gender;
    },
    dob(state, { payload }) {
      state.DateOfBirth = payload.dob;
    },
    whatsapp(state, { payload }) {
      state.WhatsappNumber = payload.whatsapp;
    },
    address(state, { payload }) {
      state.Address = payload.address;
    },
    about(state, { payload }) {
      state.AboutYourSelf = payload.about;
    },
    marital(state, { payload }) {
      state.MaritalStatus = payload.marital;
    },
    spouse(state, { payload }) {
      state.SpouseName = payload.spouse;
    },
    aniversary(state, { payload }) {
      state.AniversaryDate = payload.aniversary;
    },
    child(state, { payload }) {
      state.ChildDetails = payload.child;
    },
    nick(state, { payload }) {
      state.ISTCNickName = payload.nick;
    },
    room(state, { payload }) {
      state.ISTCFriendRoommate = payload.room;
    },
    aboutIstc(state, { payload }) {
      state.ISTCAbout = payload.aboutIstc;
    },
    comments(state, { payload }) {
      state.Comments = payload.comments;
    },
    keywords(state, { payload }) {
      state.SearchKeyword = payload.keywords;
    },
    allData(state, { payload }) {
      for (let i in payload.data) {
        state[i] = payload.data[i];
      }
    }
  },
});
