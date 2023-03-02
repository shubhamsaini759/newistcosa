import { Button, Form } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../Store";
import Styles from "../../../Styles/Step/SecondStep.module.css";
import Dates from "../../GlobalComp/InputFields/Dates";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import ProfessionList from "../../GlobalComp/InputFields/ProfessionList";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";

const SecondStep = (props) => {
  const [form] = Form.useForm();
  const disaptch = useDispatch();

  const val = {
    Profession: "",
    University : '',
    Degree : '',
    Skills: "",
    JoiningYear: "",
    ExpectedCompletionYear: "",
    Designation: "",
    CompanyName: "",
    FromDate: "",
    ToDate: "",
    Responsibility: "",
  };

  const [profession, setProfession] = useState('');


  const uniHandler = (data) =>{
    disaptch(userEditActions.uni({uni : data}) )
    form.setFieldsValue({
      University : data
    })
  }
  const professionHandler = (data) =>{
    setProfession(data)
    disaptch(userEditActions.profession({profession : data}) )

    form.setFieldsValue({
      Profession : data
    })
  }
  const degreeHandler = (data) =>{
    disaptch(userEditActions.degree({degree : data}) )

    form.setFieldsValue({
      Degree : data
    })
  }
  const skillHandler = (data) =>{
    disaptch(userEditActions.skill({skill : data}) )

    form.setFieldsValue({
      Skills : data
    })
  }
  const joiningHandler = (data) =>{
    disaptch(userEditActions.joining({joining : data}) )

    form.setFieldsValue({
      JoiningYear : data
    })
  }
  const completeHandler = (data) =>{
    disaptch(userEditActions.complete({complete : data}) )

    form.setFieldsValue({
      ExpectedCompletionYear : data
    })
  }
  const jobHandler = (data) =>{
    disaptch(userEditActions.job({job : data}) )

    form.setFieldsValue({
      Designation : data
    })
  }
  const companyHandler = (data) =>{
    disaptch(userEditActions.company({company : data}) )

    form.setFieldsValue({
      CompanyName : data
    })
  }
  const fromHandler = (data) =>{
    disaptch(userEditActions.fromD({from : data}) )

    form.setFieldsValue({
      FromDate : data
    })
  }
  const toHandler = (data) =>{
    disaptch(userEditActions.toD({to : data}) )

    form.setFieldsValue({
      ToDate : data
    })
  }
  const describeHandler = (data) =>{
    disaptch(userEditActions.describe({describe : data}) )

    form.setFieldsValue({
      Responsibility : data
    })
  }


  return (
    <Form
      form={form}
      initialValues={val}
      layout="vertical"
      className={Styles.SecondStep}
      style={{ width: "100%", padding: "1rem" }}
      onFinish={props.next}
    >
      <div className={Styles.firstRow}>
        <ProfessionList label="Profession" name='Profession' onChange={professionHandler} />
      </div>
      {profession === "" ? (
        ""
      ) : profession === "student" ? (
        <>
          <div className={Styles.ofirstRow}>
            <Inputs label="College / University" name='University' handler={uniHandler} />
            <Inputs label="Degree " name='Degree' handler={degreeHandler} />
          </div>
          <div className={Styles.osecondRow}>
            <Inputs label="Skills" name='Skills' handler={skillHandler} />
            <Dates label="Joining Year" name='JoiningYear' handler={joiningHandler} />
            <Dates label="Expected Complition Year" name='ExpectedCompletionYear' handler={completeHandler} />
          </div>
        </>
      ) : (
        <>
          <div className={Styles.secondRow}>
            <Inputs label="Job Designation" name='Designation' handler={jobHandler} />
            <Inputs label="Recent company" name='CompanyName handler={companyHandler} />
            <Button>Add</Button>
          </div>
          <div className={Styles.thirdRow}>
            <Dates label="From Date" name='FromDate handler={fromHandler} />
            <Dates label="To Date" name='ToDate handler={toHandler} />
          </div>
          <div className={Styles.fourthRow}>
            <TextAreaInputs label="Describe Your work profile" length="200" name='Responsibility handler={describeHandler}/>
          </div>
        </>
      )}

      <div className={Styles.fifthRow}>
        <Button htmlType="submit" onClick={props.prev}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;
