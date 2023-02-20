import React, { useState } from "react";
import AutoInputs from "./DetailInputs/AutoInputs";
import Styles from "../../../../Styles/userLogin/Steps/StepThree.module.css";
import TextAreaInput from "./DetailInputs/TextAreaInput";
import StartDateInput from "./DetailInputs/StartDateInput";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { CountryList } from "../../../../Utils/api/CountryList";
import { useQuery } from "react-query";
import { Gender } from "../../../../Utils/api/Gender";
import { useLocation } from "react-router";
import { MaritalList } from "../../../../Utils/api/UserMoreDetail/StepThreeMarital";

const StepThree = () => {

  const [ selectedGen, setSelectedGen ] = useState('');
  const [selectedMarital, setSelectedMarital] = useState('');

  const GenHandler = (data) =>{
    console.log(data)
    setSelectedGen(data.value)
  }

  const maritalHandler = (data) => {
    setSelectedMarital(data.value);
  };

  console.log(Gender)

  return (
    <div className={Styles.StepThree}>
      <div className={Styles.firstRow}>
        <AutoInputs sw="24%" aw="66%" label="Gender" data={Gender} changeHandler={GenHandler} value={selectedGen}  />
        <StartDateInput sw="24%" aw="66%" label="D.O.B" />
        <SimpleInputs sw="24%" aw="66%" label="Full Name"  />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInput label="Residential Address" tw="80%" sw="30%" />
        <TextAreaInput label="About Myself" tw="80%" sw="30%" />
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
              <SimpleInputs sw="37%" aw="50%" label="Spaouse Name"  />
              <StartDateInput label='Anniversary Date' sw="34%" aw="58%" />
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
              <TextAreaInput label="Family Details" tw="40%" sw="30%" />
          ) 
          : 
          ""
        }
        </div>
      
    </div>
  );
};

export default StepThree;
