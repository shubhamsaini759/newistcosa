import React from 'react'
import { MenuItem, Select } from '@mui/material'
import Styles from '../../../../Styles/Login/Navbar.module.css'




const OpportunityDrop = () => {
  return (
      <>
          <Select value='' className={Styles.opp} size='small' displayEmpty sx={{ border : 'transparent' }} >
            <MenuItem value=''  >Opportunity</MenuItem>
            <MenuItem value={1}  >Career</MenuItem>
            
          </Select>      
      </>
      
  )
}

export default OpportunityDrop