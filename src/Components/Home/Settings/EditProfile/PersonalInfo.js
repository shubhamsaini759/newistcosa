import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
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
import { userEditDetail } from "../../../../Utils/api/UserMoreDetail/UserEditDetail";

const PersonalInfo = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const perosnaldata = useSelector((state) => state.UserEditReducer);
  const { data: editDetails, mutateAsync: edited } = useMutation(
    "userEditDetail",
    userEditDetail
  );

  console.log(props);

  const [dob, setDob] = useState(DateFormatter(props?.userData?.DateOfBirth));
  const [marital, setMarital] = useState("");
  const [gen, setGen] = useState(props?.userData?.Gender);

  const submitHandler = async () => {
    console.log(perosnaldata, "personaldata");
    // await edited(perosnaldata);
    // console.log(editDetails)
  };

  const val = {
    Fullname: `${props?.userData?.FullName}`,
    BatchName: `${props?.userData?.BatchID}`,
    RollNumber: `${props?.userData?.RollNumberID}`,
    // DateOfbirth: `${props?.userData?.DateOfBirth}`,
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
    ResidentialAddress: `${props?.userData?.Address}`,
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
    dispatch(
      userEditActions.country({
        country: data?.id ? data.id : props?.userData?.CountryID,
      })
    );

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
    dispatch(
      userEditActions.state({
        state: data?.id ? data.id : props?.userData?.StateID
      })
    );

    await stateId(data.id);
    data
      ? form.setFieldsValue({
          State: data.value,
          City: "",
        })
      : console.log("state");
  };

  const cityHandler = (_, data) => {
    dispatch(
      userEditActions.city({
        city: data?.id ? data.id : props?.userData?.CityID
      })
    );

    data
      ? form.setFieldValue({
          City: data.value,
        })
      : console.log("city");
  };

  const nameHandler = (data) => {
    dispatch(
      userEditActions.FullName({
        FullName: data ? data : props?.userData?.FullName
      })
    );
  };

  const genderHandler = (data) => {
    dispatch(
      userEditActions.gender({ gender: data ? data : props?.userData?.Gender })
    );
    setGen(data);
  };

  const dobHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(
      userEditActions.dob({
        dob: formattedDate
          ? formattedDate
          : DateFormatter(props?.userData?.DateOfBirth)
      })
    );
    setDob(formattedDate);
  };

  const whatsappHandler = (data) => {
    dispatch(
      userEditActions.whatsapp({
        whatsapp: data ? data : props?.userData?.WhatsappNumber
      })
    );
  };
  const numberHandler = (data) => {
    dispatch(
      userEditActions.phone({
        phone: data ? data : props?.userData?.PhoneNumber,
      })
    );
  };
  const pincodeHandler = (data) => {
    dispatch(
      userEditActions.pincode({ pin: data ? data : props?.userData?.PinCode })
    );
  };

  const nicknameHandler = (data) => {
    dispatch(
      userEditActions.nick({
        nick: data ? data : props?.userData?.ISTCNickName
      })
    );
  };
  const roommatesHandler = (data) => {
    dispatch(
      userEditActions.room({
        room: data ? data : props?.userData?.ISTCFriendRoommate
      })
    );
  };
  const commentHandler = (data) => {
    dispatch(
      userEditActions.comments({
        comments: data ? data : props?.userData?.Commnets
      })
    );
  };
  const istcAboutHandler = (data) => {
    dispatch(
      userEditActions.aboutIstc({
        aboutIstc: data ? data : props?.userData?.ISTCAbout
      })
    );
  };
  const myselfHandler = (data) => {
    dispatch(
      userEditActions.about({ about: data ? data : props?.userData?.ISTCAbout })
    );
  };
  const keywordhandler = (data) => {
    dispatch(
      userEditActions.keywords({
        keywords: data ? data : props?.userData?.SearchKeyword,
      }
    );
  };
  const addressHandler = (data) => {
    dispatch(
      userEditActions.address({
        address: data ? data : props?.userData?.Address
      })
    );
  };
  const maritalHandler = (data) => {
    setMarital(data);
    dispatch(
      userEditActions.marital({
        marital: data ? data : props?.userData?.MaritalStatus
      })
    );
  };
  const spouseHandler = (data) => {
    dispatch(
      userEditActions.spouse({
        spouse: data ? data : props?.userData?.SpouseName
      })
    );
  };
  const childHandler = (data) => {
    dispatch(
      userEditActions.child({
        child: data ? data : props?.userData?.ChildDetails
      })
    );
  };

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
        <Gender
          label="Gender"
          name="Gender"
          value={gen}
          handler={genderHandler}
        />
        <Dates
          name="DateOfbirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select your DOB" }]}
          value={dob}
          handler={dobHandler}
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
          onChange={maritalHandler}
        />
        {marital === "Married" ? (
          <>
            <Inputs
              label="Spouse Name"
              name="SpouseName"
              handler={spouseHandler}
            />
            <Dates label="Aniversary Date" name="AniversaryDate" />
          </>
        ) : (
          ""
        )}
      </div>
      {marital === "Married" ? (
        <div className={Styles.eighthRow}>
          <TextAreaInputs
            label="Child Details"
            name="ChildDetails"
            length={200}
            handler={childHandler}
          />
        </div>
      ) : (
        ""
      )}

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" htmlType="submit" onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
