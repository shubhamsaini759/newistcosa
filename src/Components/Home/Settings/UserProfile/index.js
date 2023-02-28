import React from 'react'
import Styles from '../../../../Styles/UserProfile/UserProfile.module.css'

import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';


const UserProfile = () => {
  return (
    <div className={Styles.body}>
      <div className={Styles.left} >
          <ProfileLeft />
      </div>

      <div className={Styles.right}>
          <ProfileRight />
      </div>

    </div>
  )
}

export default UserProfile