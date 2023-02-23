import React, { useState } from "react";
import TextAreaInput from "./DetailInputs/TextAreaInput";

import Styles from "../../../../Styles/userLogin/Steps/StepFour.module.css";
import SimpleInputs from "./DetailInputs/SimpleInputs";
import { useDispatch } from "react-redux";
import { userEditActions } from "../../../../Store";

const StepFour = () => {
  const dispatch = useDispatch();

  const [nickName, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [memories, setMemories] = useState("");
  const [comments, setComments] = useState("");
  const [Keyword, setKeyword] = useState("");

  const nickNameHandler = (data) => {
    setNickName(data);
    dispatch(userEditActions.nickHandle({ nick: data }));
  };
  const roomHandler = (data) => {
    setRoom(data);
    dispatch(userEditActions.roomHandle({ room: data }));
  };
  const memoriesHandler = (data) => {
    setMemories(data);
    dispatch(userEditActions.memoriesHandle({ memories: data }));
  };
  const commentHandler = (data) => {
    setComments(data);
    dispatch(userEditActions.commentHandle({ comment: data }));
  };
  const keywordHandler = (data) => {
    setKeyword(data);
    dispatch(userEditActions.keywordHandle({ keyword: data }));
  };

  return (
    <div className={Styles.StepFour}>
      <div className={Styles.firstRow}>
        <SimpleInputs
          sw="25%"
          aw="75%"
          label="Your ISTC Nick Name"
          value={nickName}
          changeHandler={nickNameHandler}
        />
        <SimpleInputs
          sw="25%"
          aw="75%"
          label="ISTC Friends/ Roomates"
          value={room}
          changeHandler={roomHandler}
        />
      </div>
      <div className={Styles.secondRow}>
        <TextAreaInput
          label="Your Memories About ISTC"
          tw="100%"
          sw="200px"
          length="2000"
          value={memories}
          changeHandler={memoriesHandler}
        />
        <TextAreaInput
          label="Your Comments For ISTCOSA"
          tw="100%"
          sw="200px"
          length="2000"
          value={comments}
          changeHandler={commentHandler}
        />
      </div>
      <div className={Styles.thirdRow}>
        <TextAreaInput
          label="Search Keyword(Keywords Which Allow Others To Search You)"
          tw="100%"
          sw="200px"
          value={Keyword}
          changeHandler={keywordHandler}
          length="2000"
        />
      </div>
    </div>
  );
};

export default StepFour;
