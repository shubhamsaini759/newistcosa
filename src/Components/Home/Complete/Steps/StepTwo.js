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
import { useMutation, useQuery } from "react-query";
import { AddCompany } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/AddCompany";
import { CompanyList } from "../../../../Utils/api/UserMoreDetail/CompanyList";

const StepTwo = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();

  // const { data : companyList } = useQuery('CompanyList',CompanyList)
  // console.log(companyList,'list')


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
    console.log(data)
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
          sw="25%"
          aw="75%"
          label="* Profession"
          data={Professions}
          changeHandler={proChangeHandler}
          value={Profession}
        />
      </div>

      {Profession === "Student" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs
              sw="25%"
              aw="75%"
              label="College/University"
              value={college}
              changeHandler={collegeHandler}
            />
            <SimpleInputs
              sw="25%"
              aw="75%"
              label="Quaification"
              value={quali}
              changeHandler={qualiHandler}
            />
          </div>
          <div className={Styles.thirdRow}>
            <TagInput
              sw="25%"
              nsw="75%"
              padd="8%"
              label="Skills"
              value={skill}
              changeHandler={skillHandler}
            />
            <StartDateInput
              label="Start Year"
              sw="25%"
              padd="4.5%"
              aw="75%"
              value={degreeStart}
              changeHandler={startDegHandler}
            />
            <StartDateInput
              label="Completion Year"
              sw="25%"
              aw="75%"
              value={degreeComp}
              changeHandler={compDegHandler}
            />
          </div>
        </>
      ) : Profession === "Government Sector" ||Profession ===  "Private Sector" ||Profession ===  "Self Employed" ||Profession ===  "Entrepreneur / Own Business" ||Profession ===  "Retired" ||Profession ===  "Others" ? (
        <>
          <div className={Styles.secondRow}>
            <SimpleInputs
              sw="25%"
              aw="75%"
              label="Job Designation"
              value={designation}
              changeHandler={desigHandler}
            />

            <SimpleInputs
              sw="25%"
              aw="75%"
              label="Recent Company"
              // data={companyList}
              value={recent}
              changeHandler={recentHandler}
            />
            <Button
              variant="contained"
              style={{ backgroundColor :'#6f0100' }} 
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
              sw="25%"
              aw="75%"
              value={start}
              changeHandler={startHandler}
            />
            <StartDateInput
              label="To date"
              sw="25%"
              aw="75%"
              value={to}
              changeHandler={toHandler}
            />
          </div>
          <div className={Styles.fourthRow}>
            <TextAreaInput
              length="500"
              label="Describe Your Work Profile"
              tw="100%"
              sw="75%"
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
