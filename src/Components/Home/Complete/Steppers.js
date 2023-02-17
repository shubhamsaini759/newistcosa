import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import Styles from '../../../Styles/userLogin/Steppers.module.css'
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';


const steps = [
  {
    title: 'Registration',
    content:  <StepOne /> ,
  },
  {
    title: 'Professional Information',
    content: <StepTwo /> ,
  },
  {
    title: 'Personal Information',
    content: <StepThree />,
  },
  {
    title: 'Istc Memorise',
    content: <StepFour />,
  },
];
const Steppers = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
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
    lineHeight: '200px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
   
  };
  return (
    <>
      <Steps current={current} items={items} className={Styles.Steps} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '5%'
        }}
      >
      {current > 0 && (
        <Button
          style={{
            margin: '0 8px',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        
      </div>
    </>
  );
};
export default Steppers;