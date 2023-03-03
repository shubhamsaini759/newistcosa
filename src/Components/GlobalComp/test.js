import React, { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Modal, Upload } from "antd";
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
  




  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('Profile-Image');

  const handleCancel = () => setPreviewOpen(false);
  
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    // setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };




  return (
    <>
      <ImgCrop grid rotate>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={handlePreview}

        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>

      
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default Test;
