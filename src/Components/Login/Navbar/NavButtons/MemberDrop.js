import React from 'react'
import { MenuItem, Select } from '@mui/material'
import Styles from '../../../../Styles/Login/Navbar.module.css'



const MemberDrop = () => {
  return (
      <>
          <Select value='' className={Styles.mem} size='small' displayEmpty sx={{ border : 'transparent' }} >
            <MenuItem value=''  >Membership</MenuItem>
            <MenuItem value={1}  >Lifetime Membership</MenuItem>
            <MenuItem value={2}  >Contributions</MenuItem>
          </Select>      
      </>
      
  )
}

export default MemberDrop