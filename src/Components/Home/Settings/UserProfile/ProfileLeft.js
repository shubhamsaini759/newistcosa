import React from 'react'
import Styles from '../../../../Styles/UserProfile/UserProfile.module.css'
import { Button, Divider, Image } from 'antd'
import PlaceIcon from '@mui/icons-material/Place';

import BoyIcon from '@mui/icons-material/Boy';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { EditOutlined } from '@mui/icons-material';
import BusinessIcon from '@mui/icons-material/Business';
import PortraitIcon from '@mui/icons-material/Portrait';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const ProfileLeft = () => {
  return (
    <>

        <div className={Styles.Topleft}>
            <div className={Styles.photos}>
                    <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
          
            
            <div className={Styles.name} >
                <p>N.C Hira(6301) </p>
            </div>
            <div className={Styles.member} >
                <WorkspacePremiumIcon /><span>Life Member</span>
            </div>
            <div className={Styles.editPro}>
                <Button type="dashed">
                    <EditOutlined fontSize='small' /> Edit Profile
                </Button>
            </div>
            
        </div>
        <div className={Styles.topRight} >
      
            <div className={Styles.info}>
                <div>
                    <PlaceIcon fontSize='small' style={{ marginRight : 10}} /><span>Panchkula,Haryana,India</span>
                </div>
                    
                <div>
                    <BoyIcon fontSize='small' style={{ marginRight : 10}} /><span>Male</span>
                </div>
                <div>
                    <CelebrationIcon fontSize='small' style={{ marginRight : 10}} /><span>Dec-23-2004</span>
                </div>
                <div>
                    <FavoriteIcon fontSize='small' style={{ marginRight : 10}} /><span>Married</span>
                </div>
                <div>
                    <EmailIcon fontSize='small' style={{ marginRight : 10}} /><span>navinhira@yahoo.co.in</span>
                </div>
                <div>
                    <CallIcon fontSize='small' style={{ marginRight : 10}} /><span>+919867565656</span>
                </div>
                <div>
                    <BusinessIcon fontSize='small' style={{ marginRight : 10}} /><span>Bitru Manufacturing Components Pvt Ltd</span>
                </div>
                <div>
                    <PortraitIcon fontSize='small' style={{ marginRight : 10}} /><span>CEO</span>
                </div>
            </div>


        </div>
    
    </>
  )
}

export default ProfileLeft


