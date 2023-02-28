import { Button, Form, Modal } from 'antd';
import { useState } from 'react';

import Styles from '../../../../Styles/EditProfile/EditIconModal.module.css'
import AutoInputs from '../../../GlobalComp/InputFields/AutoInputs';
import Dates from '../../../GlobalComp/InputFields/Dates';
import EmailInputs from '../../../GlobalComp/InputFields/EmailInputs';
import Inputs from '../../../GlobalComp/InputFields/Inputs';
import NumberInputs from '../../../GlobalComp/InputFields/NumberInputs';
import ProfessionList from '../../../GlobalComp/InputFields/ProfessionList';
import TextAreaInputs from '../../../GlobalComp/InputFields/TextAreaInputs';


const EditIconModal = (props) => {

    const [ editIcon, setEditIcon ] = useState({
        Profession : '',
    })

    const professionHandler = (e) =>{
        console.log(e)
        setEditIcon.Profession(e)
    }

    const cancelHandler = () =>{
        props.onCancel(false)
    }

    const doneHandler = () =>{
        props.onDone(false)
    }
  return (
    <Form layout='vertical'>
        <div className={Styles.firstRow}>
            <ProfessionList label='Profession' value={setEditIcon.Profession} onChange={professionHandler} size='small's />
        </div>
        <div className={Styles.secondRow}>
            <Inputs label='Recent Designation' size='small' />
            <AutoInputs label='Company Name' size='small' />
        </div>
        <div className={Styles.thirdRow}>
            <NumberInputs  label='Contact Number' size='small' />
            <EmailInputs label='Email' size='small' />
        </div>
        <div className={Styles.fourthRow}>
            <TextAreaInputs label='Company Address' length='100' size='small' />
        </div>
        <div className={Styles.fifthRow}>
            <Dates label='From Date' size='small' />
            <Dates label='To Date' size='small' />
        </div>
        <div className={Styles.sixthRow}>
            <TextAreaInputs label='Responsibilities' length='400' size='small' />
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