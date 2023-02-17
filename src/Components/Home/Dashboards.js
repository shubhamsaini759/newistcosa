import { Button } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Dashboards = () => {

  const navigate = useNavigate();

  const log = () =>{
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const Add = () =>{
    console.log('hello')
  }

  return (
    <div>Dashboard
    <br></br>
    <br></br>
    <br></br>

      <p>Your Profile is incomplete, please <NavLink to={'/information'} >complete </NavLink> it to unlock more option's.</p>
      <br></br>
      <br></br>
      <br></br>
      <Button  onClick={log} >logout </Button>
    </div>
  )
}

export default Dashboards