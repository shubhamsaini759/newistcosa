import React, { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import { useDispatch } from "react-redux";
import { tempIdActions } from "../../Store";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
      // console.log(reader.result);
    };
    reader.onerror = (error) => reject(error);
  });

const Test = () => {

  const dispatch = useDispatch();


  const [fileList, setFileList] = useState([]);
  const [detail, setDetail] = useState('');

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    convertBase64(newFileList[0]);
    dispatch(tempIdActions.UploadImage({ imageName : newFileList[0].name }))
  };

  const convertBase64 = async (file) => {
    file.preview = await getBase64(file.originFileObj);
    setDetail(file.preview);
  };

  useEffect(()=>{
    console.log(detail)
    dispatch(tempIdActions.ImagePath({ path : detail}))

  },[detail])


  return (
    <>
      <ImgCrop grid rotate>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          // onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </>
  );
};

export default Test;
