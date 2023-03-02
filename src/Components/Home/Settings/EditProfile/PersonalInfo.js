import { Button, Form } from "antd";
import React, { useState } from "react";
import Styles from "../../../../Styles/EditProfile/PersonalProfile.module.css";

import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../../Utils/api/CountryList";
import Inputs from "../../../GlobalComp/InputFields/Inputs";
import Gender from "../../../GlobalComp/InputFields/Gender";
import Dates from "../../../GlobalComp/InputFields/Dates";
import NumberInputs from "../../../GlobalComp/InputFields/NumberInputs";
import EmailInputs from "../../../GlobalComp/InputFields/EmailInputs";
import AutoInputs from "../../../GlobalComp/InputFields/AutoInputs";
import TextAreaInputs from "../../../GlobalComp/InputFields/TextAreaInputs";
import Marital from "../../../GlobalComp/InputFields/Marital";
import { StateList } from "../../../../Utils/api/StateList";
import { CityList } from "../../../../Utils/api/CityList";
import { useDispatch, useSelector } from "react-redux";
import { userEditActions } from "../../../../Store";
import { DateFormatter } from "../../../../Utils/Helpers";

const PersonalInfo = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const perosnaldata = useSelector((state) => state.UserEditReducer);

  const submitHandler = () => {
    console.log(perosnaldata, "personaldata");
  };

  console.log(props, "daatatatatat");
  const val = {
    Fullname: `${props?.userData?.FullName}`,
    BatchName: `${props?.userData?.BatchID}`,
    RollNumber: `${props?.userData?.RollNumberID}`,
    Gender: `${props?.userData?.Gender}`,
    DateOfbirth: `${props?.userData?.DateOfBirth}`,
    WhatsappNumber: `${props?.userData?.WhatsappNumber}`,
    Email: `${props?.userData?.Email}`,
    ContactNumber: `${props?.userData?.PhoneNumber}`,
    Country: `${props?.userData?.CountryName}`,
    State: `${props?.userData?.StateName}`,
    City: `${props?.userData?.CityName}`,
    Pincode: `${props?.userData?.PinCode}`,
    ISTCNickname: `${props?.userData?.ISTCNickName}`,
    ISTCRoommates: `${props?.userData?.ISTCFriendRoommate}`,
    Comments: `${props?.userData?.Commnets}`,
    IstcAbout: `${props?.userData?.ISTCAbout}`,
    AboutMyself: `${props?.userData?.AboutYourSelf}`,
    SearchKeyword: `${props?.userData?.SearchKeyword}`,
    ResidentialAddress: ``,
    Marital: `${props?.userData?.MaritalStatus}`,
    SpouseName: `${props?.userData?.SpouseName}`,
    AniversaryDate: `${props?.userData?.AniversaryDate}`,
    ChildDetails: `${props?.userData?.ChildDetails}`,
  };

  const { data: countryData } = useQuery("CountryList", CountryList);
  const { data: stateData, mutateAsync: countryId } = useMutation(
    "StateList",
    StateList
  );
  const { data: cityData, mutateAsync: stateId } = useMutation(
    "CityList",
    CityList
  );

  const countryHandler = async (_, data) => {
    console.log(data.id, "select");
    dispatch(userEditActions.country({ country: data?.id }));

    await countryId(data.id);
    data
      ? form.setFieldsValue({
          Country: data.value,
          State: "",
          City: "",
        })
      : console.log("no");
  };

  const stateHandler = async (_, data) => {
    console.log(data.id, "stateid");
    dispatch(userEditActions.state({ state: data?.id }));

    await stateId(data.id);
    data
      ? form.setFieldsValue({
          State: data.value,
          City: "",
        })
      : console.log("state");
  };

  const cityHandler = (_, data) => {
    dispatch(userEditActions.city({ city: data?.id }));

    data
      ? form.setFieldValue({
          City: data.value,
        })
      : console.log("city");
  };

  const nameHandler = (data) => {
    dispatch(userEditActions.FullName({ FullName: data }));
    console.log(data);
  };

  const genderHandler = (data) => {
    dispatch(userEditActions.gender({ gender: data }));

    console.log(data);
  };

  const whatsappHandler = (data) => {
    dispatch(userEditActions.whatsapp({ whatsapp: data }));

    console.log(data);
  };
  const numberHandler = (data) => {
    dispatch(userEditActions.phone({ phone: data }));

    console.log(data);
  };
  const pincodeHandler = (data) => {
    dispatch(userEditActions.pincode({ pin: data }));

    console.log(data);
  };

  const nicknameHandler = (data) => {
    dispatch(userEditActions.nick({ nick: data }));

    console.log(data);
  };
  const roommatesHandler = (data) => {
    dispatch(userEditActions.room({ room: data }));

    console.log(data);
  };
  const commentHandler = (data) => {
    dispatch(userEditActions.comments({ comments: data }));

    console.log(data);
  };
  const istcAboutHandler = (data) => {
    dispatch(userEditActions.aboutIstc({ aboutIstc: data }));

    console.log(data);
  };
  const myselfHandler = (data) => {
    dispatch(userEditActions.about({ about: data }));

    console.log(data);
  };
  const keywordhandler = (data) => {
    dispatch(userEditActions.keywords({ keywords: data }));

    console.log(data);
  };
  const addressHandler = (data) => {
    console.log(data);
    dispatch(userEditActions.address({ address: data }));
  };
  const maritalHandler = (data) => {
    console.log(data);
    dispatch(userEditActions.marital({ marital: data }));
  };
  const spouseHandler = (data) => {
    dispatch(userEditActions.spouse({ spouse: data }));

    console.log(data);
  };
  const childHandler = (data) => {
    dispatch(userEditActions.child({ child: data }));

    console.log(data);
  };

  const apiDate = DateFormatter(props?.userData?.DateOfBirth);

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ width: "100%" }}
      initialValues={val}
    >
      <div className={Styles.firstRow}>
        <Inputs label="Full Name" name="Fullname" handler={nameHandler} />
        <Inputs
          disabled={true}
          label="Batch Year"
          name="BatchName"
          value={props?.userData?.BatchID}
        />
        <Inputs
          disabled={true}
          label="Roll Number"
          name="RollNumber"
          value={props?.userData?.RollNumberID}
        />
      </div>
      <div className={Styles.secondRow}>
        <Gender label="Gender" name="Gender" handler={genderHandler} />
        <Dates
          name="DateOfbirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select your DOB" }]}
          value={apiDate}
        />
      </div>
      <div className={Styles.thirdRow}>
        <NumberInputs
          label="Whatsapp Number"
          name="WhatsappNumber"
          rules={[{ type: "Number" }]}
          handler={whatsappHandler}
        />
        <EmailInputs disabled={true} label="Email" name="Email" />
        <NumberInputs
          label="Contact Number"
          name="ContactNumber"
          rules={[
            { type: "Number" },
            { required: true, message: "Please Enter Your Number" },
          ]}
          handler={numberHandler}
        />
      </div>
      <div className={Styles.fourthRow}>
        <AutoInputs
          label="Country"
          uid="Country"
          list={countryData}
          handler={countryHandler}
          name="Country"
        />
        <AutoInputs
          label="State"
          list={stateData}
          handler={stateHandler}
          name="State"
        />
        <AutoInputs
          label="City"
          list={cityData}
          handler={cityHandler}
          name="City"
        />
      </div>
      <div className={Styles.fifthRow}>
        <Inputs label="Pincode" name="Pincode" handler={pincodeHandler} />
        <Inputs
          label="ISTC Nickname"
          name="ISTCNickname"
          handler={nicknameHandler}
        />
        <Inputs
          label="ISTC Room Mates/Friends"
          name="ISTCRoommates"
          handler={roommatesHandler}
        />
      </div>
      <div className={Styles.sixthRow}>
        <TextAreaInputs
          label="Comments"
          name="Comments"
          length={2000}
          handler={commentHandler}
        />
        <TextAreaInputs
          label="ISTC About"
          name="IstcAbout"
          length={2000}
          handler={istcAboutHandler}
        />
        <TextAreaInputs
          label="About Myself"
          name="AboutMyself"
          length={2000}
          handler={myselfHandler}
        />
        <TextAreaInputs
          label="Search Keywords"
          name="SearchKeyword"
          length={200}
          handler={keywordhandler}
        />
        <TextAreaInputs
          label="Residential Address"
          name="ResidentialAddress"
          length={200}
          handler={addressHandler}
        />
      </div>
      <div className={Styles.seventhRow}>
        <Marital
          label="Marital Status"
          name="Marital"
          handler={maritalHandler}
        />
        <Inputs label="Spouse Name" name="SpouseName" handler={spouseHandler} />
        <Dates label="Aniversary Date" name="AniversaryDate" />
      </div>
      <div className={Styles.eighthRow}>
        <TextAreaInputs
          label="Child Details"
          name="ChildDetails"
          length={200}
          handler={childHandler}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" htmlType="submit" onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
