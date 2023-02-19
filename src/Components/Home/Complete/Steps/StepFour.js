import React, { useState } from "react";
import TextAreaInput from "./DetailInputs/TextAreaInput";

import Styles from "../../../../Styles/userLogin/Steps/StepFour.module.css";
import SimpleInputs from "./DetailInputs/SimpleInputs";

const StepFour = () => {
  return (
    <div className={Styles.StepFour}>
      <div className={Styles.firstRow}>
        <SimpleInputs sw="30%" aw="45%" label="Your ISTC Nick Name" />
        <SimpleInputs sw="30%" aw="45%" label="ISTC Friends/ Roomates" />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInput label="Your Memories About ISTC" tw="75%" sw="35%" />
        <TextAreaInput label="Your Comments For ISTCOSA" tw="75%" sw="35%" />
      </div>
      <div className={Styles.thirdRow}>
        <TextAreaInput
          label="Search Keyword(Keywords Which Allow Others To Search You)"
          tw="88%"
          sw="35%"
        />
      </div>
    </div>
  );
};

export default StepFour;
