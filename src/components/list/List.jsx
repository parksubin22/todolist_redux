// 리스트업

import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ item }) => {
  // console.log("listItem", item);
  return <Todo item={item}></Todo>;
};

export default List;
