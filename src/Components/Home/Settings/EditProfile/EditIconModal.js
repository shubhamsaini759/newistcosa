import { Button, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyActions } from "../../../../Store";

import Styles from "../../../../Styles/EditProfile/EditIconModal.module.css";
import { CityList } from "../../../../Utils/api/CityList";
import { CountryList } from "../../../../Utils/api/CountryList";
import { StateList } from "../../../../Utils/api/StateList";
import { AddCompany } from "../../../../Utils/api/UserMoreDetail/StepTwoProfession/AddCompany";
import AutoInputs from "../../../GlobalComp/InputFields/AutoInputs";
import Dates from "../../../GlobalComp/InputFields/Dates";
import EmailInputs from "../../../GlobalComp/InputFields/EmailInputs";
import Inputs from "../../../GlobalComp/InputFields/Inputs";
import NumberInputs from "../../../GlobalComp/InputFields/NumberInputs";
import ProfessionList from "../../../GlobalComp/InputFields/ProfessionList";
import TextAreaInputs from "../../../GlobalComp/InputFields/TextAreaInputs";

const EditIconModal = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { data: countryList } = useQuery("CountryList", CountryList);
  const { data: stateList, mutateAsync: countryId } = useMutation(
    "StateList",
    StateList
  );
  const { data: cityList, mutateAsync: stateId } = useMutation(
    "CityList",
    CityList
  );
  const { data: addCompany, mutateAsync: compDetails } = useMutation(
    "AddCompany",
    AddCompany
  );

  const AddedCompany = useSelector((state) => state.addCompanyReducer);

  const val = {
    CompanyName: "",
    CompanyAddress: "",
    EmailAddress: "",
    ContactNumber: "",
    Country: "",
    State: "",
    City: "",
  };

  const companyHandler = (e) => {
    dispatch(addCompanyActions.company({ company: e }));
    form.setFieldsValue({
      CompanyName: e,
    });
  };
  const contactHandler = (e) => {
    dispatch(addCompanyActions.contact({ contact: e }));
    form.setFieldsValue({
      ContactNumber: e,
    });
  };
  const emailHandler = (e) => {
    dispatch(addCompanyActions.email({ email: e }));
    form.setFieldsValue({
      EmailAddress: e,
    });
  };
  const addressHandler = (e) => {
    dispatch(addCompanyActions.address({ address: e }));

    form.setFieldsValue({
      CompanyAddress: e,
    });
  };

  const countryHandler = async (_, data) => {
    await countryId(data.id);
    dispatch(addCompanyActions.country({ country: data?.id }));
    form.getFieldsValue({
      Country: data.value,
      State: "",
      City: "",
    });
  };
  const stateHandler = async (_, data) => {
    await stateId(data.id);
    dispatch(addCompanyActions.state({ state: data?.id }));

    form.getFieldsValue({
      State: data.value,
      City: "",
    });
  };
  const cityHandler = (_, data) => {
    dispatch(addCompanyActions.city({ city: data?.id }));

    form.getFieldsValue({
      City: data.value,
    });
  };

  const resHandler = (e) => {
    dispatch(addCompanyActions.res({ res: e }));

    form.setFieldsValue({
      Responsibility: e,
    });
  };

  const cancelHandler = () => {
    props.onCancel(false);
  };

  const doneHandler = async () => {
    await compDetails(AddedCompany);
    props.onDone(false);
  };

  useEffect(()=>{

    console.log(addCompany, "addCompanyApiResponse");
  },[AddedCompany])

  return (
    <Form form={form} layout="vertical" initialValues={val}>
      {/* <div className={Styles.firstRow}>
            <ProfessionList label='Profession' name='Profession'  onChange={professionHandler} size='small' />
        </div> */}
      <div className={Styles.secondRow}>
        {/* <Inputs label='Recent Designation' size='small' name='Designation' handler={desigHandler}  /> */}
        <Inputs
          label="Company Name"
          size="small"
          name="CompanyName"
          handler={companyHandler}
        />
      </div>
      <div className={Styles.thirdRow}>
        <NumberInputs
          label="Contact Number"
          size="small"
          name="ContactNumber"
          handler={contactHandler}
        />
        <EmailInputs
          label="Email"
          size="small"
          name="EmailAddress"
          handler={emailHandler}
        />
      </div>
      <div className={Styles.fourthRow}>
        <TextAreaInputs
          label="Company Address"
          name="CompanyAddress"
          length="100"
          size="small"
          handler={addressHandler}
        />
      </div>
      <div className={Styles.fifthRow}>
        <AutoInputs
          label="Country"
          name="Country"
          list={countryList}
          handler={countryHandler}
        />
        <AutoInputs
          label="State"
          name="State"
          list={stateList}
          handler={stateHandler}
        />
        <AutoInputs
          label="City"
          name="City"
          list={cityList}
          handler={cityHandler}
        />
      </div>

      <div className={Styles.seventhRow}>
        <Button  onClick={cancelHandler}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" style={{ backgroundColor : '#6f0100' }} onClick={doneHandler} danger>
          Done
        </Button>
      </div>
    </Form>
  );
};
export default EditIconModal;
