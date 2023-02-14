import { PhotoCamera } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material';
import React, { useState } from 'react'

import Styles from '../../Styles/Register/Demo.module.css'

const ImageConvert = () => {

    const [ conImage, seConImage ] = useState('');

    const chnageHandler = async (e) =>{
        console.log(e.target.files[0])
        const file = e.target.files[0]
        const base64 = await convertBase64(file);
        console.log(base64)
        seConImage(base64)
    }
    const convertBase64 = (file) =>{
        return new Promise((res,rej)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () =>{
                res(fileReader.result)
            }

            fileReader.onerror = (error) =>{
                rej(error)
            }
        })
    }

  return (
        <>
        
        <IconButton
            className={Styles.upload}
            color="primary"
            aria-label="upload picture"
            component="label"
            onChange={chnageHandler}
        >
        <Input hidden accept="image/*" type="file" />
        <PhotoCamera sx={{ color: "#700606" }} />
        <span className={Styles.texts}>upload image</span>
        </IconButton>
            { conImage? <img src={conImage} height='100px' /> : null
            }
        </>
  )
}

export default ImageConvert