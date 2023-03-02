import { Button, Form } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEditActions } from "../../../Store";
import Styles from "../../../Styles/Step/FourthStep.module.css";
import Inputs from "../../GlobalComp/InputFields/Inputs";
import TextAreaInputs from "../../GlobalComp/InputFields/TextAreaInputs";

const FourthStep = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const StepData = useSelector((state)=> state.UserEditReducer);
  

  const DoneHandler = () =>{
    console.log(StepData,'stepData')
  }

  const val = {
    ISTCNickName: "",
    ISTCFriendRoommate: "",
    ISTCAbout: "",
    Comments: "",
    SearchKeyword: "",
  };

  const nickHandler = (data) =>{
    dispatch(userEditActions.nick({ nick : data }) )
    console.log(data)
    form.setFieldsValue({
      ISTCNickName : data
    })
  }

  const roomHandler = (data) =>{
    dispatch(userEditActions.room({ room : data }) )

    console.log(data)
    form.setFieldsValue({
      ISTCFriendRoommate : data
    })
  }
  const aboutHandler = (data) =>{
    dispatch(userEditActions.aboutIstc({ aboutIstc : data }) )

    console.log(data)
    form.setFieldsValue({
      ISTCAbout : data
    })
  }
  const commentHandler = (data) =>{
    console.log(data)
    dispatch(userEditActions.comments({ comments : data }) )

    form.setFieldsValue({
      SearchKeyword : data
    })
  }
  const keywordHandler = (data) =>{
    dispatch(userEditActions.keywords({ keywords : data }) )

    console.log(data)
    form.setFieldsValue({
      Comments : data
    })
  }

  return (
    <Form
      form={form}
      initialValues={val}
      layout="vertical"
      className={Styles.SecondStep}
      style={{ width: "100%", padding: "1rem" }}
    >
      <div className={Styles.firstRow}>
        <Inputs label="Your ISTC Nick Name" name='ISTCNickName' handler={nickHandler} />
        <Inputs label="ISTC Friends / Hostel Room Mates"  name='ISTCFriendRoommate' handler={roomHandler}  />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInputs label="Your Memories About ISTC" length="400" name='ISTCAbout' handler={aboutHandler} />
        <TextAreaInputs label="Your Comments About ISTCOSA" length="400" name='Comments' handler={commentHandler} />
      </div>
      <div className={Styles.thirdRow}>
        <TextAreaInputs
          label="Search Keywords(keywords which aloow others to search you)"
          length="400"
          name='SearchKeyword'
          handler={keywordHandler}
        />
      </div>
      <div className={Styles.fourthRow}>
        <Button htmlType="submit" onClick={props.prev}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit" onClick={DoneHandler}>
          Done
        </Button>
      </div>
    </Form>
  );
};

export default FourthStep;
