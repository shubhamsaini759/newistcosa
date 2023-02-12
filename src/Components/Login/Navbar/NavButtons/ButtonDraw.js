import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import NavButon from '../NavButon';




const Buttondraw = () => {

    const [ flag, setFlag ] = useState(false);


  return (
      <>
        <IconButton size='medium' edge='end' color='inherit' aria-label='logo' onClick={()=>setFlag(true)} >
            <MenuIcon />
        </IconButton>

        <Drawer anchor='top' open={flag} onClose={()=>setFlag(false) }>
          <Box p={2} width='auto' textAlign='start' role='presentation' >
          
            <Typography variant='h6' component='div' sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'flex-start' }} > <NavButon /> </Typography>
         

          </Box>
        </Drawer>
            
      </>
      
  )
}

export default Buttondraw