import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepThree.module.css";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { Gender } from "../../../../Utils/api/Gender";
import { MaritalList } from "../../../../Utils/api/UserMoreDetail/StepThreeMarital";
import { userEditActions } from "../../../../Store";
import { useDispatch } from "react-redux";

const StepThree = () => {

  const dispatch = useDispatch();

  const [ selectedGen, setSelectedGen ] = useState('');
  const [selectedMarital, setSelectedMarital] = useState('');
  const [num, setNum] = useState('');
  const [ dob , setDob ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ about, setAbout ] = useState('');
  const [ spouse, setSpouse ] = useState('');
  const [ ani, setAni ] = useState('');
  const [ family, setFamily ] = useState('');

  const GenHandler = (data) =>{
    console.log(data)

    setSelectedGen(data.value)
    dispatch(userEditActions.GendeHandle({ gen : data.value}))
  }

  const maritalHandler = (data) =>{
    console.log(data)

    setSelectedMarital(data.value);
    dispatch(userEditActions.MaritalHandle({ marital : data.value}))

  };
  const numHandler = (data) =>{
    console.log(data)

    setNum(data)
    dispatch(userEditActions.NumHandle({ number : data}))

  }
  const dobHandler = (data) =>{
    console.log(data)

    setDob(data)
    dispatch(userEditActions.DobHandle({ dob : data}))

  }
  const addHandler = (data) =>{
    console.log(data)

    setAddress(data)
    dispatch(userEditActions.addHandle({ add : data}))

  }
  const aboutHandler = (data) =>{
    console.log(data)

    setAbout(data)
    dispatch(userEditActions.aboutHandle({ about : data}))

  }
  const spouseHandler = (data) =>{
    console.log(data)

    setSpouse(data)
    dispatch(userEditActions.spouseHandle({ spouse : data}))

  }
  const aniHandler = (data) =>{
    console.log(data)

    setAni(data)
    dispatch(userEditActions.aniHandle({ ani : data}))

  }
  const familyHandler = (data) =>{
    console.log(data)

    setFamily(data)
    dispatch(userEditActions.familyHandle({ family : data}))

  }

  return (
    <div className={Styles.StepThree}>
      <div className={Styles.firstRow}>
        <AutoInputs sw="24%" aw="66%" label="Gender" data={Gender} changeHandler={GenHandler} value={selectedGen}  />
        <StartDateInput sw="24%" aw="66%" label="D.O.B" value={dob} changeHandler={dobHandler} />
        <SimpleInputs sw="24%" aw="66%" label="Whatsapp No." value={num} changeHandler={numHandler}  />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInput label="Residential Address" length='200' tw="80%" sw="30%" value={address} changeHandler={addHandler} />
        <TextAreaInput label="About Myself" length='200' tw="80%" sw="30%" value={about} changeHandler={aboutHandler} />
      </div>
      <div className={Styles.thirdRow}>
        <AutoInputs
        sw="29%" aw="60%"
          label="Marital status"
          data={MaritalList}
          changeHandler={maritalHandler}
          value={selectedMarital}
        />
          { 
            selectedMarital === 'Married'? (
            <>
              <SimpleInputs sw="37%" aw="50%" label="Spouse Name" value={spouse} changeHandler={spouseHandler}  />
              <StartDateInput label='Anniversary Date' sw="34%" aw="58%" value={ani} changeHandler={aniHandler} />
            </>
            )
            :
            ""
          }
        
        </div>
        <div className={Styles.fourthRow}>
        { 
          selectedMarital === 'Married'? 
          (
              <TextAreaInput label="Family Details" tw="40%" sw="30%" value={family} changeHandler={familyHandler}  />
          ) 
          : 
          ""
        }
        </div>
      
    </div>
  );
};

export default StepThree;
