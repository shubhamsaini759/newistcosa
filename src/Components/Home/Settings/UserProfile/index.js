import { message } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Styles from '../../../../Styles/UserProfile/UserProfile.module.css'
import { UserProfileDetails } from '../../../../Utils/api/UserProfile';

import ProfileLeft from './ProfileLeft';
import ProfileRight from './ProfileRight';


const UserProfile = () => {
  const {state} = useLocation();

  const { data : userProfile } = useQuery('UserProfileDetails',UserProfileDetails);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Profile is Updated Successfully',
    });
  };

  useEffect(()=>{
      if( state?.flag === true ){
        success();
      }
  },[state])
  

  return (
    <div className={Styles.body}>
    {contextHolder}
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