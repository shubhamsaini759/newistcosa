import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addCompanyActions } from "../../../../../Store";
import { CityList } from "../../../../../Utils/api/CityList";
import { CountryList } from "../../../../../Utils/api/CountryList";
import { StateList } from "../../../../../Utils/api/StateList";
import AutoInputs from "../DetailInputs/AutoInputs";
import SimpleInputs from "../DetailInputs/SimpleInputs";
import TextAreaInput from "../DetailInputs/TextAreaInput";

const StepTwoModal = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();


  const { data: countryData, isLoading: countryLoading } = useQuery(
    "CountryList",
    CountryList
  );

  const [ companyName, setCompantName ] = useState('');
  const [ companyNo, setCompanyNo ] = useState('');
  const [ companyEmail, setCompanyEmail] = useState('');
  const [ companyAddress, setCompanyAddress ] = useState('');

    
  const nameHandler = (data)  =>{
    console.log(data)
    setCompantName(data)
    dispatch(addCompanyActions.Name({ name: data}))
  }

  const numHandler = (data) =>{
    console.log(data)
    setCompanyNo(data)
    dispatch(addCompanyActions.Number({ number: data}))

  }
  const emailHandler = (data) =>{
    console.log(data)
    setCompanyEmail(data)
    dispatch(addCompanyActions.Email({ email: data}))
  
  }

  const addHandler = (data) =>{
    console.log(data)
    setCompanyAddress(data)
    dispatch(addCompanyActions.Address({ address : data}))
    
  }

  const {
    data: stateData,
    isLoading: stateLoading,
    mutateAsync: countryId,
  } = useMutation("StateList", StateList);

  const {
    data: CityData,
    isLoading: cityLoading,
    mutateAsync: stateId,
  } = useMutation("CityList", CityList);

  const [CompanyAdd, setCompanyAdd] = useState({
    country: {
      id: "",
      value: "",
    },
    state: {
      id: "",
      value: "",
    },
    city: {
      id: "",
      value: "",
    },
  });

  const countryHandler = async (data) => {
    await countryId(data ? data.id : state.moreData.CountryID);
    setCompanyAdd({
      country: data,
      city: {
        id: null,
        value: "",
      },
      state: {
        id: null,
        value: "",
      },
    });
  };

  const stateHandler = async (data) => {
    await stateId(data ? data.id : state.moreData.StateID);
    const countryDataClone = { ...CompanyAdd.country };
    setCompanyAdd({
      country: countryDataClone,
      state: data,
      city: {
        id: null,
        value: "",
      },
    });
  };

  const cityHandler = (data) => {
    const countryDataClone = { ...CompanyAdd.country };
    const stateDataClone = { ...CompanyAdd.state };
    setCompanyAdd({
      country: countryDataClone,
      state: stateDataClone,
      city: data,
    });

    dispatch(
      addCompanyActions.countryCityState({
        countryId: countryDataClone.id,
        stateId: stateDataClone.id,
        cityId: data.id,

      })
    );
  };

  return (
    <>
        <Stack direction='column' spacing={{xs : 1,sm: 1,lg : 1}} >
            <SimpleInputs sw="24%" aw="66%" value={companyName} label="Company Name" changeHandler={nameHandler} />
            <SimpleInputs  sw="24%" aw="66%"value={companyNo} label="Contact Number" changeHandler={numHandler} />
            <SimpleInputs sw="24%" aw="66%"value={companyEmail} label="Compnay Email" changeHandler={emailHandler} />
        </Stack>
        <Stack spacing={{xs : 1,sm: 1,lg : 1}} style={{ paddingTop : '8px', paddingBottom : '8px' }} >
            <TextAreaInput value={companyAddress} changeHandler={addHandler} sw='30%' tw='90%' label="Company Address" />
        </Stack>

        <Stack direction='column' spacing={{xs : 1,sm: 1,lg : 1}} >
            <AutoInputs
                    sw="24%"
                    aw="66%"
                    emailHandler
                    label="Country"
                    data={countryData || [CompanyAdd.country]}
                    value={CompanyAdd.country.value}
                    changeHandler={countryHandler}
                />
        
                <AutoInputs
                    sw="24%"
                    aw="66%"
                    label="State"
                    data={stateData || [CompanyAdd.state]}
                    value={CompanyAdd.state.value}
                    changeHandler={stateHandler}
                />

                <AutoInputs
                    sw="24%"
                    aw="66%"
                    label="City"
                    data={CityData || [CompanyAdd.city]}
                    value={CompanyAdd.city.value}
                    changeHandler={cityHandler}
                />
        </Stack>
    
    </>
  );
};

export default StepTwoModal;
