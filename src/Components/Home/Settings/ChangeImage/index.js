import React from 'react'
import Styles from '../../../../Styles/EditProfile/ChangeImage.module.css'
import Test from '../../../GlobalComp/test'
import ImageChanger from './ImageChanger'

const ChangeImage = () => {
  return (
    <div className={Styles.ChangeImage} >
      <div className={Styles.defination} > <p>Change Profile Image</p> </div>
      <div className={Styles.ImageBox}>
        <ImageChanger />
      </div>
    </div>
  )
}

export default ChangeImage