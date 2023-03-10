import { Button, Form } from "antd";
import React, { useEffect } from "react";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import AutoInputs from "../../GlobalComp/InputFields/AutoInputs";
import NumberInputs from "../../GlobalComp/InputFields/NumberInputs";

import Styles from "../../../Styles/Step/FirstStep.module.css";
import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../Utils/api/CountryList";
import { StateList } from "../../../Utils/api/StateList";
import { CityList } from "../../../Utils/api/CityList";

import { userEditActions } from "../../../Store";
import { useDispatch } from "react-redux";

const FirstStep = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { data: countryList } = useQuery("CountryList", CountryList);
  const { data: stateList, mutateAsync: countryId } = useMutation(
    "StateList",
    StateList
  );
  const { data: cityList, mutateAsync: stateId } = useMutation(
    "CityList",
    CityList
  );

  const val = {
    BatchID: `${props?.userData?.BatchID}`,
    RollNumberID: `${props?.userData?.RollNumberID}`,
    FullName: `${props?.userData?.FullName}`,
    Email: `${props?.userData?.Email}`,
    PhoneNumber: `${props?.userData?.PhoneNumber}`,
    Pincode: `${props?.userData?.PinCode}`,
    Country: `${props?.userData?.CountryName}`,
    State: `${props?.userData?.StateName}`,
    City: `${props?.userData?.CityName}`,
  };

  const nextHandler = () => {
    dispatch(userEditActions.batchId({ batchId: props?.userData?.BatchID }));
    dispatch(
      userEditActions.rollNumber({ rollNumber: props?.userData?.RollNumberID })
    );
    dispatch(userEditActions.FullName({ FullName: props?.userData?.FullName }));
    dispatch(userEditActions.phone({ phone: props?.userData?.PhoneNumber }));
  };

  const pincodeHandler = (data) => {
    dispatch(
      userEditActions.pincode({ pin: data ? data : props?.userData?.PinCode })
    );
  };

  const countryHandler = async (_, data) => {
    await countryId(data.id);
    dispatch(
      userEditActions.country({
        country: data?.id ? data?.id : props?.userData?.CountryID,
      })
    );

    form.setFieldsValue({
      Country: data.value,
      State: "",
      City: "",
    });
  };

  const stateHandler = async (_, data) => {
    await stateId(data.id);
    dispatch(
      userEditActions.state({
        state: data?.id ? data?.id : props?.userData?.StateID,
      })
    );

    form.setFieldsValue({
      State: data.value,
      City: "",
    });
  };

  const cityHandler = async (_, data) => {
    await stateId(data.id);
    dispatch(
      userEditActions.city({
        city: data?.id ? data?.id : props?.userData?.CityID,
      })
    );

    form.setFieldsValue({
      City: data.value,
    });
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
        <Inputs label="Batch No." name="BatchID" disabled={true}  />
        <Inputs label="Roll No." name="RollNumberID" disabled={true} />
        <Inputs label="Full name" name="FullName" disabled={true} />
      </div>
      <div className={Styles.secondRow}>
        <Inputs label="Email" name="Email" disabled={true} />
        <NumberInputs label="Phone Number" name="PhoneNumber" disabled={true} />
        <Inputs label="Pincode" handler={pincodeHandler} name="Pincode" />
      </div>
      <div className={Styles.thirdRow}>
        <AutoInputs
          label="Country"
          list={countryList}
          handler={countryHandler}
          name="Country"
          rule={[{
          required: true,
          message: 'Please input your username!',
        }]}
        />
        <AutoInputs
          label="State"
          list={stateList}
          handler={stateHandler}
          name="State"
          rule={[{
          required: true,
          message: 'Please input your username!',
        }]}
        />
        <AutoInputs
          label="City"
          list={cityList}
          handler={cityHandler}
          name="City"
          rule={[{
          required: true,
          message: 'Please input your username!',
        }]}
        />
      </div>

      <div className={Styles.fourthRow}>
        <Button type="primary" htmlType="submit" onClick={nextHandler}>
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;
