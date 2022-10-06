import React from "react";
import sqrl from "./등산다람쥐.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

const Quiz = (props) => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);

  console.log(quiz_list);

  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  // const quiz_list = [
  //   { question: "지연이는 1살이다.", answer: false },
  //   { question: "지연이는 2살이다.", answer: false },
  //   { question: "지연이는 20살이다.", answer: true },
  // ];

  //const [user_answer_list, setAnswerList] = React.useState([]);

  //   const setAnswer = (user_answer) => {
  //     console.log(user_answer);
  //     setAnswerList([...user_answer_list, user_answer]);
  //     //history("/score");
  //   };

  const setAnswer = (user_answer) => {
    //console.log(user_answer_list);
    //console.log(user_answer);
    dispatch(addAnswer(user_answer));
    //setAnswerList([...user_answer_list, user_answer]);
    return;
  };

  React.useEffect(() => {
    //console.log(user_answer_list);
    if (user_answer_list.length === quiz_list.length) {
      // const _score =
      //   (100 / quiz_list.length) *
      //   quiz_list.filter((q, idx) => {
      //     return q.answer === user_answer_list[idx];
      //   }).length;

      // const score = Math.round(_score);

      //console.log(score);
      history("/score");
      return;
    }
  }, [user_answer_list]);

  if (user_answer_list.length === quiz_list.length) {
    return;
  }

  return (
    <div>
      <p>{user_answer_list.length + 1}번 문제</p>
      <h3>{quiz_list[user_answer_list.length].question}</h3>
      <img src={sqrl} />

      <div>
        <button
          onClick={() => {
            setAnswer(true);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}>
          O
        </button>
        <button
          onClick={() => {
            setAnswer(false);
          }}
          style={{ width: "50px", height: "50px", margin: "16px" }}>
          X
        </button>
      </div>
    </div>
  );
};

export default Quiz;
