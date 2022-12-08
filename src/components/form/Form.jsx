import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../redux/modules/todos.js";
import "./style.css";

//할일 등록
const Form = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();
  // const todolists = useSelector((state) => state.todos.lists);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const addToDo = () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
    } else if (contents === "") {
      alert("내용을 입력해주세요.");
    } else if (title !== "" && contents !== "") {
      dispatch(
        addList({
          id: new Date().valueOf(),
          title,
          contents,
          isDone: false,
        })
      );
    }
    setTitle("");
    setContents("");
  };
  return (
    <div className="formWrap">
      <div className="inputWrap">
        <span>제목</span>
        <input onChange={onChangeTitle} value={title} />
        <span>내용</span>
        <input onChange={onChangeContents} value={contents} />
      </div>
      <div className="addButton">
        <button onClick={addToDo}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
