import { Button } from '@mui/material'
import React from 'react'
import {  useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom'
import { UserMoreDetail } from '../../Utils/api/UserMoreDetail';

const Dashboards = () => {

  const navigate = useNavigate();

  const log = () =>{
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const Add = () =>{
    console.log('hello')
  }


  const { data : moreData , isLoading } = useQuery( 'UserMOreDetail', UserMoreDetail)
  const MoreDetails = () =>{
    console.log(moreData,'detailmore')
    navigate('/information',{state : {moreData}} )
  }

  return (
    <div>Dashboard
    <br></br>
    <br></br>
    <br></br>
    <button onClick={MoreDetails} >complete</button>

      <p>Your Profile is incomplete, please <span  style={{ cursor : 'pointer' }} >complete </span> it to unlock more option's.</p>
      <br></br>
      <br></br>
      <br></br>
      <Button  onClick={log} >logout </Button>
    </div>
  )
}

export default Dashboards