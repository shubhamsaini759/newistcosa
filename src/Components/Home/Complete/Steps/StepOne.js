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

  const { data: countryData, isLoading: countryLoading } = useQuery(
    "CountryList",
    CountryList
  );
  

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
      id: !!state?.moreData?.CountryID ? state?.moreData?.CountryID : null,
      value: !!state?.moreData?.CountryName ? state?.moreData?.CountryName : "",
    },
    state: {
      id: !!state?.moreData?.StateID ? state?.moreData?.StateID : null,
      value: !!state?.moreData?.StateName ? state?.moreData?.StateName : "",
    },
    city: {
      id: !!state?.moreData?.CityID ? state?.moreData?.CityID : null,
      value: !!state?.moreData?.CityName ? state?.moreData?.CityName : "",
    },
  });
  const [ pin, setPin ] = useState('')
  const countryHandler = async (data) => {
    await countryId(data ? data.id : state.moreData.CountryID);
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
    await stateId(data ? data.id : state.moreData.StateID);
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
       
      })
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
            sw="24%"
            aw="66%"
            label="Batch Year"
            value={state.moreData.BatchID}
          />
          <DisableInputs
            sw="24%"
            aw="66%"
            label="Roll Number"
            value={state.moreData.RollNumberID}
          />
          <DisableInputs
            sw="24%"
            aw="66%"
            label="Full Name"
            value={state.moreData.FullName}
          />
        </div>
        <div className={Styles.secondRow}>
          <VisibleInputs
            sw="30%"
            aw="60%"
            disabled
            label="Email Address"
            value={state.moreData.Email}
          />
          <VisibleInputs
            sw="30%"
            aw="60%"
            disabled
            label="Phone Number"
            value={state.moreData.PhoneNumber}
          />
          <SimpleInputs sw="24%" aw="66%" label="Pincode" value={pin}  changeHandler={PinHandler} />
        </div>
        <div className={Styles.thirdRow}>
          <AutoInputs
            sw="24%"
            aw="66%"
            label="Country"
            data={countryData || [selected.country]}
            value={selected.country.value}
            changeHandler={countryHandler}
          />

          <AutoInputs
            sw="24%"
            aw="66%"
            label="State"
            data={stateData || [selected.state]}
            value={selected.state.value}
            changeHandler={stateHandler}
          />
          <AutoInputs
            sw="24%"
            aw="66%"
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
