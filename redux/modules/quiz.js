//ACTION TYPE
const ADD_ANSWER = "quiz/ADD_ANSWER";

//ACTION CREATER FUNCTION
export const addAnswer = (user_answer) => {
  return { type: ADD_ANSWER, user_answer };
};

const initialState = {
  quiz_name: "르탄이",
  quiz_list: [
    { question: "지연이는 1살이다.", answer: false },
    { question: "지연이는 2살이다.", answer: false },
    { question: "지연이는 20살이다.", answer: true },
  ],
  user_answer_list: [],
};

//REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/ADD_ANSWER": {
      console.log(action);
      const new_user_answer_list = [
        ...state.user_answer_list,
        action.user_answer,
      ];
      console.log(new_user_answer_list);
      return { ...state, user_answer_list: new_user_answer_list };
    }
    default:
      return state;
  }
}
