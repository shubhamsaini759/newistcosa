import React, { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";

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
  const [fileList, setFileList] = useState([]);
  const [detail, setDetail] = useState("");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    convertBase64(newFileList[0]);
  };

  const convertBase64 = async (file) => {
    file.preview = await getBase64(file.originFileObj);
    setDetail(file.preview);
  };
  const onPreview = () => {
    window.open(detail);
  };
  // console.log(detail, "detail");

  return (
    <>
      <ImgCrop grid rotate>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </>
  );
};

export default Test;
