import { Button, Form } from "antd";
import React, { useState } from "react";
import Styles from "../../../Styles/Step/ThirdStep.module.css";

import Dates from "../../GlobalComp/InputFields/Dates";
import Gender from "../../GlobalComp/InputFields/Gender";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import Marital from "../../GlobalComp/InputFields/Marital";
import NumberInputs from "../../GlobalComp/InputFields/NumberInputs";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../Store";
import { DateFormatter } from "../../../Utils/Helpers";

const ThirdStep = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const val = {
    WhatsappNumber: "",
    Address: "",
    AboutYourSelf: "",
    MaritalStatus: "",
    SpouseName: "",
    AniversaryDate: "",
    ChildDetails: "",
  };

  const [dob, setDob] = useState(DateFormatter(props?.userData?.DateOfBirth));

  const [marital, setMarital] = useState("");
  const [ani, setAni] = useState("");
  const [gen, setGen] = useState(props?.userData?.Gender);

  const genderHandler = (data) => {
    dispatch(
      userEditActions.gender({ gender: data ? data : props?.userData?.Gender })
    );
    setGen(data);
  };

  const dobHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(
      userEditActions.dob({
        dob: formattedDate
          ? formattedDate
          : DateFormatter(props?.userData?.DateOfBirth),
      })
    );
    setDob(formattedDate);
  };

  const whatsHandler = (data) => {
    dispatch(userEditActions.whatsapp({ whatsapp: data }));

    form.setFieldsValue({
      WhatsappNumber: data,
    });
  };

  const addressHnadler = (data) => {
    dispatch(userEditActions.address({ address: data }));

    form.setFieldsValue({
      Address: data,
    });
  };

  const aboutHandler = (data) => {
    dispatch(userEditActions.about({ about: data }));

    form.setFieldsValue({
      AboutYourSelf: data,
    });
  };

  const maritalHandler = (data) => {
    setMarital(data);
    dispatch(userEditActions.marital({ marital: data }));

    form.setFieldsValue({
      MaritalStatus: data,
    });
  };

  const spouseHandler = (data) => {
    dispatch(userEditActions.spouse({ spouse: data }));

    form.setFieldsValue({
      SpouseName: data,
    });
  };

  const aniHandler = (data) => {
    const formattedDate = DateFormatter(data);
    dispatch(userEditActions.aniversary({ aniversary: formattedDate }));

    setAni(formattedDate);
  };

  const ChildHandler = (data) => {
    dispatch(userEditActions.child({ child: data }));

    form.setFieldsValue({
      ChildDetails: data,
    });
  };

  return (
    <Form
      form={form}
      initialValues={val}
      layout="vertical"
      style={{ width: "100%", padding: "1rem" }}
      onFinish={props.next}
    >
      <div className={Styles.firstRow}>
        <Gender name={Gender} value={gen} handler={genderHandler} />
        <Dates
          label="Date of Birth"
          name="DateOfBirth"
          value={dob}
          handler={dobHandler}
        />
        <NumberInputs
          label="Whatsapp Number"
          name="WhatsappNumber"
          handler={whatsHandler}
        />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInputs
          label="Residential Address"
          length="200"
          name="Address"
          handler={addressHnadler}
        />
        <TextAreaInputs
          label="About Myself"
          length="200"
          name="AboutYourSelf"
          handler={aboutHandler}
        />
      </div>
      <div className={Styles.thirdRow}>
        <Marital onChange={maritalHandler} name="MaritalStatus" />

        {marital === "Married" ? (
          <>
            <Inputs
              label="Spouse Name"
              name="SpouseName"
              handler={spouseHandler}
            />
            <Dates
              label="Aniversary Date"
              name="AniversaryDate"
              value={ani}
              handler={aniHandler}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {marital === "Married" ? (
          <>
            <TextAreaInputs
              label="Family Details"
              length="400"
              name="ChildDetails"
              handler={ChildHandler}
            />
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
