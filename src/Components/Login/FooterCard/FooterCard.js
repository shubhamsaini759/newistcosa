import React from 'react'
import Styles from '../../../Styles/Login/FooterCard.module.css'

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const FooterCard = (props) => {
  return (
    <div className={Styles.footercard} >

        <div className={Styles.cardImage} >
            <img src={props.image} alt='userImage' />
        </div>
        <div className={Styles.cardDetails} >
            <h6>{props.role}</h6>
            <span> {props.name}</span><br></br>
            <span><CallIcon sx={{ fontSize : 'medium' }} /> {props.num}</span><br></br>
            <span><EmailIcon sx={{ fontSize : 'medium' }} /> {props.gmail}</span><br></br>
        </div>
    </div>
  )
}

export default FooterCard
