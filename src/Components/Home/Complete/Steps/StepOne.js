import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepOne.module.css";
import VisibleInputs from "./DetailInputs/VisibleInputs";
import DisableInputs from "./DetailInputs/DisableInputs";
import { useMutation, useQuery } from "react-query";
import Loader from "../../../GlobalComp/Loader";
import SimpleInputs from "./DetailInputs/SimpleInputs";

import { CountryList } from "../../../../Utils/api/CountryList";
import { StateList } from "../../../../Utils/api/StateList";
import { CityList } from "../../../../Utils/api/CityList";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../../Store";

const StepOne = () => {
  const { state } = useLocation();
 


  const dispatch = useDispatch();


  const [batchId,  setbatchId ] = useState(state.userData.BatchID)
  const [ rollNumberId,setRollNumberId] = useState(state.userData.RollNumberID)
  const [ fullName,setFullName] = useState(state.userData.FullName)

  
  const { data: countryData, isLoading: countryLoading } = useQuery(
    "CountryList",
    CountryList
  );
  console.log(countryData,'cpountryyyyyyyyyyy')

  const {
    data: stateData,
    isLoading: stateLoading,
    mutateAsync: countryId,
  } = useMutation("StateList", StateList);

  const {
    data: CityData,
    isLoading: cityLoading,
    mutateAsync: stateId,
  } = useMutation("CityList", CityList);

  const [selected, setSelected] = useState({
    country: {
      id: !!state?.userData?.CountryID ? state?.userData?.CountryID : null,
      value: !!state?.userData?.CountryName ? state?.userData?.CountryName : "",
    },
    state: {
      id: !!state?.userData?.StateID ? state?.userData?.StateID : null,
      value: !!state?.userData?.StateName ? state?.userData?.StateName : "",
    },
    city: {
      id: !!state?.userData?.CityID ? state?.userData?.CityID : null,
      value: !!state?.userData?.CityName ? state?.userData?.CityName : "",
    },
  });
  const [ pin, setPin ] = useState('')
  const countryHandler = async (data) => {
    console.log(data,'datavalue')
    await countryId(data ? data.id : state.userData.CountryID);
    setSelected({
      country: data,
      city: {
        id: null,
        value: "",
      },
      state: {
        id: null,
        value: "",
      },
    });
  };

  const stateHandler = async (data) => {
    await stateId(data ? data.id : state.userData.StateID);
    const countryDataClone = { ...selected.country };
    setSelected({
      country: countryDataClone,
      state: data,
      city: {
        id: null,
        value: "",
      },
    });
  };

  const cityHandler = (data) => {
    const countryDataClone = { ...selected.country };
    const stateDataClone = { ...selected.state };
    setSelected({
      country: countryDataClone,
      state: stateDataClone,
      city: data,
    });

    dispatch(
      userEditActions.countryCityState({
        countryId: countryDataClone.id,
        stateId: stateDataClone.id,
        cityId: data.id,
       
      }),
      dispatch(userEditActions.batch({ batch : batchId })),
      dispatch(userEditActions.roll({ roll : rollNumberId })),
      dispatch(userEditActions.userId({ userID : rollNumberId })),
      dispatch(userEditActions.fullName({ fullName : fullName })),

      
    );
  };

  const PinHandler = (data) =>{
    setPin(data)
    dispatch( userEditActions.PinHandel({pin : data}) )
  }

  return (
    <>
      {countryLoading || stateLoading || cityLoading ? <Loader /> : null}
      <div className={Styles.StepOne}>
        <div className={Styles.firstRow}>
          <DisableInputs
            sw="25%"
            aw="75%"
            label="Batch Year"
            value={state.userData.BatchID}
          />
          <DisableInputs
            sw="25%"
            aw="75%"
            label="Roll Number"
            value={state.userData.RollNumberID}
          />
          <DisableInputs
            sw="25%"
            aw="75%"
            label="Full Name"
            value={state.userData.FullName}
          />
        </div>
        <div className={Styles.secondRow}>
          <VisibleInputs
            sw="25%"
            aw="75%"
            disabled
            label="Email Address"
            value={state.userData.Email}
          />
          <VisibleInputs
            sw="25%"
            aw="75%"
            disabled
            label="Phone Number"
            value={state.userData.PhoneNumber}
          />
          <SimpleInputs sw="25%" aw="75%" label="Pincode" value={pin}  changeHandler={PinHandler} />
        </div>
        <div className={Styles.thirdRow}>
          <AutoInputs
            sw="25%"
            aw="75%"
            label="Country"
            data={countryData || [selected.country]}
            value={selected.country.value}
            changeHandler={countryHandler}
          />

          <AutoInputs
            sw="25%"
            aw="75%"
            label="State"
            data={stateData || [selected.state]}
            value={selected.state.value}
            changeHandler={stateHandler}
          />
          <AutoInputs
            sw="25%"
            aw="75%"
            label="City"
            data={CityData || [selected.city]}
            value={selected.city.value}
            changeHandler={cityHandler}
          />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default StepOne;
