import { Button, Form } from "antd";
import React, { useState } from "react";
import Styles from "../../../Styles/Step/FourthStep.module.css";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";

const FourthStep = (props) => {
  const [fourthStep, setFourthStep] = useState({
    ISTCNickName: "",
    ISTCFriendRoommate: "",
    ISTCAbout: "",
    Comments: "",
    SearchKeyword: "",
    UserID: "",
  });

  return (
    <Form
      layout="vertical"
      className={Styles.SecondStep}
      style={{ width: "100%", padding: "1rem" }}
    >
      <div className={Styles.firstRow}>
        <Inputs label="Your ISTC Nick Name" />
        <Inputs label="ISTC Friends / Hostel Room Mates" />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInputs label="Your Memories About ISTC" length="400" />
        <TextAreaInputs label="Your Comments About ISTCOSA" length="400" />
      </div>
      <div className={Styles.thirdRow}>
        <TextAreaInputs
          label="Search Keywords(keywords which aloow others to search you)"
          length="400"
        />
      </div>
      <div className={Styles.fourthRow}>
        <Button htmlType="submit" onClick={props.prev}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Done
        </Button>
      </div>
    </Form>
  );
};

export default FourthStep;
