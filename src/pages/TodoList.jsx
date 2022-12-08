// src/pages/TodoList.js

import React from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ListSection = styled.div`
  width: 100%;
  height: 400px;
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
    </div>
  );
}

export default TodoList;
