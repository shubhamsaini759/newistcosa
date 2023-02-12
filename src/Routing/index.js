import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import Protected from './Protected'


const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <LoginPage /> }  />
            <Route path='/register' element={ <RegisterPage /> } />
              <Route path='/home' element={<Protected Component = {Home} /> } />
        </Routes>
    </>
  )
}

export default Routing