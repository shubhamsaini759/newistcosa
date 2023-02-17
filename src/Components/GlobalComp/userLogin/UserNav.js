import { AppBar, Badge, Button, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Logo from '../../../Assets/Login/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Styles from '../../../Styles/userLogin/UserNav.module.css'
import SideBar from '../../Home/SideBar';
const UserNav = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1  }}>
    <AppBar position="static" sx={{ backgroundColor : 'whitesmoke', pt :1 , pb : 2 }} >
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display : 'flex',alignItems: 'center' }}>
        <div className={Styles.SideBar}>
          <SideBar />
        </div>
          <img src={Logo} alt='' width='180px'  />
        </Typography>
        <div className={Styles.navRight} >
            <div>
                <TextField id="outlined-basic" size="small" label="Search" variant="standard" />
                <SearchIcon  sx={{ mt :2, cursor: 'pointer', color: 'brown'}}  />
            </div>
            
            <div>
                <CurrencyRupeeIcon color="secondary" sx={{pl : 1}} />
            </div>
            <div>
                <Stack spacing={4} direction="row" sx={{ color: 'action.active', pl: 1 }}>
                    <Badge color="secondary" badgeContent={0} showZero>
                        <NotificationsIcon />
                    </Badge>
                </Stack>
            </div>
            <div>
                <AccountCircleIcon color="secondary"   />
            </div>
            </div>
      </Toolbar>
    </AppBar>
  </Box>


    </>
  )
}

export default UserNav