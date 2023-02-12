import React from 'react'
import { MenuItem, Select } from '@mui/material'

import Styles from '../../../../Styles/Login/Navbar.module.css'




const EventsDrop = () => {
  return (
      <>
          <Select value='' className={Styles.eve} size='small' displayEmpty sx={{ border : 'transparent' }} >
            <MenuItem value=''  sx={{ border : 'transparent' }} >Events</MenuItem>
            <MenuItem value={1}  >Upcoming Events</MenuItem>
            <MenuItem value={2}  >Images</MenuItem>
            <MenuItem value={3}  >Videos</MenuItem>
          </Select>      
      </>
      
  )
}

export default EventsDrop