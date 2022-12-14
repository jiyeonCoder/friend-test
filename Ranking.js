import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Ranking = (props) => {
  const history = useNavigate();
  const _user_data = useSelector((state) => state.ranking.ranking);

  const user_data = _user_data.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderBottom: "1px solid #888",
          width: "100vw",
          padding: "16px",
          background: "#fff",
        }}>
        {user_data.length}명의 사람들 중에서 당신은?
      </div>
      <div style={{ margin: "10vh 0vh" }}>
        {user_data.map((user, i) => {
          return (
            <div
              style={{
                display: "flex",
                border: "1px solid #888",
                padding: "16px",
                borderRadius: "16px",
              }}>
              <h1>{i + 1}등</h1>
              <div>
                <h3>{user.user_name}</h3>
                <p>{user.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: 0,
          width: "100vw",
        }}>
        <button
          onClick={() => {
            history("/");
          }}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default Ranking;
