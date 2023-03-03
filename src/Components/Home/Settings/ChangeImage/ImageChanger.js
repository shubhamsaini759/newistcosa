import React, { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";


import { Modal, Upload } from 'antd';
import { useMutation, useQuery } from "react-query";
import { ImageChange } from "../../../../Utils/api/UserMoreDetail/ImageChange";
import { useDispatch } from "react-redux";
import { ImageChangeActions } from "../../../../Store";
import { UserMoreDetail } from "../../../../Utils/api/UserMoreDetail";

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

const ImageChanger = () => {

  const dispatch = useDispatch();
  const { data : imageData, mutateAsync : imageDetail } = useMutation('ImageChange',ImageChange)
  const { data : userDetail } = useQuery('UserMoreDetail',UserMoreDetail)


  const [fileList, setFileList] = useState([ {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },]);
  const [detail, setDetail] = useState('');

  const onChange = ({ fileList: newFileList }) => {
    
    setFileList(newFileList);
    convertBase64(newFileList[0]);
  };

  const convertBase64 = async (file) => {
    file.preview = await getBase64(file.originFileObj);
    setDetail(file.preview);
  };

  useEffect(()=>{
    console.log(detail)
    dispatch(ImageChangeActions.path({ path : detail}) )
    dispatch(ImageChangeActions.ids({ ids : userDetail?.RollNumberID}) )
    
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
          {fileList.length < 2 && "+ Upload"}
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

export default ImageChanger;
