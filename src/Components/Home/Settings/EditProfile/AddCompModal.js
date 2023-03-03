import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { professionalInfoActions } from "../../../../Store";
import Styles from "../../../../Styles/EditProfile/EditIconModal.module.css";
import { CompanyList } from "../../../../Utils/api/UserMoreDetail/CompanyList";
import { ProfessionalInfo } from "../../../../Utils/api/UserMoreDetail/ProfessionalInfo";
import { UserProfileDetails } from "../../../../Utils/api/UserProfile";
import { DateFormatter } from "../../../../Utils/Helpers";
import AutoInputs from "../../../GlobalComp/InputFields/AutoInputs";
import Dates from "../../../GlobalComp/InputFields/Dates";
import Inputs from "../../../GlobalComp/InputFields/Inputs";
import ProfessionList from "../../../GlobalComp/InputFields/ProfessionList";
import TextAreaInputs from "../../../GlobalComp/InputFields/TextAreaInputs";

const AddCompModal = (props) => {
  const dispatch = useDispatch();

  const professionaldetail = useSelector((state)=> state.professionalInfoReducer);
  const { data : professionalDetails , mutateAsync : details } = useMutation('ProfessionalInfo',ProfessionalInfo);
  const { data : profileData } = useQuery('UserProfileDetails',UserProfileDetails);
  const { data : companyList } = useQuery('CompanyList',CompanyList);


  const [profession, setProfession] = useState("");
  const [ fromDate, setFromDate ] = useState('');
  const [ toDate, setToDate ] = useState('');
  const [ compId, setCompId ] = useState('');
  const [ userId, setUserId ] = useState(profileData?.RollNumberID)
  console.log(userId,'userID')
  console.log(compId,'compId')



  useEffect(()=>{
    dispatch(professionalInfoActions.userId({userId : userId}) )
    dispatch(professionalInfoActions.compId({compId : compId}) )
    dispatch(professionalInfoActions.active({compactiveId : true}) )
  },[compId])

  const professionHandler = (data) => {
    setProfession(data);
    dispatch(professionalInfoActions.profess({ profess : data}) )
    
  };
  const desigHandler = (data) =>{
    dispatch(professionalInfoActions.desig({ desig : data}) )
  }
  const nameHandler = (_,data) =>{
    setCompId(data?.id)
    dispatch(professionalInfoActions.name({ name : data?.value }) )

  }

  const fromHandler = (data) =>{
    const formattedDate = DateFormatter(data)
    setFromDate(formattedDate)
    dispatch(professionalInfoActions.fromDate({ fromDate : formattedDate}) )
  }
  const toHandler = (data) =>{
    const formattedDate = DateFormatter(data)
    setToDate(formattedDate)
    dispatch(professionalInfoActions.toDate({ toDate : formattedDate}) )
  }
  const resHandler = (data) =>{
    dispatch(professionalInfoActions.res({ res : data}) )
  }



  const cancelHandler = () => {
    props.onCancel(false);
  };

  const doneHandler =async () => {
    await details(professionaldetail)
    props.onDone(false);
    console.log(professionaldetail,'console')
    console.log(professionalDetails,'apiResponse')
  };


  return (
    <Form layout="vertical">
      <div className={Styles.firstRow}>
        <ProfessionList
          label="Profession"
          value={profession}
          onChange={professionHandler}
          size="small"
        />
      </div>
      <div className={Styles.secondRow}>
        <Inputs label="Recent Designation"  size="small" handler={desigHandler} />
        <AutoInputs label="Company Name" size="small" list={companyList}  handler={nameHandler} />
      </div>
    
    
      <div className={Styles.fifthRow}>
        <Dates label="From Date" size="small" value={fromDate} handler={fromHandler} />
        <Dates label="To Date" size="small" value={toDate} handler={toHandler} />
      </div>
      <div className={Styles.sixthRow}>
        <TextAreaInputs label="Responsibilities" length="400" size="small" handler={resHandler}  />
      </div>
      <div className={Styles.seventhRow}>
        <Button danger onClick={cancelHandler}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" onClick={doneHandler} danger>
          Done
        </Button>
      </div>
    </Form>
  );
};
export default AddCompModal;
