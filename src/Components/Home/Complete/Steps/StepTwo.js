import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepTwo.module.css";
import TagInput from "./DetailInputs/TagInput";

import DateInput from "./DetailInputs/DateInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { Professions } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/ProfessionList";


const StepTwo = () => {


  const [Profession, SetProfession] = useState('Student');

const proChangeHandler = (data) =>{
  SetProfession(data.value)
} 

  


  return (
    <div className={Styles.StepTwo}>
      <div className={Styles.firstRow}>
        <AutoInputs sw="24%" aw="71%" label="Profession" data={Professions} changeHandler={proChangeHandler}  value={Profession} />
      </div>

      {Profession === "Student" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs sw="22%" aw="68%" label="College/University" />
            <SimpleInputs sw="22%" aw="68%" label="Quaification"  />
          </div>
          <div className={Styles.thirdRow}>
            <TagInput sw="27%" nsw="68%" padd="5%" label="Skills" />
            <DateInput
              sw="27%"
              rw="68%"
              padd="5%"
              label="Start & Completion Year"
            />
          </div>
        </>
      ) : Profession === "Government Sector" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs sw="25%" aw="65%" label="Job Designation" />
            <SimpleInputs sw="25%" aw="65%" label="Recent Company" />
          </div>
          <div className={Styles.thirdRow}>
            <StartDateInput label="From date" sw="30%" padd="4.5%" aw="65%" />
            <StartDateInput label="To date" padd="4.5%" sw="30%" aw="65%" />
          </div>
          <div className={Styles.fourthRow}>
            <TextAreaInput
              label="Describe Your Work Profile"
              tw="97%"
              sw="20%"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default StepTwo;
