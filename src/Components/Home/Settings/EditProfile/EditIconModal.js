import { Button, Form, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyActions } from '../../../../Store';

import Styles from '../../../../Styles/EditProfile/EditIconModal.module.css'
import AutoInputs from '../../../GlobalComp/InputFields/AutoInputs';
import Dates from '../../../GlobalComp/InputFields/Dates';
import EmailInputs from '../../../GlobalComp/InputFields/EmailInputs';
import Inputs from '../../../GlobalComp/InputFields/Inputs';
import NumberInputs from '../../../GlobalComp/InputFields/NumberInputs';
import ProfessionList from '../../../GlobalComp/InputFields/ProfessionList';
import TextAreaInputs from '../../../GlobalComp/InputFields/TextAreaInputs';


const EditIconModal = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const AddedCompany = useSelector(state => state.addCompanyReducer)
    

    const val = {
        Profession : '',
        Designation : '',
        CompanyName: "",
        CompanyAddress: "",
        EmailAddress: "",
        ContactNumber: "",
        FromDate : '',
        ToDate : '',
        Responsibility :'',
       
    }



    const professionHandler = (e) =>{
        dispatch(addCompanyActions.profession({ profession : e}) )
        form.setFieldsValue({
            Profession : e
        })
    }
    const desigHandler = (e) =>{
        dispatch(addCompanyActions.designation({ designation : e}) )

        form.setFieldsValue({
            Designation : e
        })
    }
    const companyHandler = (e) =>{
        dispatch(addCompanyActions.company({ company : e}) )

        form.setFieldsValue({
            CompanyName : e
        })
    }
    const contactHandler = (e) =>{
        dispatch(addCompanyActions.contact({ contact : e}) )

        form.setFieldsValue({
            ContactNumber : e
        })
    }
    const emailHandler = (e) =>{
        dispatch(addCompanyActions.email({ email : e}) )

        form.setFieldsValue({
            EmailAddress : e
        })
    }
    const addressHandler =(e) => {
        dispatch(addCompanyActions.address({ address : e}) )

        form.setFieldsValue({
            CompanyAddress : e
        })
    }
    const fromHandler = (e) =>{
        dispatch(addCompanyActions.fromD({ fromD : e}) )

        form.setFieldsValue({
            FromDate : e
        })
    }
    const toHandler = (e) =>{
        dispatch(addCompanyActions.toD({ toD : e}) )

        form.setFieldsValue({
            ToDate : e
        })
    }
    const resHandler = (e) =>{
        dispatch(addCompanyActions.res({ res : e}) )

        form.setFieldsValue({
            Responsibility : e
        })
    }




    const cancelHandler = () =>{
        props.onCancel(false)
    }

    const doneHandler = () =>{
        props.onDone(false)
    }


   
  return (
    <Form layout='vertical' form={form} initialValues={val}  >
        <div className={Styles.firstRow}>
            <ProfessionList label='Profession' name='Profession'  onChange={professionHandler} size='small' />
        </div>
        <div className={Styles.secondRow}>
            <Inputs label='Recent Designation' size='small' name='Designation' handler={desigHandler}  />
            <Inputs label='Company Name' size='small' name='CompanyName' handler={companyHandler} />
        </div>
        <div className={Styles.thirdRow}>
            <NumberInputs  label='Contact Number' size='small' name='ContactNumber' handler={contactHandler} />
            <EmailInputs label='Email' size='small' name='EmailAddress' handler={emailHandler} />
        </div>
        <div className={Styles.fourthRow}>
            <TextAreaInputs label='Company Address' name='CompanyAddress' length='100' size='small' handler={addressHandler} />
        </div>
        <div className={Styles.fifthRow}>
            <Dates label='From Date' size='small' name='FromDate' handler={fromHandler} />
            <Dates label='To Date' size='small' name='ToDate' handler={toHandler} />
        </div>
        <div className={Styles.sixthRow}>
            <TextAreaInputs label='Responsibilities' name='Responsibility' length='400' size='small' handler={resHandler} />
        </div>
        <div className={Styles.seventhRow}>
            <Button danger onClick={cancelHandler} >Cancel</Button>
            <Button type="primary" htmlType="submit" onClick={doneHandler} danger>
                Done
            </Button>
        </div>
    </Form>
  );
};
export default EditIconModal;