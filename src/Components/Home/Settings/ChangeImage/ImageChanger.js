import React, { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Modal, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ImageChangeActions } from "../../../../Store";
import { useMutation, useQuery } from "react-query";
import { UserMoreDetail } from "../../../../Utils/api/UserMoreDetail";
import { ImageChange } from "../../../../Utils/api/UserMoreDetail/ImageChange";

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
  const ImageData = useSelector((state) => state.ImageChangeReducer);
  const { data: userDetail } = useQuery("UserMoreDetail", UserMoreDetail);
  const { data: imageApi, mutateAsync: imageDetail } = useMutation(
    "ImageChange",
    ImageChange
  );

  const [fileList, setFileList] = useState([]);
  const [detail, setDetail] = useState("");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    convertBase64(newFileList[0]);
    // dispatch(tempIdActions.UploadImage({ imageName : newFileList[0].name }))
  };

  const convertBase64 = async (file) => {
    file.preview = await getBase64(file.originFileObj);
    setDetail(file.preview);
  };

  useEffect(() => {
    // dispatch(tempIdActions.ImagePath({ path : detail}))
    dispatch(ImageChangeActions.path({ path: detail }));
    dispatch(ImageChangeActions.ids({ ids: userDetail?.RollNumberID }));
  }, [detail]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("Profile-Image");

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    // setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  console.log(ImageData, "redux");
  const OkHandler = () => {
    const modifiedData = {
      ...ImageData,
      ImagePath: detail,
    };

    console.log("img in aou -", modifiedData);

    imageDetail(modifiedData)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(()=>{
  //   imageDetail(ImageData)
  //   .then((res)=>{
  //     console.log(res,'result')
  //   })
  //   .catch((err)=>{
  //     console.log(err,'error')
  //   })
  // },[ImageData])

  return (
    <>
      <ImgCrop grid rotate onModalOk={OkHandler}>
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

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default ImageChanger;
