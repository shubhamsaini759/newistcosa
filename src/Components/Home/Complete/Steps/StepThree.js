import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepThree.module.css";
import VisibleInputs from "./DetailInputs/VisibleInputs";
import DisableInputs from "./DetailInputs/DisableInputs";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { Query } from "react-query";
import { CountryList } from "../../../../Api/CountryList";

const StepThree = () => {
  const { data: countryData, isLoading: countryLoading } = Query(
    "CountryList",
    CountryList
  );

  const [gender, setGender] = useState(["Male", "Female"]);
  const [selectedCountry, setSelectedCountry] = useState({
    id: null,
    value: "",
  });

  const countryHandler = (data) => {
    setSelectedCountry(data);
  };

  return (
    <div className={Styles.StepThree}>
      <div className={Styles.firstRow}>
        <AutoInputs sw="24%" aw="66%" option={gender} label="Gender" />
        <StartDateInput sw="24%" aw="66%" label="Date Of Birth" />
        <SimpleInputs sw="24%" aw="66%" label="Full Name" />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInput label="Residential Address" tw="80%" sw="30%" />
        <TextAreaInput label="About Myself" tw="80%" sw="30%" />
      </div>
      <div className={Styles.thirdRow}>
        <AutoInputs
          sw="8%"
          aw="22%"
          label="Country"
          data={countryData}
          changeHandler={countryHandler}
          value={selectedCountry}
        />
      </div>
    </div>
  );
};

export default StepThree;
