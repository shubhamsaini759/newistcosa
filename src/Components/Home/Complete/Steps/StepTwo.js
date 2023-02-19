import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepTwo.module.css";
import TagInput from "./DetailInputs/TagInput";

import DateInput from "./DetailInputs/DateInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";

const StepTwo = () => {
  const [flag, setFlag] = useState("Government Sector");

  return (
    <div className={Styles.StepTwo}>
      <div className={Styles.firstRow}>
        <AutoInputs sw="24%" aw="71%" label="Profession" />
      </div>

      {flag === "student" ? (
        <>
          <div className={Styles.secondRow}>
            <AutoInputs sw="22%" aw="68%" label="College/University" />
            <AutoInputs sw="22%" aw="68%" label="Degree" />
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
      ) : flag === "Government Sector" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs sw="19%" aw="71%" label="Job Designation" />
            <SimpleInputs sw="19%" aw="71%" label="Recent Company" />
          </div>
          <div className={Styles.thirdRow}>
            <StartDateInput label="From date" sw="24%" padd="4.5%" aw="71%" />
            <StartDateInput label="To date" padd="4.5%" sw="24%" aw="71%" />
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
