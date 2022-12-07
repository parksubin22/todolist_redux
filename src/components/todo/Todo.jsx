//할일 완료, 삭제

import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteList, doneList } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

//할일 등록
const Todo = ({ item }) => {
  const dispatch = useDispatch();

  const todolists = useSelector((state) => state.todos.lists);
  console.log(todolists);

  const onClickDelete = (id) => {
    dispatch(deleteList(id));
  };

  const onClickDone = (id) => {
    dispatch(doneList(id));
  };
  return (
    <div className="list-box">
      <div className="list-detail">
        <Link to={`/details/${item.id}`} style={{ textDecoration: "none" }}>
          <span style={{ color: "#af6b06", fontWeight: "bold" }}>상세보기</span>
        </Link>
      </div>
      <div className="list-title">{item.title}</div>
      <div className="list-contents">{item.contents}</div>
      <div className="list-box-button">
        <button onClick={() => onClickDelete(item.id)}>삭제하기</button>
        <button onClick={() => onClickDone(item.id)}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
