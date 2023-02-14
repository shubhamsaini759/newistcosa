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

    if (props.label === "BatchId") {
      dispatch(tempIdActions.BatchId({ batchID: value.BatchID }));
    } else if (props.label === "Rollno") {
      dispatch(tempIdActions.RollId({ rollID: value.RollNumberID }));
    } else if (props.label === "Country") {
      dispatch(tempIdActions.CountryId({ countryID: value.countryId }));
    } else if (props.label === "State") {
      dispatch(tempIdActions.StateId({ stateID: value.StateId }));
    } else if (props.label === "City") {
      dispatch(tempIdActions.CityId({ cityID: value.CityId }));
    }
  };

  return (
    <Autocomplete
  
      className={Styles.fields}
      disablePortal
      id={props.label}
      size="small"
      options={props.Data}
      getOptionLabel={(option) => {
        if (props.label === "BatchId") {
          return option.BatchID.toString();
        } else if (props.label === "R") {
          return option.RollNumberID.toString();
        } else if (props.label === "Country") {
          return option.countryName;
        } else if (props.label === "State") {
          return option.StateName;
        } else if (props.label === "City") {
          return option.CityName;
        }
      }}
      onChange={changeHandler}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField required {...params} label={props.label} />}
    />
  );
}
