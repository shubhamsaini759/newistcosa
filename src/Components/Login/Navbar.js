import { Button, TextField } from '@mui/material'
import React from 'react'
import Styles from '../../Styles/Login/Navbar.module.css'


import SearchIcon from '@mui/icons-material/Search';

import Logo from '../../Assets/Login/Logo.png'
import NavButon from './Navbar/NavButon'
import Buttondraw from './Navbar/NavButtons/ButtonDraw';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const ClickHandler = () =>{
        navigate('/register')
    }

  return (
    <div className={Styles.nav} >
        <div className={Styles.navLogo}>
            <img alt='logo' src={Logo} />
        </div>
        <div className={Styles.buttons }>

            <div className={Styles.topButtons} >
                <div>
                    <TextField className={Styles.searches} id="outlined-basic" size="small" label="Search" variant="standard" />
                    <SearchIcon  sx={{ mt :2, cursor: 'pointer'}}  />
                </div>
                <Button variant='contained' className={Styles.reg}  size='small' sx={{backgroundColor : '#700606' , ml : 3}}  onClick={ClickHandler}  >Register</Button>
                <Button variant='outlined' className={Styles.logb} size='small' sx={{ ml : 3 }} onClick={()=>navigate('/')} >Login</Button>
            </div>
            <div className={Styles.ButtonDrawer}>
                    <Buttondraw anchor='top' />
            </div>

            <div className={Styles.bottomButtons} >
               <NavButon />
            </div>

        </div>
    </div>
  )
}

export default Navbar