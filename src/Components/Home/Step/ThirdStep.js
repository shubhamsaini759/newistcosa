import { Button, Form } from "antd";
import React, { useState } from "react";
import Styles from "../../../Styles/Step/ThirdStep.module.css";
import dayjs from "dayjs";

import Dates from "../../GlobalComp/InputFields/Dates";
import Gender from "../../GlobalComp/InputFields/Gender";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import Marital from "../../GlobalComp/InputFields/Marital";
import NumberInputs from "../../GlobalComp/InputFields/NumberInputs";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../Store";

const ThirdStep = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dateFormat = "MM-DD-YYYY";

  console.log(props.userData.userData,'thirdPart');


  const val ={ 
    Gender: `${props?.userData?.userData?.Gender}`,
    DateOfBirth: "",
    WhatsappNumber: `${props?.userData?.userData?.WhatsappNumber}`,
    Address: "",
    AboutYourSelf: "",
    MaritalStatus: "",
    SpouseName: "",
    AniversaryDate: "",
    ChildDetails: "",
  };
  const [marital, setMarital] = useState('');

  const genderHandler = (data) =>{
    dispatch(userEditActions.gender({gender : data}) )
    console.log(data)
    form.setFieldsValue({
      Gender : data
    })
  }

  const dobHandler = (data) =>{
    dispatch(userEditActions.dob({dob : data}) )

    console.log(data)
    form.setFieldsValue({
      DateOfBirth : dayjs(data, dateFormat)
    })
  }
  const whatsHandler = (data) =>{
    dispatch(userEditActions.whatsapp({whatsapp : data}) )

    console.log(data)
    form.setFieldsValue({
      WhatsappNumber : data
    })
  }
  const addressHnadler = (data) =>{
    dispatch(userEditActions.address({address : data}) )

    console.log(data)
    form.setFieldsValue({
      Address : data
    })
  }
  const aboutHandler = (data) =>{
    dispatch(userEditActions.about({about : data}) )

    console.log(data)
    form.setFieldsValue({
      AboutYourSelf : data
    })
  }
  const maritalHandler = (data) =>{
    console.log(data)
    setMarital(data)
    dispatch(userEditActions.marital({marital : data}) )

    form.setFieldsValue({
      MaritalStatus : data
    })
  }
  const spouseHandler = (data) =>{
    dispatch(userEditActions.spouse({spouse : data}) )

    console.log(data)
    form.setFieldsValue({
      SpouseName : data
    })
  }
  const aniHandler = (data) =>{
    dispatch(userEditActions.aniversary({aniversary : data}) )

    console.log(data)
    form.setFieldsValue({
      AniversaryDate : data
    })
  }
  const ChildHandler = (data) =>{
    dispatch(userEditActions.child({child : data}) )

    console.log(data)
    form.setFieldsValue({
      ChildDetails : data
    })
  }




  return (
    <Form
      form={form}
      initialValues={val}
      layout="vertical"
      style={{ width: "100%", padding: "1rem" }}
      onFinish={props.next}
    >
      <div className={Styles.firstRow}>
        <Gender name={Gender} handler={genderHandler} />
        <Dates label="Date of Birth" name='DateOfBirth' handler={dobHandler} />
        <NumberInputs label="Whatsapp Number" name='WhatsappNumber' handler={whatsHandler} />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInputs label="Residential Address" length="200" name='Address' handler={addressHnadler} />
        <TextAreaInputs label="About Myself" length="200" name='AboutYourSelf' handler={aboutHandler}  />
      </div>
      <div className={Styles.thirdRow}>
        <Marital onChange={maritalHandler} name='MaritalStatus'  />

        {marital === 'Married' ? (
          <>
            <Inputs label="Spouse Name" name='SpouseName' handler={spouseHandler} />
            <Dates label="Aniversary Date" name='AniversaryDate' handler={aniHandler} />
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {marital === 'Married' ? (
          <>
            <TextAreaInputs label="Family Details" length="400" name='ChildDetails' handler={ChildHandler} />
          </>
        ) : (
          ""
        )}
      </div>

      <div className={Styles.fourthRow}>
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

export default ThirdStep;
