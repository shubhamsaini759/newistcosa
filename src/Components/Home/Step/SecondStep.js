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
  const dispatch = useDispatch();

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
    dispatch(userEditActions.uni({ uni: data }));
    form.setFieldsValue({
      University: data,
    });
  };

  const professionHandler = (data) => {
    setProfession(data);
    dispatch(userEditActions.profession({ profession: data }));

    form.setFieldsValue({
      Profession: data,
    });
  };

  const degreeHandler = (data) => {
    dispatch(userEditActions.degree({ degree: data }));

    form.setFieldsValue({
      Degree: data,
    });
  };
  const skillHandler = (data) => {
    dispatch(userEditActions.skill({ skill: data }));

    form.setFieldsValue({
      Skills: data,
    });
  };
  const joiningHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(userEditActions.joining({ joining: formattedDate }));

    setJoin(formattedDate);
  };
  const completeHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(userEditActions.complete({ complete: formattedDate }));

    setCompletion(formattedDate);
  };
  const jobHandler = (data) => {
    dispatch(userEditActions.job({ job: data }));

    form.setFieldsValue({
      Designation: data,
    });
  };
  const companyHandler = (_, data) => {
    dispatch(userEditActions.company({ company: data?.value }));

    form.setFieldsValue({
      CompanyName: data?.value,
    });
  };
  const fromHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(userEditActions.fromD({ from: formattedDate }));

    setFromDate(formattedDate);
  };
  const toHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(userEditActions.toD({ to: formattedDate }));

    setToDate(formattedDate);
  };
  const describeHandler = (data) => {
    dispatch(userEditActions.describe({ describe: data }));

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
              rule={[
              {
                required: true,
                message: "Please enter details!",
              },
            ]}
            />
            <Inputs label="Degree " name="Degree" handler={degreeHandler}  rule={[
              {
                required: true,
                message: "Please enter details!",
              },
            ]} />
          </div>
          <div className={Styles.osecondRow}>
            <Inputs label="Skills" name="Skills" handler={skillHandler} />
            <Dates
              label="Joining Year"
              name="JoiningYear"
              value={join}
              handler={joiningHandler}
              rules={[
              {
                required: true,
                message: "Please Select!",
              },
            ]}
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
              rule={[
              {
                required: true,
                message: "Please enter details!",
              },
            ]}
            />
            <AutoInputs
              label="Recent company"
              name="CompanyName"
              list={compList}
              handler={companyHandler}
              rule={[
              {
                required: true,
                message: "Please select!",
              },
            ]}
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
              rules={[
              {
                required: true,
                message: "Please Select!",
              },
            ]}
            />
            <Dates
              label="To Date"
              name="ToDate"
              value={toDate}
              handler={toHandler}
              rules={[
              {
                required: true,
                message: "Please Select!",
              },
            ]}
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
