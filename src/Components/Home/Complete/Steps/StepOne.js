import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepOne.module.css";
import VisibleInputs from "./DetailInputs/VisibleInputs";
import DisableInputs from "./DetailInputs/DisableInputs";
import { useMutation, useQuery } from "react-query";
import { CountryList } from "../../../../Api/CountryList";
import { StateList } from "../../../../Api/StateList";
import Loader from "../../../GlobalComp/Loader";
import { CityList } from "../../../../Api/CityList";
import SimpleInputs from "./DetailInputs/SimpleInputs";

const StepOne = () => {
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
      id: null,
      value: "",
    },
    state: {
      id: null,
      value: "",
    },
    city: {
      id: null,
      value: "",
    },
  });

  const countryHandler = async (data) => {
    await countryId(data?.id);
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
    await stateId(data?.id);
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
  };

  return (
    <>
      {countryLoading || stateLoading || cityLoading ? <Loader /> : null}
      <div className={Styles.StepOne}>
        <div className={Styles.firstRow}>
          <DisableInputs sw="24%" aw="66%" label="Batch Year" />
          <DisableInputs sw="24%" aw="66%" label="Roll Number" />
          <DisableInputs sw="24%" aw="66%" label="Full Name" />
        </div>
        <div className={Styles.secondRow}>
          <VisibleInputs sw="30%" aw="60%" disabled label="Email Address" />
          <VisibleInputs sw="30%" aw="60%" disabled label="Phone Number" />
          <SimpleInputs sw="24%" aw="66%" label="Pincode" />
        </div>
        <div className={Styles.thirdRow}>
          <AutoInputs
            sw="24%"
            aw="66%"
            label="Country"
            data={countryData || [selected.country]}
            value={selected.country}
            changeHandler={countryHandler}
          />

          <AutoInputs
            sw="24%"
            aw="66%"
            label="State"
            data={stateData || [selected.state]}
            value={selected.state}
            changeHandler={stateHandler}
          />
          <AutoInputs
            sw="24%"
            aw="66%"
            label="City"
            data={CityData || [selected.city]}
            value={selected.city}
            changeHandler={cityHandler}
          />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default StepOne;
