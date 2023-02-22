import { Button } from "antd";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Styles from "../../../../../Styles/Dashboard/StepTwoModal.module.css";
import { CityList } from "../../../../../Utils/api/CityList";
import { CountryList } from "../../../../../Utils/api/CountryList";
import { StateList } from "../../../../../Utils/api/StateList";
import AutoInputs from "../DetailInputs/AutoInputs";
import SimpleInputs from "../DetailInputs/SimpleInputs";
import TextAreaInput from "../DetailInputs/TextAreaInput";

const StepTwoModal = () => {
  const { state } = useLocation();

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

  const [CompanyAdd, setCompanyAdd] = useState({
    country: {
      id: "",
      value: "",
    },
    state: {
      id: "",
      value: "",
    },
    city: {
      id: "",
      value: "",
    },
  });

  const countryHandler = async (data) => {
    await countryId(data ? data.id : state.moreData.CountryID);
    setCompanyAdd({
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
    const countryDataClone = { ...CompanyAdd.country };
    setCompanyAdd({
      country: countryDataClone,
      state: data,
      city: {
        id: null,
        value: "",
      },
    });
  };

  const cityHandler = (data) => {
    const countryDataClone = { ...CompanyAdd.country };
    const stateDataClone = { ...CompanyAdd.state };
    setCompanyAdd({
      country: countryDataClone,
      state: stateDataClone,
      city: data,
    });

    // dispatch(
    //   userEditActions.countryCityState({
    //     countryId: countryDataClone.id,
    //     stateId: stateDataClone.id,
    //     cityId: data.id,

    //   })
    // );
  };

  return (
    <div className={Styles.AddModal}>
      <div className={Styles.firstRow}>
        <SimpleInputs label="Company Name" />
        <SimpleInputs label="Contact Number" />
      </div>
      <div className={Styles.secondRow}>
        <SimpleInputs label="Compnay Email" />
      </div>
      <div className={Styles.thirdRow}>
        <TextAreaInput label="Company Address" />
      </div>
      <div className={Styles.fourthRow}>
        <AutoInputs
          sw="24%"
          aw="66%"
          label="Country"
          data={countryData || [CompanyAdd.country]}
          value={CompanyAdd.country.value}
          changeHandler={countryHandler}
        />

        <AutoInputs
          sw="24%"
          aw="66%"
          label="State"
          data={stateData || [CompanyAdd.state]}
          value={CompanyAdd.state.value}
          changeHandler={stateHandler}
        />
        <AutoInputs
          sw="24%"
          aw="66%"
          label="City"
          data={CityData || [CompanyAdd.city]}
          value={CompanyAdd.city.value}
          changeHandler={cityHandler}
        />
      </div>
    </div>
  );
};

export default StepTwoModal;
