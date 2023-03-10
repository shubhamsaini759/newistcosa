import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { professionalInfoActions } from "../../../../Store";
import Styles from "../../../../Styles/EditProfile/EditIconModal.module.css";
import { CompanyList } from "../../../../Utils/api/UserMoreDetail/CompanyList";
import { ProfessionalEdit } from "../../../../Utils/api/UserMoreDetail/ProfessionalEdit";
import { ProfessionalInfo } from "../../../../Utils/api/UserMoreDetail/ProfessionalInfo";
import { UserProfileDetails } from "../../../../Utils/api/UserProfile";
import { DateFormatter } from "../../../../Utils/Helpers";
import AutoInputs from "../../../GlobalComp/InputFields/AutoInputs";
import Dates from "../../../GlobalComp/InputFields/Dates";
import Inputs from "../../../GlobalComp/InputFields/Inputs";
import ProfessionList from "../../../GlobalComp/InputFields/ProfessionList";
import TextAreaInputs from "../../../GlobalComp/InputFields/TextAreaInputs";

const AddCompModal = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const val={
    Designation : props?.oldData?.Designation,
    CompanyName : props?.oldData?.CompanyName,
    Responsibility : props?.oldData?.Responsibility
  }

  const professionaldetail = useSelector(
    (state) => state.professionalInfoReducer
  );
  const {
    data: professionalDetails,
    error,
    mutateAsync: details,
  } = useMutation("ProfessionalEdit", ProfessionalEdit);

  useEffect(()=>{
    console.log(professionalDetails,'professionalDetails')
  },[professionalDetails])

  const { data: companyList } = useQuery("CompanyList", CompanyList);


  const [profession, setProfession] = useState(props?.oldData?.Profession);
  const [fromDate, setFromDate] = useState(DateFormatter(props?.oldData?.FromDate));
  const [toDate, setToDate] = useState(DateFormatter(props?.oldData?.ToDate));
  const [compId, setCompId] = useState("");
  


  useEffect(() => {
    dispatch(professionalInfoActions.userId({ userId: props?.oldData?.userId }));
    dispatch(professionalInfoActions.compId({ compId: props?.oldData?.compId }));
    dispatch(professionalInfoActions.active({ compactiveId: true }));
  }, [compId]);

  const professionHandler = (data) => {
    setProfession(data);
    dispatch(professionalInfoActions.profess({ profess: data ? data : props?.oldData?.Profession }));
  };
  const desigHandler = (data) => {
    dispatch(professionalInfoActions.desig({ desig: data ? data : props?.oldData?.Designation }));
  };
  const nameHandler = (_, data) => {
    setCompId(data?.id);
    dispatch(professionalInfoActions.name({ name: data? data.value : props?.oldData?.CompanyName }));
  };

  const fromHandler = (data) => {
    const formattedDate = DateFormatter(data);
    setFromDate(formattedDate);
    dispatch(professionalInfoActions.fromDate({ fromDate: formattedDate ? formattedDate : DateFormatter(props?.oldData?.FromDate) }));
  };
  const toHandler = (data) => {
    const formattedDate = DateFormatter(data);
    setToDate(formattedDate);
    dispatch(professionalInfoActions.toDate({ toDate: formattedDate  ? formattedDate : DateFormatter(props?.oldData?.ToDate)  }));
  };
  const resHandler = (data) => {
    dispatch(professionalInfoActions.res({ res: data ? data : props?.oldData?.Responsibility }));
  };

  const cancelHandler = () => {
    props.onCancel(false);
  };

  const doneHandler = async () => {
    await details(professionaldetail)
    props.onDone(false);
  };

  return (
    <Form form={form} initialValues={val} layout="vertical">
      <div className={Styles.firstRow}>
        <ProfessionList
          label="Profession"
          value={profession}
          onChange={professionHandler}
          size="small"
        />
      </div>
      <div className={Styles.secondRow}>
        <Inputs
          label="Recent Designation"
          name = 'Designation'
          size="small"
          handler={desigHandler}
        />
        <AutoInputs
          label="Company Name"
          name='CompanyName'
          size="small"
          list={companyList}
          handler={nameHandler}
        />
      </div>

      <div className={Styles.fifthRow}>
        <Dates
          label="From Date"
          size="small"
          value={fromDate}
          handler={fromHandler}
        />
        <Dates
          label="To Date"
          size="small"
          value={toDate}
          handler={toHandler}
        />
      </div>
      <div className={Styles.sixthRow}>
        <TextAreaInputs
          label="Responsibilities"
          name='Responsibility'
          length="400"
          size="small"
          handler={resHandler}
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
export default AddCompModal;
