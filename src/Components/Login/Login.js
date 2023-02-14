import React, { useState } from 'react'
import { Button, Checkbox, TextField } from '@mui/material'
import Styles from '../../Styles/Login/Login.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../Store'
import api from '../../Utils/api'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../Utils/api/endPoints'

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginDetail = useSelector((state)=>state.loginReducer)

  const [ show, setShow ] = useState(false);
  const [ err, setErr ] = useState('')

  const data = { UserName : loginDetail?.rollNumber, Password : loginDetail?.password }
    
  const rollHandler = (e) =>{
      dispatch(loginActions.EnteredRoll({ rollNumber : e.target.value }) )
  }
  const passHandler = (e) =>{
    dispatch(loginActions.EnteredPass({password : e.target.value}))
  }

  const userLogin = (e) =>{
    e.preventDefault()
      dispatch(loginActions.loginHandler())

        api
        .post(Path.UserLogin,data)
        .then((result)=>{
            localStorage.setItem('accessToken', result.data[0].Token )
            console.log(result,'output')

            if( result.data[0].Role === 'Admin' ){
              navigate('/home')
              console.log('admin')
            }else if(result.data[0].Role === 'Student' ){
                console.log('student')
            }
        })
        .catch((err)=> {
          console.log(err)
          setErr(err.response.data.Message)
        }
        )

  }


  const handleCheck = () =>{
    setShow(x => !x)
  }
  

  return (
    <div className={Styles.login} >
      <div className={Styles.loginBox} >
        <div className={Styles.loginBoxInfo}>
              <h1>Login Here</h1>
              <form className={Styles.loginData} onSubmit={userLogin} >
                  <TextField className={Styles.rollnum} size='small' onChange={rollHandler} sx={{ '& .MuiInputBase-root' : { height : 38} }}  helperText={err} name='rollNum'  id="outlined-basic" label="Enter Roll Number" variant="outlined"  />
                  <TextField className={Styles.pass} size='small' onChange={passHandler}  sx={{ '& .MuiInputBase-root' : { height : 38} }}  helperText={err}  type={show ? 'text' : 'password'} id="outlined-basic" name='password'  label="Enter Password" variant="outlined"  />
                  <div>
                    <Checkbox
                      checked={show}
                      onChange={handleCheck}
                      inputProps={{ 'aria-label': 'controlled' }}
                    /> Show Password
                  
                  </div>
                  <div className={Styles.forgot} >
                     Forgot your Password ?
                      <Button variant='outlined' type='submit'  size='small' className={Styles.logb} >Login</Button>
                  </div>
              </form>
        </div>
      </div>
    </div>
  )
}

export default Login