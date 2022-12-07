// src/pages/TodoDetail.js

import React, { useDebugValue } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailWrap = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #f5f5dcc1; */
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const DetailBox = styled.div`
  width: 500px;
  height: 300px;
  /* background-color: #f5f5dcc1; */
  border: 1px solid #8888884b;
  margin: auto;
  padding: 30px;
`;

const DetailBoxTop = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 100px;
  height: 27px;
  border: 0;
  background-color: rgb(245, 208, 108);
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;
  :hover {
    background-color: rgb(253, 226, 152);
    transition: 0.1s;
  }
`;

const DetailBoxBottom = styled.div`
  width: 100%;
  height: 50px;
  /* display: flex;
  justify-content: space-between; */
`;

function TodoDetail() {
  const data = useSelector((state) => state.todos.lists);
  const param = useParams();
  const navigate = useNavigate();
  // id 값은 param에서 useParams를 이용해서 각 컴포넌트 안에서 조회할 수 있다.
  const lists = data.find((list) => list.id === parseInt(param.id));
  // 받은 id를 통해서 데이터를 find 한 다음에 렌더링을 한다.
  return (
    <DetailWrap>
      <DetailBox>
        <DetailBoxTop>
          <div>ID:{lists.id}</div>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Button>
        </DetailBoxTop>
        <DetailBoxBottom>
          <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <h1>{lists.title}</h1>
          </div>
          <div>{lists.contents}</div>
        </DetailBoxBottom>
      </DetailBox>
    </DetailWrap>
  );
}

export default TodoDetail;
