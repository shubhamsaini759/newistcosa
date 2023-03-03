import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import Styles from '../../../../Styles/UserProfile/UserProfile.module.css'
import { UserProfileDetails } from '../../../../Utils/api/UserProfile';

import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';


const UserProfile = () => {

  const { data : userProfile } = useQuery('UserProfileDetails',UserProfileDetails);

  

  return (
    <div className={Styles.body}>
      <div className={Styles.left} >
          <ProfileLeft data={userProfile} />
      </div>

      <div className={Styles.right}>
          <ProfileRight data={userProfile} />
      </div>

    </div>
  )
}

export default UserProfile