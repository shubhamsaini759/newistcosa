import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepTwo.module.css";
import TagInput from "./DetailInputs/TagInput";

import DateInput from "./DetailInputs/DateInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { Professions } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/ProfessionList";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../../Store";
import { useLocation } from "react-router-dom";

const StepTwo = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();

  const [Profession, SetProfession] = useState("");
  const [college, setCollege] = useState("");
  const [quali, setQuali] = useState("");
  const [skill, setSkill] = useState("");
  const [designation, setDesignation] = useState("");
  const [recent, setRecent] = useState("");
  const [start, setStart] = useState("");
  const [to, setTo] = useState("");
  const [describe, setDescribe] = useState("");

  const proChangeHandler = (data) => {
    SetProfession(data.value);
    dispatch(userEditActions.ProfessionHandel({ profession: data.value }));
  };

  const collegeHandler = (data) => {
    setCollege(data);
    dispatch(userEditActions.collegeHandel({ college: data }));
  };
  const qualiHandler = (data) => {
    dispatch(userEditActions.qualiHandel({ quali: data }));
  };

  const skillHandler = (data) => {
    setSkill(data);
    dispatch(userEditActions.skillHandel({ skill: data }));
  };

  const desigHandler = (data) => {
    setDesignation(data);
    dispatch(userEditActions.desigHandel({ designation: data }));
  };

  const recentHandler = (data) => {
    setRecent(data);
    dispatch(userEditActions.recentHandel({ recent: data }));
  };

  const startHandler = (data) => {
    console.log(data);
    setStart(data);
    dispatch(userEditActions.startHandel({ start: data }));
  };

  const toHandler = (data) => {
    console.log(data);

    setTo(data);
    dispatch(userEditActions.toHandel({ to: data }));
  };

  const describeHandler = (data) => {
    setDescribe(data);
    dispatch(userEditActions.describeHandel({ describe: data }));
  };

  return (
    <div className={Styles.StepTwo}>
      <div className={Styles.firstRow}>
        <AutoInputs
          sw="24%"
          aw="71%"
          label="Profession"
          data={Professions}
          changeHandler={proChangeHandler}
          value={Profession}
        />
      </div>

      {Profession === "Student" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs
              sw="22%"
              aw="68%"
              label="College/University"
              value={college}
              changeHandler={collegeHandler}
            />
            <SimpleInputs
              sw="22%"
              aw="68%"
              label="Quaification"
              value={quali}
              changeHandler={qualiHandler}
            />
          </div>
          <div className={Styles.thirdRow}>
            <TagInput
              sw="27%"
              nsw="68%"
              padd="5%"
              label="Skills"
              value={skill}
              changeHandler={skillHandler}
            />
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
            <SimpleInputs
              sw="25%"
              aw="65%"
              label="Job Designation"
              value={designation}
              changeHandler={desigHandler}
            />
            <SimpleInputs
              sw="25%"
              aw="65%"
              label="Recent Company"
              value={recent}
              changeHandler={recentHandler}
            />
          </div>
          <div className={Styles.thirdRow}>
            <StartDateInput
              label="From date"
              sw="30%"
              padd="4.5%"
              aw="65%"
              value={start}
              changeHandler={startHandler}
            />
            <StartDateInput
              label="To date"
              padd="4.5%"
              sw="30%"
              aw="65%"
              value={to}
              changeHandler={toHandler}
            />
          </div>
          <div className={Styles.fourthRow}>
            <TextAreaInput
              label="Describe Your Work Profile"
              tw="97%"
              sw="20%"
              value={describe}
              changeHandler={describeHandler}
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
