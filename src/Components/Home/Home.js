import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const log = () =>{
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  return (
    <div>Home
      <Button  onClick={log} >logout </Button>
    </div>
  )
}

export default Home