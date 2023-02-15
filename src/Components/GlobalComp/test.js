import React, { useEffect, useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';



const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
      console.log(reader.result)
    };
    reader.onerror = (error) => reject(error);
  });

// const getSrcFromFile = (file) => {
//   return new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file.originFileObj);
//     reader.onload = () => resolve(reader.result);
//   });
// };


const Test = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    
  };


  

  // const onPreview = async (file) => {
  //   const src = file.url || (await getSrcFromFile(file));
  //   const imgWindow = window.open(src);

  //   if (imgWindow) {
  //     const image = new Image();
  //     image.src = src;
  //     imgWindow.document.write(image.outerHTML);
  //   } else {
  //     window.location.href = src;
  //   }
  // };

  const [previewImage, setPreviewImage] = useState("");
  

  const onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || (file.preview));
   
  };

  return (
    <ImgCrop grid rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default Test