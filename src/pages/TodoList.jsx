// src/pages/TodoList.js

import React from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];
const ListSection = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: antiquewhite; */
  display: flex;
  gap: 12px;
`;

function TodoList() {
  const location = useLocation();
  const param = useParams(); //
  console.log(param);
  console.log(location);

  const todolists = useSelector((state) => state.todos.lists);
  console.log(todolists);

  return (
    <div>
      <Form></Form>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: "rgb(226, 170, 66)",
            fontSize: "23px",
            fontWeight: "bold",
          }}
        >
          Working..🔥
        </span>
      </div>
      <ListSection>
        {/* <List key={todolists.id} item={todolists}></List> */}
        {todolists.map((item) => {
          if (!item.isDone) {
            return <List key={item.id} item={item}></List>;
          }
        })}
      </ListSection>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: "rgb(226, 170, 66)",
            fontSize: "23px",
            fontWeight: "bold",
          }}
        >
          Done..!✨
        </span>
      </div>
      <ListSection>
        {todolists.map((item) => {
          if (item.isDone) {
            return <List key={item.id} item={item}></List>;
          }
        })}
      </ListSection>
      {/* {data.map((list) => {
        return (
          <div key={list.id}>
            <div>할일: {list.id}</div>
            <Link to={`/todolist/${list.id}`}>
              <span style={{ cursor: "pointer" }}>➡️ Go to: {list.todo}</span>
            </Link>
          </div>
        );
      })} */}
    </div>
  );
}

export default TodoList;
