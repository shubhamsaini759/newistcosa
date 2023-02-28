import { Button, Form } from "antd";
import React, { useState } from "react";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import AutoInputs from "../../GlobalComp/InputFields/AutoInputs";

import Styles from "../../../Styles/Step/FirstStep.module.css";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../Utils/api/CountryList";
import { StateList } from "../../../Utils/api/StateList";
import { CityList } from "../../../Utils/api/CityList";

const FirstStep = (props) => {
  const { state } = useLocation();
  console.log(state.userData, "location");

  const { data: countryList } = useQuery("CountryList", CountryList);
  const { data: stateList, mutateAsync: countryId } = useMutation(
    "StateList",
    StateList
  );
  const { data: cityList, mutateAsync: stateId } = useMutation(
    "CityList",
    CityList
  );

  const [firstStep, setFirstStep] = useState({
    BatchID: `${state.userData.BatchID}`,
    RollNumberID: `${state.userData.RollNumberID}`,
    FullName: `${state.userData.FullName}`,
    Email: `${state.userData.Email}`,
    PhoneNumber: `${state.userData.PhoneNumber}`,
    Pincode: "",
    Country: `${state.userData.CountryName}`,
    State: `${state.userData.StateName}`,
    City: `${state.userData.CityName}`,
  });

  const pincodeHandler = (data) => {
    console.log(data, "pincode");
    setFirstStep.Pincode(data);
  };
  const countryHandler = async (_, data) => {
    //dispatch data.id
    await countryId(data.id);
    setFirstStep((old) => ({
      ...old,
      State: "",
      City: "",
      Country: data.value,
    }));
  };

  const stateHandler = async (_, data) => {
    await stateId(data.id);
    setFirstStep((old) => ({
      ...old,
      State: data.value,
      City: "",
    }));
  };

  const cityHandler = async (_, data) => {
    await stateId(data.id);
    setFirstStep((old) => ({
      ...old,
      City: data.value,
    }));
  };

  console.log(firstStep.State, "st");

  return (
    <Form
      layout="vertical"
      style={{ width: "100%", padding: "1rem" }}
      onFinish={props.next}
    >
      <div className={Styles.firtsRow}>
        <Inputs label="Batch No." value={firstStep.BatchID} />
        <Inputs label="Roll No." value={firstStep.RollNumberID} />
        <Inputs label="Full name" value={firstStep.FullName} />
      </div>
      <div className={Styles.secondRow}>
        <Inputs label="Email" value={firstStep.Email} />
        <Inputs label="Phone Number" value={firstStep.PhoneNumber} />
        <Inputs
          label="Pincode"
          value={firstStep.Pincode}
          handler={pincodeHandler}
        />
      </div>
      <div className={Styles.thirdRow}>
        <AutoInputs
          label="Country"
          list={countryList}
          value={firstStep.Country}
          handler={countryHandler}
        />
        <AutoInputs
          label="State"
          list={stateList}
          value={firstStep.State}
          handler={stateHandler}
        />
        <AutoInputs
          label="City"
          list={cityList}
          value={firstStep.City}
          handler={cityHandler}
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
