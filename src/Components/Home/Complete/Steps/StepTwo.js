import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepTwo.module.css";
import TagInput from "./DetailInputs/TagInput";

import StartDateInput from "./DetailInputs/StartDateInput";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { Professions } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/ProfessionList";
import { useDispatch, useSelector } from "react-redux";
import { userEditActions } from "../../../../Store";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { Modal } from "antd";
import StepTwoModal from "./StepTwoModal/Index";
import { useMutation } from "react-query";
import { AddCompany } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/AddCompany";

const StepTwo = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const CompanyDetails = useSelector((state) => state.addCompanyReducer);

  const { data, mutateAsync } = useMutation("AddCompany", AddCompany);

  const [modal2Open, setModal2Open] = useState(false);

  const OkHandler = async () => {
    setModal2Open(false);
    console.log(CompanyDetails);
    const result = await mutateAsync(CompanyDetails);
    console.log(result, "detailsssssssssss");
  };

  const [Profession, SetProfession] = useState("");
  const [college, setCollege] = useState("");
  const [quali, setQuali] = useState("");
  const [skill, setSkill] = useState("");
  const [designation, setDesignation] = useState("");
  const [recent, setRecent] = useState("");
  const [start, setStart] = useState("");
  const [to, setTo] = useState("");
  const [describe, setDescribe] = useState("");
  const [degreeStart, setDegreeStart] = useState("");
  const [degreeComp, setDegreeComp] = useState("");

  const proChangeHandler = (data) => {
    SetProfession(data.value);
    dispatch(userEditActions.ProfessionHandel({ profession: data.value }));
  };

  const collegeHandler = (data) => {
    setCollege(data);
    dispatch(userEditActions.collegeHandel({ college: data }));
  };
  const qualiHandler = (data) => {
    setQuali(data);
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

  const startDegHandler = (data) => {
    console.log(data);
    setDegreeStart(data);
    dispatch(userEditActions.Joining({ join: data }));
  };
  const compDegHandler = (data) => {
    console.log(data);
    setDegreeComp(data);
    dispatch(userEditActions.comp({ comp: data }));
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
              padd="8%"
              label="Skills"
              value={skill}
              changeHandler={skillHandler}
            />
            <StartDateInput
              label="Start Year"
              sw="28%"
              padd="4.5%"
              aw="62%"
              value={degreeStart}
              changeHandler={startDegHandler}
            />
            <StartDateInput
              label="Completion Year"
              sw="28%"
              aw="62%"
              value={degreeComp}
              changeHandler={compDegHandler}
            />
          </div>
        </>
      ) : Profession === "Government Sector" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs
              sw="23%"
              aw="66%"
              label="Job Designation"
              value={designation}
              changeHandler={desigHandler}
            />

            <SimpleInputs
              sw="27%"
              aw="50%"
              label="Recent Company"
              value={recent}
              changeHandler={recentHandler}
            />
            <Button
              variant="contained"
              size="small"
              onClick={() => setModal2Open(true)}
            >
              Add
            </Button>
            <Modal
              title="Add Company"
              centered
              open={modal2Open}
              onOk={OkHandler}
              onCancel={() => setModal2Open(false)}
            >
              <StepTwoModal />
            </Modal>
          </div>

          <div className={Styles.thirdRow}>
            <StartDateInput
              label="From date"
              sw="28%"
              padd="4.5%"
              aw="59%"
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
              length="500"
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
