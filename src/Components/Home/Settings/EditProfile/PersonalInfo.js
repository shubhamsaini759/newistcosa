import { Alert, Button, Form, message } from "antd";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { userEditActions } from "../../../../Store";
import Styles from "../../../../Styles/EditProfile/PersonalProfile.module.css";
import { CityList } from "../../../../Utils/api/CityList";
import { CountryList } from "../../../../Utils/api/CountryList";
import { StateList } from "../../../../Utils/api/StateList";
import { userEditDetail } from "../../../../Utils/api/UserMoreDetail/UserEditDetail";
import { DateFormatter, disabledYear } from "../../../../Utils/Helpers";
import AutoInputs from "../../../GlobalComp/InputFields/AutoInputs";
import Dates from "../../../GlobalComp/InputFields/Dates";
import EmailInputs from "../../../GlobalComp/InputFields/EmailInputs";
import Gender from "../../../GlobalComp/InputFields/Gender";
import Inputs from "../../../GlobalComp/InputFields/Inputs";
import Marital from "../../../GlobalComp/InputFields/Marital";
import NumberInputs from "../../../GlobalComp/InputFields/NumberInputs";
import TextAreaInputs from "../../../GlobalComp/InputFields/TextAreaInputs";

const PersonalInfo = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  console.log(props,'props')
  const perosnaldata = useSelector((state) => state.UserEditReducer);
  const { data: editDetails, mutateAsync: edited } = useMutation(
    "userEditDetail",
    userEditDetail
  );

  const [dob, setDob] = useState(DateFormatter(props?.userData?.data?.DateOfBirth));
  const [ani, setAni] = useState(DateFormatter(props?.userData?.data?.AniversaryDate));
  const [marital, setMarital] = useState(props?.userData?.data?.MaritalStatus);
  const [gen, setGen] = useState(props?.userData?.data?.Gender);

  const val = {
    Fullname: `${props?.userData?.data?.FullName}`,
    BatchName: `${props?.userData?.data?.BatchID}`,
    RollNumber: `${props?.userData?.data?.RollNumberID}`,
    DateOfbirth: `${DateFormatter(props?.userData?.data?.DateOfBirth)}`,
    WhatsappNumber: `${props?.userData?.data?.WhatsappNumber}`,
    Email: `${props?.userData?.data?.Email}`,
    ContactNumber: `${props?.userData?.data?.PhoneNumber}`,
    Country: `${props?.userData?.data?.CountryName}`,
    State: `${props?.userData?.data?.StateName}`,
    City: `${props?.userData?.data?.CityName}`,
    Pincode: `${props?.userData?.data?.PinCode}`,
    ISTCNickname: `${props?.userData?.data?.ISTCNickName}`,
    ISTCRoommates: `${props?.userData?.data?.ISTCFriendRoommate}`,
    Comments: `${props?.userData?.data?.Commnets}`,
    IstcAbout: `${props?.userData?.data?.ISTCAbout}`,
    AboutMyself: `${props?.userData?.data?.AboutYourSelf}`,
    SearchKeyword: `${props?.userData?.data?.SearchKeywords}`,
    ResidentialAddress: `${props?.userData?.data?.Address}`,
    Marital: `${props?.userData?.data?.MaritalStatus}`,
    SpouseName: `${props?.userData?.data?.SpouseName}`,
    AniversaryDate: `${DateFormatter(props?.userData?.data?.AniversaryDate)}`,
    ChildDetails: `${props?.userData?.data?.ChildDetails}`,
  };

  useEffect(() => {
    dispatch(userEditActions.allData({ data: val }));
  },[]);

  const submitHandler = async () => {
    await edited(perosnaldata);
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
        country: data?.id ? data.id : props?.userData?.data?.CountryID,
      })
    );

    await countryId(data.id);
    data
      ? form.setFieldsValue({
        Country: data.value,
        State: "",
        City: "",
      })
      : console.log("");
  };

  const stateHandler = async (_, data) => {
    dispatch(
      userEditActions.state({
        state: data?.id ? data.id : props?.userData?.data?.StateID
      })
    );

    await stateId(data.id);
    data
      ? form.setFieldsValue({
        State: data.value,
        City: "",
      })
      : console.log("");
  };

  const cityHandler = (_, data) => {
    dispatch(
      userEditActions.city({
        city: data?.id ? data.id : props?.userData?.data?.CityID
      })
    );

    data
      ? form.setFieldValue({
        City: data.value,
      })
      : console.log("");
  };

  const nameHandler = (data) => {
    dispatch(
      userEditActions.FullName({
        FullName: data ? data : props?.userData?.data?.FullName
      })
    );
  };

  const genderHandler = (data) => {
    dispatch(
      userEditActions.gender({ gender: data ? data : props?.userData?.data?.Gender })
    );
    setGen(data);
  };

  const dobHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(
      userEditActions.dob({
        dob: formattedDate
          ? formattedDate
          : DateFormatter(props?.userData?.data?.DateOfBirth)
      })
    );
    setDob(formattedDate);
  };

  const whatsappHandler = (data) => {
    dispatch(
      userEditActions.whatsapp({
        whatsapp: data ? data : props?.userData?.data?.WhatsappNumber
      })
    );
  };
  const numberHandler = (data) => {
    dispatch(
      userEditActions.phone({
        phone: data ? data : props?.userData?.data?.PhoneNumber,
      })
    );
  };
  const pincodeHandler = (data) => {
    dispatch(
      userEditActions.pincode({ pin: data ? data : props?.userData?.data?.PinCode })
    );
  };

  const nicknameHandler = (data) => {
    dispatch(
      userEditActions.nick({
        nick: data ? data : props?.userData?.data?.ISTCNickName
      })
    );
  };
  const roommatesHandler = (data) => {
    dispatch(
      userEditActions.room({
        room: data ? data : props?.userData?.data?.ISTCFriendRoommate
      })
    );
  };
  const commentHandler = (data) => {
    dispatch(
      userEditActions.comments({
        comments: data ? data : props?.userData?.data?.Commnets
      })
    );
  };
  const istcAboutHandler = (data) => {
    dispatch(
      userEditActions.aboutIstc({
        aboutIstc: data ? data : props?.userData?.data?.ISTCAbout
      })
    );
  };
  const myselfHandler = (data) => {
    dispatch(
      userEditActions.about({ about: data ? data : props?.userData?.data?.AboutYourSelf })
    );
  };
  const keywordhandler = (data) => {
    dispatch(
      userEditActions.keywords({
        keywords: data ? data : props?.userData?.data?.SearchKeywords
      }
      ));
  };
  const addressHandler = (data) => {
    dispatch(
      userEditActions.address({
        address: data ? data : props?.userData?.data?.Address
      })
    );
  };
  const maritalHandler = (data) => {
    setMarital(data);
    dispatch(
      userEditActions.marital({
        marital: data ? data : props?.userData?.data?.MaritalStatus
      })
    );
  };
  const spouseHandler = (data) => {
    dispatch(
      userEditActions.spouse({
        spouse: data ? data : props?.userData?.data?.SpouseName
      })
    );
  };
  const childHandler = (data) => {
    dispatch(
      userEditActions.child({
        child: data ? data : props?.userData?.data?.ChildDetails
      })
    );
  };
  const aniHandler = (data) =>{
    const date = DateFormatter(data)
    setAni(date)
    dispatch(
      userEditActions.aniversary({
        aniversary: data ? date : DateFormatter(props?.userData?.data?.AniversaryDate)
      })
    );
  }

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ width: "100%" }}
      initialValues={val}
    > 
      <div className={Styles.firstRow}>
        <Inputs label="Full Name" name="Fullname" handler={nameHandler} rule={[{ required : true, message : 'Please enter you Name' }]} />
        <Inputs
          disabled={true}
          label="Batch Year"
          name="BatchName"
          value={props?.userData?.data?.BatchID}
          
        />
        <Inputs
          disabled={true}
          label="Roll Number"
          name="RollNumber"
          value={props?.userData?.data?.RollNumberID}
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
          name="DateOfBirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select your DOB" }]}
          disabledYear={disabledYear}
          value={dob}
          handler={dobHandler}
        />
      </div>
      <div className={Styles.thirdRow}>
        <NumberInputs
          label="Whatsapp Number"
          name="WhatsappNumber"
          rules={[{ type: "Number" },{ require : true, message : ' Please Enter your Contact Number' }]}
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
          rule={[{ required : true, message : 'Please select!' }]}
        />
        <AutoInputs
          label="State"
          list={stateData}
          handler={stateHandler}
          name="State"
          rule={[{ required : true, message : 'Please select Country first!' }]}

        />
        <AutoInputs
          label="City"
          list={cityData}
          handler={cityHandler}
          name="City"
          rule={[{ required : true, message : 'Please select State first!' }]}

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
          value={marital}
          onChange={maritalHandler}
        />
        {marital === "Married" ? (
          <>
            <Inputs
              label="Spouse Name"
              name="SpouseName"
              handler={spouseHandler}
            />
            <Dates label="Aniversary Date" name="AniversaryDate"  value={ani} handler={aniHandler} />
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
