import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Styles from "../../Styles/Register/Demo.module.css";
import { useDispatch } from "react-redux";
import { tempIdActions } from "../../Store";

export default function SelectAuto(props) {
  const dispatch = useDispatch();

  const changeHandler = (event, value) => {
    console.log(value.CityId, "disspatch");

    if (props.label === "batchId") {
      dispatch(tempIdActions.BatchId({ batchID: value.BatchID }));
    } else if (props.label === "rollno") {
      dispatch(tempIdActions.RollId({ rollID: value.RollNumberID }));
    } else if (props.label === "country") {
      dispatch(tempIdActions.CountryId({ countryID: value.countryId }));
    } else if (props.label === "state") {
      dispatch(tempIdActions.StateId({ stateID: value.StateId }));
    } else if (props.label === "city") {
      dispatch(tempIdActions.CityId({ cityID: value.CityId }));
    }
  };

  return (
    <Autocomplete
      openText="helllo"
      className={Styles.fields}
      disablePortal
      id={props.label}
      size="small"
      options={props.Data}
      getOptionLabel={(option) => {
        if (props.label === "batchId") {
          return option.BatchID.toString();
        } else if (props.label === "rollno") {
          return option.RollNumberID.toString();
        } else if (props.label === "country") {
          return option.countryName;
        } else if (props.label === "state") {
          return option.StateName;
        } else if (props.label === "city") {
          return option.CityName;
        }
      }}
      onChange={changeHandler}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
