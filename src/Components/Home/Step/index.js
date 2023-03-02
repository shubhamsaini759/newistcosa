import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { UserMoreDetail } from "../../../Utils/api/UserMoreDetail";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const Step = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const {state} = useLocation();

  console.log(state,'hwefgvwegfiulwegfiuwqehiuh')

  const next = () => {

 

    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "First",
      content: <FirstStep next={next} userData={state} />,
    },
    {
      title: "Second",
      content: <SecondStep prev={prev} next={next} />,
    },
    {
      title: "Third",
      content: <ThirdStep prev={prev} next={next} userData={state} />,
    },
    {
      title: "Last",
      content: <FourthStep prev={prev} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* <div
        style={{
          marginTop: 24,
        }}
      > */}
      {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )} */}
      {/* </div> */}
    </>
  );
};
export default Step;
