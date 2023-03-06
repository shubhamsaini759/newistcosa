import React from 'react'
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import Styles from '../../../Styles/Register/IstcNav.module.css'
import Inputs from '../../GlobalComp/InputFields/Inputs';
import { Button } from 'antd';
import Buttondraw from '../../Login/Navbar/NavButtons/ButtonDraw';
const IstcNav = () => {

  const navigate = useNavigate();

  const ClickHandler = () =>{
      navigate('/register')
  }


  return (
    <div className={Styles.IstcNav}>
          <div className={Styles.topButtons} >
            <div className={Styles.search} >
                <Inputs className={Styles.searches} id="outlined-basic" size="small" label="Search" variant="standard" />
                <SearchIcon  sx={{  cursor: 'pointer', marginTop : '-20px' }}  />
              </div>
              <Button className={Styles.reg}  size='small' sx={{backgroundColor : '#700606' , ml : 3}}  onClick={ClickHandler}  >Register</Button>
              <Button className={Styles.logb} size='small' sx={{ ml : 3 }} onClick={()=>navigate('/')} >Login</Button>
            </div>
            {/* <div className={Styles.ButtonDrawer}>
                    <Buttondraw anchor='top' />
            </div> */}

            {/* <div className={Styles.bottomButtons} >
               <NavButon />
            </div> */}

    </div>
  )
}

export default IstcNav