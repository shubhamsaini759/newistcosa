import { Button, Form } from 'antd'
import React, { useState } from 'react'
import Inputs from '../InputFields/Inputs'
import Styles from '../../../../Styles/EditProfile/PersonalProfile.module.css'
import Gender from '../InputFields/Gender'
import NumberInputs from '../InputFields/NumberInputs'
import EmailInputs from '../InputFields/EmailInputs'
import Dates from '../InputFields/Dates'
import AutoInputs from '../InputFields/AutoInputs'
import TextAreaInputs from '../InputFields/TextAreaInputs'
import Marital from '../InputFields/Marital'

const PersonalInfo = () =>{
const[ personalProfile, setPersonalProfile ] = useState({
    FullName : '',
    BatchName : '',
    RollNumber : '',
    Gender : '',
    DateOfbirth : '',
    WhatsappNumber : '',
    Email : '',
    ContactNumber : '',
    Country : '',
    State : '',
    City : '',
    Pincode : '',
    ISTCNickname : '',
    ISTCRoommates : '',
    Comments : '',
    IstcAbout : '',
    AboutMyself : '',
    SearchKeyword  :'',
    ResidentialAddress : '',
    Marital : '',
    SpouseName : '',
});

const genderHandler = (e) => {
  console.log(e);
  setPersonalProfile.Gender(e);
};


return (
<Form layout="vertical" style={{ width:'100%' }} >
    <div className={Styles.firstRow}>
        <Inputs label='Full Name' name='Fullname' value={personalProfile.FullName} />
        <Inputs label='Batch Name' name='Batchname' value={personalProfile.BatchName} />
        <Inputs label='Roll Number' name='Rollnumber' value={personalProfile.RollNumber} />
    </div>
    <div className={Styles.secondRow} >
        <Gender label='Gender' name='Gender' value={personalProfile.Gender} onChange={genderHandler} />
        <Dates label='Date of Birth' rules={[{ required : true, message : 'Please select your DOB' }]} value={personalProfile.DateOfbirth} />
    </div>
    <div className={Styles.thirdRow}>
        <NumberInputs label='Whatsapp Number' name='Whatsappnumber' value={personalProfile.WhatsappNumber} rules={[{ type: 'Number' }]} />
        <EmailInputs label='Email' name='Email' value={personalProfile.Email} />
        <NumberInputs label='Contact Number' name='Whatsappnumber' value={personalProfile.ContactNumber} rules={[{ type: 'Number' },{ required : true, message : 'Please Enter Your Number' }]} />

    </div>
    <div className={Styles.fourthRow} >
        <AutoInputs label='Country'  />
        <AutoInputs label='State' />
        <AutoInputs label='City' />
    </div>
    <div className={Styles.fifthRow} >
        <Inputs label='Pincode' name='pincode' value={personalProfile.Pincode} />
        <Inputs label='ISTC Nickname' name='Istcnickname' value={personalProfile.ISTCNickname} />
        <Inputs label='ISTC Roomamtes/Friends' name='IstcRoomamtes' value={personalProfile.ISTCRoommates} />
    </div>
    <div className={Styles.sixthRow}>
        <TextAreaInputs label='Comments' length={2000} />
        <TextAreaInputs label='ISTC About' length={2000} />
        <TextAreaInputs label='About Myself' length={2000} />
        <TextAreaInputs label='Search Keywords' length={200} />
        <TextAreaInputs label='Residential Address' length={200} />
    </div>
    <div className={Styles.seventhRow} >
        <Marital label='Marital Status' />
        <Inputs label='Spouse Name'  />
        <Dates label='Aniversary Date' />
    </div>
    <div className={Styles.eighthRow} >
        <TextAreaInputs label='Child Details' />
    </div>


    <div style={{display : 'flex',justifyContent : 'flex-end' }}>
        <Button type="primary" htmlType="submit"  >
            Submit
        </Button>
    </div>

</Form>
  )
}

export default PersonalInfo