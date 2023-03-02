import { Button, Form } from "antd";
import React, { useEffect } from "react";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import AutoInputs from "../../GlobalComp/InputFields/AutoInputs";
import NumberInputs from "../../GlobalComp/InputFields/AutoInputs";

import Styles from "../../../Styles/Step/FirstStep.module.css";
import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../Utils/api/CountryList";
import { StateList } from "../../../Utils/api/StateList";
import { CityList } from "../../../Utils/api/CityList";

import { userEditActions } from "../../../Store";
import { useDispatch } from "react-redux";

const FirstStep = (props) => {
  const [form] = Form.useForm();
  const dispatch= useDispatch();

  const { data: countryList } = useQuery("CountryList", CountryList);
  const { data: stateList, mutateAsync: countryId } = useMutation("StateList",StateList);
  const { data: cityList, mutateAsync: stateId } = useMutation("CityList",CityList);

  console.log(props.userData.userData,'userdata');

  const val = {
    BatchID: `${props?.userData?.userdata?.BatchID}`,
    RollNumberID: `${props?.userData?.userdata?.RollNumberID}`,
    FullName: `${props?.userData?.userdata?.FullName}`,
    Email: `${props?.userData?.userdata?.Email}`,
    PhoneNumber: `${props?.userData?.userdata?.PhoneNumber}`,
    Pincode: `${props?.userData?.userdata?.PinCode}`,
    Country: `${props?.userData?.userdata?.CountryName}`,
    State: `${props?.userData?.userdata?.StateName}`,
    City: `${props?.userData?.userdata?.CityName}`,
  };

  const nextHandler = () =>{
    dispatch(userEditActions.batchId({ batchId  : props?.userData?.userdata?.BatchID  }))
    dispatch(userEditActions.rollNumber({ rollNumber  : props?.userData?.userdata?.RollNumberID  }))
    dispatch(userEditActions.FullName({ FullName  : props?.userData?.userdata?.FullName  }))
    dispatch(userEditActions.phone({ phone  : props?.userData?.userdata?.PhoneNumber  }))

  }

  const pincodeHandler = (data) => {
    console.log(data, "pincode");
    dispatch(userEditActions.pincode({ pin : data? data : props?.userData?.userdata?.PinCode  }))
  };

  const countryHandler = async (_, data) => {
    await countryId(data.id);
    dispatch(userEditActions.country({ country : data?.id ? data?.id : props?.userData?.userdata?.CountryID }))
    
    form.setFieldsValue({
      Country : data.value,
      State : '',
      City : ''
    })
  };

  const stateHandler = async (_, data) => {
    await stateId(data.id);
    dispatch(userEditActions.state({ state : data?.id ? data?.id : props?.userData?.userdata?.StateID }))

    form.setFieldsValue({
      State : data.value,
      City : ''
    })
  };

  const cityHandler = async (_, data) => {
    await stateId(data.id);
    dispatch(userEditActions.city({ city : data?.id ? data?.id : props?.userData?.userdata?.CityID }))

    form.setFieldsValue({
      City : data.value,
    })
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
        <NumberInputs label="Phone Number" name="PhoneNumber" disabled={true} />
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
        <Button type="primary" htmlType="submit" onClick={nextHandler}>
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;
