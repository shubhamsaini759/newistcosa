import { Button, Form, Modal } from "antd";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../Store";
import Styles from "../../../Styles/Step/SecondStep.module.css";
import { CompanyList } from "../../../Utils/api/UserMoreDetail/CompanyList";
import { DateFormatter } from "../../../Utils/Helpers";
import AutoInputs from "../../GlobalComp/InputFields/AutoInputs";
import Dates from "../../GlobalComp/InputFields/Dates";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import ProfessionList from "../../GlobalComp/InputFields/ProfessionList";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";
import EditIconModal from "../Settings/EditProfile/EditIconModal";

const SecondStep = (props) => {
  const [form] = Form.useForm();
  const disaptch = useDispatch();

  const { data: compList } = useQuery("CompanyList", CompanyList);

  const [join, setJoin] = useState("");
  const [completion, setCompletion] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const val = {
    Profession: "",
    University: "",
    Degree: "",
    Skills: "",
    JoiningYear: "",
    ExpectedCompletionYear: "",
    Designation: "",
    CompanyName: "",
    FromDate: "",
    ToDate: "",
    Responsibility: "",
  };

  const [profession, setProfession] = useState("");
  const [addCompany, setAddCompany] = useState(false);

  const addDoneHandler = (e) => {
    setAddCompany(e);
  };
  const addCancelHandler = (e) => {
    setAddCompany(e);
  };
  const addCompanyHandler = () => {
    setAddCompany(true);
  };

  const uniHandler = (data) => {
    disaptch(userEditActions.uni({ uni: data }));
    form.setFieldsValue({
      University: data,
    });
  };
  const professionHandler = (data) => {
    setProfession(data);
    disaptch(userEditActions.profession({ profession: data }));

    form.setFieldsValue({
      Profession: data,
    });
  };
  const degreeHandler = (data) => {
    disaptch(userEditActions.degree({ degree: data }));

    form.setFieldsValue({
      Degree: data,
    });
  };
  const skillHandler = (data) => {
    disaptch(userEditActions.skill({ skill: data }));

    form.setFieldsValue({
      Skills: data,
    });
  };
  const joiningHandler = (data) => {
    const formattedDate = DateFormatter(data);
    disaptch(userEditActions.joining({ joining: formattedDate }));

    setJoin(formattedDate);
  };
  const completeHandler = (data) => {
    const formattedDate = DateFormatter(data);
    disaptch(userEditActions.complete({ complete: formattedDate }));

    setCompletion(formattedDate);
  };
  const jobHandler = (data) => {
    disaptch(userEditActions.job({ job: data }));

    form.setFieldsValue({
      Designation: data,
    });
  };
  const companyHandler = (data) => {
    disaptch(userEditActions.company({ company: data?.value }));

    form.setFieldsValue({
      CompanyName: data?.value,
    });
  };
  const fromHandler = (data) => {
    const formattedDate = DateFormatter(data);
    disaptch(userEditActions.fromD({ from: formattedDate }));

    setFromDate(formattedDate);
  };
  const toHandler = (data) => {
    const formattedDate = DateFormatter(data);
    disaptch(userEditActions.toD({ to: formattedDate }));

    setToDate(formattedDate);
  };
  const describeHandler = (data) => {
    disaptch(userEditActions.describe({ describe: data }));

    form.setFieldsValue({
      Responsibility: data,
    });
  };

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
        <ProfessionList
          label="Profession"
          name="Profession"
          onChange={professionHandler}
        />
      </div>
      {profession === "" ? (
        ""
      ) : profession === "student" ? (
        <>
          <div className={Styles.ofirstRow}>
            <Inputs
              label="College / University"
              name="University"
              handler={uniHandler}
            />
            <Inputs label="Degree " name="Degree" handler={degreeHandler} />
          </div>
          <div className={Styles.osecondRow}>
            <Inputs label="Skills" name="Skills" handler={skillHandler} />
            <Dates
              label="Joining Year"
              name="JoiningYear"
              value={join}
              handler={joiningHandler}
            />
            <Dates
              label="Expected Complition Year"
              name="ExpectedCompletionYear"
              value={completion}
              handler={completeHandler}
            />
          </div>
        </>
      ) : (
        <>
          <div className={Styles.secondRow}>
            <Inputs
              label="Job Designation"
              name="Designation"
              handler={jobHandler}
            />
            <AutoInputs
              label="Recent company"
              name="CompanyName"
              list={compList}
              handler={companyHandler}
            />
            <Button onClick={addCompanyHandler}>Add</Button>

            <Modal
              title="Add Company"
              centered
              open={addCompany}
              onCancel={() => setAddCompany(false)}
              footer={null}
            >
              <EditIconModal
                onDone={addDoneHandler}
                onCancel={addCancelHandler}
              />
            </Modal>
          </div>
          <div className={Styles.thirdRow}>
            <Dates
              label="From Date"
              name="FromDate"
              value={fromDate}
              handler={fromHandler}
            />
            <Dates
              label="To Date"
              name="ToDate"
              value={toDate}
              handler={toHandler}
            />
          </div>
          <div className={Styles.fourthRow}>
            <TextAreaInputs
              label="Describe Your work profile"
              length="200"
              name="Responsibility"
              handler={describeHandler}
            />
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
