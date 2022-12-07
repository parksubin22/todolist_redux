// src/redux/modules/counter.js
// 모듈을 만들땐 리스트업 먼저 하기

// Action Value
const ADD = "ADD";
const DONE = "DONE";
const DELETE = "DELETE";

// Action Creator
export const addList = (payload) => {
  return {
    type: ADD,
    payload, //ES6에서는 key와 value가 같으면 한번만 써도 된다.
    // action객체를 reducer로 보낼때 어떤 정보를 같이 담아 보내고자 한다면 payload를 이용하며
    // action creator를 생성할 떄 매개변수 자리에서 받을 준비를 하고
    // 반환하는 action객체에 payload란 key와 받은 매개변수를 value로 하여 구현을 한다.
  };
};

export const doneList = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

export const deleteList = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

// Initial State
const initialState = {
  lists: [
    { id: 1, title: "리액트 공부하기", contents: "챕터1 완료", isDone: false },
    { id: 2, title: "리액트 공부하기", contents: "챕터2 완료", isDone: false },
    { id: 3, title: "리액트 공부하기", contents: "챕터3 완료", isDone: false },
  ],
};
// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    // payload에서 넘어온 숫자를 받아서 원래 state에 더해주는 함수 작성
    case ADD: {
      return {
        lists: [...state.lists, action.payload],
      };
    }
    case DONE: {
      return {
        lists: state.lists.map((list) =>
          list.id === action.payload
            ? { ...list, isDone: !list.isDone }
            : { ...list }
        ),
      };
    }
    case DELETE: {
      return {
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

// export default reducer
export default todos;
