import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Score = (props) => {
  const history = useNavigate();

  const quiz_list = useSelector((state) => state.quiz.quiz_list);
  const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

  const _score =
    (100 / quiz_list.length) *
    quiz_list.filter((q, idx) => {
      return q.answer === user_answer_list[idx];
    }).length;

  const score = Math.round(_score);
  return (
    <div>
      <h3>
        {props.name} 퀴즈에 대한 내 점수는 <br />
        {score}
      </h3>

      <p>우와! 우린 참 친해요!</p>

      <button
        onClick={() => {
          history("/message");
        }}>
        {props.name}에게 한 마디
      </button>
    </div>
  );
};

export default Score;
