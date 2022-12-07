// 리스트업

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Todo from "../todo/Todo";
// import { doneList } from "../../redux/modules/todos";

const List = ({ item }) => {
  // const todolists = useSelector((state) => state.todos.lists);
  // const dispatch = useDispatch();

  // const Done = (id) => {
  //   dispatch(doneList(id));
  // };
  console.log("listItem", item);
  return <Todo item={item}></Todo>;
};

export default List;
