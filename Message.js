import React from "react";
import squrl from "./등산다람쥐.png";

import { useNavigate } from "react-router-dom";

const Message = (props) => {
  const history = useNavigate();
  return (
    <div>
      <img src={squrl} />
      <h3>누구누구에게 남기는 한 마디</h3>
      <input />
      <button
        onClick={() => {
          history("/ranking");
        }}>
        남기고 랭킹 보러가기
      </button>
    </div>
  );
};

export default Message;
