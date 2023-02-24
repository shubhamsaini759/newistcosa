import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import Styles from "../../../Styles/userLogin/Steppers.module.css";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import { useMutation } from "react-query";
import { userEditDetail } from "../../../Utils/api/UserMoreDetail/UserEditDetail";
import { useLocation, useNavigate } from "react-router-dom";
import { editToastActions, userEditActions } from "../../../Store";

const steps = [
  {
    title: "Registration",
    content: <StepOne />,
  },
  {
    title: "Professional Information",
    content: <StepTwo />,
  },
  {
    title: "Personal Information",
    content: <StepThree />,
  },
  {
    title: "Istc Memorise",
    content: <StepFour />,
  },
];

const Steppers = () => {
  const EditedData = useSelector((state) => state.UserEditReducer);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state.moreData.RollNumberID, "location");

  const [batchId, setbatchId] = useState(state.moreData.BatchID);
  const [rollNumberId, setRollNumberId] = useState(state.moreData.RollNumberID);

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = async () => {
  console.log(EditedData, "next check");

    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "200px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Profile is Updated Successfully',
      duration: 5,
    });
  };

  const { data, isLoading, error , mutateAsync } = useMutation(
    "userEditDetail",
    userEditDetail
  );


  const DoneHandler = async () => {
    dispatch(userEditActions.batch({ batch: batchId }));
    dispatch(userEditActions.roll({ roll: rollNumberId }));
    dispatch(userEditActions.userId({ userID: rollNumberId }));

    message.success("Processing complete!");
    console.log(EditedData, "done click");

    const apiResponse = await mutateAsync(EditedData);
    console.log({ apiResponse }, "api");

  console.log(error,'errorrrrrrrrrrr')


    if (apiResponse?.Message === "success") {
      dispatch(editToastActions.resetFlag());
      navigate('/home');
      success();

    }
  };

  return (
    <>
      <Steps current={current} items={items} className={Styles.Steps} />
      {contextHolder}
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "5%",
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={prev}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" style={{ backgroundColor :'#6f0100' }} onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" style={{ backgroundColor :'#6f0100' }} onClick={DoneHandler}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};
export default Steppers;
