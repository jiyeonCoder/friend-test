//user 이름을 넣자
//이름을 바꿔준다

//Action
const SET_NAME = "user/SET_NAME";
const SET_MESSAGE = "user/SET_MESSAGE";

//action 생성함수
export const setName = (name) => {
  return { type: SET_NAME, name };
};

export const setMessage = (message) => {
  return { type: SET_MESSAGE, message };
};

const initialState = {
  user_name: "",
  user_message: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/SET_NAME": {
      console.log(action);
      return { ...state, user_name: action.name };
    }

    case "user/SET_MESSAGE": {
      console.log(action);
      return { ...state, user_message: action.message };
    }

    default:
      return state;
  }
}
