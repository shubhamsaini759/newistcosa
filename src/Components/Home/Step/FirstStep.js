import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import AutoInputs from "../../GlobalComp/InputFields/AutoInputs";

import Styles from "../../../Styles/Step/FirstStep.module.css";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../Utils/api/CountryList";
import { StateList } from "../../../Utils/api/StateList";
import { CityList } from "../../../Utils/api/CityList";
import { UserMoreDetail } from "../../../Utils/api/UserMoreDetail";
import axios from "axios";

const FirstStep = (props) => {
  const [form] = Form.useForm();

  const { data: userdata } = useQuery("UserMoreDetail", UserMoreDetail);
  console.log(userdata, "wecgwuiegiwuhfuilwgeuil");

  const val = {
    BatchID: "",
    RollNumberID: "",
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Pincode: "",
    Country: "",
    State: "",
    City: "",
  };

  const { data: countryList } = useQuery("CountryList", CountryList);
  const { data: stateList, mutateAsync: countryId } = useMutation(
    "StateList",
    StateList
  );
  const { data: cityList, mutateAsync: stateId } = useMutation(
    "CityList",
    CityList
  );

  const pincodeHandler = (data) => {
    console.log(data, "pincode");
  };
  const countryHandler = async (_, data) => {
    await countryId(data.id);
  };

  const stateHandler = async (_, data) => {
    await stateId(data.id);
  };

  const cityHandler = async (_, data) => {
    await stateId(data.id);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ width: "100%", padding: "1rem" }}
      onFinish={props.next}
      initialValues={val}
    >
      <div className={Styles.firtsRow}>
        <Inputs label="Batch No." name="BatchID" disabled={true} />
        <Inputs label="Roll No." name="RollNumberID" disabled={true} />
        <Inputs label="Full name" name="FullName" disabled={true} />
      </div>
      <div className={Styles.secondRow}>
        <Inputs label="Email" name="Email" disabled={true} />
        <Inputs label="Phone Number" name="PhoneNumber" disabled={true} />
        <Inputs label="Pincode" handler={pincodeHandler} name="Pincode" />
      </div>
      <div className={Styles.thirdRow}>
        <AutoInputs
          label="Country"
          list={countryList}
          handler={countryHandler}
          name="Country"
        />
        <AutoInputs
          label="State"
          list={stateList}
          handler={stateHandler}
          name="State"
        />
        <AutoInputs
          label="City"
          list={cityList}
          handler={cityHandler}
          name="City"
        />
      </div>
      <div className={Styles.fourthRow}>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;
